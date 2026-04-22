#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

PORT="${PORT:-4000}"
HOST="${HOST:-0.0.0.0}"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is required but was not found in PATH."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required but was not found in PATH."
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  npm install
fi

echo "Starting local app on http://${HOST}:${PORT}"

if command -v netlify >/dev/null 2>&1; then
  exec netlify dev --port "${PORT}"
fi

if command -v npx >/dev/null 2>&1; then
  exec npx netlify dev --port "${PORT}"
fi

echo "Netlify CLI was not found. Falling back to the frontend dev server only."
echo "API/function routes will not be available in this fallback mode."
export HOST PORT
exec npm start
