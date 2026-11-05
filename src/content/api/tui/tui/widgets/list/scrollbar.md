---
slug: "tui/tui/widgets/list/scrollbar"
package: "tui"
title: "scrollbar"
description: "A vertical scrollbar in the last column of cv for count rows starting at offset, h shown. Nothing when everything fits."
module: "tui::widgets::list"
kind: "fn"
name: "scrollbar"
signature: "fn scrollbar(Canvas cv, int top, int h, int count, int offset, Style track, Style thumb)"
import: "use tui::widgets::list::{scrollbar};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/widgets/list.coil#L113"
order: 5
---

A vertical scrollbar in the last column of `cv` for `count` rows starting at `offset`, `h` shown. Nothing when everything fits.

## Parameters

| Name | Type |
|------|------|
| `cv` | `Canvas` |
| `top` | `int` |
| `h` | `int` |
| `count` | `int` |
| `offset` | `int` |
| `track` | `Style` |
| `thumb` | `Style` |

## See also

- [`selection`](/packages/tui/reference/tui/widgets/list/fn.selection): A selection on the first row, scrolled to the top.
- [`list`](/packages/tui/reference/tui/widgets/list/fn.list): A `List` of `items` (see `List::new`).
- [`table_column`](/packages/tui/reference/tui/widgets/list/table_column): A left-aligned column titled `title`, sized by `w`.
