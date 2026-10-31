---
slug: "tui/tui/widgets/list/index"
package: "tui"
title: "tui::widgets::list"
description: "The tui::widgets::list module."
module: "tui::widgets::list"
kind: "module"
name: "tui::widgets::list"
origin: "package"
auto: false
order: 11
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::widgets::list::{Selection, List};
```

## Types

| Name | Description |
|------|-------------|
| [`Selection`](/packages/tui/reference/tui/widgets/list/Selection) | A cursor over `count` rows shown `height` at a time: the selected row and the first visible one. |
| [`List`](/packages/tui/reference/tui/widgets/list/List) | A list of text rows with one selected. |
| [`TableColumn`](/packages/tui/reference/tui/widgets/list/TableColumn) | A table column: header, width constraint and alignment. |
| [`Table`](/packages/tui/reference/tui/widgets/list/Table) | Rows of cells under a header, with one row selected; keys and mouse as for [`List`](/packages/tui/reference/tui/widgets/list/List). |

## Functions

| Name | Description |
|------|-------------|
| [`selection`](/packages/tui/reference/tui/widgets/list/fn.selection) | A selection on the first row, scrolled to the top. |
| [`scrollbar`](/packages/tui/reference/tui/widgets/list/scrollbar) | A vertical scrollbar in the last column of `cv` for `count` rows starting at `offset`, `h` shown. |
| [`list`](/packages/tui/reference/tui/widgets/list/fn.list) | A [`List`](/packages/tui/reference/tui/widgets/list/List) of `items` (see [`List::new`](/packages/tui/reference/tui/widgets/list/List/new)). |
| [`table_column`](/packages/tui/reference/tui/widgets/list/table_column) | A left-aligned column titled `title`, sized by `w`. |
