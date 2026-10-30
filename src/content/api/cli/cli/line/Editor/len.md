---
slug: "cli/cli/line/Editor/len"
package: "cli"
title: "Editor::len"
description: "Method Editor::len."
module: "cli::line"
kind: "method"
name: "len"
parent: "Editor"
signature: "pub fn len() -> int"
import: "use cli::line::{Editor};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/line.hy#L174"
order: 1
---

*No documentation yet.*

Called on a `Editor` value as `value.len(…)`.

## Returns

`int`

## See also

- [`Editor`](/packages/cli/reference/cli/line/Editor)
- [`Editor::text`](/packages/cli/reference/cli/line/Editor/text)
- [`Editor::set_text`](/packages/cli/reference/cli/line/Editor/set_text): Replace the line and put the cursor at its end.
- [`Editor::apply`](/packages/cli/reference/cli/line/Editor/apply): Apply one action.
- [`Editor::take`](/packages/cli/reference/cli/line/Editor/take): Accept the line: add it to the history, reset, and return it.
- [`Editor::cursor_col`](/packages/cli/reference/cli/line/Editor/cursor_col): Columns from the start of the text to the cursor.
- [`Editor::view`](/packages/cli/reference/cli/line/Editor/view): The visible part of the line for a field `cols` wide, scrolled so the cursor shows, and the cursor's column within it.
