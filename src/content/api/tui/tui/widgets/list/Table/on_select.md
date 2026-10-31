---
slug: "tui/tui/widgets/list/Table/on_select"
package: "tui"
title: "Table::on_select"
description: "Call f when the selection moves (builder style)."
module: "tui::widgets::list"
kind: "method"
name: "on_select"
parent: "Table"
signature: "pub fn on_select(fn(int, Ctx) -> () f) -> Table"
import: "use tui::widgets::list::{Table};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/list.hy#L389"
order: 2
---

Call `f` when the selection moves (builder style).

Called on a `Table` value as `value.on_select(…)`.

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
- [`Table::on_activate`](/packages/tui/reference/tui/widgets/list/Table/on_activate): Call `f` on Enter (builder style).
- [`Table::widths`](/packages/tui/reference/tui/widgets/list/Table/widths): Column widths for `w` cells: `Auto` columns size to their widest cell, one space between columns.
- [`Table::body_height`](/packages/tui/reference/tui/widgets/list/Table/body_height): Rows available for data in the last frame (at least 1).
