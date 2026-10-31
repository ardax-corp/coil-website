---
slug: "cli/cli/ansi/column"
package: "cli"
title: "column"
description: "Move to 1-based col in the current row."
module: "cli::ansi"
kind: "fn"
name: "column"
signature: "fn column(int col) -> string"
import: "use cli::ansi::{column};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/ansi.hy#L33"
order: 6
---

Move to 1-based `col` in the current row.

## Parameters

| Name | Type |
|------|------|
| `col` | `int` |

## Returns

`string`

## See also

- [`move_to`](/packages/cli/reference/cli/ansi/move_to): Move the cursor to 1-based `row`, `col`.
- [`up`](/packages/cli/reference/cli/ansi/up): Move the cursor up `n` rows; empty when `n <= 0`.
- [`down`](/packages/cli/reference/cli/ansi/down): Move the cursor down `n` rows; empty when `n <= 0`.
- [`right`](/packages/cli/reference/cli/ansi/right): Move the cursor right `n` columns; empty when `n <= 0`.
- [`left`](/packages/cli/reference/cli/ansi/left): Move the cursor left `n` columns; empty when `n <= 0`.
- [`next_line`](/packages/cli/reference/cli/ansi/next_line): Move to the start of the line `n` lines down.
- [`prev_line`](/packages/cli/reference/cli/ansi/prev_line): Move to the start of the line `n` lines up.
- [`home`](/packages/cli/reference/cli/ansi/home): Move the cursor to the top-left corner.
