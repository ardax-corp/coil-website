---
slug: "cli/cli/line/Editor"
package: "cli"
title: "Editor"
description: "Class Editor."
module: "cli::line"
kind: "class"
name: "Editor"
signature: "class Editor"
import: "use cli::line::{Editor};"
origin: "package"
source: "https://github.com/ardax-corp/coil-cli/blob/7fca76ae9903c83fee5bbfd43777ed6b46f538c4/src/cli/line.hy#L154"
order: 2
---

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `cursor` | `int` | Cursor position in display units (0..=len). |
| `kill` | `string` |  |
| `history` | `History` |  |

## Methods

| Name | Description |
|------|-------------|
| [`text`](/packages/cli/reference/cli/line/Editor/text) |  |
| [`len`](/packages/cli/reference/cli/line/Editor/len) |  |
| [`set_text`](/packages/cli/reference/cli/line/Editor/set_text) | Replace the line and put the cursor at its end. |
| [`apply`](/packages/cli/reference/cli/line/Editor/apply) | Apply one action. |
| [`take`](/packages/cli/reference/cli/line/Editor/take) | Accept the line: add it to the history, reset, and return it. |
| [`cursor_col`](/packages/cli/reference/cli/line/Editor/cursor_col) | Columns from the start of the text to the cursor. |
| [`view`](/packages/cli/reference/cli/line/Editor/view) | The visible part of the line for a field `cols` wide, scrolled so the cursor shows, and the cursor's column within it. |

## See also

- [`History`](/packages/cli/reference/cli/line/History)
