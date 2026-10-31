---
slug: "tui/tui/widgets/list/table_column"
package: "tui"
title: "table_column"
description: "A left-aligned column titled title, sized by w."
module: "tui::widgets::list"
kind: "fn"
name: "table_column"
signature: "fn table_column(string title, Constraint w) -> TableColumn"
import: "use tui::widgets::list::{table_column};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/list.coil#L328"
order: 7
---

A left-aligned column titled `title`, sized by `w`.

## Parameters

| Name | Type |
|------|------|
| `title` | `string` |
| `w` | `Constraint` |

## Returns

`TableColumn`

## See also

- [`selection`](/packages/tui/reference/tui/widgets/list/fn.selection): A selection on the first row, scrolled to the top.
- [`scrollbar`](/packages/tui/reference/tui/widgets/list/scrollbar): A vertical scrollbar in the last column of `cv` for `count` rows starting at `offset`, `h` shown.
- [`list`](/packages/tui/reference/tui/widgets/list/fn.list): A `List` of `items` (see `List::new`).
