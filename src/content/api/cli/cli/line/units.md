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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/line.hy#L81"
order: 4
---

`s` split into display units: one character plus any zero-width marks.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Vec<string>`

## See also

- [`edit_for`](/packages/cli/reference/cli/line/edit_for): The default (Emacs / readline-style) binding for an input event, or `None` when it means nothing to the editor.
- [`read_line_masked`](/packages/cli/reference/cli/line/read_line_masked): Read a line with `prompt`, editing it in raw mode (Emacs keys, history, paste) with each character shown as `mask` when it is not "".
- [`read_line`](/packages/cli/reference/cli/line/read_line): `read_line_masked` with the text shown.
