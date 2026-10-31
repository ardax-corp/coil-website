---
slug: "tui/tui/widgets/list/Selection/fit"
package: "tui"
title: "Selection::fit"
description: "Keep both in range and the selected row in view."
module: "tui::widgets::list"
kind: "method"
name: "fit"
parent: "Selection"
signature: "pub fn fit(int count, int height)"
import: "use tui::widgets::list::{Selection};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/list.hy#L41"
order: 0
---

Keep both in range and the selected row in view.

Called on a `Selection` value as `value.fit(…)`.

## Parameters

| Name | Type |
|------|------|
| `count` | `int` |
| `height` | `int` |

## See also

- [`Selection`](/packages/tui/reference/tui/widgets/list/Selection): A cursor over `count` rows shown `height` at a time: the selected row and the first visible one.
- [`Selection::key`](/packages/tui/reference/tui/widgets/list/Selection/key): Apply a navigation key; true when it was one (even at an edge).
- [`Selection::scroll`](/packages/tui/reference/tui/widgets/list/Selection/scroll): Scroll the view by `n` rows without moving the selection out of it.
