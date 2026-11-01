---
slug: "cli/cli/ansi/hyperlink"
package: "cli"
title: "hyperlink"
description: "A clickable link (OSC 8). Terminals without support show text."
module: "cli::ansi"
kind: "fn"
name: "hyperlink"
signature: "fn hyperlink(string url, string text) -> string"
import: "use cli::ansi::{hyperlink};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/ansi.coil#L269"
order: 44
---

A clickable link (OSC 8). Terminals without support show `text`.

## Parameters

| Name | Type |
|------|------|
| `url` | `string` |
| `text` | `string` |

## Returns

`string`

## Examples

```coil
use cli::ansi::hyperlink;
use cli::style::strip;
use tests::assert;
let link = hyperlink("https://example.com", "docs");
assert!(strip(link) == "docs");
```

## See also

- [`move_to`](/packages/cli/reference/cli/ansi/move_to): Move the cursor to 1-based `row`, `col`.
- [`column`](/packages/cli/reference/cli/ansi/column): Move to 1-based `col` in the current row.
- [`up`](/packages/cli/reference/cli/ansi/up): Move the cursor up `n` rows; empty when `n <= 0`.
- [`down`](/packages/cli/reference/cli/ansi/down): Move the cursor down `n` rows; empty when `n <= 0`.
- [`right`](/packages/cli/reference/cli/ansi/right): Move the cursor right `n` columns; empty when `n <= 0`.
- [`left`](/packages/cli/reference/cli/ansi/left): Move the cursor left `n` columns; empty when `n <= 0`.
- [`next_line`](/packages/cli/reference/cli/ansi/next_line): Move to the start of the line `n` lines down.
- [`prev_line`](/packages/cli/reference/cli/ansi/prev_line): Move to the start of the line `n` lines up.
