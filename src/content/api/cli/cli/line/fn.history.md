---
slug: "cli/cli/line/fn.history"
package: "cli"
title: "history"
description: "An empty history keeping at most limit entries."
module: "cli::line"
kind: "fn"
name: "history"
signature: "fn history(int limit) -> History"
import: "use cli::line::{history};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/line.hy#L148"
order: 6
---

An empty history keeping at most `limit` entries.

## Parameters

| Name | Type |
|------|------|
| `limit` | `int` |

## Returns

`History`

## See also

- [`units`](/packages/cli/reference/cli/line/units): `s` split into display units: one character plus any zero-width marks.
- [`editor`](/packages/cli/reference/cli/line/fn.editor): An empty editor over history `h`.
- [`edit_for`](/packages/cli/reference/cli/line/edit_for): The default (Emacs / readline-style) binding for an input event, or `None` when it means nothing to the editor.
- [`read_line_masked`](/packages/cli/reference/cli/line/read_line_masked): Read a line with `prompt`, editing it in raw mode (Emacs keys, history, paste) with each character shown as `mask` when it is not "".
- [`read_line`](/packages/cli/reference/cli/line/read_line): `read_line_masked` with the text shown.
