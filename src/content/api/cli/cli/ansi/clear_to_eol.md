---
slug: "cli/cli/ansi/clear_to_eol"
package: "cli"
title: "clear_to_eol"
description: "Clear from the cursor to the end of the line."
module: "cli::ansi"
kind: "fn"
name: "clear_to_eol"
signature: "fn clear_to_eol() -> string"
import: "use cli::ansi::{clear_to_eol};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/ansi.hy#L122"
order: 8
---

Clear from the cursor to the end of the line.

## Returns

`string`

## See also

- [`move_to`](/packages/cli/reference/cli/ansi/move_to): Move the cursor to 1-based `row`, `col`.
- [`column`](/packages/cli/reference/cli/ansi/column): Move to 1-based `col` in the current row.
- [`next_line`](/packages/cli/reference/cli/ansi/next_line): Start of the line `n` lines down / up.
- [`query_cursor`](/packages/cli/reference/cli/ansi/query_cursor): Ask the terminal for the cursor position; it answers `ESC [ row ; col R` on stdin (decoded by `cli::keys` as `Event::CursorPos`).
- [`clear_screen`](/packages/cli/reference/cli/ansi/clear_screen): Clear the whole screen (cursor does not move).
- [`clear_below`](/packages/cli/reference/cli/ansi/clear_below): Clear from the cursor to the end of the screen.
- [`clear_line`](/packages/cli/reference/cli/ansi/clear_line): Clear the whole current line.
- [`scroll_up`](/packages/cli/reference/cli/ansi/scroll_up): Scroll the region up / down by `n` lines.
