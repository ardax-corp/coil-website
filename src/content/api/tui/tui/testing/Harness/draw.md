---
slug: "tui/tui/testing/Harness/draw"
package: "tui"
title: "Harness::draw"
description: "Draw now and return the escapes (also kept in out)."
module: "tui::testing"
kind: "method"
name: "draw"
parent: "Harness"
signature: "pub fn draw() -> string"
import: "use tui::testing::{Harness};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/testing.hy#L172"
order: 0
---

Draw now and return the escapes (also kept in `out`).

Called on a `Harness` value as `value.draw(…)`.

## Returns

`string`

## See also

- [`Harness`](/packages/tui/reference/tui/testing/Harness): A headless app of a fixed size, drawn after every input: the way to test a UI.
- [`Harness::send`](/packages/tui/reference/tui/testing/Harness/send): Dispatch `e` and redraw.
- [`Harness::key`](/packages/tui/reference/tui/testing/Harness/key): Send the key `spec` (see `parse_key`) and redraw.
- [`Harness::keys`](/packages/tui/reference/tui/testing/Harness/keys): Several key specs separated by spaces.
- [`Harness::type_text`](/packages/tui/reference/tui/testing/Harness/type_text): Type `s`, one key event per character.
- [`Harness::paste`](/packages/tui/reference/tui/testing/Harness/paste): Send `s` as a bracketed paste and redraw.
- [`Harness::mouse`](/packages/tui/reference/tui/testing/Harness/mouse): A mouse event at 0-based cell (`x`, `y`).
- [`Harness::click`](/packages/tui/reference/tui/testing/Harness/click): Left press and release at 0-based cell (`x`, `y`).
