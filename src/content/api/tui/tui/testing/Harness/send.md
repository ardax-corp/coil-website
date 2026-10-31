---
slug: "tui/tui/testing/Harness/send"
package: "tui"
title: "Harness::send"
description: "Dispatch e and redraw. Returns whether it was handled."
module: "tui::testing"
kind: "method"
name: "send"
parent: "Harness"
signature: "pub fn send(Event e) -> bool"
import: "use tui::testing::{Harness};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/testing.hy#L178"
order: 1
---

Dispatch `e` and redraw. Returns whether it was handled.

Called on a `Harness` value as `value.send(…)`.

## Parameters

| Name | Type |
|------|------|
| `e` | `Event` |

## Returns

`bool`

## See also

- [`Harness`](/packages/tui/reference/tui/testing/Harness): A headless app of a fixed size, drawn after every input: the way to test a UI.
- [`Harness::draw`](/packages/tui/reference/tui/testing/Harness/draw): Draw now and return the escapes (also kept in `out`).
- [`Harness::key`](/packages/tui/reference/tui/testing/Harness/key): Send the key `spec` (see `parse_key`) and redraw.
- [`Harness::keys`](/packages/tui/reference/tui/testing/Harness/keys): Several key specs separated by spaces.
- [`Harness::type_text`](/packages/tui/reference/tui/testing/Harness/type_text): Type `s`, one key event per character.
- [`Harness::paste`](/packages/tui/reference/tui/testing/Harness/paste): Send `s` as a bracketed paste and redraw.
- [`Harness::mouse`](/packages/tui/reference/tui/testing/Harness/mouse): A mouse event at 0-based cell (`x`, `y`).
- [`Harness::click`](/packages/tui/reference/tui/testing/Harness/click): Left press and release at 0-based cell (`x`, `y`).
