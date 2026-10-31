---
slug: "tui/tui/testing/Harness/mouse"
package: "tui"
title: "Harness::mouse"
description: "A mouse event at 0-based cell (x, y)."
module: "tui::testing"
kind: "method"
name: "mouse"
parent: "Harness"
signature: "pub fn mouse(MouseKind kind, MouseButton b, int x, int y) -> bool"
import: "use tui::testing::{Harness};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/testing.hy#L217"
order: 6
---

A mouse event at 0-based cell (`x`, `y`).

Called on a `Harness` value as `value.mouse(…)`.

## Parameters

| Name | Type |
|------|------|
| `kind` | `MouseKind` |
| `b` | `MouseButton` |
| `x` | `int` |
| `y` | `int` |

## Returns

`bool`

## See also

- [`Harness`](/packages/tui/reference/tui/testing/Harness): A headless app of a fixed size, drawn after every input: the way to test a UI.
- [`Harness::draw`](/packages/tui/reference/tui/testing/Harness/draw): Draw now and return the escapes (also kept in `out`).
- [`Harness::send`](/packages/tui/reference/tui/testing/Harness/send): Dispatch `e` and redraw.
- [`Harness::key`](/packages/tui/reference/tui/testing/Harness/key): Send the key `spec` (see `parse_key`) and redraw.
- [`Harness::keys`](/packages/tui/reference/tui/testing/Harness/keys): Several key specs separated by spaces.
- [`Harness::type_text`](/packages/tui/reference/tui/testing/Harness/type_text): Type `s`, one key event per character.
- [`Harness::paste`](/packages/tui/reference/tui/testing/Harness/paste): Send `s` as a bracketed paste and redraw.
- [`Harness::click`](/packages/tui/reference/tui/testing/Harness/click): Left press and release at 0-based cell (`x`, `y`).
