#!/usr/bin/env bash
# Exit 0 when the staged sync output changes more than the pinned `source:`
# commit SHAs. Every sync re-pins all pages to the upstream HEAD, so a diff of
# only `source:` lines is noise and should not open a PR.
set -eu
git diff --cached --quiet && exit 1
# Count instead of `grep -q`, which would quit early and SIGPIPE the diff.
real=$(git diff --cached -U0 --no-color \
  | grep -E '^[-+]' \
  | grep -vE '^(\+\+\+|---) ' \
  | grep -cvE '^[-+]source: ' || true)
[ "$real" -gt 0 ]
