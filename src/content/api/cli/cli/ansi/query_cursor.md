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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/ansi.hy#L82"
order: 4
---

Ask the terminal for the cursor position; it answers `ESC [ row ; col R` on stdin (decoded by [`cli::keys`](/packages/cli/reference/cli/keys) as `Event::CursorPos`).

## Returns

`string`

## See also

- [`cli::keys`](/packages/cli/reference/cli/keys)
- [`move_to`](/packages/cli/reference/cli/ansi/move_to): Move the cursor to 1-based `row`, `col`.
- [`column`](/packages/cli/reference/cli/ansi/column): Move to 1-based `col` in the current row.
- [`next_line`](/packages/cli/reference/cli/ansi/next_line): Start of the line `n` lines down / up.
- [`clear_screen`](/packages/cli/reference/cli/ansi/clear_screen): Clear the whole screen (cursor does not move).
- [`clear_below`](/packages/cli/reference/cli/ansi/clear_below): Clear from the cursor to the end of the screen.
- [`clear_line`](/packages/cli/reference/cli/ansi/clear_line): Clear the whole current line.
- [`clear_to_eol`](/packages/cli/reference/cli/ansi/clear_to_eol): Clear from the cursor to the end of the line.
