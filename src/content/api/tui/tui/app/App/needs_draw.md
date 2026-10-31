---
slug: "tui/tui/app/App/needs_draw"
package: "tui"
title: "App::needs_draw"
description: "Whether the next draw has anything to do."
module: "tui::app"
kind: "method"
name: "needs_draw"
parent: "App"
signature: "pub fn needs_draw() -> bool"
import: "use tui::app::{App};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/app.hy#L545"
order: 20
---

Whether the next [`draw`](/packages/tui/reference/tui/app/App/draw) has anything to do.

Called on a `App` value as `value.needs_draw(…)`.

## Returns

`bool`

## See also

- [`App::draw`](/packages/tui/reference/tui/app/App/draw)
- [`App`](/packages/tui/reference/tui/app/App): The application: a stack of layers (the root first, dialogs and popups on top), focus, event routing, key bindings, timers and drawing.
- [`App::top`](/packages/tui/reference/tui/app/App/top): The top layer, the one that gets input and focus.
- [`App::layer_count`](/packages/tui/reference/tui/app/App/layer_count): Number of layers, the base one included.
- [`App::set_theme`](/packages/tui/reference/tui/app/App/set_theme): Draw with theme `t` from the next frame on.
- [`App::bind`](/packages/tui/reference/tui/app/App/bind): Run `f` when the key `spec` (`"ctrl+q"`, `"f1"`, as `cli::keys::describe_key` writes it) reaches the app unhandled.
- [`App::resize`](/packages/tui/reference/tui/app/App/resize): Set the screen size; the next `draw` repaints everything.
- [`App::invalidate`](/packages/tui/reference/tui/app/App/invalidate): Redraw everything on the next `draw` (after the terminal was cleared by someone else).
