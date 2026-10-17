#!/usr/bin/env bash
set -euo pipefail

preview_port="${PORT:-3000}"
preview_url="http://127.0.0.1:${preview_port}/"
preview_log="/tmp/nido-preview-${preview_port}.log"

if curl --fail --silent --output /dev/null "$preview_url"; then
  exit 0
fi

nohup npm run dev -- --port "$preview_port" > "$preview_log" 2>&1 < /dev/null &
preview_pid=$!

for _ in {1..30}; do
  if curl --fail --silent --output /dev/null "$preview_url"; then
    exit 0
  fi
  if ! kill -0 "$preview_pid" 2>/dev/null; then
    cat "$preview_log" >&2
    exit 1
  fi
  sleep 1
done

cat "$preview_log" >&2
exit 1
