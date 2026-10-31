---
slug: "tui/tui/testing/Harness/key"
package: "tui"
title: "Harness::key"
description: "Send the key spec (see parse_key) and redraw. Returns whether it was handled."
module: "tui::testing"
kind: "method"
name: "key"
parent: "Harness"
signature: "pub fn key(string spec) -> bool"
import: "use tui::testing::{Harness};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/testing.hy#L186"
order: 2
---

Send the key `spec` (see [`parse_key`](/packages/tui/reference/tui/testing/parse_key)) and redraw. Returns whether it was handled.

Called on a `Harness` value as `value.key(…)`.

## Parameters

| Name | Type |
|------|------|
| `spec` | `string` |

## Returns

`bool`

## See also

- [`tui::testing::parse_key`](/packages/tui/reference/tui/testing/parse_key)
- [`Harness`](/packages/tui/reference/tui/testing/Harness): A headless app of a fixed size, drawn after every input: the way to test a UI.
- [`Harness::draw`](/packages/tui/reference/tui/testing/Harness/draw): Draw now and return the escapes (also kept in `out`).
- [`Harness::send`](/packages/tui/reference/tui/testing/Harness/send): Dispatch `e` and redraw.
- [`Harness::keys`](/packages/tui/reference/tui/testing/Harness/keys): Several key specs separated by spaces.
- [`Harness::type_text`](/packages/tui/reference/tui/testing/Harness/type_text): Type `s`, one key event per character.
- [`Harness::paste`](/packages/tui/reference/tui/testing/Harness/paste): Send `s` as a bracketed paste and redraw.
- [`Harness::mouse`](/packages/tui/reference/tui/testing/Harness/mouse): A mouse event at 0-based cell (`x`, `y`).
