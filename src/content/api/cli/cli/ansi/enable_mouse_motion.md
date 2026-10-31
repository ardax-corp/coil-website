---
slug: "cli/cli/ansi/enable_mouse_motion"
package: "cli"
title: "enable_mouse_motion"
description: "Also report motion with no button held (1003)."
module: "cli::ansi"
kind: "fn"
name: "enable_mouse_motion"
signature: "fn enable_mouse_motion() -> string"
import: "use cli::ansi::{enable_mouse_motion};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/ansi.hy#L201"
order: 33
---

Also report motion with no button held (1003).

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
