---
slug: "cli/cli/ansi/enter_alt_screen"
package: "cli"
title: "enter_alt_screen"
description: "Switch to the alternate screen, as full-screen programs do; the normal screen and its scrollback come back with leave_alt_screen."
module: "cli::ansi"
kind: "fn"
name: "enter_alt_screen"
signature: "fn enter_alt_screen() -> string"
import: "use cli::ansi::{enter_alt_screen};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/ansi.hy#L186"
order: 30
---

Switch to the alternate screen, as full-screen programs do; the normal screen and its scrollback come back with [`leave_alt_screen`](/packages/cli/reference/cli/ansi/leave_alt_screen).

## Returns

`string`

## See also

- [`cli::ansi::leave_alt_screen`](/packages/cli/reference/cli/ansi/leave_alt_screen)
- [`move_to`](/packages/cli/reference/cli/ansi/move_to): Move the cursor to 1-based `row`, `col`.
- [`column`](/packages/cli/reference/cli/ansi/column): Move to 1-based `col` in the current row.
- [`up`](/packages/cli/reference/cli/ansi/up): Move the cursor up `n` rows; empty when `n <= 0`.
- [`down`](/packages/cli/reference/cli/ansi/down): Move the cursor down `n` rows; empty when `n <= 0`.
- [`right`](/packages/cli/reference/cli/ansi/right): Move the cursor right `n` columns; empty when `n <= 0`.
- [`left`](/packages/cli/reference/cli/ansi/left): Move the cursor left `n` columns; empty when `n <= 0`.
- [`next_line`](/packages/cli/reference/cli/ansi/next_line): Move to the start of the line `n` lines down.
