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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/line.hy#L568"
order: 6
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
- [`edit_for`](/packages/cli/reference/cli/line/edit_for): The default (Emacs / readline-style) binding for an input event, or `None` when it means nothing to the editor.
- [`read_line`](/packages/cli/reference/cli/line/read_line): `read_line_masked` with the text shown.
