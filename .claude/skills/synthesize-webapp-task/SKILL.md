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
3. **Generate** a LONG-FORM finished page into a scratch fixed repo OUTSIDE
   `tasks_web/` — 8+ sections, real copy, real SVG. This is the SFT product.
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

### This page is the product. Build it long-form.

**The page is not scaffolding around a defect — it is half the dataset.** It is
the SFT target, and it is the only artifact anyone will ever look at. A thin page
is a failed deliverable even if the RL task around it validates perfectly.

> **Wide and shallow — the rule that makes both halves work.** Page *length* is
> not difficulty: a twelve-section page is no harder to debug than a three-section
> one when every section is a self-contained component with an obvious name. Page
> *depth* is difficulty: nested indirection, prop drilling, state shared across
> components. So go **wide** — many sibling components, one per section, a flat
> tree, names that map straight onto the symptom — and keep the tree **shallow**.
> The defect still lives in exactly one component. You get a real landing page and
> a fair t0 at the same time.

**Ship at least all of these**, adapted to the industry (a restaurant gets a menu
and a room, a SaaS gets pricing and integrations — the *shape* is what carries over):

1. **Header / nav** — brand mark, 4+ destinations, a primary action
2. **Hero** — headline, a real subhead of 20+ words, two CTAs, a supporting visual
3. **Social proof** — logos, stats, ratings, or credentials
4. **Primary offering** — 4–6 items with names, prices/specs, and a sentence each
5. **The seed's component section** — the interaction the task is anchored on
6. **Deep-dive** — 2–3 alternating copy/visual blocks that explain something properly
7. **Process or story** — numbered steps, the room, the team, the method
8. **Testimonials** — 2–3 quotes with named, plausible attribution
9. **FAQ** — 4+ real questions with real answers
10. **Closing CTA** — a final conversion block
11. **Footer** — multi-column: nav, contact, hours/address, legal

**Volume floors — these are gated in Stage 6, not suggestions:**

| metric | floor |
|---|---|
| sections (`<section>`/`<header>`/`<footer>`) | **≥ 8** |
| rendered DOM elements | **≥ 350** |
| visible words of copy | **≥ 650** |
| files in `src/components/` | **≥ 6** |
| `h1`–`h3` headings | **≥ 8** |
| links + buttons + form controls | **≥ 6** |
| placeholder text | **0** |

**Copy must be real.** No `Lorem ipsum`, no "Feature One / Feature Two", no
"Your Company Here", no `example.com`, no "John Doe". Invent a specific business
with a specific personality and write its actual marketing copy — a named
neighbourhood, real-sounding prices, dishes or plans someone chose, testimonials
from named people with roles. Specificity is the whole difference between an SFT
target and a wireframe.

**Give it a visual identity.** Default Tailwind grays on white read as unstyled.
Commit to a palette (2 brand colors + a warm or cool neutral ramp), a type scale
with real weight contrast, generous section padding, and a consistent radius and
shadow language. Vary section backgrounds so the page has rhythm as you scroll.

**Ship real visuals — this is the single biggest gap.** No network is available,
so:
- **Inline `<svg>`** for logos, icons, spot illustrations, dividers, background
  blobs. Every page needs an icon set and at least one substantial illustration.
- **CSS/Tailwind gradients, patterns and shapes** for hero and section backgrounds.
- **`<img>` only with a `data:` URI or a repo-local file** — never an `http(s)` URL.
  (The `a11y_labels_alt` seed needs real `<img>` elements to carry `alt`.)

**Everything else still holds:**

- **Semantic HTML + ARIA**, because that is what the checks assert against:
  `role="tablist"/"tab"/"tabpanel"`, `contentinfo` for the footer, `<h1>` for the
  name, real `aria-selected` / `aria-expanded` / `alt` / labels.
- **Stable `data-testid` hooks** on every element a check targets. Prefer roles
  where a role exists; use `data-testid` for things with no role.
- **No network, no timers, no randomness** in page code — `setup.ts` stubs
  `fetch` and pins `Date.now`/`Math.random`, and any unmocked source of variance
  makes the reward flaky.

**A richer page must NOT raise the reward floor.** Keep structure assertions in
`correctness.test.tsx` at ~3 no matter how long the page gets. Page integrity is
protected by `anticheat` — a **binary** gate — not by `correctness`, which is
**fractional** and feeds the reward directly. That split is what lets the page
grow without handing a do-nothing agent more free credit.

Record the one-paragraph **brief** you generated the page from — and make the
brief as specific as the page, because (brief → page) is the SFT datapoint and a
vague brief teaches the model nothing. The page is also SP4's reference. Keep both.

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

**Also guard the page itself.** A long-form page gives an agent much more to
delete, and this binary gate is where that is caught — never in `correctness`,
which would raise the reward floor. Add a page-integrity test:

```tsx
it('keeps the page intact', () => {
  render(<App />)
  const doc = document
  expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(8)
  expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(8)
  expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(650)
})
```

Set the numbers from what your page actually measures in Stage 6, a little below
the real values so honest refactors survive — the point is to stop a page being
gutted, not to freeze it.

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

### The page audit — GATE 2, as binding as the reward floor

```bash
python3 scripts/page_audit.py "$FIXED"
```

It renders the page and measures it against the Stage 2 floors. **`THIN` is a
failure**, exactly like a failing `validate`. Every task in the first corpus fails
this gate — 16–95 DOM nodes and 20–223 words against floors of 350 and 650 — which
is why it exists.

If it reports `THIN`, **write more page**: more sections, more real copy, more
components, more SVG. Do not lower the floors, and do not pad with empty wrapper
divs — `nodes` counts elements, but `words`, `sections` and `headings` will not
move unless the page genuinely grows.

Run it against `$FIXED`. The broken repo is derived from the finished page and
carries the same content, so auditing one audits both.

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

All five must hold:

```bash
python3 scripts/page_audit.py "$FIXED"                                        # OK, not THIN
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

1. Does `page_audit.py` say OK? A `THIN` page is a failed deliverable even if
   everything else is perfect — the page is half the dataset, not scaffolding.
2. Could the fix be written from `instruction.md` alone without reading the
   code? → it telegraphs; make it a pure symptom.
3. Is there any `BROKEN`/`TODO`/`FIXME` comment in `repo/` pointing at the
   defect? → delete it.
4. Does `anticheat` reject deleting the component outright?
5. Do the checks accept an *alternate* correct implementation, or do they assert
   one specific shape?
6. Is the broken-state reward ≤ 0.4?
7. Is `anticheat.py` guarding THIS task's filenames, not a copied task's?

**Prove items 4 and 5 by SCORING, not by reading.** They are claims about what
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
| audit page richness | `python3 scripts/page_audit.py <repo>` · `--all` for the corpus |
| generate patch | `uv run evolving-coding-agent finalize <name> --tasks-dir tasks_web --fixed-repo <dir>` |
| admission gate | `uv run evolving-coding-agent validate <name> --tasks-dir tasks_web` |
| score a candidate | `uv run evolving-coding-agent score <name> --tasks-dir tasks_web --candidate-repo <dir>` |
| unit tests | `uv run --with pytest --with pytest-asyncio pytest tests/ -q` |
