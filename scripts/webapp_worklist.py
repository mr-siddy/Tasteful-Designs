#!/usr/bin/env python3
"""Emit the webapp-synth synthesis work-list as TSV, one line per work item.

A work item is a (seed x industry x page_archetype) triple from the taxonomy —
the unit of work one headless `claude -p` session turns into one t0 task.

Items already present in tasks_web/ are dropped, so the list is always "what is
left to build". The remainder is ordered ROUND-ROBIN BY INDUSTRY, so taking the
first N items off the top gives a domain-diverse sweep by construction rather
than N variations on whichever industry happens to sort first.

Columns (tab-separated, no header):
    name  seed  industry  archetype  difficulty  rule  symptom  assertion_hint

Usage:
    python3 scripts/webapp_worklist.py                       # everything unbuilt
    python3 scripts/webapp_worklist.py --limit 4             # diverse top 4
    python3 scripts/webapp_worklist.py --seed filter_list    # one seed's items
    python3 scripts/webapp_worklist.py --include-built       # don't skip existing
"""

from __future__ import annotations

import argparse
import sys
from collections import defaultdict
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO))

from webapp_synth.taxonomy import seeds as T  # noqa: E402

LIBRARY = REPO / "webapp_synth" / "taxonomy" / "webapp_library.md"
TASKS_DIR = REPO / "tasks_web"


def task_name(seed_id: str, industry: str) -> str:
    """`<industry>_<seed_id>_t0` — the convention restaurant_tabs_active_panel_t0 set."""
    return f"{industry}_{seed_id}_t0"


def built_pairs() -> set[tuple[str, str]]:
    """(seed, industry) pairs already represented in tasks_web/, read from task.toml."""
    pairs: set[tuple[str, str]] = set()
    for toml in sorted(TASKS_DIR.glob("*/task.toml")):
        fields: dict[str, str] = {}
        for line in toml.read_text().splitlines():
            key, _, val = line.partition("=")
            key = key.strip()
            if key in ("seed", "industry"):
                fields[key] = val.strip().strip('"')
        if "seed" in fields and "industry" in fields:
            pairs.add((fields["seed"], fields["industry"]))
    return pairs


def diversify(items: list[T.WorkItem]) -> list[T.WorkItem]:
    """Order so consecutive picks differ in BOTH industry and seed.

    Bucket by industry (each bucket keeps the taxonomy's own seed order, easiest
    first), rotate bucket j left by j so the buckets fall out of phase, then
    round-robin across them. The result walks a diagonal of the seed x industry
    grid: taking the first N off the top gives N distinct industries AND N
    distinct seeds for as long as the grid allows, instead of one seed smeared
    across every industry.
    """
    buckets: dict[str, list[T.WorkItem]] = defaultdict(list)
    for it in items:
        buckets[it.industry].append(it)
    order = list(buckets)  # taxonomy industry order, first-seen
    for j, k in enumerate(order):
        b = buckets[k]
        if b:
            off = j % len(b)
            buckets[k] = b[off:] + b[:off]
    out: list[T.WorkItem] = []
    while any(buckets[k] for k in order):
        for k in order:
            if buckets[k]:
                out.append(buckets[k].pop(0))
    return out


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0, help="emit only the first N (0 = all)")
    ap.add_argument("--seed", default="", help="only this seed_id")
    ap.add_argument("--industry", default="", help="only this industry")
    ap.add_argument("--archetype", default="", help="only this page_archetype")
    ap.add_argument("--include-built", action="store_true", help="do not skip existing tasks")
    args = ap.parse_args()

    seeds = T.parse_seeds(LIBRARY)
    items = T.work_items(seeds, T.industries(LIBRARY), T.archetypes(LIBRARY))

    if args.seed:
        items = [i for i in items if i.seed.seed_id == args.seed]
    if args.industry:
        items = [i for i in items if i.industry == args.industry]
    if args.archetype:
        items = [i for i in items if i.archetype == args.archetype]

    # The task name is (industry, seed) only, so the two archetypes of a pair would
    # collide. Keep the first — taxonomy order puts the more natural one first —
    # and let a later sweep revisit the pair under the other archetype if wanted.
    seen_names: set[str] = set()
    deduped: list[T.WorkItem] = []
    for i in items:
        n = task_name(i.seed.seed_id, i.industry)
        if n not in seen_names:
            seen_names.add(n)
            deduped.append(i)
    items = deduped

    if not args.include_built:
        done = built_pairs()
        # Skip a (seed, industry) pair already built in ANY archetype: the seed is
        # spent for that industry and rebuilding it adds no taxonomy coverage.
        items = [i for i in items if (i.seed.seed_id, i.industry) not in done]
        items = [i for i in items if not (TASKS_DIR / task_name(i.seed.seed_id, i.industry)).exists()]

    items = diversify(items)
    if args.limit > 0:
        items = items[: args.limit]

    for i in items:
        s = i.seed
        print(
            "\t".join(
                (
                    task_name(s.seed_id, i.industry),
                    s.seed_id,
                    i.industry,
                    i.archetype,
                    s.difficulty,
                    s.rule,
                    s.symptom,
                    s.assertion_hint,
                )
            )
        )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
