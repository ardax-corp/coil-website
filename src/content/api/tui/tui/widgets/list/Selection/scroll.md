---
slug: "tui/tui/widgets/list/Selection/scroll"
package: "tui"
title: "Selection::scroll"
description: "Scroll the view by n rows without moving the selection out of it."
module: "tui::widgets::list"
kind: "method"
name: "scroll"
parent: "Selection"
signature: "pub fn scroll(int n, int count, int height)"
import: "use tui::widgets::list::{Selection};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/list.hy#L82"
order: 2
---

Scroll the view by `n` rows without moving the selection out of it.

Called on a `Selection` value as `value.scroll(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |
| `count` | `int` |
| `height` | `int` |

## See also

- [`Selection`](/packages/tui/reference/tui/widgets/list/Selection): A cursor over `count` rows shown `height` at a time: the selected row and the first visible one.
- [`Selection::fit`](/packages/tui/reference/tui/widgets/list/Selection/fit): Keep both in range and the selected row in view.
- [`Selection::key`](/packages/tui/reference/tui/widgets/list/Selection/key): Apply a navigation key; true when it was one (even at an edge).
