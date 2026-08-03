#!/usr/bin/env bash
# Regenerate the preview index's measured data: broken-state reward per task and
# the long-form audit metrics. Both are slow (a vitest run per task), so they are
# refreshed on demand rather than on every preview build.
#
# Usage:  bash scripts/refresh_preview_data.sh && bash scripts/build_preview.sh
set -u
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"; cd "$ROOT" || exit 1
OUT="${ROOT}/runs/preview"; mkdir -p "$OUT"

echo "measuring broken-state rewards ..."
{
  printf '{\n'; first=1
  for d in tasks_web/*/; do
    n="$(basename "$d")"
    r=$(uv run evolving-coding-agent score "$n" --tasks-dir tasks_web \
          --candidate-repo "tasks_web/$n/repo" 2>/dev/null | tail -1 \
        | python3 -c 'import json,sys; print(json.load(sys.stdin)["reward"])' 2>/dev/null)
    [ -z "$r" ] && continue
    [ $first = 1 ] || printf ',\n'; first=0
    printf '  "%s": %s' "$n" "$r"
    echo "  $n -> $r" >&2
  done
  printf '\n}\n'
} > "$OUT/rewards.json"

echo "measuring page audit ..."
python3 scripts/page_audit.py --all --json > "$OUT/audit.json"
echo "wrote $OUT/rewards.json and $OUT/audit.json"
