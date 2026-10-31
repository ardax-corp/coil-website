---
slug: "cli/cli/ansi/save_cursor"
package: "cli"
title: "save_cursor"
description: "Save the cursor position (and attributes); restore_cursor goes back."
module: "cli::ansi"
kind: "fn"
name: "save_cursor"
signature: "fn save_cursor() -> string"
import: "use cli::ansi::{save_cursor};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/ansi.hy#L85"
order: 14
---

Save the cursor position (and attributes); [`restore_cursor`](/packages/cli/reference/cli/ansi/restore_cursor) goes back.

## Returns

`string`

## See also

- [`cli::ansi::restore_cursor`](/packages/cli/reference/cli/ansi/restore_cursor)
- [`move_to`](/packages/cli/reference/cli/ansi/move_to): Move the cursor to 1-based `row`, `col`.
- [`column`](/packages/cli/reference/cli/ansi/column): Move to 1-based `col` in the current row.
- [`up`](/packages/cli/reference/cli/ansi/up): Move the cursor up `n` rows; empty when `n <= 0`.
- [`down`](/packages/cli/reference/cli/ansi/down): Move the cursor down `n` rows; empty when `n <= 0`.
- [`right`](/packages/cli/reference/cli/ansi/right): Move the cursor right `n` columns; empty when `n <= 0`.
- [`left`](/packages/cli/reference/cli/ansi/left): Move the cursor left `n` columns; empty when `n <= 0`.
- [`next_line`](/packages/cli/reference/cli/ansi/next_line): Move to the start of the line `n` lines down.
