---
slug: "cli/cli/ansi/next_line"
package: "cli"
title: "next_line"
description: "Start of the line n lines down / up."
module: "cli::ansi"
kind: "fn"
name: "next_line"
signature: "fn next_line(int n) -> string"
import: "use cli::ansi::{next_line};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/ansi.hy#L52"
order: 3
---

Start of the line `n` lines down / up.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`string`

## See also

- [`move_to`](/packages/cli/reference/cli/ansi/move_to): Move the cursor to 1-based `row`, `col`.
- [`column`](/packages/cli/reference/cli/ansi/column): Move to 1-based `col` in the current row.
- [`query_cursor`](/packages/cli/reference/cli/ansi/query_cursor): Ask the terminal for the cursor position; it answers `ESC [ row ; col R` on stdin (decoded by `cli::keys` as `Event::CursorPos`).
- [`clear_screen`](/packages/cli/reference/cli/ansi/clear_screen): Clear the whole screen (cursor does not move).
- [`clear_below`](/packages/cli/reference/cli/ansi/clear_below): Clear from the cursor to the end of the screen.
- [`clear_line`](/packages/cli/reference/cli/ansi/clear_line): Clear the whole current line.
- [`clear_to_eol`](/packages/cli/reference/cli/ansi/clear_to_eol): Clear from the cursor to the end of the line.
- [`scroll_up`](/packages/cli/reference/cli/ansi/scroll_up): Scroll the region up / down by `n` lines.
