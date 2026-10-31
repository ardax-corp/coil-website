---
slug: "tui/tui/node/Ctx/push_layer"
package: "tui"
title: "Ctx::push_layer"
description: "Open n as a layer on top (a dialog or popup). It takes the keyboard until it is popped."
module: "tui::node"
kind: "method"
name: "push_layer"
parent: "Ctx"
signature: "pub fn push_layer(Node n)"
import: "use tui::node::{Ctx};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/node.hy#L411"
order: 8
---

Open `n` as a layer on top (a dialog or popup). It takes the keyboard until it is popped.

Called on a `Ctx` value as `value.push_layer(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `Node` |

## See also

- [`Ctx`](/packages/tui/reference/tui/node/Ctx): What handlers, callbacks and `render` get: the theme, the clock, who has focus, and requests to the app (quit, focus, layers, timers), which the app carries out after the handler returns.
- [`Ctx::quit`](/packages/tui/reference/tui/node/Ctx/quit): Stop the app after this event.
- [`Ctx::redraw`](/packages/tui/reference/tui/node/Ctx/redraw): Redraw even though nothing was handled.
- [`Ctx::has_focus`](/packages/tui/reference/tui/node/Ctx/has_focus): Whether the node being rendered or handling an event has focus.
- [`Ctx::focus_within`](/packages/tui/reference/tui/node/Ctx/focus_within): Whether focus is on the current node or inside it.
- [`Ctx::is_focused`](/packages/tui/reference/tui/node/Ctx/is_focused): Whether `n` has focus.
- [`Ctx::focus`](/packages/tui/reference/tui/node/Ctx/focus): Move focus to `n` (when it can take focus).
- [`Ctx::focus_next`](/packages/tui/reference/tui/node/Ctx/focus_next): Move focus to the next focusable node (as Tab does).
