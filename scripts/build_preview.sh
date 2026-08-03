#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# build_preview.sh — build every task in BOTH states into one browsable site.
#
# For each task in tasks_web/ this produces:
#   runs/preview/<task>/broken/   the unsolved repo — what the RL agent starts from
#   runs/preview/<task>/fixed/    the reference solution — the SFT artifact
#
# The fixed state is reconstructed as repo/ + reference.patch, which is exactly
# what `finalize` diffed to produce the patch and what `validate` proves passes
# every check. The patch is applied in place and reverted immediately after the
# build, so the working tree is left clean (verified at the end).
#
# Output is a plain static site — one server, one port, no dev servers to babysit.
#
# Usage:  bash scripts/build_preview.sh
# Serve:  bash scripts/serve_preview.sh
# ─────────────────────────────────────────────────────────────────────────────
set -u

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT" || exit 1

OUT="${ROOT}/runs/preview"
rm -rf "$OUT" && mkdir -p "$OUT"

if ! git diff --quiet -- tasks_web 2>/dev/null; then
  echo "FATAL: tasks_web/ has uncommitted changes; this script applies and reverts"
  echo "       patches in place and needs a clean tree to revert to. Commit or stash first."
  exit 1
fi

build_one() {           # <task> <state> <base>
  local n="$1" state="$2"
  ( cd "tasks_web/$n/repo" \
    && npx vite build --base="/$n/$state/" --outDir "$OUT/$n/$state" --emptyOutDir ) \
    > "$OUT/.build_${n}_${state}.log" 2>&1
}

ok=0; fail=0
for d in tasks_web/*/; do
  n="$(basename "$d")"
  printf '%-46s ' "$n"

  if build_one "$n" broken; then printf 'broken=ok '; else printf 'broken=FAIL '; fail=$((fail+1)); fi

  # fixed = repo + reference.patch, applied in place then reverted
  if git apply --directory="tasks_web/$n/repo" -p1 "tasks_web/$n/reference.patch" 2>/dev/null; then
    if build_one "$n" fixed; then printf 'fixed=ok'; ok=$((ok+1)); else printf 'fixed=FAIL'; fail=$((fail+1)); fi
    git checkout -- "tasks_web/$n/repo"
  else
    printf 'fixed=PATCH-FAILED'; fail=$((fail+1))
  fi
  echo
done

python3 scripts/make_preview_index.py "$OUT" || exit 1

echo
if git diff --quiet -- tasks_web; then
  echo "working tree clean — all patches reverted"
else
  echo "WARNING: tasks_web/ is dirty after the run; inspect with 'git status'"
fi
echo "built: ${ok} task(s) in both states, ${fail} failure(s)"
echo "site:  ${OUT}"
