# SFT artifacts — (brief → finished page) pairs

Each pair here is one generation session's output: a one-paragraph **industry brief**
and the **finished long-form landing page** written from it. This is the supervised
half of the webapp-synth dataset. The reinforcement half — the same page with a defect
planted in it, plus deterministic checks — lives in `tasks_web/`.

These are exported from the gitignored `runs/synth/*/fixed/` directories, where each
page is stored alongside a ~110 MB `node_modules`. Only the source is kept here.
Regenerate with `python3 scripts/export_sft.py`.

## Layout

    pairs/<task>/           the current corpus — every page clears the long-form audit
      brief.md                the SFT input
      index.html, src/, public/   the SFT target
      metrics.json            measured page metrics + provenance
    archive/thin-v1/<task>/ superseded pages, NOT training data (see below)
    template/               the build scaffold, identical for every page
    manifest.json           every pair in one file

## Running a page

The pages share one Vite + React 18 + TypeScript + Tailwind scaffold, kept once in
`template/` rather than duplicated 11 times:

    cp -R sft/template /tmp/page && cp -R sft/pairs/<task>/. /tmp/page/
    cd /tmp/page && npm ci && npm run dev

Or browse every page, in both broken and fixed states, without any of that:

    bash scripts/build_preview.sh && bash scripts/serve_preview.sh 8123

## Why `archive/thin-v1` exists

The first corpus passed every automated gate — 9/9 `validate [OK]` — and was still a
failed dataset: those pages average 16–95 DOM nodes and 20–223 words, and eight of nine
contained no imagery at all. The cause was a line in the generator skill telling sessions
to "keep it small", which was sound reasoning about RL difficulty applied to an artifact
that is also the SFT target.

They are kept because the before/after contrast on the *same seed* is the clearest
statement of the quality bar this project is trying to hold:

| | `archive/thin-v1` | `pairs/` |
|---|---|---|
| sections | 2–6 | 12–15 |
| DOM nodes | 16–95 | 650–841 |
| words | 20–223 | 1,834–2,936 |
| components | 1–3 | 12–15 |
| svg/img | 0 in 8 of 9 | 29–77 |

**Do not train on `archive/`.** It is here as a negative example and a record.
