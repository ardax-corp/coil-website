---
slug: "tui/tui/testing/Harness"
package: "tui"
title: "Harness"
description: "A headless app of a fixed size, drawn after every input: the way to test a UI. Send keys, text, clicks and time, then read the screen back as text."
module: "tui::testing"
kind: "class"
name: "Harness"
signature: "shared class Harness"
import: "use tui::testing::{Harness};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/testing.coil#L151"
order: 0
---

A headless app of a fixed size, drawn after every input: the way to test a UI. Send keys, text, clicks and time, then read the screen back as text.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `app` | `App` | The app being driven. |
| `now` | `int` | The test clock in ms. |
| `out` | `string` | Escapes from the last draw. |

## Methods

| Name | Description |
|------|-------------|
| [`draw`](/packages/tui/reference/tui/testing/Harness/draw) | Draw now and return the escapes (also kept in `out`). |
| [`send`](/packages/tui/reference/tui/testing/Harness/send) | Dispatch `e` and redraw. |
| [`key`](/packages/tui/reference/tui/testing/Harness/key) | Send the key `spec` (see [`parse_key`](/packages/tui/reference/tui/testing/parse_key)) and redraw. |
| [`keys`](/packages/tui/reference/tui/testing/Harness/keys) | Several key specs separated by spaces. |
| [`type_text`](/packages/tui/reference/tui/testing/Harness/type_text) | Type `s`, one key event per character. |
| [`paste`](/packages/tui/reference/tui/testing/Harness/paste) | Send `s` as a bracketed paste and redraw. |
| [`mouse`](/packages/tui/reference/tui/testing/Harness/mouse) | A mouse event at 0-based cell (`x`, `y`). |
| [`click`](/packages/tui/reference/tui/testing/Harness/click) | Left press and release at 0-based cell (`x`, `y`). |
| [`wheel`](/packages/tui/reference/tui/testing/Harness/wheel) | A wheel step up or down at 0-based cell (`x`, `y`). |
| [`advance`](/packages/tui/reference/tui/testing/Harness/advance) | Move the clock on by `ms`, run due timers, redraw. |
| [`resize`](/packages/tui/reference/tui/testing/Harness/resize) | Resize the screen, as a terminal resize would. |
| [`text`](/packages/tui/reference/tui/testing/Harness/text) | The screen as text, rows joined by "\n". |
| [`row`](/packages/tui/reference/tui/testing/Harness/row) | Row `y` of the screen as text. |
| [`cell`](/packages/tui/reference/tui/testing/Harness/cell) | The cell at (`x`, `y`), with its style. |
| [`focused_id`](/packages/tui/reference/tui/testing/Harness/focused_id) | The id of the focused node ("" when it has none, or nothing is focused). |

## Examples

```coil
use cell::Ref;
use tui::node::{Ctx, mount};
use tui::testing::harness;
use tui::widgets::layout::column;
use tui::widgets::input::{button, text_input};
use tui::widgets::text::text_fn;
use tests::assert;
let name = text_input("Your name");
let greeting = Ref::new("");
let root = column([
    mount(name).fixed(1),
    button("Greet", fn (Ctx c) use (name, greeting) {
        greeting.set("Hello, " + name.value() + "!");
    }).fixed(1),
    text_fn(fn () use (greeting) => greeting.get()),
]);
let h = harness(root, 20, 4);
h.type_text("Ada");
h.keys("tab enter");
assert!(h.row(2) == "Hello, Ada!         ");
```
