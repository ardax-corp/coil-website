---
slug: "tui/tui/widgets/input/Checkbox/on_change"
package: "tui"
title: "Checkbox::on_change"
description: "Call f with the new state after each toggle (builder style)."
module: "tui::widgets::input"
kind: "method"
name: "on_change"
parent: "Checkbox"
signature: "pub fn on_change(fn(bool, Ctx) -> () f) -> Checkbox"
import: "use tui::widgets::input::{Checkbox};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/input.coil#L127"
order: 1
---

Call `f` with the new state after each toggle (builder style).

Called on a `Checkbox` value as `value.on_change(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `fn(bool, Ctx) -> ()` |

## Returns

`Checkbox`

## See also

- [`Checkbox`](/packages/tui/reference/tui/widgets/input/Checkbox): `[x] label`; Enter, Space or a click toggles it.
- [`Checkbox::new`](/packages/tui/reference/tui/widgets/input/Checkbox/new): A checkbox labelled `label`, ticked when `checked`, with no callback.
