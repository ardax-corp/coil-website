---
slug: "cli/cli/line/Editor/take"
package: "cli"
title: "Editor::take"
description: "Accept the line: add it to the history, reset, and return it."
module: "cli::line"
kind: "method"
name: "take"
parent: "Editor"
signature: "pub fn take() -> string"
import: "use cli::line::{Editor};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/line.hy#L416"
order: 4
---

Accept the line: add it to the history, reset, and return it.

Called on a `Editor` value as `value.take(…)`.

## Returns

`string`

## See also

- [`Editor`](/packages/cli/reference/cli/line/Editor): The line-editor model: a line of text with a cursor (in display units: a character plus its zero-width marks), a kill buffer and a `History`.
- [`Editor::text`](/packages/cli/reference/cli/line/Editor/text): The current line.
- [`Editor::len`](/packages/cli/reference/cli/line/Editor/len): Length of the line in display units.
- [`Editor::set_text`](/packages/cli/reference/cli/line/Editor/set_text): Replace the line and put the cursor at its end.
- [`Editor::apply`](/packages/cli/reference/cli/line/Editor/apply): Apply one action.
- [`Editor::cursor_col`](/packages/cli/reference/cli/line/Editor/cursor_col): Columns from the start of the text to the cursor.
- [`Editor::view`](/packages/cli/reference/cli/line/Editor/view): The visible part of the line for a field `cols` wide, scrolled so the cursor shows, and the cursor's column within it.
