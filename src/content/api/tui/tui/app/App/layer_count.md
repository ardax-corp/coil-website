---
slug: "tui/tui/app/App/layer_count"
package: "tui"
title: "App::layer_count"
description: "Number of layers, the base one included."
module: "tui::app"
kind: "method"
name: "layer_count"
parent: "App"
signature: "pub fn layer_count() -> int"
import: "use tui::app::{App};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/app.hy#L194"
order: 1
---

Number of layers, the base one included.

Called on a `App` value as `value.layer_count(…)`.

## Returns

`int`

## See also

- [`App`](/packages/tui/reference/tui/app/App): The application: a stack of layers (the root first, dialogs and popups on top), focus, event routing, key bindings, timers and drawing.
- [`App::top`](/packages/tui/reference/tui/app/App/top): The top layer, the one that gets input and focus.
- [`App::set_theme`](/packages/tui/reference/tui/app/App/set_theme): Draw with theme `t` from the next frame on.
- [`App::bind`](/packages/tui/reference/tui/app/App/bind): Run `f` when the key `spec` (`"ctrl+q"`, `"f1"`, as `cli::keys::describe_key` writes it) reaches the app unhandled.
- [`App::resize`](/packages/tui/reference/tui/app/App/resize): Set the screen size; the next `draw` repaints everything.
- [`App::invalidate`](/packages/tui/reference/tui/app/App/invalidate): Redraw everything on the next `draw` (after the terminal was cleared by someone else).
- [`App::cols`](/packages/tui/reference/tui/app/App/cols): Screen width in cells.
- [`App::rows`](/packages/tui/reference/tui/app/App/rows): Screen height in cells.
