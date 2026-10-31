---
slug: "cli/cli/line/read_line_masked"
package: "cli"
title: "read_line_masked"
description: "Read a line with prompt, editing it in raw mode (Emacs keys, history, paste) with each character shown as mask when it is not \"\". When stdin is not a terminal the line is read plainly, so piped input works. Accepted lines go into the editor's history."
module: "cli::line"
kind: "fn"
name: "read_line_masked"
signature: "fn read_line_masked(Editor ed, string prompt, string mask) -> Result<LineInput, TtyError>"
import: "use cli::line::{read_line_masked};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/line.hy#L651"
order: 9
---

Read a line with `prompt`, editing it in raw mode (Emacs keys, history, paste) with each character shown as `mask` when it is not "". When stdin is not a terminal the line is read plainly, so piped input works. Accepted lines go into the editor's history.

## Parameters

| Name | Type |
|------|------|
| `ed` | `Editor` |
| `prompt` | `string` |
| `mask` | `string` |

## Returns

`Result<LineInput, TtyError>`

## See also

- [`units`](/packages/cli/reference/cli/line/units): `s` split into display units: one character plus any zero-width marks.
- [`history`](/packages/cli/reference/cli/line/fn.history): An empty history keeping at most `limit` entries.
- [`editor`](/packages/cli/reference/cli/line/fn.editor): An empty editor over history `h`.
- [`edit_for`](/packages/cli/reference/cli/line/edit_for): The default (Emacs / readline-style) binding for an input event, or `None` when it means nothing to the editor.
- [`read_line`](/packages/cli/reference/cli/line/read_line): `read_line_masked` with the text shown.
