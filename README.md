# Developing Taste for Design in LLMs

Synthetic-data generation for React/Tailwind landing-page coding tasks.

webapp-synth turns *industry × page-archetype × UI-component seed* ideas into
**deterministically-gradeable** coding tasks a student model can be trained on with
RL — plus the (brief → finished page) SFT pairs that fall out of the same artifact.

It is a standalone repo that **reuses** the scoring engine of
[`evolving-coding-agent`](../evolve-cc) by depending on it (editable, from the local
`../evolve-cc` checkout), and adds only the frontend-specific pieces.

**→ [`architecture.md`](architecture.md) is the full reference:** every component, the
data flow, exact commands, the cost model, and an honest maturity assessment.

## The idea

A **finished landing page is one artifact that serves both halves** of the dataset: it is
the SFT target *and* the "solved" reference you break to derive an RL task. So the
generator always writes the finished page first, then breaks a copy of it.

Difficulty and checkability live in a **UI interaction rule** ("the mobile menu must close
after tapping a link"), which a headless DOM can assert deterministically. The *industry*
is only theming. Aesthetic quality — not deterministically checkable — is deliberately
kept out of the RL reward.

Pages are **long-form** — 12–15 sections, ~2,300 words, real inline SVG — because the page
is the SFT half of the dataset, not scaffolding around a defect. The rule that makes both
halves work is **wide and shallow**: page *length* is not difficulty (a 12-section page is
no harder to debug than a 3-section one when each section is a self-contained, obviously
named component), page *depth* is. And a richer page must never raise the reward floor —
page integrity is guarded by the binary anti-cheat gate, never by the fractional
correctness score that feeds reward.

Every task passes two gates: a **RED→GREEN admission proof** (`validate` — the initial repo
must fail at least one check and the reference-patched repo must pass all of them), and a
**long-form page audit** (`page_audit` — the page must actually be a page).

## Layout

| path | what |
|---|---|
| `webapp_synth/taxonomy/` | the seed library (12 component rules × 4 industries × 2 archetypes) + parser |
| `.claude/skills/synthesize-webapp-task/` | **the generator** — Claude Code reads this to build a task |
| `scripts/` | the work-list + the headless sweep driver that fans the skill out |
| `tasks_web/` | the task corpus (11 tasks, all long-form) |
| `webapp_synth/` | the solver module — node-enabled Prime sandbox harness, taskset, rubric, env |
| `tests/`, `docs/` | unit tests; design specs and plans |

## Setup

```bash
uv venv
uv pip install -e ../evolve-cc      # the dependency (editable), brings verifiers/tyro/etc.
uv pip install -e . --no-deps       # this package
uv run --with pytest --with pytest-asyncio pytest tests/ -q
```

Requires Node ≥ 20 on PATH, and `../evolve-cc` checked out on branch `webapp-synth-sp1`.
The editable install is **mandatory** — a wheel has no `pyproject.toml` at the package
root, so cross-repo sandbox staging cannot build and every rollout would score 0.

## Generate a task

The generator is **Claude Code itself**, driven by a skill. Ask a session in this repo to
synthesize a task and the skill auto-loads, or fan it out headlessly:

```bash
python3 scripts/webapp_worklist.py --limit 4        # what's next (diverse by construction)
SWEEP_ID=sweep03 LIMIT=4 PARALLEL=4 bash scripts/synth_sweep.sh

REGEN=1 bash scripts/synth_sweep.sh                 # rebuild existing tasks against the current skill
```

One work item → one headless `claude -p` session → one validated task plus its SFT pair.
A 4-item sweep takes **~45 min** wall clock at `PARALLEL=4` and needs no Prime key.
Always re-verify a generated task yourself rather than trusting the session's self-report:

```bash
python3 scripts/page_audit.py --all                 # is it actually a page?
uv run evolving-coding-agent validate <task> --tasks-dir tasks_web
uv run evolving-coding-agent score <task> --tasks-dir tasks_web --candidate-repo tasks_web/<task>/repo
```

## Look at what was generated

```bash
bash scripts/build_preview.sh && bash scripts/serve_preview.sh 8123
```

Builds every task in **both** states — broken and `repo/ + reference.patch` — into one
static site at `http://localhost:8123/`. Worth doing: the first corpus passed every
automated check while being visibly empty, and that was only caught by looking.

## Status

Working and proven locally: the taxonomy, the task format and deterministic checks, the
admission gate, local scoring, the page generator, and the long-form audit. **11 t0 tasks**,
all `validate [OK]`, all clearing the audit, 37 work items unbuilt. Do-nothing reward runs
0.250–0.333 against a ≤ 0.4 mandate.

Not yet: a quality judge for best-of-N SFT selection — `page_audit` gates page *volume*,
which jsdom can measure, but says nothing about whether a page is well *designed*. And the
real blocker: **anything requiring Prime**. Every task is `measured = false`, so difficulty
is a taxonomy *hint* rather than evidence, and the sandbox rollout path has never run
against a live sandbox. Tier ladders, band calibration, and RL all wait on that.
See §9 of `architecture.md`.
