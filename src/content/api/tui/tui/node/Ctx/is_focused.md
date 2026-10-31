---
slug: "tui/tui/node/Ctx/is_focused"
package: "tui"
title: "Ctx::is_focused"
description: "Whether n has focus."
module: "tui::node"
kind: "method"
name: "is_focused"
parent: "Ctx"
signature: "pub fn is_focused(Node n) -> bool"
import: "use tui::node::{Ctx};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/node.coil#L390"
order: 4
---

Whether `n` has focus.

Called on a `Ctx` value as `value.is_focused(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `Node` |

## Returns

`bool`

## See also

- [`Ctx`](/packages/tui/reference/tui/node/Ctx): What handlers, callbacks and `render` get: the theme, the clock, who has focus, and requests to the app (quit, focus, layers, timers), which the app carries out after the handler returns.
- [`Ctx::quit`](/packages/tui/reference/tui/node/Ctx/quit): Stop the app after this event.
- [`Ctx::redraw`](/packages/tui/reference/tui/node/Ctx/redraw): Redraw even though nothing was handled.
- [`Ctx::has_focus`](/packages/tui/reference/tui/node/Ctx/has_focus): Whether the node being rendered or handling an event has focus.
- [`Ctx::focus_within`](/packages/tui/reference/tui/node/Ctx/focus_within): Whether focus is on the current node or inside it.
- [`Ctx::focus`](/packages/tui/reference/tui/node/Ctx/focus): Move focus to `n` (when it can take focus).
- [`Ctx::focus_next`](/packages/tui/reference/tui/node/Ctx/focus_next): Move focus to the next focusable node (as Tab does).
- [`Ctx::focus_prev`](/packages/tui/reference/tui/node/Ctx/focus_prev): Move focus to the previous focusable node (as Shift-Tab does).
