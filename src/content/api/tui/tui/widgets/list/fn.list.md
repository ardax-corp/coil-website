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
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/list.hy#L313"
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
