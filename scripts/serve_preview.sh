#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# serve_preview.sh — serve the built preview site on one port.
#
# Run scripts/build_preview.sh first. Every task is a static bundle under its
# own path, so a plain static file server is enough — no dev servers, no HMR,
# nothing to keep in sync.
#
# Usage:  bash scripts/serve_preview.sh [PORT]     (default 8123)
# ─────────────────────────────────────────────────────────────────────────────
set -u

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="${ROOT}/runs/preview"
PORT="${1:-${PORT:-8123}}"

[ -f "${OUT}/index.html" ] || { echo "FATAL: no site at ${OUT} — run scripts/build_preview.sh first"; exit 1; }

if lsof -nP -iTCP:"${PORT}" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "FATAL: port ${PORT} is already in use. Pass a different one: bash scripts/serve_preview.sh 8124"
  exit 1
fi

echo "webapp-synth preview  →  http://localhost:${PORT}/"
echo "serving ${OUT}   (ctrl-C to stop)"
exec python3 -m http.server "${PORT}" --directory "${OUT}" --bind 127.0.0.1
