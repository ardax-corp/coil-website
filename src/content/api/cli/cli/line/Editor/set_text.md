---
slug: "cli/cli/line/Editor/set_text"
package: "cli"
title: "Editor::set_text"
description: "Replace the line and put the cursor at its end."
module: "cli::line"
kind: "method"
name: "set_text"
parent: "Editor"
signature: "pub fn set_text(string s)"
import: "use cli::line::{Editor};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/line.hy#L231"
order: 2
---

Replace the line and put the cursor at its end.

Called on a `Editor` value as `value.set_text(…)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## See also

- [`Editor`](/packages/cli/reference/cli/line/Editor): The line-editor model: a line of text with a cursor (in display units: a character plus its zero-width marks), a kill buffer and a `History`.
- [`Editor::text`](/packages/cli/reference/cli/line/Editor/text): The current line.
- [`Editor::len`](/packages/cli/reference/cli/line/Editor/len): Length of the line in display units.
- [`Editor::apply`](/packages/cli/reference/cli/line/Editor/apply): Apply one action.
- [`Editor::take`](/packages/cli/reference/cli/line/Editor/take): Accept the line: add it to the history, reset, and return it.
- [`Editor::cursor_col`](/packages/cli/reference/cli/line/Editor/cursor_col): Columns from the start of the text to the cursor.
- [`Editor::view`](/packages/cli/reference/cli/line/Editor/view): The visible part of the line for a field `cols` wide, scrolled so the cursor shows, and the cursor's column within it.
