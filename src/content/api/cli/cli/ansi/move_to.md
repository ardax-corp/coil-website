---
slug: "cli/cli/ansi/move_to"
package: "cli"
title: "move_to"
description: "Move the cursor to 1-based row, col."
module: "cli::ansi"
kind: "fn"
name: "move_to"
signature: "fn move_to(int row, int col) -> string"
import: "use cli::ansi::{move_to};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/ansi.coil#L28"
order: 5
---

Move the cursor to 1-based `row`, `col`.

## Parameters

| Name | Type |
|------|------|
| `row` | `int` |
| `col` | `int` |

## Returns

`string`

## Examples

```coil
use cli::ansi::{move_to, clear_line, up};
use tests::assert;
assert!(move_to(3, 10) == "\e[3;10H");
assert!(up(2) + clear_line() == "\e[2A\e[2K");
assert!(up(0) == "");
```

## See also

- [`column`](/packages/cli/reference/cli/ansi/column): Move to 1-based `col` in the current row.
- [`up`](/packages/cli/reference/cli/ansi/up): Move the cursor up `n` rows; empty when `n <= 0`.
- [`down`](/packages/cli/reference/cli/ansi/down): Move the cursor down `n` rows; empty when `n <= 0`.
- [`right`](/packages/cli/reference/cli/ansi/right): Move the cursor right `n` columns; empty when `n <= 0`.
- [`left`](/packages/cli/reference/cli/ansi/left): Move the cursor left `n` columns; empty when `n <= 0`.
- [`next_line`](/packages/cli/reference/cli/ansi/next_line): Move to the start of the line `n` lines down.
- [`prev_line`](/packages/cli/reference/cli/ansi/prev_line): Move to the start of the line `n` lines up.
- [`home`](/packages/cli/reference/cli/ansi/home): Move the cursor to the top-left corner.
