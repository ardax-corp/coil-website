---
slug: "tui/tui/widgets/list/List/selected"
package: "tui"
title: "List::selected"
description: "Index of the selected row."
module: "tui::widgets::list"
kind: "method"
name: "selected"
parent: "List"
signature: "pub fn selected() -> int"
import: "use tui::widgets::list::{List};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/list.hy#L173"
order: 1
---

Index of the selected row.

Called on a `List` value as `value.selected(…)`.

## Returns

`int`

## See also

- [`List`](/packages/tui/reference/tui/widgets/list/List): A list of text rows with one selected.
- [`List::new`](/packages/tui/reference/tui/widgets/list/List/new): A list of `items` with the first selected, no marker and no callbacks.
- [`List::value`](/packages/tui/reference/tui/widgets/list/List/value): The selected item ("" when the list is empty).
- [`List::select`](/packages/tui/reference/tui/widgets/list/List/select): Select row `i` (clamped into range) and scroll it into view, without calling `on_select`.
- [`List::marked`](/packages/tui/reference/tui/widgets/list/List/marked): Draw `m` before the selected row (builder style).
- [`List::on_select`](/packages/tui/reference/tui/widgets/list/List/on_select): Call `f` when the selection moves (builder style).
- [`List::on_activate`](/packages/tui/reference/tui/widgets/list/List/on_activate): Call `f` on Enter (builder style).
- [`List::changed`](/packages/tui/reference/tui/widgets/list/List/changed): Call `on_select` when the selection is no longer `before`.
