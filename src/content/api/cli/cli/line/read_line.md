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
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/line.hy#L694"
order: 10
---

[`read_line_masked`](/packages/cli/reference/cli/line/read_line_masked) with the text shown.

## Parameters

| Name | Type |
|------|------|
| `ed` | `Editor` |
| `prompt` | `string` |

## Returns

`Result<LineInput, TtyError>`

## Examples

```coil
use cli::line::{LineInput, editor, history, read_line};
use io::tty::TtyError;
fn main() -> Result<(), TtyError> {
    let ed = editor(history(500));
    while true {
        match read_line(ed, "> ")? {
            LineInput::Line(s) => {
                if s == "quit" {
                    break;
                }
            },
            LineInput::Cancelled => {},
            LineInput::Eof => {
                break;
            },
        }
    }
    return;
}
```

## See also

- [`cli::line::read_line_masked`](/packages/cli/reference/cli/line/read_line_masked)
- [`units`](/packages/cli/reference/cli/line/units): `s` split into display units: one character plus any zero-width marks.
- [`history`](/packages/cli/reference/cli/line/fn.history): An empty history keeping at most `limit` entries.
- [`editor`](/packages/cli/reference/cli/line/fn.editor): An empty editor over history `h`.
- [`edit_for`](/packages/cli/reference/cli/line/edit_for): The default (Emacs / readline-style) binding for an input event, or `None` when it means nothing to the editor.
