---
slug: "tui/tui/app/App"
package: "tui"
title: "App"
description: "The application: a stack of layers (the root first, dialogs and popups on top), focus, event routing, key bindings, timers and drawing. It does no terminal I/O: tui::run::run_app drives one from a terminal and tui::testing::Harness from tests."
module: "tui::app"
kind: "class"
name: "App"
signature: "shared class App"
import: "use tui::app::{App};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/app.hy#L61"
order: 0
---

The application: a stack of layers (the root first, dialogs and popups on top), focus, event routing, key bindings, timers and drawing. It does no terminal I/O: [`tui::run::run_app`](/packages/tui/reference/tui/run/run_app) drives one from a terminal and [`tui::testing::Harness`](/packages/tui/reference/tui/testing/Harness) from tests.

Keys go to the focused node and bubble up to its ancestors; keys no
node consumed go to the [`bind`](/packages/tui/reference/tui/app/App/bind) bindings, then Tab / Shift-Tab move
focus and Ctrl-C quits.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `ctx` | `Ctx` | The context handlers get: theme, clock, focus and requests. |
| `running` | `bool` | `false` once something asked to quit; the runner then stops. |
| `last` | `Buffer` | The buffer of the last drawn frame. |

## Methods

| Name | Description |
|------|-------------|
| [`top`](/packages/tui/reference/tui/app/App/top) | The top layer, the one that gets input and focus. |
| [`layer_count`](/packages/tui/reference/tui/app/App/layer_count) | Number of layers, the base one included. |
| [`set_theme`](/packages/tui/reference/tui/app/App/set_theme) | Draw with theme `t` from the next frame on. |
| [`bind`](/packages/tui/reference/tui/app/App/bind) | Run `f` when the key `spec` (`"ctrl+q"`, `"f1"`, as [`cli::keys::describe_key`](/packages/cli/reference/cli/keys/describe_key) writes it) reaches the app unhandled. |
| [`resize`](/packages/tui/reference/tui/app/App/resize) | Set the screen size; the next [`draw`](/packages/tui/reference/tui/app/App/draw) repaints everything. |
| [`invalidate`](/packages/tui/reference/tui/app/App/invalidate) | Redraw everything on the next [`draw`](/packages/tui/reference/tui/app/App/draw) (after the terminal was cleared by someone else). |
| [`cols`](/packages/tui/reference/tui/app/App/cols) | Screen width in cells. |
| [`rows`](/packages/tui/reference/tui/app/App/rows) | Screen height in cells. |
| [`find`](/packages/tui/reference/tui/app/App/find) | The first node with this id, in any layer (top first). |
| [`focused`](/packages/tui/reference/tui/app/App/focused) | The node with keyboard focus. |
| [`focused_id`](/packages/tui/reference/tui/app/App/focused_id) | Id of the focused node ("" when none or unnamed). |
| [`focus_chain`](/packages/tui/reference/tui/app/App/focus_chain) | Focusable nodes of the top layer, in Tab order. |
| [`focus`](/packages/tui/reference/tui/app/App/focus) | Focus `n` if it is in the top layer's focus chain. |
| [`focus_id`](/packages/tui/reference/tui/app/App/focus_id) | Focus the node named `id` (see [`focus`](/packages/tui/reference/tui/app/App/focus)); false when there is none or it cannot take focus. |
| [`focus_step`](/packages/tui/reference/tui/app/App/focus_step) | Move focus `step` places along the chain (wrapping). |
| [`push_layer`](/packages/tui/reference/tui/app/App/push_layer) | Open `n` as a layer on top; it takes input and focus until popped. |
| [`pop_layer`](/packages/tui/reference/tui/app/App/pop_layer) | Close the top layer (never the base one). |
| [`dispatch`](/packages/tui/reference/tui/app/App/dispatch) | Route one event. |
| [`tick`](/packages/tui/reference/tui/app/App/tick) | Advance the clock to `now` ms and run the timers that are due. |
| [`wait_ms`](/packages/tui/reference/tui/app/App/wait_ms) | Milliseconds until the next timer from `now` (-1 = none), for a runner's read timeout. |
| [`needs_draw`](/packages/tui/reference/tui/app/App/needs_draw) | Whether the next [`draw`](/packages/tui/reference/tui/app/App/draw) has anything to do. |
| [`draw`](/packages/tui/reference/tui/app/App/draw) | Lay out and paint every layer, and return the escapes that bring the terminal up to date ("" when nothing changed). |
| [`cursor`](/packages/tui/reference/tui/app/App/cursor) | Where the last frame put the cursor, if it is shown. |

## Examples

```coil
use cli::color::ColorLevel;
use tui::app::app;
use tui::node::Ctx;
use tui::widgets::text::text;
use cli::keys::{Key, CTRL, key};
use tests::assert;
let a = app(text("hi"), ColorLevel::None);
a.resize(10, 2);
a.bind("ctrl+q", fn (Ctx c) => c.quit());
assert!(a.draw() != "");
assert!(a.last.row_text(0) == "hi        ");
a.dispatch(key(Key::Char(113), CTRL));
assert!(!a.running);
```

## See also

- [`tui::run::run_app`](/packages/tui/reference/tui/run/run_app)
- [`tui::testing::Harness`](/packages/tui/reference/tui/testing/Harness)
- [`App::bind`](/packages/tui/reference/tui/app/App/bind)
