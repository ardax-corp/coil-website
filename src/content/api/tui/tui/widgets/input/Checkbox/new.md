---
slug: "tui/tui/widgets/input/Checkbox/new"
package: "tui"
title: "Checkbox::new"
description: "A checkbox labelled label, ticked when checked, with no callback."
module: "tui::widgets::input"
kind: "static method"
name: "new"
parent: "Checkbox"
signature: "pub static fn new(string label, bool checked) -> Checkbox"
import: "use tui::widgets::input::{Checkbox};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/input.hy#L122"
order: 0
---

A checkbox labelled `label`, ticked when `checked`, with no callback.

## Parameters

| Name | Type |
|------|------|
| `label` | `string` |
| `checked` | `bool` |

## Returns

`Checkbox`

## See also

- [`Checkbox`](/packages/tui/reference/tui/widgets/input/Checkbox): `[x] label`; Enter, Space or a click toggles it.
- [`Checkbox::on_change`](/packages/tui/reference/tui/widgets/input/Checkbox/on_change): Call `f` with the new state after each toggle (builder style).
