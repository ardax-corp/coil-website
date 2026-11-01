---
slug: "tui/tui/widgets/input/Button"
package: "tui"
title: "Button"
description: "A push button: Enter, Space or a click calls on_press."
module: "tui::widgets::input"
kind: "class"
name: "Button"
signature: "shared class Button"
import: "use tui::widgets::input::{Button};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/input.coil#L59"
order: 0
---

A push button: Enter, Space or a click calls `on_press`.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `label` | `string` | The text inside the brackets. |
| `on_press` | `fn(Ctx) -> ()` | Called when the button is pressed. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/tui/reference/tui/widgets/input/Button/new) | A button labelled `label` calling `on_press`. |

## Trait implementations

- `Component` for `Button`

## See also

- [`Checkbox`](/packages/tui/reference/tui/widgets/input/Checkbox): `[x] label`; Enter, Space or a click toggles it.
- [`RadioGroup`](/packages/tui/reference/tui/widgets/input/RadioGroup): One choice out of several, listed top to bottom.
- [`TextInput`](/packages/tui/reference/tui/widgets/input/TextInput): A one-line text field with readline-style editing (`cli::line`).
