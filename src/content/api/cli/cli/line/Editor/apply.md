---
slug: "cli/cli/line/Editor/apply"
package: "cli"
title: "Editor::apply"
description: "Apply one action."
module: "cli::line"
kind: "method"
name: "apply"
parent: "Editor"
signature: "pub fn apply(Edit e) -> Outcome"
import: "use cli::line::{Editor};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/bc6995d02f647979229f5fc4769873d9d4097181/src/cli/line.hy#L304"
order: 3
---

Apply one action.

Called on a `Editor` value as `value.apply(…)`.

## Parameters

| Name | Type |
|------|------|
| `e` | `Edit` |

## Returns

`Outcome`

## See also

- [`Editor`](/packages/cli/reference/cli/line/Editor): The line-editor model: a line of text with a cursor (in display units: a character plus its zero-width marks), a kill buffer and a `History`.
- [`Editor::text`](/packages/cli/reference/cli/line/Editor/text): The current line.
- [`Editor::len`](/packages/cli/reference/cli/line/Editor/len): Length of the line in display units.
- [`Editor::set_text`](/packages/cli/reference/cli/line/Editor/set_text): Replace the line and put the cursor at its end.
- [`Editor::take`](/packages/cli/reference/cli/line/Editor/take): Accept the line: add it to the history, reset, and return it.
- [`Editor::cursor_col`](/packages/cli/reference/cli/line/Editor/cursor_col): Columns from the start of the text to the cursor.
- [`Editor::view`](/packages/cli/reference/cli/line/Editor/view): The visible part of the line for a field `cols` wide, scrolled so the cursor shows, and the cursor's column within it.
