---
slug: "tui/tui/widgets/scroll/Scroll"
package: "tui"
title: "Scroll"
description: "Shows child at its measured height through a window, scrolled by PageUp/PageDown, the wheel, and (when the scroll itself has focus, because nothing inside can take it) Up/Down/Home/End. Keeps the focused node inside it in view."
module: "tui::widgets::scroll"
kind: "class"
name: "Scroll"
signature: "shared class Scroll"
import: "use tui::widgets::scroll::{Scroll};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/scroll.hy#L23"
order: 0
---

Shows `child` at its measured height through a window, scrolled by PageUp/PageDown, the wheel, and (when the scroll itself has focus, because nothing inside can take it) Up/Down/Home/End. Keeps the focused node inside it in view.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `child` | `Node` | The scrolled content. |
| `kids` | `Vec<Node>` | `[child]`, for `children`. |
| `offset` | `int` | Rows scrolled past at the top. |
| `content_h` | `int` | The content's measured height in the last frame. |
| `view_h` | `int` | Rows visible in the last frame. |
| `content_top` | `int` | Absolute row of the content's top in the last frame. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/tui/reference/tui/widgets/scroll/Scroll/new) | A scroll view over `child`, at the top. |

## Methods

| Name | Description |
|------|-------------|
| [`scroll_to`](/packages/tui/reference/tui/widgets/scroll/Scroll/scroll_to) | Scroll so row `y` of the content is at the top (clamped into range). |
| [`scroll_by`](/packages/tui/reference/tui/widgets/scroll/Scroll/scroll_by) | Scroll down `n` rows (up when negative). |
| [`follow`](/packages/tui/reference/tui/widgets/scroll/Scroll/follow) | Scroll so the focused node (when it is inside) is visible. |

## Trait implementations

- `Component` for `Scroll`
