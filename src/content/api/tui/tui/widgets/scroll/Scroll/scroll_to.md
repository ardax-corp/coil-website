---
slug: "tui/tui/widgets/scroll/Scroll/scroll_to"
package: "tui"
title: "Scroll::scroll_to"
description: "Scroll so row y of the content is at the top (clamped into range)."
module: "tui::widgets::scroll"
kind: "method"
name: "scroll_to"
parent: "Scroll"
signature: "pub fn scroll_to(int y)"
import: "use tui::widgets::scroll::{Scroll};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/scroll.coil#L47"
order: 1
---

Scroll so row `y` of the content is at the top (clamped into range).

Called on a `Scroll` value as `value.scroll_to(…)`.

## Parameters

| Name | Type |
|------|------|
| `y` | `int` |

## See also

- [`Scroll`](/packages/tui/reference/tui/widgets/scroll/Scroll): Shows `child` at its measured height through a window, scrolled by PageUp/PageDown, the wheel, and (when the scroll itself has focus, because nothing inside can take it) Up/Down/Home/End.
- [`Scroll::new`](/packages/tui/reference/tui/widgets/scroll/Scroll/new): A scroll view over `child`, at the top.
- [`Scroll::scroll_by`](/packages/tui/reference/tui/widgets/scroll/Scroll/scroll_by): Scroll down `n` rows (up when negative).
- [`Scroll::follow`](/packages/tui/reference/tui/widgets/scroll/Scroll/follow): Scroll so the focused node (when it is inside) is visible.
