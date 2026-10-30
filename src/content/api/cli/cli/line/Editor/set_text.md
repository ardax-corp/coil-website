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
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/line.hy#L179"
order: 2
---

Replace the line and put the cursor at its end.

Called on a `Editor` value as `value.set_text(…)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## See also

- [`Editor`](/packages/cli/reference/cli/line/Editor)
- [`Editor::text`](/packages/cli/reference/cli/line/Editor/text)
- [`Editor::len`](/packages/cli/reference/cli/line/Editor/len)
- [`Editor::apply`](/packages/cli/reference/cli/line/Editor/apply): Apply one action.
- [`Editor::take`](/packages/cli/reference/cli/line/Editor/take): Accept the line: add it to the history, reset, and return it.
- [`Editor::cursor_col`](/packages/cli/reference/cli/line/Editor/cursor_col): Columns from the start of the text to the cursor.
- [`Editor::view`](/packages/cli/reference/cli/line/Editor/view): The visible part of the line for a field `cols` wide, scrolled so the cursor shows, and the cursor's column within it.
