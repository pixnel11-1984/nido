#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

preview_port="${PORT:-3000}"
node_root="${NIDO_NODE_ROOT:-${HOME}/.local/share/nido-preview-node22}"

node_major=0
if command -v node >/dev/null 2>&1 && command -v npm >/dev/null 2>&1; then
  node_major="$(node -p 'Number(process.versions.node.split(".")[0])')"
fi

if (( node_major < 22 )); then
  if [[ ! -x "$node_root/bin/node" || ! -x "$node_root/bin/npm" ]]; then
    if [[ "$(uname -s)" != Linux ]]; then
      echo "This installer supports Linux Codespaces only." >&2
      exit 1
    fi

    case "$(uname -m)" in
      x86_64) node_arch=x64 ;;
      aarch64) node_arch=arm64 ;;
      *) echo "Unsupported Codespaces architecture: $(uname -m)" >&2; exit 1 ;;
    esac

    node_url="https://nodejs.org/dist/latest-v22.x"
    temporary_dir="$(mktemp -d)"
    trap 'rm -rf "$temporary_dir"' EXIT
    curl --fail --silent --show-error --location --retry 3 \
      "$node_url/SHASUMS256.txt" -o "$temporary_dir/SHASUMS256.txt"
    node_archive="$(awk -v arch="$node_arch" \
      '$2 ~ ("^node-v22[.][0-9]+[.][0-9]+-linux-" arch "[.]tar[.]xz$") { print $2; exit }' \
      "$temporary_dir/SHASUMS256.txt")"
    if [[ -z "$node_archive" ]]; then
      echo "Could not find a Node.js 22 archive for $node_arch." >&2
      exit 1
    fi

    curl --fail --silent --show-error --location --retry 3 \
      "$node_url/$node_archive" -o "$temporary_dir/$node_archive"
    awk -v archive="$node_archive" '$2 == archive { print $1 "  " archive }' \
      "$temporary_dir/SHASUMS256.txt" > "$temporary_dir/checksum.txt"
    (cd "$temporary_dir" && sha256sum --check checksum.txt)

    mkdir -p "$temporary_dir/unpacked" "$(dirname "$node_root")"
    tar -xJf "$temporary_dir/$node_archive" -C "$temporary_dir/unpacked" --strip-components=1
    if [[ -e "$node_root" ]]; then
      echo "Incomplete Node.js installation at $node_root; please remove it and retry." >&2
      exit 1
    fi
    mv "$temporary_dir/unpacked" "$node_root"
  fi
  export PATH="$node_root/bin:$PATH"
fi

npm ci
exec npm run dev -- --port "$preview_port"
