---
slug: "tui/tui/widgets/list/Table"
package: "tui"
title: "Table"
description: "Rows of cells under a header, with one row selected; keys and mouse as for List."
module: "tui::widgets::list"
kind: "class"
name: "Table"
signature: "shared class Table"
import: "use tui::widgets::list::{Table};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/list.hy#L352"
order: 3
---

Rows of cells under a header, with one row selected; keys and mouse as for [`List`](/packages/tui/reference/tui/widgets/list/List).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `columns` | `Vec<TableColumn>` | The columns, left to right. |
| `rows` | `Vec<Vec<string>>` | The rows, each a cell per column. |
| `sel` | `Selection` | The selected row and scroll position. |
| `header` | `bool` | Whether the header row is drawn (`true` by default). |
| `on_select` | `fn(int, Ctx) -> ()` | Called with the new index when the selection moves. |
| `on_activate` | `fn(int, Ctx) -> ()` | Called with the selected index on Enter. |
| `height` | `int` | Rows shown in the last frame, header included. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/tui/reference/tui/widgets/list/Table/new) | A table of `rows` under `columns`, header shown, first row selected. |

## Methods

| Name | Description |
|------|-------------|
| [`selected`](/packages/tui/reference/tui/widgets/list/Table/selected) | Index of the selected row. |
| [`on_select`](/packages/tui/reference/tui/widgets/list/Table/on_select) | Call `f` when the selection moves (builder style). |
| [`on_activate`](/packages/tui/reference/tui/widgets/list/Table/on_activate) | Call `f` on Enter (builder style). |
| [`widths`](/packages/tui/reference/tui/widgets/list/Table/widths) | Column widths for `w` cells: `Auto` columns size to their widest cell, one space between columns. |
| [`body_height`](/packages/tui/reference/tui/widgets/list/Table/body_height) | Rows available for data in the last frame (at least 1). |

## Trait implementations

- `Component` for `Table`

## Examples

```coil
use tui::layout::Constraint;
use tui::node::mount;
use tui::testing::harness;
use tui::widgets::list::{Table, TableColumn, table_column};
use tests::assert;
let cols: Vec<TableColumn> = [table_column("Name", Constraint::Auto), table_column("Age", Constraint::Fill(1))];
let rows: Vec<Vec<string>> = [["Ada", "36"], ["Linus", "54"]];
let t = Table::new(cols, rows);
let h = harness(mount(t), 12, 3);
h.key("down");
assert!(t.selected() == 1);
assert!(h.row(0) == "Name  Age   ");
assert!(h.row(2) == "Linus 54    ");
```

## See also

- [`tui::widgets::list::List`](/packages/tui/reference/tui/widgets/list/List)
- [`Selection`](/packages/tui/reference/tui/widgets/list/Selection): A cursor over `count` rows shown `height` at a time: the selected row and the first visible one.
- [`TableColumn`](/packages/tui/reference/tui/widgets/list/TableColumn): A table column: header, width constraint and alignment.
