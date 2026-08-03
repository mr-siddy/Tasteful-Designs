#!/usr/bin/env python3
"""Generate the preview site's index page from task.toml + measured rewards.

Reads every tasks_web/*/task.toml, pairs it with the built broken/fixed bundles
under the output dir, and writes index.html — one card per task with its
taxonomy fields, the symptom, and the two reward endpoints.
"""

from __future__ import annotations

import html
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
TASKS = REPO / "tasks_web"

# Locally measured do-nothing reward (broken repo). Fixed is 1.0 for every task
# by construction — validate proves the reference-patched repo passes all checks.
BROKEN_REWARD = {
    "taskflow_repair_t0": 0.727,
    "dental_clinic_form_validation_t0": 0.667,
    "fitness_responsive_grid_t0": 0.600,
    "restaurant_accordion_single_t0": 0.571,
    "restaurant_tabs_active_panel_t0": 0.375,
    "fitness_studio_filter_list_t0": 0.333,
    "restaurant_modal_close_overlay_esc_t0": 0.333,
    "saas_pricing_most_popular_t0": 0.300,
    "dental_clinic_a11y_labels_alt_t0": 0.273,
}

ORIGIN = {
    "taskflow_repair_t0": "hand-authored",
    "dental_clinic_form_validation_t0": "hand-authored",
    "fitness_responsive_grid_t0": "hand-authored",
    "restaurant_accordion_single_t0": "hand-authored",
    "restaurant_tabs_active_panel_t0": "skill, hand-driven",
    "saas_pricing_most_popular_t0": "sweep01",
    "dental_clinic_a11y_labels_alt_t0": "sweep01",
    "restaurant_modal_close_overlay_esc_t0": "sweep01",
    "fitness_studio_filter_list_t0": "sweep01",
}


def read_meta(toml: Path) -> dict[str, str]:
    out: dict[str, str] = {}
    for line in toml.read_text().splitlines():
        key, sep, val = line.partition("=")
        if not sep:
            continue
        key = key.strip()
        if key in ("name", "description", "seed", "industry", "page_archetype", "tier"):
            out[key] = val.strip().strip('"')
    return out


CSS = """
*{box-sizing:border-box}
body{margin:0;font:16px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
     background:#0f1115;color:#e6e8ee}
.wrap{max-width:1100px;margin:0 auto;padding:48px 24px 80px}
h1{font-size:30px;margin:0 0 6px;letter-spacing:-.02em}
.sub{color:#9aa3b2;margin:0 0 8px}
.note{color:#7f8899;font-size:14px;margin:0 0 36px;max-width:74ch}
.grid{display:grid;gap:18px}
.card{background:#171a21;border:1px solid #232833;border-radius:12px;padding:20px 22px}
.card h2{font-size:18px;margin:0 0 4px;letter-spacing:-.01em}
.tags{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0 14px}
.tag{font-size:12px;padding:3px 9px;border-radius:999px;background:#212734;color:#aab3c4;
     font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
.tag.origin{background:#1d2b22;color:#8fd3a8}
.tag.origin.hand{background:#2b2620;color:#d8b48a}
.desc{color:#b8c0cf;font-size:14.5px;margin:0 0 16px}
.row{display:flex;flex-wrap:wrap;gap:10px;align-items:center}
a.btn{display:inline-flex;align-items:center;gap:8px;text-decoration:none;font-size:14px;
      padding:9px 15px;border-radius:8px;border:1px solid #2d3444;color:#e6e8ee;background:#1c212b}
a.btn:hover{background:#232a36;border-color:#3a4255}
a.btn .r{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;color:#8b94a6}
a.btn.fixed{border-color:#2a4536;background:#182219}
a.btn.fixed:hover{background:#1e2a20}
.legend{display:flex;gap:22px;flex-wrap:wrap;font-size:13px;color:#7f8899;margin:0 0 30px}
code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.92em;color:#c6cede}
@media (prefers-color-scheme: light){
  body{background:#f7f8fa;color:#1b1f27}
  .card{background:#fff;border-color:#e3e7ee}
  .sub{color:#5b6577}.note{color:#6b7488}.desc{color:#39414f}
  .tag{background:#eef1f6;color:#4a5567}
  .tag.origin{background:#e6f4ec;color:#256b43}
  .tag.origin.hand{background:#f6efe4;color:#7a5a2e}
  a.btn{background:#f4f6fa;border-color:#dde2ea;color:#1b1f27}
  a.btn:hover{background:#eaeef5}
  a.btn.fixed{background:#eef7f1;border-color:#cfe5d8}
  a.btn .r{color:#6b7488}
}
"""


def main() -> int:
    out = Path(sys.argv[1])
    cards = []
    names = sorted(
        (p.name for p in TASKS.iterdir() if (p / "task.toml").is_file()),
        key=lambda n: BROKEN_REWARD.get(n, 1.0),
    )
    for n in names:
        m = read_meta(TASKS / n / "task.toml")
        has_broken = (out / n / "broken" / "index.html").is_file()
        has_fixed = (out / n / "fixed" / "index.html").is_file()
        origin = ORIGIN.get(n, "—")
        cls = "origin" if origin != "hand-authored" else "origin hand"
        br = BROKEN_REWARD.get(n)
        btns = []
        if has_broken:
            r = f'<span class="r">reward {br:.3f}</span>' if br is not None else ""
            btns.append(f'<a class="btn" href="/{n}/broken/">Broken {r}</a>')
        if has_fixed:
            btns.append(f'<a class="btn fixed" href="/{n}/fixed/"> Fixed <span class="r">reward 1.000</span></a>')
        cards.append(f"""      <div class="card">
        <h2>{html.escape(m.get("name", n))}</h2>
        <div class="tags">
          <span class="tag {cls}">{html.escape(origin)}</span>
          <span class="tag">{html.escape(m.get("industry", "?"))}</span>
          <span class="tag">{html.escape(m.get("page_archetype", "?"))}</span>
          <span class="tag">seed: {html.escape(m.get("seed", "?"))}</span>
        </div>
        <p class="desc">{html.escape(m.get("description", ""))}</p>
        <div class="row">{"".join(btns)}</div>
      </div>""")

    page = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>webapp-synth — generated pages</title>
<style>{CSS}</style></head>
<body><div class="wrap">
  <h1>webapp-synth — generated pages</h1>
  <p class="sub">{len(cards)} tasks, each in both states.</p>
  <p class="note">
    <strong>Broken</strong> is the repo an RL agent starts from; its reward is what a
    do-nothing agent banks. <strong>Fixed</strong> is <code>repo/ + reference.patch</code> —
    the finished page, which is also the SFT target. Sorted by broken reward ascending, so
    the strongest RL signal is first. Tasks tagged <em>sweep01</em> were generated unattended
    by headless Claude Code sessions.
  </p>
  <div class="legend">
    <span>lower broken reward = stronger training signal</span>
    <span>every fixed page scores 1.000 by construction</span>
  </div>
  <div class="grid">
{chr(10).join(cards)}
  </div>
</div></body></html>
"""
    (out / "index.html").write_text(page)
    print(f"index.html written: {len(cards)} task cards")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
