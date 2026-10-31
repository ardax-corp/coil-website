---
slug: "tui/tui/widgets/list/List"
package: "tui"
title: "List"
description: "A list of text rows with one selected. Up/Down (or k/j), PageUp/ PageDown, Home/End move, the wheel scrolls, a click selects, Enter activates. Keep the List to read the selection, and mount it to put it in the tree."
module: "tui::widgets::list"
kind: "class"
name: "List"
signature: "shared class List"
import: "use tui::widgets::list::{List};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/list.hy#L148"
order: 1
---

A list of text rows with one selected. Up/Down (or k/j), PageUp/ PageDown, Home/End move, the wheel scrolls, a click selects, Enter activates. Keep the `List` to read the selection, and `mount` it to put it in the tree.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `items` | `Vec<string>` | The rows. |
| `sel` | `Selection` | The selected row and scroll position. |
| `marker` | `string` | Drawn before the selected row ("" for none; other rows get as many spaces). |
| `on_select` | `fn(int, Ctx) -> ()` | Called with the new index when the selection moves. |
| `on_activate` | `fn(int, Ctx) -> ()` | Called with the selected index on Enter (or a click on the selected row). |
| `height` | `int` | Rows shown in the last frame. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/tui/reference/tui/widgets/list/List/new) | A list of `items` with the first selected, no marker and no callbacks. |

## Methods

| Name | Description |
|------|-------------|
| [`selected`](/packages/tui/reference/tui/widgets/list/List/selected) | Index of the selected row. |
| [`value`](/packages/tui/reference/tui/widgets/list/List/value) | The selected item ("" when the list is empty). |
| [`select`](/packages/tui/reference/tui/widgets/list/List/select) | Select row `i` (clamped into range) and scroll it into view, without calling [`on_select`](/packages/tui/reference/tui/widgets/list/List/on_select). |
| [`marked`](/packages/tui/reference/tui/widgets/list/List/marked) | Draw `m` before the selected row (builder style). |
| [`on_select`](/packages/tui/reference/tui/widgets/list/List/on_select) | Call `f` when the selection moves (builder style). |
| [`on_activate`](/packages/tui/reference/tui/widgets/list/List/on_activate) | Call `f` on Enter (builder style). |
| [`changed`](/packages/tui/reference/tui/widgets/list/List/changed) | Call [`on_select`](/packages/tui/reference/tui/widgets/list/List/on_select) when the selection is no longer `before`. |
| [`activate`](/packages/tui/reference/tui/widgets/list/List/activate) | Call [`on_activate`](/packages/tui/reference/tui/widgets/list/List/on_activate) for the selected row (nothing on an empty list). |

## Trait implementations

- `Component` for `List`

## Examples

```coil
use cell::Ref;
use tui::node::{Ctx, mount};
use tui::testing::harness;
use tui::widgets::list::list;
use tests::assert;
let opened = Ref::new(-1);
let l = list(["apple", "banana", "cherry"]).marked("> ");
l.on_activate(fn (int i, Ctx c) use (opened) => opened.set(i));
let h = harness(mount(l), 10, 3);
h.keys("down down up enter");
assert!(l.value() == "banana" && opened.get() == 1);
assert!(h.row(1) == "> banana  ");
```

## See also

- [`Selection`](/packages/tui/reference/tui/widgets/list/Selection): A cursor over `count` rows shown `height` at a time: the selected row and the first visible one.
- [`TableColumn`](/packages/tui/reference/tui/widgets/list/TableColumn): A table column: header, width constraint and alignment.
- [`Table`](/packages/tui/reference/tui/widgets/list/Table): Rows of cells under a header, with one row selected; keys and mouse as for `List`.
