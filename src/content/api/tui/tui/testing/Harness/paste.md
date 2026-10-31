---
slug: "tui/tui/testing/Harness/paste"
package: "tui"
title: "Harness::paste"
description: "Send s as a bracketed paste and redraw."
module: "tui::testing"
kind: "method"
name: "paste"
parent: "Harness"
signature: "pub fn paste(string s) -> bool"
import: "use tui::testing::{Harness};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/testing.hy#L212"
order: 5
---

Send `s` as a bracketed paste and redraw.

Called on a `Harness` value as `value.paste(…)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`bool`

## See also

- [`Harness`](/packages/tui/reference/tui/testing/Harness): A headless app of a fixed size, drawn after every input: the way to test a UI.
- [`Harness::draw`](/packages/tui/reference/tui/testing/Harness/draw): Draw now and return the escapes (also kept in `out`).
- [`Harness::send`](/packages/tui/reference/tui/testing/Harness/send): Dispatch `e` and redraw.
- [`Harness::key`](/packages/tui/reference/tui/testing/Harness/key): Send the key `spec` (see `parse_key`) and redraw.
- [`Harness::keys`](/packages/tui/reference/tui/testing/Harness/keys): Several key specs separated by spaces.
- [`Harness::type_text`](/packages/tui/reference/tui/testing/Harness/type_text): Type `s`, one key event per character.
- [`Harness::mouse`](/packages/tui/reference/tui/testing/Harness/mouse): A mouse event at 0-based cell (`x`, `y`).
- [`Harness::click`](/packages/tui/reference/tui/testing/Harness/click): Left press and release at 0-based cell (`x`, `y`).
