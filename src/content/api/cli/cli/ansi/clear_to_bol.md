---
slug: "cli/cli/ansi/clear_to_bol"
package: "cli"
title: "clear_to_bol"
description: "Clear from the start of the line to the cursor."
module: "cli::ansi"
kind: "fn"
name: "clear_to_bol"
signature: "fn clear_to_bol() -> string"
import: "use cli::ansi::{clear_to_bol};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/ansi.hy#L160"
order: 25
---

Clear from the start of the line to the cursor.

## Returns

`string`

## See also

- [`move_to`](/packages/cli/reference/cli/ansi/move_to): Move the cursor to 1-based `row`, `col`.
- [`column`](/packages/cli/reference/cli/ansi/column): Move to 1-based `col` in the current row.
- [`up`](/packages/cli/reference/cli/ansi/up): Move the cursor up `n` rows; empty when `n <= 0`.
- [`down`](/packages/cli/reference/cli/ansi/down): Move the cursor down `n` rows; empty when `n <= 0`.
- [`right`](/packages/cli/reference/cli/ansi/right): Move the cursor right `n` columns; empty when `n <= 0`.
- [`left`](/packages/cli/reference/cli/ansi/left): Move the cursor left `n` columns; empty when `n <= 0`.
- [`next_line`](/packages/cli/reference/cli/ansi/next_line): Move to the start of the line `n` lines down.
- [`prev_line`](/packages/cli/reference/cli/ansi/prev_line): Move to the start of the line `n` lines up.
