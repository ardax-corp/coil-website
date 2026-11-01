---
slug: "tui/tui/widgets/list/Table/body_height"
package: "tui"
title: "Table::body_height"
description: "Rows available for data in the last frame (at least 1)."
module: "tui::widgets::list"
kind: "method"
name: "body_height"
parent: "Table"
signature: "pub fn body_height() -> int"
import: "use tui::widgets::list::{Table};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/list.coil#L422"
order: 5
---

Rows available for data in the last frame (at least 1).

Called on a `Table` value as `value.body_height(…)`.

## Returns

`int`

## See also

- [`Table`](/packages/tui/reference/tui/widgets/list/Table): Rows of cells under a header, with one row selected; keys and mouse as for `List`.
- [`Table::new`](/packages/tui/reference/tui/widgets/list/Table/new): A table of `rows` under `columns`, header shown, first row selected.
- [`Table::selected`](/packages/tui/reference/tui/widgets/list/Table/selected): Index of the selected row.
- [`Table::on_select`](/packages/tui/reference/tui/widgets/list/Table/on_select): Call `f` when the selection moves (builder style).
- [`Table::on_activate`](/packages/tui/reference/tui/widgets/list/Table/on_activate): Call `f` on Enter (builder style).
- [`Table::widths`](/packages/tui/reference/tui/widgets/list/Table/widths): Column widths for `w` cells: `Auto` columns size to their widest cell, one space between columns.
