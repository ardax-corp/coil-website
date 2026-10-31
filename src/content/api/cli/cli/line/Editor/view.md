---
slug: "cli/cli/line/Editor/view"
package: "cli"
title: "Editor::view"
description: "The visible part of the line for a field cols wide, scrolled so the cursor shows, and the cursor's column within it. mask (e.g. \"*\") replaces each character when not \"\" (passwords)."
module: "cli::line"
kind: "method"
name: "view"
parent: "Editor"
signature: "pub fn view(int cols, string mask) -> (string, int)"
import: "use cli::line::{Editor};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/8b75c6df2d1b161b8ad272010f80f9033392343e/src/cli/line.hy#L445"
order: 6
---

The visible part of the line for a field `cols` wide, scrolled so the cursor shows, and the cursor's column within it. `mask` (e.g. "*") replaces each character when not "" (passwords).

Called on a `Editor` value as `value.view(…)`.

## Parameters

| Name | Type |
|------|------|
| `cols` | `int` |
| `mask` | `string` |

## Returns

`(string, int)`

## Examples

```coil
use cli::line::{Edit, editor, history};
use tests::assert;
let ed = editor(history(10));
ed.apply(Edit::Insert("secret"));
let (shown, col) = ed.view(20, "*");
assert!(shown == "******" && col == 6);
```

## See also

- [`Editor`](/packages/cli/reference/cli/line/Editor): The line-editor model: a line of text with a cursor (in display units: a character plus its zero-width marks), a kill buffer and a `History`.
- [`Editor::text`](/packages/cli/reference/cli/line/Editor/text): The current line.
- [`Editor::len`](/packages/cli/reference/cli/line/Editor/len): Length of the line in display units.
- [`Editor::set_text`](/packages/cli/reference/cli/line/Editor/set_text): Replace the line and put the cursor at its end.
- [`Editor::apply`](/packages/cli/reference/cli/line/Editor/apply): Apply one action.
- [`Editor::take`](/packages/cli/reference/cli/line/Editor/take): Accept the line: add it to the history, reset, and return it.
- [`Editor::cursor_col`](/packages/cli/reference/cli/line/Editor/cursor_col): Columns from the start of the text to the cursor.
