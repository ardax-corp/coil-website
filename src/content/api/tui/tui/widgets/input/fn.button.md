---
slug: "tui/tui/widgets/input/fn.button"
package: "tui"
title: "button"
description: "A button node: [ label ], focusable, sized to its label; Enter, Space or a click calls on_press."
module: "tui::widgets::input"
kind: "fn"
name: "button"
signature: "fn button(string label, fn(Ctx) -> () on_press) -> Node"
import: "use tui::widgets::input::{button};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/input.hy#L106"
order: 4
---

A button node: `[ label ]`, focusable, sized to its label; Enter, Space or a click calls `on_press`.

## Parameters

| Name | Type |
|------|------|
| `label` | `string` |
| `on_press` | `fn(Ctx) -> ()` |

## Returns

`Node`

## See also

- [`checkbox`](/packages/tui/reference/tui/widgets/input/fn.checkbox): A checkbox node calling `on_change` with the new state.
- [`radio_group`](/packages/tui/reference/tui/widgets/input/radio_group): A radio group node calling `on_change` with the new index.
- [`text_input`](/packages/tui/reference/tui/widgets/input/text_input): A text field showing `placeholder`.
