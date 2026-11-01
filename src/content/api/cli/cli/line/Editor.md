---
slug: "cli/cli/line/Editor"
package: "cli"
title: "Editor"
description: "The line-editor model: a line of text with a cursor (in display units: a character plus its zero-width marks), a kill buffer and a History. It knows nothing about terminals; feed it Edit actions and draw view. read_line runs one on a terminal."
module: "cli::line"
kind: "class"
name: "Editor"
signature: "class Editor"
import: "use cli::line::{Editor};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/line.coil#L201"
order: 3
---

The line-editor model: a line of text with a cursor (in display units: a character plus its zero-width marks), a kill buffer and a [`History`](/packages/cli/reference/cli/line/History). It knows nothing about terminals; feed it [`Edit`](/packages/cli/reference/cli/line/Edit) actions and draw [`view`](/packages/cli/reference/cli/line/Editor/view). [`read_line`](/packages/cli/reference/cli/line/read_line) runs one on a terminal.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `cursor` | `int` | Cursor position in display units (0..=len). |
| `kill` | `string` | The kill buffer: the text the last kill removed, inserted by `Yank`. |
| `history` | `History` | History browsed by `HistoryPrev` / `HistoryNext`; [`take`](/packages/cli/reference/cli/line/Editor/take) adds to it. |

## Methods

| Name | Description |
|------|-------------|
| [`text`](/packages/cli/reference/cli/line/Editor/text) | The current line. |
| [`len`](/packages/cli/reference/cli/line/Editor/len) | Length of the line in display units. |
| [`set_text`](/packages/cli/reference/cli/line/Editor/set_text) | Replace the line and put the cursor at its end. |
| [`apply`](/packages/cli/reference/cli/line/Editor/apply) | Apply one action. |
| [`take`](/packages/cli/reference/cli/line/Editor/take) | Accept the line: add it to the history, reset, and return it. |
| [`cursor_col`](/packages/cli/reference/cli/line/Editor/cursor_col) | Columns from the start of the text to the cursor. |
| [`view`](/packages/cli/reference/cli/line/Editor/view) | The visible part of the line for a field `cols` wide, scrolled so the cursor shows, and the cursor's column within it. |

## Examples

```coil
use cli::line::{Edit, Outcome, editor, history};
use tests::assert;
let ed = editor(history(100));
ed.apply(Edit::Insert("hello world"));
ed.apply(Edit::KillWordBack);
assert!(ed.text() == "hello ");
ed.apply(Edit::Home);
ed.apply(Edit::Yank);
assert!(ed.text() == "worldhello ");
assert!(ed.apply(Edit::Submit) == Outcome::Submit);
assert!(ed.take() == "worldhello ");
assert!(ed.history.len() == 1);
```

## See also

- [`cli::line::History`](/packages/cli/reference/cli/line/History)
- [`cli::line::Edit`](/packages/cli/reference/cli/line/Edit)
- [`Editor::view`](/packages/cli/reference/cli/line/Editor/view)
- [`cli::line::read_line`](/packages/cli/reference/cli/line/read_line)
- [`Editor::take`](/packages/cli/reference/cli/line/Editor/take)
