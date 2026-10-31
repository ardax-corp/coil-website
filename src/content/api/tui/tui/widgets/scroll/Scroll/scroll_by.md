---
slug: "tui/tui/widgets/scroll/Scroll/scroll_by"
package: "tui"
title: "Scroll::scroll_by"
description: "Scroll down n rows (up when negative)."
module: "tui::widgets::scroll"
kind: "method"
name: "scroll_by"
parent: "Scroll"
signature: "pub fn scroll_by(int n)"
import: "use tui::widgets::scroll::{Scroll};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/scroll.hy#L52"
order: 2
---

Scroll down `n` rows (up when negative).

Called on a `Scroll` value as `value.scroll_by(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## See also

- [`Scroll`](/packages/tui/reference/tui/widgets/scroll/Scroll): Shows `child` at its measured height through a window, scrolled by PageUp/PageDown, the wheel, and (when the scroll itself has focus, because nothing inside can take it) Up/Down/Home/End.
- [`Scroll::new`](/packages/tui/reference/tui/widgets/scroll/Scroll/new): A scroll view over `child`, at the top.
- [`Scroll::scroll_to`](/packages/tui/reference/tui/widgets/scroll/Scroll/scroll_to): Scroll so row `y` of the content is at the top (clamped into range).
- [`Scroll::follow`](/packages/tui/reference/tui/widgets/scroll/Scroll/follow): Scroll so the focused node (when it is inside) is visible.
