---
slug: "tui/tui/node/Ctx/every"
package: "tui"
title: "Ctx::every"
description: "Run f every ms milliseconds (at least 1)."
module: "tui::node"
kind: "method"
name: "every"
parent: "Ctx"
signature: "pub fn every(int ms, fn(Ctx) -> () f) -> int"
import: "use tui::node::{Ctx};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/node.coil#L433"
order: 11
---

Run `f` every `ms` milliseconds (at least 1).

Called on a `Ctx` value as `value.every(…)`.

## Parameters

| Name | Type |
|------|------|
| `ms` | `int` |
| `f` | `fn(Ctx) -> ()` |

## Returns

`int`

## See also

- [`Ctx`](/packages/tui/reference/tui/node/Ctx): What handlers, callbacks and `render` get: the theme, the clock, who has focus, and requests to the app (quit, focus, layers, timers), which the app carries out after the handler returns.
- [`Ctx::quit`](/packages/tui/reference/tui/node/Ctx/quit): Stop the app after this event.
- [`Ctx::redraw`](/packages/tui/reference/tui/node/Ctx/redraw): Redraw even though nothing was handled.
- [`Ctx::has_focus`](/packages/tui/reference/tui/node/Ctx/has_focus): Whether the node being rendered or handling an event has focus.
- [`Ctx::focus_within`](/packages/tui/reference/tui/node/Ctx/focus_within): Whether focus is on the current node or inside it.
- [`Ctx::is_focused`](/packages/tui/reference/tui/node/Ctx/is_focused): Whether `n` has focus.
- [`Ctx::focus`](/packages/tui/reference/tui/node/Ctx/focus): Move focus to `n` (when it can take focus).
- [`Ctx::focus_next`](/packages/tui/reference/tui/node/Ctx/focus_next): Move focus to the next focusable node (as Tab does).
