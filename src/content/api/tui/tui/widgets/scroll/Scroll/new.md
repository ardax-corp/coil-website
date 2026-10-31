---
slug: "tui/tui/widgets/scroll/Scroll/new"
package: "tui"
title: "Scroll::new"
description: "A scroll view over child, at the top."
module: "tui::widgets::scroll"
kind: "static method"
name: "new"
parent: "Scroll"
signature: "pub static fn new(Node child) -> Scroll"
import: "use tui::widgets::scroll::{Scroll};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/scroll.hy#L40"
order: 0
---

A scroll view over `child`, at the top.

## Parameters

| Name | Type |
|------|------|
| `child` | `Node` |

## Returns

`Scroll`

## See also

- [`Scroll`](/packages/tui/reference/tui/widgets/scroll/Scroll): Shows `child` at its measured height through a window, scrolled by PageUp/PageDown, the wheel, and (when the scroll itself has focus, because nothing inside can take it) Up/Down/Home/End.
- [`Scroll::scroll_to`](/packages/tui/reference/tui/widgets/scroll/Scroll/scroll_to): Scroll so row `y` of the content is at the top (clamped into range).
- [`Scroll::scroll_by`](/packages/tui/reference/tui/widgets/scroll/Scroll/scroll_by): Scroll down `n` rows (up when negative).
- [`Scroll::follow`](/packages/tui/reference/tui/widgets/scroll/Scroll/follow): Scroll so the focused node (when it is inside) is visible.
