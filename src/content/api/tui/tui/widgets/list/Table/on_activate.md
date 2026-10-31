---
slug: "tui/tui/widgets/list/Table/on_activate"
package: "tui"
title: "Table::on_activate"
description: "Call f on Enter (builder style)."
module: "tui::widgets::list"
kind: "method"
name: "on_activate"
parent: "Table"
signature: "pub fn on_activate(fn(int, Ctx) -> () f) -> Table"
import: "use tui::widgets::list::{Table};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/list.hy#L395"
order: 3
---

Call `f` on Enter (builder style).

Called on a `Table` value as `value.on_activate(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `fn(int, Ctx) -> ()` |

## Returns

`Table`

## See also

- [`Table`](/packages/tui/reference/tui/widgets/list/Table): Rows of cells under a header, with one row selected; keys and mouse as for `List`.
- [`Table::new`](/packages/tui/reference/tui/widgets/list/Table/new): A table of `rows` under `columns`, header shown, first row selected.
- [`Table::selected`](/packages/tui/reference/tui/widgets/list/Table/selected): Index of the selected row.
- [`Table::on_select`](/packages/tui/reference/tui/widgets/list/Table/on_select): Call `f` when the selection moves (builder style).
- [`Table::widths`](/packages/tui/reference/tui/widgets/list/Table/widths): Column widths for `w` cells: `Auto` columns size to their widest cell, one space between columns.
- [`Table::body_height`](/packages/tui/reference/tui/widgets/list/Table/body_height): Rows available for data in the last frame (at least 1).
