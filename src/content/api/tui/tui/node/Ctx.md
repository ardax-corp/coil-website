---
slug: "tui/tui/node/Ctx"
package: "tui"
title: "Ctx"
description: "What handlers, callbacks and render get: the theme, the clock, who has focus, and requests to the app (quit, focus, layers, timers), which the app carries out after the handler returns."
module: "tui::node"
kind: "class"
name: "Ctx"
signature: "shared class Ctx"
import: "use tui::node::{Ctx};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/node.hy#L258"
order: 3
---

What handlers, callbacks and `render` get: the theme, the clock, who has focus, and requests to the app (quit, focus, layers, timers), which the app carries out after the handler returns.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `theme` | `Theme` | The styles to draw with. |
| `now` | `int` | Milliseconds, from the app's clock. |
| `current` | `Option<Node>` | The node being rendered or handling an event. |
| `focused` | `Option<Node>` | The node that has keyboard focus. |
| `quit_requested` | `bool` | Set by [`quit`](/packages/tui/reference/tui/node/Ctx/quit). |
| `redraw_requested` | `bool` | Set by [`redraw`](/packages/tui/reference/tui/node/Ctx/redraw). |
| `focus_request` | `Option<Node>` | Set by [`focus`](/packages/tui/reference/tui/node/Ctx/focus). |
| `focus_step` | `int` | +1 next, -1 previous, 0 none. |
| `pushes` | `Vec<Node>` | Layers [`push_layer`](/packages/tui/reference/tui/node/Ctx/push_layer) opened since the app last looked. |
| `pops` | `int` | How many [`pop_layer`](/packages/tui/reference/tui/node/Ctx/pop_layer) calls are pending. |
| `timers` | `Vec<Timer>` | Scheduled callbacks. |

## Methods

| Name | Description |
|------|-------------|
| [`quit`](/packages/tui/reference/tui/node/Ctx/quit) | Stop the app after this event. |
| [`redraw`](/packages/tui/reference/tui/node/Ctx/redraw) | Redraw even though nothing was handled. |
| [`has_focus`](/packages/tui/reference/tui/node/Ctx/has_focus) | Whether the node being rendered or handling an event has focus. |
| [`focus_within`](/packages/tui/reference/tui/node/Ctx/focus_within) | Whether focus is on the current node or inside it. |
| [`is_focused`](/packages/tui/reference/tui/node/Ctx/is_focused) | Whether `n` has focus. |
| [`focus`](/packages/tui/reference/tui/node/Ctx/focus) | Move focus to `n` (when it can take focus). |
| [`focus_next`](/packages/tui/reference/tui/node/Ctx/focus_next) | Move focus to the next focusable node (as Tab does). |
| [`focus_prev`](/packages/tui/reference/tui/node/Ctx/focus_prev) | Move focus to the previous focusable node (as Shift-Tab does). |
| [`push_layer`](/packages/tui/reference/tui/node/Ctx/push_layer) | Open `n` as a layer on top (a dialog or popup). |
| [`pop_layer`](/packages/tui/reference/tui/node/Ctx/pop_layer) | Close the top layer and give focus back to where it was. |
| [`after`](/packages/tui/reference/tui/node/Ctx/after) | Run `f` once after `ms` milliseconds. |
| [`every`](/packages/tui/reference/tui/node/Ctx/every) | Run `f` every `ms` milliseconds (at least 1). |
| [`cancel`](/packages/tui/reference/tui/node/Ctx/cancel) | Cancel the timer `id` (from [`after`](/packages/tui/reference/tui/node/Ctx/after) or [`every`](/packages/tui/reference/tui/node/Ctx/every)). |
| [`next_due`](/packages/tui/reference/tui/node/Ctx/next_due) | The earliest timer deadline, if any (for the runner's read timeout). |
| [`local`](/packages/tui/reference/tui/node/Ctx/local) | Mouse position relative to the current node's corner. |

## See also

- [`Ctx::quit`](/packages/tui/reference/tui/node/Ctx/quit)
- [`Ctx::redraw`](/packages/tui/reference/tui/node/Ctx/redraw)
- [`Ctx::focus`](/packages/tui/reference/tui/node/Ctx/focus)
- [`Ctx::push_layer`](/packages/tui/reference/tui/node/Ctx/push_layer)
- [`Ctx::pop_layer`](/packages/tui/reference/tui/node/Ctx/pop_layer)
- [`Node`](/packages/tui/reference/tui/node/Node): A component in the tree.
- [`Timer`](/packages/tui/reference/tui/node/Timer): A scheduled callback.
