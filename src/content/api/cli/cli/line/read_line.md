---
slug: "cli/cli/line/read_line"
package: "cli"
title: "read_line"
description: "read_line_masked with the text shown."
module: "cli::line"
kind: "fn"
name: "read_line"
signature: "fn read_line(Editor ed, string prompt) -> Result<LineInput, TtyError>"
import: "use cli::line::{read_line};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/line.hy#L587"
order: 7
---

[`read_line_masked`](/packages/cli/reference/cli/line/read_line_masked) with the text shown.

## Parameters

| Name | Type |
|------|------|
| `ed` | `Editor` |
| `prompt` | `string` |

## Returns

`Result<LineInput, TtyError>`

## See also

- [`cli::line::read_line_masked`](/packages/cli/reference/cli/line/read_line_masked)
- [`units`](/packages/cli/reference/cli/line/units): `s` split into display units: one character plus any zero-width marks.
- [`edit_for`](/packages/cli/reference/cli/line/edit_for): The default (Emacs / readline-style) binding for an input event, or `None` when it means nothing to the editor.
