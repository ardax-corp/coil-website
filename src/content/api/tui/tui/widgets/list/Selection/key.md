---
slug: "tui/tui/widgets/list/Selection/key"
package: "tui"
title: "Selection::key"
description: "Apply a navigation key; true when it was one (even at an edge)."
module: "tui::widgets::list"
kind: "method"
name: "key"
parent: "Selection"
signature: "pub fn key(string k, int count, int height) -> bool"
import: "use tui::widgets::list::{Selection};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/list.coil#L59"
order: 1
---

Apply a navigation key; true when it was one (even at an edge).

Called on a `Selection` value as `value.key(…)`.

## Parameters

| Name | Type |
|------|------|
| `k` | `string` |
| `count` | `int` |
| `height` | `int` |

## Returns

`bool`

## See also

- [`Selection`](/packages/tui/reference/tui/widgets/list/Selection): A cursor over `count` rows shown `height` at a time: the selected row and the first visible one.
- [`Selection::fit`](/packages/tui/reference/tui/widgets/list/Selection/fit): Keep both in range and the selected row in view.
- [`Selection::scroll`](/packages/tui/reference/tui/widgets/list/Selection/scroll): Scroll the view by `n` rows without moving the selection out of it.
