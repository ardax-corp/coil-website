---
slug: "tui/tui/widgets/list/List/new"
package: "tui"
title: "List::new"
description: "A list of items with the first selected, no marker and no callbacks."
module: "tui::widgets::list"
kind: "static method"
name: "new"
parent: "List"
signature: "pub static fn new(Vec<string> items) -> List"
import: "use tui::widgets::list::{List};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/list.coil#L168"
order: 0
---

A list of `items` with the first selected, no marker and no callbacks.

## Parameters

| Name | Type |
|------|------|
| `items` | `Vec<string>` |

## Returns

`List`

## See also

- [`List`](/packages/tui/reference/tui/widgets/list/List): A list of text rows with one selected.
- [`List::selected`](/packages/tui/reference/tui/widgets/list/List/selected): Index of the selected row.
- [`List::value`](/packages/tui/reference/tui/widgets/list/List/value): The selected item ("" when the list is empty).
- [`List::select`](/packages/tui/reference/tui/widgets/list/List/select): Select row `i` (clamped into range) and scroll it into view, without calling `on_select`.
- [`List::marked`](/packages/tui/reference/tui/widgets/list/List/marked): Draw `m` before the selected row (builder style).
- [`List::on_select`](/packages/tui/reference/tui/widgets/list/List/on_select): Call `f` when the selection moves (builder style).
- [`List::on_activate`](/packages/tui/reference/tui/widgets/list/List/on_activate): Call `f` on Enter (builder style).
- [`List::changed`](/packages/tui/reference/tui/widgets/list/List/changed): Call `on_select` when the selection is no longer `before`.
