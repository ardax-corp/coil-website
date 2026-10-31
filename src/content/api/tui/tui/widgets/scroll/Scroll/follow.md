---
slug: "tui/tui/widgets/scroll/Scroll/follow"
package: "tui"
title: "Scroll::follow"
description: "Scroll so the focused node (when it is inside) is visible."
module: "tui::widgets::scroll"
kind: "method"
name: "follow"
parent: "Scroll"
signature: "pub fn follow(Ctx ctx)"
import: "use tui::widgets::scroll::{Scroll};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/scroll.hy#L57"
order: 3
---

Scroll so the focused node (when it is inside) is visible.

Called on a `Scroll` value as `value.follow(…)`.

## Parameters

| Name | Type |
|------|------|
| `ctx` | `Ctx` |

## See also

- [`Scroll`](/packages/tui/reference/tui/widgets/scroll/Scroll): Shows `child` at its measured height through a window, scrolled by PageUp/PageDown, the wheel, and (when the scroll itself has focus, because nothing inside can take it) Up/Down/Home/End.
- [`Scroll::new`](/packages/tui/reference/tui/widgets/scroll/Scroll/new): A scroll view over `child`, at the top.
- [`Scroll::scroll_to`](/packages/tui/reference/tui/widgets/scroll/Scroll/scroll_to): Scroll so row `y` of the content is at the top (clamped into range).
- [`Scroll::scroll_by`](/packages/tui/reference/tui/widgets/scroll/Scroll/scroll_by): Scroll down `n` rows (up when negative).
