#!/usr/bin/env python3
"""Measure how substantial a generated landing page actually is.

The RL half of a task is gated by `validate` (RED→GREEN) and the <= 0.4 reward
floor. The SFT half — is this a page a designer would ship? — had no gate at
all, which is why the first corpus came out thin. This is that gate.

It renders the page's source with vitest/jsdom (the same harness the checks use,
so no new dependency) and reports structure, volume and placeholder metrics
against floors.

Usage:
    python3 scripts/page_audit.py tasks_web/<task>/repo          # audit a repo
    python3 scripts/page_audit.py --all                          # whole corpus
    python3 scripts/page_audit.py <repo> --json                  # machine-readable
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
import tempfile
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
TASKS = REPO / "tasks_web"

# Floors a finished page must clear to count as long-form. Derived from what a
# real marketing landing page carries, not from what the first corpus happened
# to produce (that corpus fails every one of these).
FLOORS = {
    "sections": 8,        # distinct <section>/<header>/<footer> landmarks
    "nodes": 350,         # rendered DOM elements
    "words": 650,         # visible copy, excluding markup
    "components": 6,      # files in src/components/
    "headings": 8,        # h1-h3 — a long page has a real outline
    "interactive": 6,     # links + buttons + form controls
}

PLACEHOLDER_PAT = re.compile(
    r"lorem ipsum|dolor sit amet|placeholder|your (?:company|brand|logo|text) here"
    r"|\bfeature (?:one|two|three|[123])\b|\bitem [123]\b|\btbd\b|\bxxx+\b"
    r"|example\.com|john doe|jane doe|company name",
    re.I,
)

# The probe renders the app and dumps metrics as JSON on stdout.
PROBE = """
import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import App from '@app/App'

describe('audit', () => {
  it('measures', () => {
    const { container } = render(<App />)
    const doc = container.ownerDocument
    const sections = doc.querySelectorAll(
      'section, header, footer, main > article, [data-section]').length
    const nodes = container.querySelectorAll('*').length
    const headings = doc.querySelectorAll('h1, h2, h3').length
    const interactive = doc.querySelectorAll(
      'a, button, input, select, textarea, [role="button"], [role="tab"]').length
    const imgs = doc.querySelectorAll('img, svg').length
    const text = (doc.body.textContent || '').replace(/\\s+/g, ' ').trim()
    const words = text ? text.split(' ').length : 0
    console.log('AUDIT_JSON:' + JSON.stringify(
      { sections, nodes, headings, interactive, imgs, words, text: text.slice(0, 20000) }))
  })
})
"""


def audit(repo: Path) -> dict:
    repo = repo.resolve()
    task_dir = repo.parent
    web = task_dir / "checks" / "web"
    if not web.is_dir():
        return {"error": f"no checks/web beside {repo}"}

    staged = repo / ".eca_checks"
    subprocess.run(["rm", "-rf", str(staged)], check=False)
    subprocess.run(["cp", "-R", str(web), str(staged)], check=True)
    (staged / "audit.test.tsx").write_text(PROBE)
    try:
        proc = subprocess.run(
            ["npx", "vitest", "run", ".eca_checks/audit.test.tsx",
             "--config", ".eca_checks/vitest.config.ts"],
            cwd=repo, capture_output=True, text=True, timeout=300,
        )
        blob = None
        for line in (proc.stdout + proc.stderr).splitlines():
            if "AUDIT_JSON:" in line:
                blob = line.split("AUDIT_JSON:", 1)[1].strip()
        if not blob:
            return {"error": "probe produced no output", "tail": proc.stdout[-500:]}
        m = json.loads(blob)
    finally:
        subprocess.run(["rm", "-rf", str(staged)], check=False)

    text = m.pop("text", "")
    m["components"] = len(list((repo / "src" / "components").glob("*.tsx"))) \
        if (repo / "src" / "components").is_dir() else 0
    m["placeholders"] = sorted({s.lower() for s in PLACEHOLDER_PAT.findall(text)})
    m["fails"] = [k for k, floor in FLOORS.items() if m.get(k, 0) < floor]
    if m["placeholders"]:
        m["fails"].append("placeholders")
    m["passed"] = not m["fails"]
    return m


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("repo", nargs="?", help="path to a task repo/ dir")
    ap.add_argument("--all", action="store_true", help="audit every task in tasks_web/")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    targets = []
    if args.all:
        targets = [(p.name, p / "repo") for p in sorted(TASKS.iterdir()) if (p / "repo").is_dir()]
    elif args.repo:
        r = Path(args.repo)
        targets = [(r.parent.name, r)]
    else:
        ap.error("pass a repo path or --all")

    results = {}
    hdr = f"{'task':<44}{'sect':>5}{'nodes':>7}{'words':>7}{'comp':>6}{'head':>6}{'intr':>6}{'img':>5}  verdict"
    if not args.json:
        print(hdr)
        print("-" * len(hdr))
    worst = 0
    for name, repo in targets:
        m = audit(repo)
        results[name] = m
        if "error" in m:
            if not args.json:
                print(f"{name:<44}  ERROR: {m['error']}")
            worst = 1
            continue
        if not m["passed"]:
            worst = 1
        if not args.json:
            verdict = "OK" if m["passed"] else "THIN: " + ",".join(m["fails"])
            print(f"{name:<44}{m['sections']:>5}{m['nodes']:>7}{m['words']:>7}"
                  f"{m['components']:>6}{m['headings']:>6}{m['interactive']:>6}{m['imgs']:>5}  {verdict}")

    if args.json:
        print(json.dumps(results, indent=2))
    else:
        print()
        print("floors: " + "  ".join(f"{k}>={v}" for k, v in FLOORS.items()) + "  placeholders=0")
    return worst


if __name__ == "__main__":
    raise SystemExit(main())
