---
slug: "cli/cli/line/fn.editor"
package: "cli"
title: "editor"
description: "An empty editor over history h."
module: "cli::line"
kind: "fn"
name: "editor"
signature: "fn editor(History h) -> Editor"
import: "use cli::line::{editor};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/line.hy#L215"
order: 7
---

An empty editor over history `h`.

## Parameters

| Name | Type |
|------|------|
| `h` | `History` |

## Returns

`Editor`

## See also

- [`units`](/packages/cli/reference/cli/line/units): `s` split into display units: one character plus any zero-width marks.
- [`history`](/packages/cli/reference/cli/line/fn.history): An empty history keeping at most `limit` entries.
- [`edit_for`](/packages/cli/reference/cli/line/edit_for): The default (Emacs / readline-style) binding for an input event, or `None` when it means nothing to the editor.
- [`read_line_masked`](/packages/cli/reference/cli/line/read_line_masked): Read a line with `prompt`, editing it in raw mode (Emacs keys, history, paste) with each character shown as `mask` when it is not "".
- [`read_line`](/packages/cli/reference/cli/line/read_line): `read_line_masked` with the text shown.
