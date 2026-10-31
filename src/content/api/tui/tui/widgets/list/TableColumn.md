---
slug: "tui/tui/widgets/list/TableColumn"
package: "tui"
title: "TableColumn"
description: "A table column: header, width constraint and alignment."
module: "tui::widgets::list"
kind: "class"
name: "TableColumn"
signature: "class TableColumn"
import: "use tui::widgets::list::{TableColumn};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/list.coil#L318"
order: 2
---

A table column: header, width constraint and alignment.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | `string` | Header text. |
| `width` | `Constraint` | How wide the column is (`Auto` sizes to the widest cell). |
| `align` | `Align` | Alignment of the header and cells (`Start` by default). |

## See also

- [`Selection`](/packages/tui/reference/tui/widgets/list/Selection): A cursor over `count` rows shown `height` at a time: the selected row and the first visible one.
- [`List`](/packages/tui/reference/tui/widgets/list/List): A list of text rows with one selected.
- [`Table`](/packages/tui/reference/tui/widgets/list/Table): Rows of cells under a header, with one row selected; keys and mouse as for `List`.
