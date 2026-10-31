---
slug: "tui/tui/node/Timer"
package: "tui"
title: "Timer"
description: "A scheduled callback."
module: "tui::node"
kind: "class"
name: "Timer"
signature: "shared class Timer"
import: "use tui::node::{Timer};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/node.coil#L242"
order: 2
---

A scheduled callback.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | `int` | The id `after` / `every` returned, for [`Ctx.cancel`](/packages/tui/reference/tui/node/Ctx/cancel). |
| `due` | `int` | When it runs next, in ms on the app's clock. |
| `every` | `int` | Repeat interval in ms (0 = once). |
| `f` | `fn(Ctx) -> ()` | The callback. |
| `cancelled` | `bool` | Set by [`Ctx.cancel`](/packages/tui/reference/tui/node/Ctx/cancel); the app drops it. |

## See also

- [`Ctx::cancel`](/packages/tui/reference/tui/node/Ctx/cancel)
- [`Node`](/packages/tui/reference/tui/node/Node): A component in the tree.
- [`Ctx`](/packages/tui/reference/tui/node/Ctx): What handlers, callbacks and `render` get: the theme, the clock, who has focus, and requests to the app (quit, focus, layers, timers), which the app carries out after the handler returns.
