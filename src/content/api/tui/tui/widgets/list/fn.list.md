---
slug: "tui/tui/widgets/list/fn.list"
package: "tui"
title: "list"
description: "A List of items (see List::new)."
module: "tui::widgets::list"
kind: "fn"
name: "list"
signature: "fn list(Vec<string> items) -> List"
import: "use tui::widgets::list::{list};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/widgets/list.coil#L313"
order: 6
---

A [`List`](/packages/tui/reference/tui/widgets/list/List) of `items` (see [`List::new`](/packages/tui/reference/tui/widgets/list/List/new)).

## Parameters

| Name | Type |
|------|------|
| `items` | `Vec<string>` |

## Returns

`List`

## See also

- [`tui::widgets::list::List`](/packages/tui/reference/tui/widgets/list/List)
- [`List::new`](/packages/tui/reference/tui/widgets/list/List/new)
- [`selection`](/packages/tui/reference/tui/widgets/list/fn.selection): A selection on the first row, scrolled to the top.
- [`scrollbar`](/packages/tui/reference/tui/widgets/list/scrollbar): A vertical scrollbar in the last column of `cv` for `count` rows starting at `offset`, `h` shown.
- [`table_column`](/packages/tui/reference/tui/widgets/list/table_column): A left-aligned column titled `title`, sized by `w`.
