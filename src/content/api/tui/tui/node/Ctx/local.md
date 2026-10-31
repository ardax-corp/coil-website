---
slug: "tui/tui/node/Ctx/local"
package: "tui"
title: "Ctx::local"
description: "Mouse position relative to the current node's corner."
module: "tui::node"
kind: "method"
name: "local"
parent: "Ctx"
signature: "pub fn local(MouseEvent m) -> (int, int)"
import: "use tui::node::{Ctx};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/node.hy#L466"
order: 14
---

Mouse position relative to the current node's corner.

Called on a `Ctx` value as `value.local(…)`.

## Parameters

| Name | Type |
|------|------|
| `m` | `MouseEvent` |

## Returns

`(int, int)`

## See also

- [`Ctx`](/packages/tui/reference/tui/node/Ctx): What handlers, callbacks and `render` get: the theme, the clock, who has focus, and requests to the app (quit, focus, layers, timers), which the app carries out after the handler returns.
- [`Ctx::quit`](/packages/tui/reference/tui/node/Ctx/quit): Stop the app after this event.
- [`Ctx::redraw`](/packages/tui/reference/tui/node/Ctx/redraw): Redraw even though nothing was handled.
- [`Ctx::has_focus`](/packages/tui/reference/tui/node/Ctx/has_focus): Whether the node being rendered or handling an event has focus.
- [`Ctx::focus_within`](/packages/tui/reference/tui/node/Ctx/focus_within): Whether focus is on the current node or inside it.
- [`Ctx::is_focused`](/packages/tui/reference/tui/node/Ctx/is_focused): Whether `n` has focus.
- [`Ctx::focus`](/packages/tui/reference/tui/node/Ctx/focus): Move focus to `n` (when it can take focus).
- [`Ctx::focus_next`](/packages/tui/reference/tui/node/Ctx/focus_next): Move focus to the next focusable node (as Tab does).
