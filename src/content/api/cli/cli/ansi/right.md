---
slug: "cli/cli/ansi/right"
package: "cli"
title: "right"
description: "Move the cursor right n columns; empty when n <= 0."
module: "cli::ansi"
kind: "fn"
name: "right"
signature: "fn right(int n) -> string"
import: "use cli::ansi::{right};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/ansi.hy#L54"
order: 9
---

Move the cursor right `n` columns; empty when `n <= 0`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`string`

## See also

- [`move_to`](/packages/cli/reference/cli/ansi/move_to): Move the cursor to 1-based `row`, `col`.
- [`column`](/packages/cli/reference/cli/ansi/column): Move to 1-based `col` in the current row.
- [`up`](/packages/cli/reference/cli/ansi/up): Move the cursor up `n` rows; empty when `n <= 0`.
- [`down`](/packages/cli/reference/cli/ansi/down): Move the cursor down `n` rows; empty when `n <= 0`.
- [`left`](/packages/cli/reference/cli/ansi/left): Move the cursor left `n` columns; empty when `n <= 0`.
- [`next_line`](/packages/cli/reference/cli/ansi/next_line): Move to the start of the line `n` lines down.
- [`prev_line`](/packages/cli/reference/cli/ansi/prev_line): Move to the start of the line `n` lines up.
- [`home`](/packages/cli/reference/cli/ansi/home): Move the cursor to the top-left corner.
