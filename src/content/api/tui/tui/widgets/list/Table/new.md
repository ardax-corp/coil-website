---
slug: "tui/tui/widgets/list/Table/new"
package: "tui"
title: "Table::new"
description: "A table of rows under columns, header shown, first row selected."
module: "tui::widgets::list"
kind: "static method"
name: "new"
parent: "Table"
signature: "pub static fn new(Vec<TableColumn> columns, Vec<Vec<string>> rows) -> Table"
import: "use tui::widgets::list::{Table};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/list.hy#L371"
order: 0
---

A table of `rows` under `columns`, header shown, first row selected.

## Parameters

| Name | Type |
|------|------|
| `columns` | `Vec<TableColumn>` |
| `rows` | `Vec<Vec<string>>` |

## Returns

`Table`

## See also

- [`Table`](/packages/tui/reference/tui/widgets/list/Table): Rows of cells under a header, with one row selected; keys and mouse as for `List`.
- [`Table::selected`](/packages/tui/reference/tui/widgets/list/Table/selected): Index of the selected row.
- [`Table::on_select`](/packages/tui/reference/tui/widgets/list/Table/on_select): Call `f` when the selection moves (builder style).
- [`Table::on_activate`](/packages/tui/reference/tui/widgets/list/Table/on_activate): Call `f` on Enter (builder style).
- [`Table::widths`](/packages/tui/reference/tui/widgets/list/Table/widths): Column widths for `w` cells: `Auto` columns size to their widest cell, one space between columns.
- [`Table::body_height`](/packages/tui/reference/tui/widgets/list/Table/body_height): Rows available for data in the last frame (at least 1).
