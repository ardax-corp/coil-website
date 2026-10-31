---
slug: "tui/tui/widgets/input/radio_group"
package: "tui"
title: "radio_group"
description: "A radio group node calling on_change with the new index."
module: "tui::widgets::input"
kind: "fn"
name: "radio_group"
signature: "fn radio_group(Vec<string> options, int selected, fn(int, Ctx) -> () on_change) -> Node"
import: "use tui::widgets::input::{radio_group};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/input.hy#L302"
order: 6
---

A radio group node calling `on_change` with the new index.

## Parameters

| Name | Type |
|------|------|
| `options` | `Vec<string>` |
| `selected` | `int` |
| `on_change` | `fn(int, Ctx) -> ()` |

## Returns

`Node`

## See also

- [`button`](/packages/tui/reference/tui/widgets/input/fn.button): A button node: `[ label ]`, focusable, sized to its label; Enter, Space or a click calls `on_press`.
- [`checkbox`](/packages/tui/reference/tui/widgets/input/fn.checkbox): A checkbox node calling `on_change` with the new state.
- [`text_input`](/packages/tui/reference/tui/widgets/input/text_input): A text field showing `placeholder`.
