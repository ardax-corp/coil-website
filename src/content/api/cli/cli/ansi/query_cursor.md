---
slug: "cli/cli/ansi/query_cursor"
package: "cli"
title: "query_cursor"
description: "Ask the terminal for the cursor position; it answers ESC [ row ; col R on stdin (decoded by cli::keys as Event::CursorPos)."
module: "cli::ansi"
kind: "fn"
name: "query_cursor"
signature: "fn query_cursor() -> string"
import: "use cli::ansi::{query_cursor};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/ansi.coil#L106"
order: 18
---

Ask the terminal for the cursor position; it answers `ESC [ row ; col R` on stdin (decoded by [`cli::keys`](/packages/cli/reference/cli/keys) as `Event::CursorPos`).

## Returns

`string`

## See also

- [`cli::keys`](/packages/cli/reference/cli/keys)
- [`move_to`](/packages/cli/reference/cli/ansi/move_to): Move the cursor to 1-based `row`, `col`.
- [`column`](/packages/cli/reference/cli/ansi/column): Move to 1-based `col` in the current row.
- [`up`](/packages/cli/reference/cli/ansi/up): Move the cursor up `n` rows; empty when `n <= 0`.
- [`down`](/packages/cli/reference/cli/ansi/down): Move the cursor down `n` rows; empty when `n <= 0`.
- [`right`](/packages/cli/reference/cli/ansi/right): Move the cursor right `n` columns; empty when `n <= 0`.
- [`left`](/packages/cli/reference/cli/ansi/left): Move the cursor left `n` columns; empty when `n <= 0`.
- [`next_line`](/packages/cli/reference/cli/ansi/next_line): Move to the start of the line `n` lines down.
