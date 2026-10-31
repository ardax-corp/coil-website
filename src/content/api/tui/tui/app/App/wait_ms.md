---
slug: "tui/tui/app/App/wait_ms"
package: "tui"
title: "App::wait_ms"
description: "Milliseconds until the next timer from now (-1 = none), for a runner's read timeout."
module: "tui::app"
kind: "method"
name: "wait_ms"
parent: "App"
signature: "pub fn wait_ms(int now) -> int"
import: "use tui::app::{App};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/app.hy#L532"
order: 19
---

Milliseconds until the next timer from `now` (-1 = none), for a runner's read timeout.

Called on a `App` value as `value.wait_ms(…)`.

## Parameters

| Name | Type |
|------|------|
| `now` | `int` |

## Returns

`int`

## See also

- [`App`](/packages/tui/reference/tui/app/App): The application: a stack of layers (the root first, dialogs and popups on top), focus, event routing, key bindings, timers and drawing.
- [`App::top`](/packages/tui/reference/tui/app/App/top): The top layer, the one that gets input and focus.
- [`App::layer_count`](/packages/tui/reference/tui/app/App/layer_count): Number of layers, the base one included.
- [`App::set_theme`](/packages/tui/reference/tui/app/App/set_theme): Draw with theme `t` from the next frame on.
- [`App::bind`](/packages/tui/reference/tui/app/App/bind): Run `f` when the key `spec` (`"ctrl+q"`, `"f1"`, as `cli::keys::describe_key` writes it) reaches the app unhandled.
- [`App::resize`](/packages/tui/reference/tui/app/App/resize): Set the screen size; the next `draw` repaints everything.
- [`App::invalidate`](/packages/tui/reference/tui/app/App/invalidate): Redraw everything on the next `draw` (after the terminal was cleared by someone else).
- [`App::cols`](/packages/tui/reference/tui/app/App/cols): Screen width in cells.
