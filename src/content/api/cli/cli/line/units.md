---
slug: "cli/cli/line/units"
package: "cli"
title: "units"
description: "s split into display units: one character plus any zero-width marks."
module: "cli::line"
kind: "fn"
name: "units"
signature: "fn units(string s) -> Vec<string>"
import: "use cli::line::{units};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/line.hy#L102"
order: 5
---

`s` split into display units: one character plus any zero-width marks.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Vec<string>`

## See also

- [`history`](/packages/cli/reference/cli/line/fn.history): An empty history keeping at most `limit` entries.
- [`editor`](/packages/cli/reference/cli/line/fn.editor): An empty editor over history `h`.
- [`edit_for`](/packages/cli/reference/cli/line/edit_for): The default (Emacs / readline-style) binding for an input event, or `None` when it means nothing to the editor.
- [`read_line_masked`](/packages/cli/reference/cli/line/read_line_masked): Read a line with `prompt`, editing it in raw mode (Emacs keys, history, paste) with each character shown as `mask` when it is not "".
- [`read_line`](/packages/cli/reference/cli/line/read_line): `read_line_masked` with the text shown.
