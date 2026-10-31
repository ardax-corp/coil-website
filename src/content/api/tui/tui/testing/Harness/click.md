---
slug: "tui/tui/testing/Harness/click"
package: "tui"
title: "Harness::click"
description: "Left press and release at 0-based cell (x, y)."
module: "tui::testing"
kind: "method"
name: "click"
parent: "Harness"
signature: "pub fn click(int x, int y)"
import: "use tui::testing::{Harness};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/testing.hy#L222"
order: 7
---

Left press and release at 0-based cell (`x`, `y`).

Called on a `Harness` value as `value.click(…)`.

## Parameters

| Name | Type |
|------|------|
| `x` | `int` |
| `y` | `int` |

## See also

- [`Harness`](/packages/tui/reference/tui/testing/Harness): A headless app of a fixed size, drawn after every input: the way to test a UI.
- [`Harness::draw`](/packages/tui/reference/tui/testing/Harness/draw): Draw now and return the escapes (also kept in `out`).
- [`Harness::send`](/packages/tui/reference/tui/testing/Harness/send): Dispatch `e` and redraw.
- [`Harness::key`](/packages/tui/reference/tui/testing/Harness/key): Send the key `spec` (see `parse_key`) and redraw.
- [`Harness::keys`](/packages/tui/reference/tui/testing/Harness/keys): Several key specs separated by spaces.
- [`Harness::type_text`](/packages/tui/reference/tui/testing/Harness/type_text): Type `s`, one key event per character.
- [`Harness::paste`](/packages/tui/reference/tui/testing/Harness/paste): Send `s` as a bracketed paste and redraw.
- [`Harness::mouse`](/packages/tui/reference/tui/testing/Harness/mouse): A mouse event at 0-based cell (`x`, `y`).
