---
name: synthesize-webapp-task
description: Synthesize a webapp-synth frontend coding task — a finished React/Tailwind page, a derived broken repo, a vitest check harness, and a finalize-generated reference patch — gated on the deterministic RED to GREEN admission proof. Use when asked to generate landing pages or create/grow/refine frontend tasks in tasks_web/.
---

# Synthesize Webapp Task

**You — Claude Code — are the generator.** There is no separate generator model
and no sandbox in this loop: you read this skill and build the files directly
with your own `Read`/`Write`/`Edit`/`Bash` tools in the local checkout, then
prove the task is gradeable with the deterministic admission gate.

This is the frontend analog of evolve-cc's `synthesize-task` skill. It targets
`tasks_web/` (React + Vite + TypeScript + Tailwind, scored by vitest/jsdom),
not `tasks/` (Python, scored by in-process checks).

> **Scope of this skill:** build ONE task and prove it validates. Empirical
> pass-rate calibration (the t0–t4 band ladder) needs `PRIME_API_KEY` and a
> Prime sandbox; it is SP4 and is explicitly OUT of scope here. Leave
> `[[metadata.pass_rates]]` at `measured = false`.

---

## The keystone idea

A **finished landing page is one artifact that serves both halves** of the
dataset: it is the SFT target (industry brief → finished page) *and* the
"solved" reference you break to derive an RL task.

**Therefore: always generate the FINISHED page FIRST, then break a copy of it.**
Never author the broken state directly. Three reasons: (1) `finalize` requires a
solved scratch repo to diff against; (2) the finished page is the artifact you
keep for SFT; (3) a defect planted into a known-good page is minimal and
surgical, whereas a page written broken tends to be broken in unintended extra
ways that pollute the reward signal.

---

## The loop

1. **Pick** an unused work item — `seed` × `industry` × `page_archetype` from
   `webapp_synth/taxonomy/webapp_library.md`.
2. **Scaffold** by cloning an existing task (never generate a Vite project).
3. **Generate** the finished page into a scratch fixed repo OUTSIDE `tasks_web/`.
4. **Break** a copy of it — that copy becomes `repo/`.
5. **Write** `checks/`, `instruction.md`, `task.toml`.
6. **Iterate** with the fast vitest inner loop until the harness is RED against
   `repo/` and GREEN against the scratch fixed repo.
7. **Finalize** — generates `reference.patch` mechanically.
8. **Validate** — the RED→GREEN admission gate.
9. **Accept** — score both repos and confirm the reward endpoints.

---

## Stage 0 — pick the work item

List what the taxonomy offers and what is already taken:

```bash
uv run python -c "
from webapp_synth.taxonomy import seeds as T
s = T.parse_seeds()
print('seeds:', [x.seed_id for x in s])
print('industries:', T.industries())
print('archetypes:', T.archetypes())
"
grep -h '^seed\|^industry\|^page_archetype' tasks_web/*/task.toml | sort | uniq -c
```

Pick a `seed_id` whose `assertion_hint` is crisp, and an `industry` /
`page_archetype` pair that reads naturally for it. **The seed's
`assertion_hint` column IS the spec for the defect-bearing assertions** — do not
invent a different rule.

Naming: `tasks_web/<industry>_<seed_shortname>_t0/`. The first task of any family
is `_t0` with `tier = 0`, regardless of the seed's `difficulty` hint column (that
hint is for SP4 band calibration, not the tier index).

**GATE 0 — name is free:**
```bash
test -d tasks_web/<name> && echo "COLLISION" || echo "OK: available"
```

---

## Stage 1 — scaffold by cloning

**Never hand-write or generate a Vite project.** Every task's build config is
byte-identical; clone a proven one so you inherit the committed
`package-lock.json` (deps are pinned and already resolved):

```bash
SCAFFOLD=tasks_web/restaurant_tabs_active_panel_t0   # READ-ONLY source; never edit it
cp -R "$SCAFFOLD" tasks_web/<name>
rm -rf tasks_web/<name>/reference.patch
rm -rf tasks_web/<name>/repo/dist tasks_web/<name>/repo/.eca_checks
rm -rf tasks_web/<name>/repo/src/components/*        # keep index.css, main.tsx
```

**KEEP `repo/node_modules`.** It comes across with the clone, it is gitignored so
it never reaches a commit, and it is exactly what makes Stage 6 take seconds
instead of minutes. **Never run `npm ci` or `npm install`** — the deps are
already resolved and installed, and re-resolving them is both slow and the only
way this scaffold can drift.

What you INHERIT unchanged (do not edit): `package.json`, `package-lock.json`,
`vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `tsconfig.json`,
`src/index.css`, `src/main.tsx`, `checks/_vitest.py`, `checks/correctness.py`,
`checks/web/setup.ts`, `checks/web/vitest.config.ts`.

What you WRITE: `index.html` (title), `src/App.tsx`, `src/components/*.tsx`,
`checks/web/correctness.test.tsx`, `checks/web/anticheat.test.tsx`,
`checks/anticheat.py`, `instruction.md`, `task.toml`.

**The one exception — `setup.ts` for observer/timer seeds.** A seed whose rule
depends on a browser API jsdom does not implement (`scroll_spy_active_link` needs
`IntersectionObserver`; a timer-driven `carousel_wrap_bounds` needs fake timers)
is unbuildable without a stub, and the taxonomy's `difficulty_principles`
explicitly requires mocking that boundary. For those seeds only, you may APPEND a
deterministic stub to `checks/web/setup.ts`. Rules: append, never rewrite; leave
the existing `fetch` / `Date.now` / `Math.random` stubs exactly as they are; the
stub must be driven by the test, never fire on its own. Every other seed
inherits `setup.ts` untouched.

---

## Stage 2 — generate the finished page (the SFT artifact)

Write the SOLVED page to a scratch dir OUTSIDE the task tree:

```bash
FIXED=/tmp/webapp-synth/fixed/<name>   # or the path your prompt gave you — use that
mkdir -p "$(dirname "$FIXED")" && cp -R tasks_web/<name>/repo "$FIXED"
```

If you were invoked headlessly and given an explicit `FIXED` path, use it — the
sweep driver puts it under the run directory so the SFT artifact survives the
session instead of being stranded in a scratchpad.

Author the finished page there. Requirements:

- **A real landing page for the industry**, not a test fixture. Give it a hero,
  the seed's component section, and a footer. Real copy, plausible names, a
  coherent Tailwind visual identity. This is an SFT target — it should look like
  something a designer shipped.
- **Keep it small.** A handful of components. Page size is not difficulty and a
  bloated repo is a bad task.
- **Semantic HTML + ARIA**, because that is what the checks assert against:
  `role="tablist"/"tab"/"tabpanel"`, `contentinfo` for the footer, `<h1>` for the
  name, real `aria-selected` / `aria-expanded` / `alt` / labels.
- **Stable `data-testid` hooks** on every element a check targets. Prefer roles
  where a role exists; use `data-testid` for things with no role.
- **No network, no timers, no randomness** in page code — `setup.ts` stubs
  `fetch` and pins `Date.now`/`Math.random`, and any unmocked source of variance
  makes the reward flaky.

Record the one-paragraph **brief** you generated the page from. The
(brief → finished page) pair is the SFT datapoint; the page is also SP4's
reference. Keep both.

---

## Stage 3 — plant the defect

Copy the finished page into the task and break exactly one thing:

```bash
rm -rf tasks_web/<name>/repo/src && cp -R "$FIXED/src" tasks_web/<name>/repo/src
```

Then edit `repo/src/` to introduce the defect described by the seed's
`symptom_surface`.

**Rules:**

- **ONE conceptual root cause.** It may touch two lines if they are the same
  miss (e.g. "the selected index is never consulted" breaking both which panel
  renders and the ARIA state). It must not be two unrelated bugs.
- **Plausible, not vandalism.** The broken state must look like code a developer
  would actually ship — a prototype wired for display only, a mis-scoped state
  variable, a comparison against the wrong value. Not a deleted function.
- **NEVER leave a `// BROKEN:` comment or any marker naming the defect.** The
  agent sees `repo/` and nothing else; a comment pointing at the bug telegraphs
  the fix and floors the task's difficulty at trivial. Write the comment the
  original developer would have written. (Some older tasks in the corpus carry
  `// BROKEN:` markers — that is a known defect in them, not a pattern to copy.)
- The defect must be **reachable in ~20 tool calls** — an obvious entry point
  and a small component tree.

---

## Stage 4 — the check harness

Two Python checks (contract: `check(repo_path, task_dir, reference_repo_path=None) -> dict`)
delegating to two vitest specs.

### `checks/correctness.py` — copy verbatim, never edit
Returns `passed/total` as a continuous fraction. Generic across all tasks.

### `checks/web/correctness.test.tsx` — the graded surface

Split assertions into two groups, and **weight the defect group heavily**:

- **Structure assertions** — pass in BOTH broken and fixed states (hero heading,
  component present, footer landmark). Keep these to **~3**.
- **Defect-bearing assertions** — fail in the broken state, pass in the fixed
  state. These encode the seed's `assertion_hint`. Write **5 or more**.

**Why the weighting is mandatory:** the reward is the pass fraction, so the
structure assertions are free credit a do-nothing agent banks. Existing corpus
tasks leak 0.5–0.6 this way (`fitness_responsive_grid_t0` measures **0.6**
unsolved). **Target a broken-state baseline at or below 0.4** and verify it in
Stage 6 — if it comes out higher, add defect assertions, do not delete structure
ones.

Assert behavior through the user's eyes with `@testing-library/react` +
`userEvent`, never implementation details. Accept any correct solution: assert
*what the user observes*, never that a particular hook or variable exists.

### `checks/web/anticheat.test.tsx` — block the vacuous pass

The defect assertions must not be satisfiable by **deleting the feature**. If
"exactly one panel is visible" is the rule, rendering zero panels or deleting the
tabs must FAIL. Assert the component still exists, still exposes all its
controls, and still renders real content behind each one.

### `checks/anticheat.py` — **TASK-SPECIFIC, never copied**

This is the one Python check you write per task. It hardcodes this task's
component paths and a marker string, then runs the anticheat spec:

```python
"""Anti-cheat gate: required components present + <the component> really renders."""

from pathlib import Path

from _vitest import run_vitest

REQUIRED = ["src/App.tsx", "src/components/<Component>.tsx"]


def check(repo_path, task_dir, reference_repo_path=None):
    repo = Path(repo_path)
    for rel in REQUIRED:
        if not (repo / rel).is_file():
            return {"passed": False, "message": f"required file removed: {rel}"}
    src = (repo / "src/components/<Component>.tsx").read_text()
    if "<marker-testid>" not in src:
        return {"passed": False, "message": "<component> removed"}
    passed, total, tail = run_vitest(repo, task_dir, "anticheat.test.tsx")
    ok = total > 0 and passed == total
    return {"passed": ok, "message": "anticheat ok" if ok else f"anticheat {passed}/{total}: {tail}"}
```

Copying another task's `anticheat.py` unchanged is a BUG — it will guard the
wrong filenames.

---

## Stage 5 — instruction.md: SYMPTOM ONLY

Write what a visitor or the site owner OBSERVES. The agent must localize and
diagnose; for a small student that step is most of the difficulty.

- **NEVER** name the file, the component, the state variable, or the fix.
- **NEVER** say "the bug is in X" or "add Y".
- Describe the user-visible symptom, then the expected behavior.
- Add a "nothing else should change" clause so broad rewrites are discouraged.

BAD: "`MenuTabs.tsx` renders every panel — only render `TABS[active]`."
GOOD: "Picking a tab highlights it, but all three menus stay stacked down the
page… choosing one should show just that menu."

Read `tasks_web/taskflow_repair_t0/instruction.md` as the reference voice.

---

## Stage 6 — the fast inner loop

Iterate here BEFORE running finalize. `node_modules` is warm in a cloned repo, so
this is seconds, not minutes:

```bash
# RED — against the broken repo. Structure passes, defect assertions FAIL.
cd tasks_web/<name>/repo && rm -rf .eca_checks && cp -R ../checks/web .eca_checks
npx vitest run .eca_checks/correctness.test.tsx --config .eca_checks/vitest.config.ts

# GREEN — against the finished page. Everything passes.
cd "$FIXED" && rm -rf .eca_checks && cp -R <abs>/tasks_web/<name>/checks/web .eca_checks
npx vitest run .eca_checks/correctness.test.tsx --config .eca_checks/vitest.config.ts
npx vitest run .eca_checks/anticheat.test.tsx   --config .eca_checks/vitest.config.ts
rm -rf .eca_checks
```

Confirm the broken-state fraction is **≤ 0.4**. Clean up `.eca_checks/` — it is
gitignored but leaving it behind pollutes the repo copy.

---

## Stage 7 — finalize and validate

**NEVER hand-write `reference.patch`.** Never run `diff`, `patch`, or
`git apply` to make one. Fighting the patch format by hand is the single biggest
cause of failed builds.

```bash
uv run evolving-coding-agent finalize <name> --tasks-dir tasks_web --fixed-repo "$FIXED"
uv run evolving-coding-agent validate <name> --tasks-dir tasks_web
```

`validate` is **GATE 1**, the deterministic admission proof: all required files
exist, the initial repo fails ≥1 check, and the reference-patched repo passes
all checks. If it fails, fix the task — **never weaken a check to make it pass.**

`task.toml` (note the three taxonomy fields beyond evolve-cc's schema):

```toml
[metadata]
name = "<name>"
description = "<one line: the symptom and the expected behavior>"
tier = 0
parent = ""
domain = "<name without the _t0 suffix>"
archetype = "repair"          # evolve-cc BUILD archetype
kind = "frontend"             # routes scoring to the node/vitest harness
seed = "<taxonomy seed_id>"
industry = "<taxonomy industry>"
page_archetype = "<landing|lead_gen>"
repo_path = "repo"
reference_patch = "reference.patch"
evolution_strategies = []

[[metadata.pass_rates]]
solver = "webapp-opencode"
model = "Qwen/Qwen3.5-4B"
k = 10
value = 0.0
measured = false              # SP4 measures this; leave false
in_band = false
attempts = 0

[checks]
correctness = "checks/correctness.py"
anticheat = "checks/anticheat.py"
```

---

## Stage 8 — acceptance

All four must hold:

```bash
uv run evolving-coding-agent validate <name> --tasks-dir tasks_web            # [OK]
uv run evolving-coding-agent score <name> --tasks-dir tasks_web \
    --candidate-repo tasks_web/<name>/repo                                    # reward <= ~0.4
uv run evolving-coding-agent score <name> --tasks-dir tasks_web \
    --candidate-repo "$FIXED"                                                 # reward == 1.0
uv run --with pytest --with pytest-asyncio pytest tests/ -q                    # no regressions
```

Then confirm: `git status` shows no `node_modules/`, no `.eca_checks/`, no
`report.json`; the finished page and its brief are retained as the SFT artifact.

---

## Self-audit before finalize

1. Could the fix be written from `instruction.md` alone without reading the
   code? → it telegraphs; make it a pure symptom.
2. Is there any `BROKEN`/`TODO`/`FIXME` comment in `repo/` pointing at the
   defect? → delete it.
3. Does `anticheat` reject deleting the component outright?
4. Do the checks accept an *alternate* correct implementation, or do they assert
   one specific shape?
5. Is the broken-state reward ≤ 0.4?
6. Is `anticheat.py` guarding THIS task's filenames, not a copied task's?

**Prove items 3 and 4 by SCORING, not by reading.** They are claims about what
the harness does, and reading the specs is a guess at it. Copy the finished page
twice more and score each variant:

- **gut it** — make the component render nothing (empty list, no controls).
  Expect **0.0**: `anticheat` must fail.
- **alternate fix** — implement the rule a second, equally-correct way (different
  hook, different state shape, different handler signature). Expect **1.0**.

An "alternate fix" that scores below 1.0 means the checks are asserting your
implementation rather than the user-visible behavior — fix the checks. This costs
two `score` runs and is the difference between a task that grades a *rule* and
one that grades a *diff*.

---

## Command reference

| purpose | command |
|---------|---------|
| parse taxonomy | `uv run python -c "from webapp_synth.taxonomy import seeds as T; print([s.seed_id for s in T.parse_seeds()])"` |
| fast inner loop | `npx vitest run .eca_checks/<spec> --config .eca_checks/vitest.config.ts` |
| generate patch | `uv run evolving-coding-agent finalize <name> --tasks-dir tasks_web --fixed-repo <dir>` |
| admission gate | `uv run evolving-coding-agent validate <name> --tasks-dir tasks_web` |
| score a candidate | `uv run evolving-coding-agent score <name> --tasks-dir tasks_web --candidate-repo <dir>` |
| unit tests | `uv run --with pytest --with pytest-asyncio pytest tests/ -q` |
