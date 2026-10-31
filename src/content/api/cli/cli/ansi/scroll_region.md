---
slug: "cli/cli/ansi/scroll_region"
package: "cli"
title: "scroll_region"
description: "Limit scrolling to 1-based rows top..=bottom."
module: "cli::ansi"
kind: "fn"
name: "scroll_region"
signature: "fn scroll_region(int top, int bottom) -> string"
import: "use cli::ansi::{scroll_region};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/ansi.hy#L175"
order: 28
---

Limit scrolling to 1-based rows `top`..=`bottom`.

## Parameters

| Name | Type |
|------|------|
| `top` | `int` |
| `bottom` | `int` |

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
