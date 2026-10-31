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
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/input.hy#L127"
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
