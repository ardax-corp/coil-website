---
slug: "tui/tui/app/App/push_layer"
package: "tui"
title: "App::push_layer"
description: "Open n as a layer on top; it takes input and focus until popped."
module: "tui::app"
kind: "method"
name: "push_layer"
parent: "App"
signature: "pub fn push_layer(Node n)"
import: "use tui::app::{App};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/app.hy#L335"
order: 15
---

Open `n` as a layer on top; it takes input and focus until popped.

Called on a `App` value as `value.push_layer(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `Node` |

## See also

- [`App`](/packages/tui/reference/tui/app/App): The application: a stack of layers (the root first, dialogs and popups on top), focus, event routing, key bindings, timers and drawing.
- [`App::top`](/packages/tui/reference/tui/app/App/top): The top layer, the one that gets input and focus.
- [`App::layer_count`](/packages/tui/reference/tui/app/App/layer_count): Number of layers, the base one included.
- [`App::set_theme`](/packages/tui/reference/tui/app/App/set_theme): Draw with theme `t` from the next frame on.
- [`App::bind`](/packages/tui/reference/tui/app/App/bind): Run `f` when the key `spec` (`"ctrl+q"`, `"f1"`, as `cli::keys::describe_key` writes it) reaches the app unhandled.
- [`App::resize`](/packages/tui/reference/tui/app/App/resize): Set the screen size; the next `draw` repaints everything.
- [`App::invalidate`](/packages/tui/reference/tui/app/App/invalidate): Redraw everything on the next `draw` (after the terminal was cleared by someone else).
- [`App::cols`](/packages/tui/reference/tui/app/App/cols): Screen width in cells.
