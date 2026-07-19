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
| Sandbox solver (agent rollouts + pass-rate) | ⚠️ **built, UNVERIFIED** | Prime sandbox | needs `PRIME_API_KEY` |
| Page generator + SFT (SP3) | ⬜ not built | — | — |
| Task-derivation at scale + tier ladders (SP4) | ⬜ not built | — | — |

**What you can get today, honestly:** a *reproducible substrate + method*, not yet a
training-scale dataset. The corpus is **4 t0 tasks**; the taxonomy holds **12 seeds**.
The whole author→score loop runs locally for near-zero cost. The Prime path (real agent
rollouts / RL training signal) is coded but has never executed against a live sandbox —
lighting it up + debugging is the first thing your compute buys. A large corpus needs
SP3 (auto-generate pages) + SP4 (derive tiers) to be built.

---

## 1. What this is (and the design bet)

The project pivots synthetic-data generation from Python backend bug-repair tasks (the
evolve-cc corpus) to **webapps / landing pages across industry verticals**. The intended
data is **hybrid**:

- **RL tasks** — a broken/stubbed React page + a reference fix + deterministic checks;
  a student model edits the repo and earns a graded, cheat-safe reward. *(This is what
  SP1+SP2 build.)*
- **SFT pairs** — (industry brief → finished page), selected by an LLM/vision quality
  judge. *(SP3, not built.)*

The keystone insight: **a finished landing page is one artifact that serves both** — it
is the SFT target *and* the "solved" reference you break to derive an RL task.

**The scoring bet (why this is tractable):** difficulty and checkability live in a
**UI component/interaction rule** (e.g. "the mobile menu must close after tapping a
link"), which is deterministically assertable with a headless DOM. The *industry* is
only theming. Aesthetic quality — which is *not* deterministically checkable — is kept
out of the RL reward and deferred to SP3's judge. This is what lets the reward stay
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
├── tasks_web/                     THE CORPUS (4 tasks today; the surface trained later)
│   ├── taskflow_repair_t0/            SaaS landing — mobile menu doesn't close on navigate
│   ├── dental_clinic_form_validation_t0/  lead_gen — form submits without validation
│   ├── restaurant_accordion_single_t0/    landing — FAQ accordion allows multiple open
│   └── fitness_responsive_grid_t0/        landing — grid doesn't collapse on mobile
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
                 SP2                          SP1 substrate                     scoring
        ┌──────────────────┐        ┌──────────────────────────┐       ┌───────────────────┐
 idea → │ webapp_library.md│  seed  │ author repo/ (broken)     │       │ LOCAL: score CLI  │  reward
        │  (12 seeds ×     │──────▶ │ + fixed repo (scratch)    │──────▶│  node+vitest,     │──────▶
        │  industries ×    │  work  │ + checks/ (vitest)        │  task │  in-process       │
        │  archetypes)     │  item  │ + instruction.md          │       ├───────────────────┤
        │  + seeds.py parse│        │ finalize → reference.patch│       │ SANDBOX: Prime    │  reward
        └──────────────────┘        │ validate → RED→GREEN gate │──────▶│  opencode agent   │──────▶
                                    └──────────────────────────┘  task │  edits repo, then │  (+ trains
                                                                        │  in-sandbox vitest│   later)
                                                                        └───────────────────┘
```

1. **SP2 (taxonomy):** pick a `seed` (a component rule) + `industry` + `archetype`. The
   parser (`seeds.py`) turns the markdown library into structured `Seed`/`WorkItem`
   records and enforces that every seed is deterministically checkable.
2. **SP1 (authoring):** build the task's `repo/` (a real Vite project in the *broken*
   state), a scratch *fixed* repo, the `checks/`, and a symptom-only `instruction.md`.
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
  reference) → **~1–3 min/task**. No GPU, no inference. You can run the entire 4-task
  corpus end-to-end locally for free.

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
- To *verify the Prime path*: a handful of single rollouts on the 4 existing tasks — cheap,
  the immediate first spend (expect to iterate on node provisioning / npm egress / PATH).
- To *calibrate the 4 tasks* (SP4-style): ~10 rollouts × 4 tasks × a few refine attempts.
- To *build a training corpus*: first build SP3/SP4; then budget generation inference +
  measurement sandboxes at corpus scale.

---

## 9. Current status — what you actually get today

**Proven, reproducible, free (local):**
- A taxonomy of 12 checkable seeds + a parser + a checkability gate (`test_taxonomy` 5/5).
- 4 t0 tasks, each with a verified **RED→GREEN admission gate** (`validate [OK]`) and a
  minimal `finalize`-generated `reference.patch`:
  - `taskflow_repair_t0` (SaaS, mobile-menu-close), `dental_clinic_form_validation_t0`
    (lead_gen, form gating), `restaurant_accordion_single_t0` (accordion single-open),
    `fitness_responsive_grid_t0` (responsive grid).
- The full author→score loop, computing the same `graded_reward` as evolve-cc.
- `12 passed` unit tests, no regressions to evolve-cc.

**Built but UNVERIFIED (needs Prime):**
- The `webapp-synth-solver-opencode` env: node provisioning, cross-repo sandbox staging,
  and in-sandbox vitest scoring have **never run against a live Prime sandbox**. All
  `pass_rates` are placeholders (`measured=false`).

**Not built yet:**
- SP3 (page generator + quality judge + SFT pairs) — the thing that *auto-produces* pages,
  so a corpus can scale without hand-authoring each one.
- SP4 (derive t0–t4 tier ladders via `couples_with` + measure/calibrate pass-rate bands).
- The full industry/seed library (12 seeds is a representative starter).

**Bottom line for allocation:** today the repo is a *validated pipeline + method + 4
examples*. Your first compute dollar should verify the Prime path on the existing tasks;
real training yield requires building SP3/SP4 and then allocating Prime inference (page
generation + student rollouts) and sandbox compute (measurement + RL) at corpus scale.

---

## 10. Roadmap

- **SP3 — Generator + judge + SFT.** Consume `work_items(...)` to auto-generate finished
  React pages (LLM), select the best with a vision/LLM quality judge, emit (brief → page)
  SFT pairs, and hand finished pages to SP4 as references.
- **SP4 — Task-derivation at scale.** Break/stub generated pages into repair/implement
  tasks, grow each into a t0–t4 ladder via `couples_with`, and calibrate the `difficulty`
  hints into measured pass-rate bands (the Prime measurement loop). This is where the
  `pass_rates` placeholders get filled and the corpus becomes trainable.

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
- **Reward-signal weight:** in these t0 tasks only the defect-bearing assertions distinguish
  broken from fixed (e.g. dental broken = 6/9). SP4 should weight defect assertions more
  heavily so a do-nothing rollout can't bank most of the reward.
- **Local env hygiene:** editable installs may land in the active conda env rather than the
  project `.venv`; `uv run` works regardless, but use a clean project `.venv` before the
  Prime runs for reproducibility.
- **jsdom limits:** "responsive" is verified via Tailwind class presence, not real computed
  layout; true visual/layout checks (Playwright) are deferred to SP3.
```
