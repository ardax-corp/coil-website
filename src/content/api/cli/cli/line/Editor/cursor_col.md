---
slug: "cli/cli/line/Editor/cursor_col"
package: "cli"
title: "Editor::cursor_col"
description: "Columns from the start of the text to the cursor."
module: "cli::line"
kind: "method"
name: "cursor_col"
parent: "Editor"
signature: "pub fn cursor_col() -> int"
import: "use cli::line::{Editor};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/line.coil#L427"
order: 5
---

Columns from the start of the text to the cursor.

Called on a `Editor` value as `value.cursor_col(…)`.

## Returns

`int`

## See also

- [`Editor`](/packages/cli/reference/cli/line/Editor): The line-editor model: a line of text with a cursor (in display units: a character plus its zero-width marks), a kill buffer and a `History`.
- [`Editor::text`](/packages/cli/reference/cli/line/Editor/text): The current line.
- [`Editor::len`](/packages/cli/reference/cli/line/Editor/len): Length of the line in display units.
- [`Editor::set_text`](/packages/cli/reference/cli/line/Editor/set_text): Replace the line and put the cursor at its end.
- [`Editor::apply`](/packages/cli/reference/cli/line/Editor/apply): Apply one action.
- [`Editor::take`](/packages/cli/reference/cli/line/Editor/take): Accept the line: add it to the history, reset, and return it.
- [`Editor::view`](/packages/cli/reference/cli/line/Editor/view): The visible part of the line for a field `cols` wide, scrolled so the cursor shows, and the cursor's column within it.
