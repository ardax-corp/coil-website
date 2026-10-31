---
slug: "tui/tui/node/Ctx/cancel"
package: "tui"
title: "Ctx::cancel"
description: "Cancel the timer id (from after or every)."
module: "tui::node"
kind: "method"
name: "cancel"
parent: "Ctx"
signature: "pub fn cancel(int id)"
import: "use tui::node::{Ctx};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/node.hy#L442"
order: 12
---

Cancel the timer `id` (from [`after`](/packages/tui/reference/tui/node/Ctx/after) or [`every`](/packages/tui/reference/tui/node/Ctx/every)).

Called on a `Ctx` value as `value.cancel(…)`.

## Parameters

| Name | Type |
|------|------|
| `id` | `int` |

## See also

- [`Ctx::after`](/packages/tui/reference/tui/node/Ctx/after)
- [`Ctx::every`](/packages/tui/reference/tui/node/Ctx/every)
- [`Ctx`](/packages/tui/reference/tui/node/Ctx): What handlers, callbacks and `render` get: the theme, the clock, who has focus, and requests to the app (quit, focus, layers, timers), which the app carries out after the handler returns.
- [`Ctx::quit`](/packages/tui/reference/tui/node/Ctx/quit): Stop the app after this event.
- [`Ctx::redraw`](/packages/tui/reference/tui/node/Ctx/redraw): Redraw even though nothing was handled.
- [`Ctx::has_focus`](/packages/tui/reference/tui/node/Ctx/has_focus): Whether the node being rendered or handling an event has focus.
- [`Ctx::focus_within`](/packages/tui/reference/tui/node/Ctx/focus_within): Whether focus is on the current node or inside it.
- [`Ctx::is_focused`](/packages/tui/reference/tui/node/Ctx/is_focused): Whether `n` has focus.
