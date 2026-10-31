---
slug: "cli/cli/ansi/reset_scroll_region"
package: "cli"
title: "reset_scroll_region"
description: "Scroll the whole screen again (undo scroll_region)."
module: "cli::ansi"
kind: "fn"
name: "reset_scroll_region"
signature: "fn reset_scroll_region() -> string"
import: "use cli::ansi::{reset_scroll_region};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/ansi.coil#L180"
order: 29
---

Scroll the whole screen again (undo [`scroll_region`](/packages/cli/reference/cli/ansi/scroll_region)).

## Returns

`string`

## See also

- [`cli::ansi::scroll_region`](/packages/cli/reference/cli/ansi/scroll_region)
- [`move_to`](/packages/cli/reference/cli/ansi/move_to): Move the cursor to 1-based `row`, `col`.
- [`column`](/packages/cli/reference/cli/ansi/column): Move to 1-based `col` in the current row.
- [`up`](/packages/cli/reference/cli/ansi/up): Move the cursor up `n` rows; empty when `n <= 0`.
- [`down`](/packages/cli/reference/cli/ansi/down): Move the cursor down `n` rows; empty when `n <= 0`.
- [`right`](/packages/cli/reference/cli/ansi/right): Move the cursor right `n` columns; empty when `n <= 0`.
- [`left`](/packages/cli/reference/cli/ansi/left): Move the cursor left `n` columns; empty when `n <= 0`.
- [`next_line`](/packages/cli/reference/cli/ansi/next_line): Move to the start of the line `n` lines down.
