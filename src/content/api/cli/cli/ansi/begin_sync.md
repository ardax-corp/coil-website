---
slug: "cli/cli/ansi/begin_sync"
package: "cli"
title: "begin_sync"
description: "Begin synchronized output (mode 2026): the terminal holds the screen until end_sync, then shows the frame at once. Ignored where unsupported."
module: "cli::ansi"
kind: "fn"
name: "begin_sync"
signature: "fn begin_sync() -> string"
import: "use cli::ansi::{begin_sync};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/ansi.hy#L244"
order: 41
---

Begin synchronized output (mode 2026): the terminal holds the screen until [`end_sync`](/packages/cli/reference/cli/ansi/end_sync), then shows the frame at once. Ignored where unsupported.

## Returns

`string`

## See also

- [`cli::ansi::end_sync`](/packages/cli/reference/cli/ansi/end_sync)
- [`move_to`](/packages/cli/reference/cli/ansi/move_to): Move the cursor to 1-based `row`, `col`.
- [`column`](/packages/cli/reference/cli/ansi/column): Move to 1-based `col` in the current row.
- [`up`](/packages/cli/reference/cli/ansi/up): Move the cursor up `n` rows; empty when `n <= 0`.
- [`down`](/packages/cli/reference/cli/ansi/down): Move the cursor down `n` rows; empty when `n <= 0`.
- [`right`](/packages/cli/reference/cli/ansi/right): Move the cursor right `n` columns; empty when `n <= 0`.
- [`left`](/packages/cli/reference/cli/ansi/left): Move the cursor left `n` columns; empty when `n <= 0`.
- [`next_line`](/packages/cli/reference/cli/ansi/next_line): Move to the start of the line `n` lines down.
