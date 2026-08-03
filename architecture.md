# webapp-synth — Architecture & Operations Guide

A deep, end-to-end reference for the **webapp-synth** pipeline: what it is, every
component, how data flows from a taxonomy idea to a scored coding task, exactly how to
run each stage, what it costs, and how much you can get out of it today.

> **One-line summary:** webapp-synth turns *industry × page-archetype × UI-component
> seed* ideas into **deterministically-gradeable React/Tailwind coding tasks** that a
> student model can be trained on with RL — reusing the scoring engine of the sibling
> `evolving-coding-agent` (evolve-cc) repo.

---

## 0. Maturity at a glance (read this first)

| Layer | State | Runs where | Cost |
|-------|-------|-----------|------|
| Taxonomy + parser (SP2) | ✅ done | local Python | ~free |
| Task format + deterministic checks (SP1) | ✅ done, proven | local (node + vitest) | ~free |
| Admission gate (`finalize`/`validate`) | ✅ done, proven | local (node) | seconds–minutes |
| Local scoring (`score`) | ✅ done, proven | local (node) | seconds–minutes |
| **Page generator + SFT pairs (SP3)** | ✅ **done, proven** | local (Claude Code) | Claude Code session |
| Quality judge / best-of-N selection (SP3b) | ⬜ not built | — | — |
| Sandbox solver (agent rollouts + pass-rate) | ⚠️ **built, UNVERIFIED** | Prime sandbox | needs `PRIME_API_KEY` |
| Tier ladders + band calibration (SP4) | ⬜ not built | — | needs `PRIME_API_KEY` |

**What you can get today, honestly:** a *reproducible substrate + a working generator*,
not yet a training-scale dataset. The corpus is **9 t0 tasks**; the taxonomy holds
**12 seeds**, of which **39 work items** remain unbuilt. The whole generate→author→score loop
runs locally for near-zero marginal cost.

**What changed with SP3:** the generator is **Claude Code itself**, driven by the
`synthesize-webapp-task` skill (§5G). One work item → one headless `claude -p` session →
one validated task plus its SFT pair. A 4-item sweep across 4 industries completed in
**13m45s wall clock**, 4/4 succeeding with no human in the loop. Corpus growth is no
longer hand-authoring.

**What is still missing:** everything downstream needs Prime. All 9 tasks carry
`measured = false`, so `difficulty` is a taxonomy *hint*, not evidence — nothing has
tested whether a 4B student actually finds the t2 seeds harder than the t0 ones. The
Prime path itself has never executed against a live sandbox. Lighting it up is still the
first thing your compute buys.

---

## 1. What this is (and the design bet)

The project pivots synthetic-data generation from Python backend bug-repair tasks (the
evolve-cc corpus) to **webapps / landing pages across industry verticals**. The intended
data is **hybrid**:

- **RL tasks** — a broken/stubbed React page + a reference fix + deterministic checks;
  a student model edits the repo and earns a graded, cheat-safe reward. *(SP1+SP2.)*
- **SFT pairs** — (industry brief → finished page). *(SP3 — the pairs are produced; the
  quality judge that would select best-of-N is not built.)*

The keystone insight: **a finished landing page is one artifact that serves both** — it
is the SFT target *and* the "solved" reference you break to derive an RL task.

This is why the generator (§5G) always writes the **finished page first** and only then
breaks a copy of it. Three consequences fall out: `finalize` needs a solved repo to diff
against, the finished page is retained as the SFT artifact, and a defect planted into
known-good code is surgical — whereas a page authored broken from the start tends to be
broken in unintended extra ways that pollute the reward signal.

**The scoring bet (why this is tractable):** difficulty and checkability live in a
**UI component/interaction rule** (e.g. "the mobile menu must close after tapping a
link"), which is deterministically assertable with a headless DOM. The *industry* is
only theming. Aesthetic quality — which is *not* deterministically checkable — is kept
out of the RL reward and deferred to the SP3b judge. This is what lets the reward stay
reproducible and cheat-safe.

---

## 2. Two-repo topology

webapp-synth is a **standalone repo that depends on evolve-cc as an editable package**.
It reuses evolve-cc's domain-agnostic *scoring engine* and *sandbox lifecycle*, and adds
only the frontend-specific pieces.

```
/Users/sidgraph/
├── evolve-cc/            (branch: webapp-synth-sp1)   the DEPENDENCY
│   └── evolving_coding_agent/
│       ├── taskset.py            graded_reward, CheckOutcome, run_check_ensemble,
│       │                         validate_instance, make_repo_copy, determinism guard
│       ├── utils.py              staging helpers (_SOLVER_STAGE_INCLUDE/EXCLUDE)
│       ├── cli/                  finalize / validate / score / list / show / stats
│       └── solver/
│           ├── taskset.py        HarnessTaskSet (Prime SandboxTaskSet)
│           ├── rubric.py         HarnessRubric (in-sandbox scoring)
│           └── opencode/harness.py  opencode_repo_harness (agent harness)
│
└── webapp-synth/         (branch: main, pushed to github.com/mr-siddy/webapp-synth)
    └── webapp_synth/     the NEW frontend track (reuses everything above)
```

evolve-cc must be installed **editable** (`uv pip install -e ../evolve-cc`) so its source
(incl. `pyproject.toml`) can be staged into the Prime sandbox. The two enabling tweaks
webapp-synth relies on live on evolve-cc's `webapp-synth-sp1` branch (node-artifact
ignoring in `CACHE_DIR_NAMES`/`make_repo_copy`; a `source_tasks_subdir` staging hook).

---

## 3. Repository layout (webapp-synth)

```
webapp-synth/
├── pyproject.toml                 depends on evolving-coding-agent (editable), verifiers, tyro;
│                                  registers the `webapp-synth-solver-opencode` env entry point
├── webapp_synth_solver_opencode.py  top-level shim (verifiers resolves env id → module import)
├── README.md, architecture.md
│
├── .claude/skills/                SP3 — THE GENERATOR (Claude Code reads this, not a library)
│   └── synthesize-webapp-task/
│       └── SKILL.md               Stages 0–8 + self-audit: pick work item → clone scaffold →
│                                  generate finished page → plant defect → checks → finalize → validate
│
├── scripts/                       SP3 — THE DRIVER (fan the skill out over the taxonomy)
│   ├── webapp_worklist.py         unbuilt work items as TSV, ordered on a seed × industry diagonal
│   └── synth_sweep.sh             one headless `claude -p` per item, concurrent, resumable
│
├── webapp_synth/                  THE PACKAGE
│   ├── __init__.py
│   ├── harness.py                 frontend_repo_harness — opencode harness + pinned Node LTS install
│   ├── taskset.py                 FrontendHarnessTaskSet — tasks_web loader, node SandboxSpec,
│   │                              cross-repo staging (evolve-cc package + the task)
│   ├── rubric.py                  FrontendRubric — score rollouts in-sandbox via vitest
│   ├── env.py                     load_environment — ComposableEnv wiring (the solver env)
│   └── taxonomy/                  SP2 — the "domain library" for webapps
│       ├── __init__.py
│       ├── webapp_library.md      industries × archetypes × 12 component-anchored seeds + principles
│       └── seeds.py               parser + checkability gate (Seed, WorkItem, parse_seeds, …)
│
├── tasks_web/                     THE CORPUS (9 tasks today; the surface trained later)
│   │                              hand-authored (SP1 era):
│   ├── taskflow_repair_t0/            saas landing — mobile menu doesn't close on navigate
│   ├── dental_clinic_form_validation_t0/  dental lead_gen — form submits without validation
│   ├── restaurant_accordion_single_t0/    restaurant landing — FAQ allows multiple open
│   ├── fitness_responsive_grid_t0/        fitness landing — grid doesn't collapse on mobile
│   │                              skill-built, hand-driven:
│   ├── restaurant_tabs_active_panel_t0/   restaurant landing — every menu panel renders at once
│   │                              skill-built, generated unattended by sweep01:
│   ├── saas_pricing_most_popular_t0/      saas landing — every plan carries the popular ribbon
│   ├── dental_clinic_a11y_labels_alt_t0/  dental landing — nothing exposed to assistive tech
│   ├── restaurant_modal_close_overlay_esc_t0/ restaurant landing — dialog ignores overlay + Esc
│   └── fitness_studio_filter_list_t0/     fitness landing — class filter lags one click behind
│       └── <each task>/
│           ├── instruction.md     symptom-only user request (never names the fix)
│           ├── repo/              a real Vite + React + TS + Tailwind project (the unsolved state)
│           ├── reference.patch    broken→fixed diff, generated by `finalize` (never hand-written)
│           ├── checks/
│           │   ├── correctness.py  functional check (Python) → runs vitest, returns fraction
│           │   ├── anticheat.py    binary gate (Python) → static guard + vitest anticheat suite
│           │   ├── _vitest.py      shared runner: copy harness → npm ci → npx vitest → parse JSON
│           │   └── web/            vitest.config.ts, setup.ts, correctness.test.tsx, anticheat.test.tsx
│           └── task.toml           [metadata] (kind="frontend", seed, industry, page_archetype) + pass_rates + [checks]
│
├── tests/                         test_frontend_module.py, test_frontend_vitest_parse.py, test_taxonomy.py
└── docs/                          SP1 + SP2 specs and plans
```

---

## 4. The end-to-end pipeline

```
          SP2                     SP3 generator                SP1 substrate            scoring
   ┌──────────────────┐   ┌──────────────────────────┐  ┌────────────────────┐  ┌───────────────────┐
 → │ webapp_library.md│   │ synth_sweep.sh           │  │ repo/  (broken)    │  │ LOCAL: score CLI  │ reward
   │  (12 seeds ×     │──▶│  └ claude -p per item ───┼─▶│ checks/ (vitest)   │─▶│  node+vitest,     │──────▶
   │  industries ×    │ w │     reads SKILL.md:      │  │ instruction.md     │  │  in-process       │
   │  archetypes)     │ o │     finished page FIRST, │  │ finalize → patch   │  ├───────────────────┤
   │  + seeds.py parse│ r │     then break a copy    │  │ validate → RED→    │  │ SANDBOX: Prime    │ reward
   └──────────────────┘ k └───────────┬──────────────┘  │            GREEN   │─▶│  opencode agent   │──────▶
        webapp_worklist.py            │                 └────────────────────┘  │  edits repo, then │ (+ trains
        (diagonal, skips built)       ▼                                         │  in-sandbox vitest│  later)
                              runs/…/fixed/<task>/                              └───────────────────┘
                              + <task>.brief.md   ── the SFT pair
```

1. **SP2 (taxonomy):** pick a `seed` (a component rule) + `industry` + `archetype`. The
   parser (`seeds.py`) turns the markdown library into structured `Seed`/`WorkItem`
   records and enforces that every seed is deterministically checkable.
2. **SP3 (generation):** `webapp_worklist.py` subtracts what is built and hands the rest
   to `synth_sweep.sh`, which spawns one headless `claude -p` per work item. Each session
   reads `SKILL.md` and produces the finished page (retained as the SFT artifact) plus
   the broken `repo/`, `checks/`, and `instruction.md` derived from it. See §5G.
3. **`finalize`:** mechanically diffs broken→fixed into `reference.patch` (never
   hand-written) and re-validates.
4. **`validate` (admission gate):** proves the *initial* repo fails ≥1 check and the
   *reference-patched* repo passes all — the deterministic RED→GREEN proof.
5. **Scoring:** two interchangeable paths computing the *same* reward —
   - **local** (`score` CLI): runs the checks in-process against a candidate repo, using
     node on the host. Fast, free, used for authoring/iteration.
   - **sandbox** (`webapp-synth-solver-opencode` env via `vf-eval`): spins a Prime
     sandbox, an OpenCode agent edits the repo, then the checks run *inside* the sandbox.
     This is the real RL rollout surface and the pass-rate gate. **(needs `PRIME_API_KEY`)**

---

## 5. Components in detail

### 5A. The taxonomy (SP2) — `webapp_synth/taxonomy/`

**`webapp_library.md`** is human-authored markdown with four sections the parser reads:
- `## industries` — table of `id | description` (`saas`, `dental_clinic`, `restaurant`,
  `fitness_studio`).
- `## archetypes` — `landing`, `lead_gen`.
- `## seeds` — one `### <component>` subsection per UI component (nav, accordion, grid,
  a11y, pricing, form, tabs, modal, carousel, filter), each a table of seed rows:
  `seed_id | rule | symptom_surface | assertion_hint | difficulty | couples_with`.
- `## difficulty_principles` — prose (reason-it-out vs recalled-reflex; coupling as a
  multiplier; tier intent t0–t4).

**The `assertion_hint` column is the checkability contract** — how the seed is asserted
in vitest/jsdom. A seed with no `assertion_hint` cannot enter the RL menu.

**`seeds.py`** — the parser (mirrors evolve-cc's `extract_seeds.py`):
```python
Seed(seed_id, component, rule, symptom, assertion_hint, difficulty, couples_with)
WorkItem(seed, industry, archetype)
parse_seeds(md=DEFAULT_LIBRARY) -> list[Seed]      # reads ## seeds tables
industries() / archetypes() -> list[str]
work_items(seeds, industries, archetypes, pairs=None) -> list[WorkItem]   # the product
validate_checkable(seeds) -> list[str]             # THE GATE: seed_ids w/ empty assertion_hint ([] = ok)
```
`work_items` is the fan-out orchestration (SP3/SP4) will iterate: 12 seeds × 4 industries
× 2 archetypes ≈ up to **96 work-item shells** — but each still needs its page *authored*
(that authoring is SP3).

### 5B. The task format (SP1) — the contract both halves agree on

Every task is a flat dir `tasks_web/<name>/` with `kind = "frontend"` in `task.toml`.
`task.toml` extends the evolve-cc schema with three taxonomy fields:
```toml
[metadata]
name = "dental_clinic_form_validation_t0"
tier = 0
archetype = "repair"            # evolve-cc BUILD archetype (repair|implement|extend|...)
kind = "frontend"               # routes scoring to the node sandbox / vitest harness
seed = "form_validation_gating" # taxonomy seed
industry = "dental_clinic"      # taxonomy industry
page_archetype = "lead_gen"     # taxonomy page archetype (distinct from build archetype)
repo_path = "repo"
reference_patch = "reference.patch"

[[metadata.pass_rates]]
solver = "webapp-opencode"; model = "Qwen/Qwen3.5-4B"; k = 10
value = 0.0; measured = false; in_band = false; attempts = 0   # filled by SP4 measurement

[checks]
correctness = "checks/correctness.py"
anticheat  = "checks/anticheat.py"
```
`repo/` is a genuine Vite + React 18 + TypeScript + Tailwind project (`package.json` +
committed `package-lock.json`, `vite.config.ts`, `tailwind.config.js`, `src/…`), committed
**without** `node_modules/`/`dist/`.

### 5C. The check harness — two layers

**Layer 1 (Python `check()`):** `correctness.py` and `anticheat.py` keep evolve-cc's
contract `check(repo_path, task_dir, reference_repo_path=None) -> dict`, so the reused
scoring engine treats them like any other check. They delegate to `checks/_vitest.py`.

**`_vitest.run_vitest(repo, task_dir, spec)`** — the bridge: copies `checks/web/` into
`<repo>/.eca_checks/`, runs `npm ci` if `node_modules` is absent, then
`npx vitest run .eca_checks/<spec> --reporter=json --outputFile=…`, and parses
`numPassedTests`/`numTotalTests`.

- **`correctness.py`** → `score = passed/total`, `passed = (all pass)` — a *continuous*
  fraction over many seeded assertions, so `mean@k` can land in a difficulty band.
- **`anticheat.py`** → binary gate: static guards (the task's own required component
  files exist + a component-marker string present) **plus** an `anticheat.test.tsx` vitest
  run. (This file is **task-specific**, not copyable between tasks.)

**Layer 2 (vitest/jsdom):** `checks/web/` — `correctness.test.tsx` + `anticheat.test.tsx`
render the app via React Testing Library into jsdom and assert roles/text/behavior/
responsive-classes. `vitest.config.ts` aliases `@app` → `../src` (resolved from
`.eca_checks/`, so it points at whatever candidate repo is being scored). `setup.ts`
enforces **determinism**: mocks `fetch`, pins `Date.now`/`Math.random`, jsdom env.

**Determinism note:** the committed lockfile + `npm ci` pin deps; JS-side mocks are
*mandatory* because evolve-cc's Python network guard patches the Python `socket` layer
and does **not** reach node's subprocess.

### 5D. The scoring engine — reused verbatim from evolve-cc

`graded_reward(scores, passed)`:
```
reward = mean(functional check scores)   if all anti-cheat gates pass
       = 0.0                              if any anti-cheat gate fails
```
For frontend: `reward = correctness_fraction if anticheat_passes else 0`. Same function
computes it for both the local CLI (`cli/score.py`) and the sandbox rubric.
`validate_instance` is the RED→GREEN admission gate. `CheckOutcome`, `run_check_ensemble`,
`make_repo_copy` (now ignoring `node_modules`/`dist`) are all reused unchanged.

### 5E. The solver module (frontend) — `webapp_synth/{harness,taskset,rubric,env}.py`

Built by subclassing evolve-cc's opencode solver so the Prime sandbox lifecycle is reused:

- **`harness.py` → `frontend_repo_harness()`** — the opencode agent harness + an appended
  script that installs a **pinned Node LTS** (v20.18.0 tarball → `$HOME/.local/node`) and
  best-effort `npm ci`s the task repo during the network-open setup phase.
- **`taskset.py` → `FrontendHarnessTaskSet`** — loads `tasks_web/`; a node-capable
  `SandboxSpec` (`python:3.11-slim`, 2 cpu / **4 GB** / **8 GB disk** / 120 min); and
  **cross-repo staging**: `_stage_cross_repo` stages the `evolving_coding_agent` package
  (from its installed location) **plus** the single task (from `tasks_web/`) into the
  `tasks/<name>` sandbox layout. Fails fast if evolve-cc isn't editable.
- **`rubric.py` → `FrontendRubric`** — always scores **in-sandbox**: re-uploads the
  stripped `checks/` + `task.toml`, runs `evolving-coding-agent score` inside the sandbox
  (node on PATH), parses the JSON, maps to `CheckOutcome`s → `graded_reward`.
- **`env.py` → `load_environment()`** — builds the `ComposableEnv` (taskset + harness),
  exposed as the `webapp-synth-solver-opencode` verifiers env (+ the top-level shim).

### 5F. The two scoring paths side by side

| | **Local (`score` CLI)** | **Sandbox (`webapp-synth-solver-opencode`)** |
|---|---|---|
| Who edits the repo | you / a fixed candidate | an OpenCode **agent** (a student model) |
| Where checks run | in-process, node on host | inside the Prime sandbox |
| Needs Prime | no | **yes (`PRIME_API_KEY`)** |
| Use | authoring, admission gate, debugging | RL rollouts + the pass-rate gate + training |
| Reward | `graded_reward` (identical) | `graded_reward` (identical) |

### 5G. The page generator (SP3) — `.claude/skills/` + `scripts/`

**The generator is Claude Code itself.** There is no generator model to host and no
sandbox in this loop: a Claude Code session reads the skill and writes the files directly
with its own tools, then proves the result with the same deterministic admission gate
everything else uses. This follows evolve-cc's precedent (`synthesize-task` + `claude -p`),
so SP3's only genuinely missing piece was the skill.

**`.claude/skills/synthesize-webapp-task/SKILL.md`** — Stages 0–8 plus a self-audit. The
rules that carry the design:

| Rule | Why |
|---|---|
| Generate the **finished page first**, break a copy | `finalize` needs a solved repo to diff; the page is the SFT artifact; a planted defect stays surgical |
| **Clone** a proven task, never generate a Vite project | inherits the resolved `package-lock.json` and warm `node_modules` — the inner loop is seconds, not minutes |
| ~3 structure assertions vs **≥5 defect-bearing**, baseline **≤ 0.4** | reward is the pass fraction, so structure assertions are free credit a do-nothing agent banks |
| **No `BROKEN`/`TODO`/`FIXME`** in `repo/` | a comment pointing at the bug telegraphs the fix and floors difficulty at trivial |
| `anticheat.py` is **task-specific** | copying one unchanged guards the wrong filenames |
| `instruction.md` is **symptom-only**; `reference.patch` is never hand-written | localization is most of the difficulty for a small student; hand-patching is the top build-failure cause |
| Prove the audit by **scoring**, not reading | gut the component → expect 0.0; implement the rule a second correct way → expect 1.0 |

The `setup.ts` inherit-unchanged rule has one narrow exception: seeds whose rule depends
on a browser API jsdom lacks (`scroll_spy_active_link` → `IntersectionObserver`; a
timer-driven `carousel_wrap_bounds`) may **append** a deterministic stub, leaving the
existing `fetch`/`Date.now`/`Math.random` stubs intact. Without it those 8 work items are
unbuildable.

**`scripts/webapp_worklist.py`** — emits unbuilt work items as TSV. It subtracts
`(seed, industry)` pairs already in `tasks_web/`, dedupes the two archetypes that would
collide on one task name, and orders the remainder on a **diagonal** of the seed × industry
grid (bucket by industry, rotate bucket *j* left by *j*, round-robin). A plain round-robin
varies industry but repeats one seed — yielding four industries all building the same
component. Task names are `<industry>_<seed_id>_t0`.

**`scripts/synth_sweep.sh`** — one fresh headless `claude -p` per work item, concurrent,
resumable via done-markers. Three things it needs that evolve-cc's `synth_shard.sh` does
not:

- a **perl-`alarm` timeout shim** — macOS ships no GNU coreutils, so `timeout(1)` is absent;
- **parallel-safety clauses** in the prompt — sessions share one checkout, so each is told
  to write only inside its own task dir, treat the scaffold as read-only, and never mutate
  git state;
- an explicit **`$FIXED` path under the run dir** — left alone a session strands the
  finished page in a scratchpad that does not survive; the driver also requires the brief
  be written alongside it, making the SFT pair a deliverable rather than a side effect.

Sessions write per-item logs and SFT artifacts under `runs/synth/<sweep_id>/` (gitignored;
each finished page carries a ~110 MB `node_modules`). Note `claude -p` buffers its output
until exit, so a running session's log is empty — task-directory file counts are the live
progress signal.

---

## 6. Data-flow walkthroughs

**Authoring a task (local, free):**
```
build repo/ (broken) + scratch fixed repo + checks/ + instruction.md + task.toml
  → evolving-coding-agent finalize <task> --tasks-dir tasks_web --fixed-repo <scratch>
      (diffs broken→fixed → reference.patch, re-validates)
  → evolving-coding-agent validate <task> --tasks-dir tasks_web
      (initial repo fails ≥1 check; reference repo passes all → [OK])
```

**Scoring a candidate locally (free):**
```
evolving-coding-agent score <task> --tasks-dir tasks_web --candidate-repo <dir>
  → run_check_ensemble → correctness.py/anticheat.py → _vitest → npm ci + npx vitest
  → JSON {reward, checks{correctness:{score,passed}, anticheat:{…}}}
```

**A training rollout (Prime, needs key):**
```
vf-eval webapp-synth-solver-opencode -m <model> -a '{"task":"<t>","max_turns":20}'
  → Prime sandbox created (python:3.11-slim, node installed)
  → package (evolve-cc) + task staged & uploaded; uv pip install; npm ci
  → OpenCode agent reads instruction.md, edits repo/ over ≤max_turns LLM calls
  → FrontendRubric runs `evolving-coding-agent score` IN the sandbox (vitest)
  → reward returned; averaged over r rollouts = the pass-rate
```

---

## 7. How to run (exact commands)

### 7.1 Setup (once)
```bash
# prerequisites: uv, Node ≥ 20 on PATH (host has v25). evolve-cc checked out at ../evolve-cc.
cd /Users/sidgraph/webapp-synth
uv venv
uv pip install -e ../evolve-cc      # the dependency (editable) — brings verifiers/tyro/etc.
uv pip install -e . --no-deps        # this package
```

### 7.2 Local / no Prime (near-zero cost)
```bash
# 1. Parse / inspect the taxonomy
uv run python -c "from webapp_synth.taxonomy import seeds; s=seeds.parse_seeds(); \
  print(len(s),'seeds; checkable:', seeds.validate_checkable(s)==[]); \
  print([w.seed.seed_id for w in seeds.work_items(s,['dental_clinic'],['lead_gen'])][:5])"

# 2. Test suite (parser + module unit tests; no node/Prime)
uv run --with pytest --with pytest-asyncio pytest tests/ -q

# 3. Admission gate for one task (runs node+vitest on temp copies; 1–3 min)
uv run evolving-coding-agent validate dental_clinic_form_validation_t0 --tasks-dir tasks_web

# 4. Score a candidate repo (e.g. the unsolved repo → partial reward; a fixed repo → 1.0)
uv run evolving-coding-agent score dental_clinic_form_validation_t0 \
  --tasks-dir tasks_web --candidate-repo tasks_web/dental_clinic_form_validation_t0/repo

# 5. Regenerate a reference patch from a fixed repo
uv run evolving-coding-agent finalize <task> --tasks-dir tasks_web --fixed-repo <scratch_fixed_repo>

# 6. Run a task's vitest harness directly (fastest inner loop while authoring)
cd tasks_web/<task>/repo && rm -rf .eca_checks && cp -R ../checks/web .eca_checks
npx vitest run .eca_checks/correctness.test.tsx --config .eca_checks/vitest.config.ts
```

### 7.2b Generate new tasks (SP3 — local, needs the `claude` CLI)
```bash
# What is left to build (drops built pairs; diagonal order = diverse by construction)
python3 scripts/webapp_worklist.py                    # all 39 remaining
python3 scripts/webapp_worklist.py --limit 4          # the next diverse slice

# Inspect the composed prompt without launching anything
DRY_RUN=1 bash scripts/synth_sweep.sh

# Run a sweep: 4 work items, 4 concurrent headless sessions (~15 min wall clock)
SWEEP_ID=sweep02 LIMIT=4 PARALLEL=4 bash scripts/synth_sweep.sh

# Or name the work items explicitly
ITEMS=saas_a11y_labels_alt_t0,restaurant_carousel_wrap_bounds_t0 \
  bash scripts/synth_sweep.sh
```
The driver prints a per-task `RC / EXISTS / VALIDATE` table at the end. **Verify
independently** — re-run `validate` and both `score` endpoints yourself rather than
trusting a session's self-report:
```bash
uv run evolving-coding-agent validate <task> --tasks-dir tasks_web
uv run evolving-coding-agent score <task> --tasks-dir tasks_web --candidate-repo tasks_web/<task>/repo
uv run evolving-coding-agent score <task> --tasks-dir tasks_web --candidate-repo runs/synth/<sweep>/fixed/<task>
```

To build a *single* task interactively instead, just ask a Claude Code session in this
repo to synthesize one — the skill auto-loads from its description.

### 7.3 Prime sandbox — real rollouts / pass-rate (needs `PRIME_API_KEY`)
```bash
export PRIME_API_KEY=...
# single-rollout smoke (verifies node provisioning + cross-repo staging + in-sandbox scoring)
uv run vf-eval webapp-synth-solver-opencode --disable-env-server -c -1 \
  -b https://api.pinference.ai/api/v1 -k PRIME_API_KEY -m Qwen/Qwen3.5-4B \
  --header "X-Prime-Team-ID: <team-id>" \
  -n 1 -r 1 -d -a '{"task":"taskflow_repair_t0","max_turns":20}'
# 10-rollout pass-rate gate: same command with -r 10
```
> The `-m <model>` is the **student** whose edits are scored; it runs on Prime inference.
> `max_turns 20` caps the agent's edit turns. Record the resulting `reward: avg` into the
> task's `[[metadata.pass_rates]]`.

---

## 8. Compute & cost model (for sizing your allocation)

**Local (CPU only, no inference):**
- Taxonomy parse / pytest: **seconds**, negligible.
- `validate` / `score` / `finalize`: dominated by `npm ci` on fresh temp repo copies
  (~30–90 s each) + vitest (~5–15 s). A single `validate` does ~2 `npm ci`s (initial +
  reference) → **~1–3 min/task**. No GPU, no inference. You can run the entire 9-task
  corpus end-to-end locally for free.

**Task generation (SP3) — a Claude Code session per work item, no Prime:**
- Measured on sweep01: **4 tasks in 13m45s wall clock** at `PARALLEL=4`, i.e. ~9–14 min
  per session, all four succeeding. Concurrency is bounded by host cores and the vitest
  runs, not by any quota; 4-at-a-time was comfortable on a 14-core machine.
- Marginal cost is the Claude Code session itself. There is no inference bill on Prime and
  no sandbox — this is the cheapest stage in the pipeline, which is why corpus growth is
  no longer the bottleneck.
- Disk is the real cost: each retained finished page carries a ~110 MB `node_modules`
  (~480 MB for a 4-item sweep) under the gitignored `runs/`. Prune when done, or strip
  `node_modules` if you want to archive the SFT pages long-term.

**Prime sandbox per rollout (`webapp-synth-solver-opencode`):** each rollout is one
sandbox and includes, in series:
1. sandbox spin-up (`python:3.11-slim`, 2 cpu / 4 GB),
2. Node LTS tarball download + `uv pip install -e .` (evolve-cc + deps),
3. `npm ci` in the task repo,
4. the **OpenCode agent**: up to `max_turns` (20) LLM calls of the student model
   (**this is the inference cost** — billed per token on Prime inference),
5. in-sandbox `npm ci` + vitest scoring.
Rough wall-clock: **several minutes/rollout**, mostly setup + agent turns. A 10-rollout
gate ≈ **10 sandboxes**. Sizing knobs: number of tasks × `r` rollouts × `max_turns` ×
student model size. Sandboxes run concurrently up to your Prime quota.

**Training (SP4+, not built):** RL over the corpus = (rollouts × sandboxes × inference) +
policy gradient updates — the dominant compute, and the reason to grow the corpus first.

**Practical sizing guidance:**
- To *verify the Prime path*: a handful of single rollouts on the 9 existing tasks — cheap,
  the immediate first spend (expect to iterate on node provisioning / npm egress / PATH).
- To *calibrate the corpus* (SP4): ~10 rollouts × 9 tasks × a few refine attempts. This is
  the gate that turns the taxonomy's `difficulty` hints into measured bands.
- To *grow the corpus*: local sweeps, no Prime — 39 work items remain, ~14 min per batch of
  4. Generation is no longer the constraint; **measurement** is.

---

## 9. Current status — what you actually get today

**Proven, reproducible, free (local):**
- A taxonomy of 12 checkable seeds + a parser + a checkability gate (`test_taxonomy` 5/5).
- **A working page generator** (§5G): work item → headless Claude Code session → validated
  task + SFT pair, no human in the loop. 4/4 on its first unattended sweep.
- **9 t0 tasks**, each with a verified **RED→GREEN admission gate** (`validate [OK]`) and a
  minimal `finalize`-generated `reference.patch`. Reward endpoints, independently re-scored:

  | task | seed | industry | broken (do-nothing) | fixed | origin |
  |---|---|---|---|---|---|
  | `dental_clinic_a11y_labels_alt_t0` | a11y_labels_alt | dental_clinic | **0.273** (3/11) | 1.0 | sweep01 |
  | `saas_pricing_most_popular_t0` | pricing_most_popular | saas | **0.300** (3/10) | 1.0 | sweep01 |
  | `fitness_studio_filter_list_t0` | filter_list | fitness_studio | **0.333** (3/9) | 1.0 | sweep01 |
  | `restaurant_modal_close_overlay_esc_t0` | modal_close_overlay_esc | restaurant | **0.333** (3/9) | 1.0 | sweep01 |
  | `restaurant_tabs_active_panel_t0` | tabs_active_panel | restaurant | **0.375** (3/8) | 1.0 | skill, hand-driven |
  | `restaurant_accordion_single_t0` | accordion_single_open | restaurant | 0.571 (4/7) | 1.0 | hand-authored |
  | `fitness_responsive_grid_t0` | responsive_grid_collapse | fitness_studio | 0.600 (3/5) | 1.0 | hand-authored |
  | `dental_clinic_form_validation_t0` | form_validation_gating | dental_clinic | 0.667 (6/9) | 1.0 | hand-authored |
  | `taskflow_repair_t0` | mobile_menu_close_on_navigate | saas | 0.727 (8/11) | 1.0 | hand-authored |

  The split is the point, and it is clean: every skill-built task lands **≤ 0.375** while
  every hand-authored one leaks **0.571–0.727** to an agent that does nothing at all. Four
  independent sessions converged on ~3 structure assertions against 6–8 defect-bearing ones
  without coordinating, so the weighting rule generalizes rather than being one author's
  habit. The four hand-authored tasks are the corpus's weakest RL signal and should be
  re-weighted (or regenerated through the skill) before training.
- The full generate→author→score loop, computing the same `graded_reward` as evolve-cc.
- `12 passed` unit tests, no regressions to evolve-cc.

**Built but UNVERIFIED (needs Prime):**
- The `webapp-synth-solver-opencode` env: node provisioning, cross-repo sandbox staging,
  and in-sandbox vitest scoring have **never run against a live Prime sandbox**. All
  `pass_rates` are placeholders (`measured=false`).

**Not built yet:**
- **SP3b — the quality judge.** The generator produces one page per work item; there is no
  vision/LLM judge doing best-of-N selection, so SFT-pair quality is unfiltered.
- **SP4 — tier ladders + calibration.** No t1–t4 derivation via `couples_with`, and no
  measured pass-rate bands. Every task is `measured = false`, so `difficulty` remains a
  taxonomy *hint*: `fitness_studio_filter_list_t0` is labeled t2 and
  `dental_clinic_a11y_labels_alt_t0` t0–t1, but nothing has tested whether a 4B student
  actually finds one harder than the other.
- The full industry/seed library (12 seeds is a representative starter; 39 work items of
  the current library remain unbuilt).

**Bottom line for allocation:** the repo is now a *validated pipeline + a working generator
+ 9 examples*, and corpus growth costs a local Claude Code session per task. The binding
constraint has moved from **generation** to **measurement**: nothing downstream — band
calibration, tier ladders, RL — can start until the Prime path runs. That is where the
first compute dollar goes.

---

## 10. Roadmap

- ~~**SP3 — Generator.**~~ ✅ **Done** (§5G). Consumes `work_items(...)`, generates finished
  React pages, derives the RL task, retains (brief → page) SFT pairs. 9 tasks built.
- **SP3b — Quality judge + best-of-N.** Generate several candidate pages per work item and
  select with a vision/LLM judge, so SFT-pair quality is filtered rather than first-draft.
  jsdom cannot see layout, so this is also the only place aesthetic quality can be assessed.
- **SP4 — Tier ladders + calibration.** Grow each t0 into a t0–t4 ladder via `couples_with`,
  and calibrate the taxonomy's `difficulty` hints into measured pass-rate bands (the Prime
  measurement loop). This is where the `pass_rates` placeholders get filled and the corpus
  becomes trainable. **The current blocker for everything downstream.**
- **Re-weight the four hand-authored tasks** (§9) — their 0.571–0.727 do-nothing floors are
  the weakest signal in the corpus.
- **Grow the library.** 39 work items of the current taxonomy remain; beyond that, more
  seeds and industries.

---

## 11. Caveats & gotchas

- **evolve-cc must be installed editable.** A wheel install has no `pyproject.toml` at the
  package root, so cross-repo staging can't build the sandbox package → every rollout
  scores 0. `FrontendHarnessTaskSet` fails fast if it detects this.
- **evolve-cc's enabling tweaks are only on branch `webapp-synth-sp1`** (not merged to
  main, not published). Keep the local checkout on that branch, or merge/publish before
  relying on a released `evolving-coding-agent`.
- **The Prime path is unverified** (see §9). Likely first fixes when it runs: node PATH
  parity between the install phase and the scoring `execute_command`; npm-registry egress
  during scoring (mitigated by the setup-phase `npm ci`); sandbox memory headroom.
- **`anticheat.py` is task-specific** — it hardcodes a task's component filenames + a
  marker string; do not copy it between tasks (`correctness.py`/`_vitest.py` *are* generic).
- **Reward-signal weight:** only defect-bearing assertions distinguish broken from fixed,
  so structure assertions are free credit. The four hand-authored tasks leak **0.571–0.727**
  to a do-nothing rollout (§9); the skill now mandates a **≤ 0.4** floor and every task
  built through it lands there. Re-weight the old four before training.
- **The four hand-authored tasks carry `// BROKEN:` comments** in `repo/src` pointing
  straight at the defect, which telegraphs the fix to an agent that only sees `repo/`. The
  skill forbids the marker; the five newer tasks have none. This is a defect in the old
  tasks, not a corpus convention.
- **macOS build-host quirks** the sweep driver works around: no GNU coreutils, so
  `timeout(1)` does not exist (perl `alarm` shim); and bash 3.2, where expanding an *empty*
  array under `set -u` is a fatal unbound-variable error.
- **`claude -p` buffers output until exit** — a running session's log file stays at 0 bytes,
  so watch task-directory file counts for progress, not the log.
- **`setup.ts` is inherit-unchanged except for observer/timer seeds**, which may *append* a
  deterministic stub (see §5G). Without that exception `scroll_spy_active_link` and a
  timer-driven `carousel_wrap_bounds` are unbuildable in jsdom.
- **Local env hygiene:** editable installs may land in the active conda env rather than the
  project `.venv`; `uv run` works regardless, but use a clean project `.venv` before the
  Prime runs for reproducibility.
- **jsdom limits:** "responsive" is verified via Tailwind class presence, not real computed
  layout; true visual/layout checks (Playwright) are deferred to SP3.
```
