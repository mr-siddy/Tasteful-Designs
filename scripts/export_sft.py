#!/usr/bin/env python3
"""Export the SFT artifacts out of the gitignored run dirs into a tracked `sft/` tree.

Every generation session produces a (brief -> finished page) pair. Those land in
`runs/synth/<sweep>/fixed/`, which is gitignored because each page is copied with
a ~110 MB `node_modules` — so the actual dataset, ~90 KB of source per page, was
never committed and would be lost with the run dirs.

This lifts out just the payload:

    sft/
      README.md            what this is and how to run a page
      manifest.json        every pair, with provenance and measured metrics
      template/            the Vite+React+TS+Tailwind scaffold, ONCE (identical
                           for every page; a page drops straight into it)
      pairs/<task>/        the CURRENT long-form corpus
        brief.md             the SFT input
        metrics.json         measured page metrics
        index.html, src/, public/   the SFT target
      archive/thin-v1/<task>/     superseded pre-correction pages, kept for the
                                  before/after contrast — NOT training data

Usage:
    python3 scripts/export_sft.py            # rebuild sft/ from runs/
    python3 scripts/export_sft.py --check    # report what would change, write nothing
"""

from __future__ import annotations

import argparse
import json
import shutil
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
RUNS = REPO / "runs" / "synth"
OUT = REPO / "sft"

# Which sweep a page came from decides whether it is current data or archive.
# sweep01 predates the long-form correction (see architecture.md §9).
SUPERSEDED_SWEEPS = {"sweep01"}
ARCHIVE_LABEL = "thin-v1"

# Copied verbatim into the page dir; everything else is shared via template/.
PAGE_PARTS = ("index.html", "src", "public")
# The identical-for-every-task build scaffold, lifted once.
TEMPLATE_PARTS = (
    "package.json", "package-lock.json", "vite.config.ts",
    "tailwind.config.js", "postcss.config.js", "tsconfig.json",
)
SKIP_DIRS = {"node_modules", "dist", ".eca_checks", ".vite"}


def discover() -> list[dict]:
    """Every (brief, page) pair across all run dirs, newest sweep winning a tie."""
    found: list[dict] = []
    if not RUNS.is_dir():
        return found
    for sweep_dir in sorted(RUNS.iterdir()):
        fixed = sweep_dir / "fixed"
        if not fixed.is_dir():
            continue
        for page in sorted(fixed.iterdir()):
            # `checks` is a stray dir some sessions leave in the fixed root.
            if not page.is_dir() or page.name == "checks":
                continue
            if not (page / "src").is_dir():
                continue
            brief = fixed / f"{page.name}.brief.md"
            found.append({
                "task": page.name,
                "sweep": sweep_dir.name,
                "page_dir": page,
                "brief": brief if brief.is_file() else None,
                "superseded": sweep_dir.name in SUPERSEDED_SWEEPS,
            })
    return found


def copy_tree(src: Path, dst: Path) -> int:
    """Copy a dir, skipping build artifacts. Returns bytes written."""
    total = 0
    for p in sorted(src.rglob("*")):
        if any(part in SKIP_DIRS for part in p.relative_to(src).parts):
            continue
        rel = p.relative_to(src)
        target = dst / rel
        if p.is_dir():
            target.mkdir(parents=True, exist_ok=True)
        elif p.is_file():
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(p, target)
            total += p.stat().st_size
    return total


def export_one(item: dict, audits: dict, rewards: dict) -> dict:
    base = OUT / ("archive" / Path(ARCHIVE_LABEL) if item["superseded"] else Path("pairs"))
    dest = base / item["task"]
    if dest.exists():
        shutil.rmtree(dest)
    dest.mkdir(parents=True)

    size = 0
    for part in PAGE_PARTS:
        src = item["page_dir"] / part
        if src.is_dir():
            size += copy_tree(src, dest / part)
        elif src.is_file():
            shutil.copy2(src, dest / part)
            size += src.stat().st_size

    if item["brief"]:
        shutil.copy2(item["brief"], dest / "brief.md")

    components = sorted(p.name for p in (dest / "src" / "components").glob("*.tsx")) \
        if (dest / "src" / "components").is_dir() else []
    metrics = {k: v for k, v in (audits.get(item["task"]) or {}).items()
               if k in ("sections", "nodes", "words", "headings", "interactive", "imgs",
                        "components", "passed")}
    rec = {
        "task": item["task"],
        "sweep": item["sweep"],
        "superseded": item["superseded"],
        "has_brief": item["brief"] is not None,
        "component_files": components,
        "source_bytes": size,
        "metrics": metrics or None,
        "broken_reward": rewards.get(item["task"]),
    }
    # Metrics belong to the CURRENT corpus; an archived page's numbers are not
    # measurable from audit.json (that file describes tasks_web/, not this copy).
    if item["superseded"]:
        rec["metrics"] = None
        rec["broken_reward"] = None
    (dest / "metrics.json").write_text(json.dumps(rec, indent=2) + "\n")
    return rec


README = """# SFT artifacts — (brief → finished page) pairs

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
"""


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true", help="report only, write nothing")
    args = ap.parse_args()

    items = discover()
    if not items:
        print("no artifacts found under runs/synth/*/fixed/", file=sys.stderr)
        return 1

    def load(p: Path) -> dict:
        try:
            return json.loads(p.read_text())
        except Exception:
            return {}

    audits = load(REPO / "runs" / "preview" / "audit.json")
    rewards = load(REPO / "runs" / "preview" / "rewards.json")

    cur = [i for i in items if not i["superseded"]]
    old = [i for i in items if i["superseded"]]
    print(f"discovered {len(items)} pair(s): {len(cur)} current, {len(old)} superseded")
    if args.check:
        for i in items:
            tag = "archive" if i["superseded"] else "pairs  "
            print(f"  {tag} {i['task']:<44} from {i['sweep']}"
                  f"{'' if i['brief'] else '   [NO BRIEF]'}")
        return 0

    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)

    # The shared scaffold, taken from any current page (they are byte-identical).
    tmpl = OUT / "template"
    tmpl.mkdir()
    donor = cur[0]["page_dir"] if cur else items[0]["page_dir"]
    for part in TEMPLATE_PARTS:
        if (donor / part).is_file():
            shutil.copy2(donor / part, tmpl / part)

    records = [export_one(i, audits, rewards) for i in items]
    manifest = {
        "generator": "Claude Code via .claude/skills/synthesize-webapp-task",
        "pairs": len([r for r in records if not r["superseded"]]),
        "archived": len([r for r in records if r["superseded"]]),
        "template": sorted(p.name for p in tmpl.iterdir()),
        "artifacts": records,
    }
    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
    (OUT / "README.md").write_text(README)

    total = sum(r["source_bytes"] for r in records)
    missing = [r["task"] for r in records if not r["has_brief"]]
    print(f"wrote {OUT.relative_to(REPO)}/ — {len(records)} pair(s), {total/1024:.0f} KB of source")
    if missing:
        print(f"WARNING: no brief for: {', '.join(missing)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
