#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# synth_sweep.sh — drive the `synthesize-webapp-task` skill across a set of
# taxonomy work items, spawning a FRESH headless `claude -p` session per item.
#
# One item = one (seed x industry x page_archetype) = one fresh session = one
# validated t0 task in tasks_web/. Items run CONCURRENTLY (each session touches
# only its own task dir), are resumable via done-markers, and log per item.
#
# The work-list comes from scripts/webapp_worklist.py, which drops already-built
# (seed, industry) pairs and orders the rest on a diagonal of the seed x industry
# grid — so `LIMIT=4` yields four different industries AND four different seeds,
# not one seed smeared across every industry.
#
# Usage:
#   bash scripts/synth_sweep.sh                                  # diverse top 4
#   LIMIT=6 PARALLEL=3 bash scripts/synth_sweep.sh               # top 6, 3 at a time
#   ITEMS=saas_pricing_most_popular_t0,... bash scripts/synth_sweep.sh
#   DRY_RUN=1 bash scripts/synth_sweep.sh                        # print prompts only
#
# Env knobs:
#   ITEMS             comma-separated task names; overrides the LIMIT slice
#   LIMIT             how many work items to take off the top   (default 4)
#   PARALLEL          concurrent sessions                       (default 4)
#   PER_ITEM_TIMEOUT  wall-clock cap per session, seconds       (default 5400 = 90m)
#   SYNTH_MODEL       --model for claude                        (default: claude's default)
#   SWEEP_ID          run-dir name under runs/synth/            (default: sweep)
#   DRY_RUN           1 = print the composed prompt, do not launch claude
# ─────────────────────────────────────────────────────────────────────────────
set -u

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT" || exit 1

LIMIT="${LIMIT:-4}"
PARALLEL="${PARALLEL:-4}"
PER_ITEM_TIMEOUT="${PER_ITEM_TIMEOUT:-5400}"
SYNTH_MODEL="${SYNTH_MODEL:-}"
SWEEP_ID="${SWEEP_ID:-sweep}"
DRY_RUN="${DRY_RUN:-0}"
ITEMS="${ITEMS:-}"

RUN_DIR="${ROOT}/runs/synth/${SWEEP_ID}"
mkdir -p "${RUN_DIR}/logs" "${RUN_DIR}/done" "${RUN_DIR}/fixed"

command -v claude >/dev/null || { echo "FATAL: claude not on PATH"; exit 1; }
command -v perl   >/dev/null || { echo "FATAL: perl not on PATH (needed for the timeout shim)"; exit 1; }

# macOS ships no GNU coreutils, so there is no `timeout(1)`. perl's alarm is the
# portable equivalent: fork, alarm, TERM then KILL, propagate the child's status
# (124 on timeout, matching coreutils' convention).
run_timeout() {
  local secs="$1"; shift
  perl -e '
    my $t = shift @ARGV;
    my $pid = fork();
    die "fork failed: $!\n" unless defined $pid;
    if ($pid == 0) { exec { $ARGV[0] } @ARGV; exit 127; }
    $SIG{ALRM} = sub { kill "TERM", $pid; sleep 10; kill "KILL", $pid; exit 124; };
    alarm $t;
    waitpid($pid, 0);
    alarm 0;
    exit($? >> 8);
  ' "$secs" "$@"
}

# ── work-list ────────────────────────────────────────────────────────────────
WORKLIST_TSV="${RUN_DIR}/worklist.tsv"
if [ -n "$ITEMS" ]; then
  python3 scripts/webapp_worklist.py > "${RUN_DIR}/.all.tsv"
  : > "$WORKLIST_TSV"
  IFS=',' read -r -a want <<< "$ITEMS"
  for n in "${want[@]}"; do
    row="$(awk -F'\t' -v n="$n" '$1==n' "${RUN_DIR}/.all.tsv")"
    [ -z "$row" ] && { echo "FATAL: '$n' is not an unbuilt work item (see scripts/webapp_worklist.py)"; exit 1; }
    printf '%s\n' "$row" >> "$WORKLIST_TSV"
  done
  rm -f "${RUN_DIR}/.all.tsv"
else
  python3 scripts/webapp_worklist.py --limit "$LIMIT" > "$WORKLIST_TSV"
fi

COUNT=$(wc -l < "$WORKLIST_TSV" | tr -d ' ')
[ "$COUNT" -eq 0 ] && { echo "nothing to build — the work-list is empty"; exit 0; }

echo "== webapp-synth sweep '${SWEEP_ID}': ${COUNT} item(s), ${PARALLEL} at a time =="
echo "   model=${SYNTH_MODEL:-<default>}  per-item timeout=${PER_ITEM_TIMEOUT}s  run dir=${RUN_DIR}"
awk -F'\t' '{printf "   - %-46s %-30s %-15s %-9s %s\n",$1,$2,$3,$4,$5}' "$WORKLIST_TSV"
echo

# ── prompt template ──────────────────────────────────────────────────────────
read -r -d '' PROMPT_TMPL <<'EOF'
# GOAL

Produce ONE complete, validated webapp-synth frontend task: `tasks_web/__NAME__`.
A finished task that passes the deterministic RED->GREEN admission gate is the
single outcome this session exists to produce.

# FIRST, LOAD YOUR DOCTRINE

You are in the webapp-synth repo at __ROOT__. Before doing anything else, invoke
the `synthesize-webapp-task` skill with the Skill tool and follow it EXACTLY,
Stage 0 through Stage 8 plus the self-audit. It is the spec for this session.

# YOUR WORK ITEM (Stage 0 is already decided — do not re-pick)

- task name       : __NAME__
- seed_id         : __SEED__
- industry        : __INDUSTRY__
- page_archetype  : __ARCHETYPE__
- difficulty hint : __DIFFICULTY__   (SP4 band calibration only; this task is still tier 0)
- RULE the page must obey      : __RULE__
- SYMPTOM the broken state shows: __SYMPTOM__
- ASSERTION HINT (this IS the spec for your defect-bearing assertions): __HINT__

Write a real __INDUSTRY__ page in the __ARCHETYPE__ archetype — real copy, real
names, a coherent visual identity — that happens to exercise the __SEED__ rule.
The industry is theming; the rule is where the difficulty and the checkability live.

# PATHS THIS SESSION MUST USE

- Finished-page scratch repo (Stage 2's `$FIXED`): __FIXED__
  Use exactly this path. It is inside the sweep's run dir so the SFT artifact
  survives after you exit. Do NOT put it in a session scratchpad or /tmp.
- Also write the one-paragraph brief you generated the page from to:
  __BRIEF__
  That (brief -> finished page) pair is the SFT datapoint. It is a required
  deliverable, not an optional note.

# PARALLEL-SAFETY (other sessions are building other tasks in this same checkout)

- Write ONLY inside `tasks_web/__NAME__/` and the two paths above. Never create,
  edit, or delete anything under another `tasks_web/*` directory.
- Clone the scaffold from `tasks_web/restaurant_tabs_active_panel_t0` and treat
  that source as strictly READ-ONLY.
- Never run `npm ci` / `npm install` — `node_modules` arrives warm with the clone.
- Never run `git add`, `git commit`, `git checkout`, `git stash`, or any other
  command that mutates git state. Leave everything untracked for review.
- Run `validate` and `score` on YOUR task name only, never on the whole corpus.
- Do not run the pytest suite; the sweep runs it once at the end.

# ACCEPTANCE — all four must hold before you may report success

1. `uv run evolving-coding-agent validate __NAME__ --tasks-dir tasks_web` prints [OK]
2. score of `tasks_web/__NAME__/repo` (the broken state) is <= 0.4
3. score of `__FIXED__` (the finished page) is exactly 1.0
4. the self-audit at the end of the skill passes — in particular NO `BROKEN`/
   `TODO`/`FIXME` comment anywhere in `repo/src`, and `checks/anticheat.py`
   guards THIS task's filenames rather than the scaffold's.

If validate fails, fix the task. NEVER weaken or delete a check to make it pass.

# AUTONOMY (the thing that makes or breaks this session)

This is a ONE-SHOT headless session. There is no one to answer you and no wakeup.
If you end your turn before the task validates, the process dies and the work is
lost. So: never ask a question, never wait, never hand back, never phrase anything
as a question. Never background a command, schedule a wakeup, or yield to "wait
for" anything — run every command synchronously and BLOCK on it in this turn.
Getting the page written is not a stopping point; only a validated task is.

End with exactly one summary line:
  __NAME__ | validate=<OK|FAIL> | broken=<reward> | fixed=<reward>
EOF

# ── launch ───────────────────────────────────────────────────────────────────
pids=()
launch() {
  local name="$1" seed="$2" industry="$3" archetype="$4" difficulty="$5" rule="$6" symptom="$7" hint="$8"
  local fixed="${RUN_DIR}/fixed/${name}"
  local brief="${RUN_DIR}/fixed/${name}.brief.md"
  local log="${RUN_DIR}/logs/${name}.log"
  local marker="${RUN_DIR}/done/${name}"

  if [ -f "$marker" ]; then echo "skip ${name} (already attempted: rc=$(cat "$marker"))"; return; fi
  if [ -d "tasks_web/${name}" ]; then
    echo "skip ${name} (tasks_web/${name} already exists)"; echo preexisting > "$marker"; return
  fi

  local prompt="$PROMPT_TMPL"
  prompt="${prompt//__NAME__/$name}"
  prompt="${prompt//__SEED__/$seed}"
  prompt="${prompt//__INDUSTRY__/$industry}"
  prompt="${prompt//__ARCHETYPE__/$archetype}"
  prompt="${prompt//__DIFFICULTY__/$difficulty}"
  prompt="${prompt//__RULE__/$rule}"
  prompt="${prompt//__SYMPTOM__/$symptom}"
  prompt="${prompt//__HINT__/$hint}"
  prompt="${prompt//__FIXED__/$fixed}"
  prompt="${prompt//__BRIEF__/$brief}"
  prompt="${prompt//__ROOT__/$ROOT}"

  if [ "$DRY_RUN" = 1 ]; then
    echo "== DRY_RUN ${name} =="; printf '%s\n' "$prompt"; echo "== end ${name} =="; return
  fi

  (
    echo "== $(date '+%F %H:%M:%S') start ${name} =="
    # Spelled out rather than an array + "${arr[@]}": macOS ships bash 3.2, where
    # expanding an EMPTY array under `set -u` is an unbound-variable fatal.
    if [ -n "$SYNTH_MODEL" ]; then
      run_timeout "$PER_ITEM_TIMEOUT" \
        claude -p "$prompt" --dangerously-skip-permissions --model "$SYNTH_MODEL" \
        > "$log" 2>&1
    else
      run_timeout "$PER_ITEM_TIMEOUT" \
        claude -p "$prompt" --dangerously-skip-permissions \
        > "$log" 2>&1
    fi
    rc=$?
    echo "$rc" > "$marker"
    echo "== $(date '+%F %H:%M:%S') done ${name} rc=${rc} =="
  ) &
  pids+=($!)

  # Block until a slot frees up.
  while [ "$(jobs -rp | wc -l | tr -d ' ')" -ge "$PARALLEL" ]; do sleep 5; done
}

while IFS=$'\t' read -r name seed industry archetype difficulty rule symptom hint; do
  [ -z "$name" ] && continue
  launch "$name" "$seed" "$industry" "$archetype" "$difficulty" "$rule" "$symptom" "$hint"
done < "$WORKLIST_TSV"

wait
[ "$DRY_RUN" = 1 ] && exit 0

# ── report ───────────────────────────────────────────────────────────────────
echo
echo "== sweep '${SWEEP_ID}' finished $(date '+%F %H:%M:%S') =="
printf '%-46s %-6s %-8s %s\n' TASK RC EXISTS VALIDATE
while IFS=$'\t' read -r name _rest; do
  [ -z "$name" ] && continue
  rc="$(cat "${RUN_DIR}/done/${name}" 2>/dev/null || echo '?')"
  if [ -d "tasks_web/${name}" ]; then
    exists=yes
    if uv run evolving-coding-agent validate "$name" --tasks-dir tasks_web 2>&1 | grep -q '\[OK\]'; then
      v=OK; else v=FAIL; fi
  else
    exists=no; v=-
  fi
  printf '%-46s %-6s %-8s %s\n' "$name" "$rc" "$exists" "$v"
done < "$WORKLIST_TSV"
echo
echo "logs: ${RUN_DIR}/logs/   SFT artifacts: ${RUN_DIR}/fixed/"
