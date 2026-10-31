---
slug: "tui/tui/widgets/list/Selection"
package: "tui"
title: "Selection"
description: "A cursor over count rows shown height at a time: the selected row and the first visible one."
module: "tui::widgets::list"
kind: "class"
name: "Selection"
signature: "class Selection"
import: "use tui::widgets::list::{Selection};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/list.coil#L27"
order: 0
---

A cursor over `count` rows shown `height` at a time: the selected row and the first visible one.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `selected` | `int` | Index of the selected row. |
| `offset` | `int` | Index of the first visible row. |

## Methods

| Name | Description |
|------|-------------|
| [`fit`](/packages/tui/reference/tui/widgets/list/Selection/fit) | Keep both in range and the selected row in view. |
| [`key`](/packages/tui/reference/tui/widgets/list/Selection/key) | Apply a navigation key; true when it was one (even at an edge). |
| [`scroll`](/packages/tui/reference/tui/widgets/list/Selection/scroll) | Scroll the view by `n` rows without moving the selection out of it. |

## See also

- [`List`](/packages/tui/reference/tui/widgets/list/List): A list of text rows with one selected.
- [`TableColumn`](/packages/tui/reference/tui/widgets/list/TableColumn): A table column: header, width constraint and alignment.
- [`Table`](/packages/tui/reference/tui/widgets/list/Table): Rows of cells under a header, with one row selected; keys and mouse as for `List`.
