---
slug: "tui/tui/widgets/input/Checkbox"
package: "tui"
title: "Checkbox"
description: "[x] label; Enter, Space or a click toggles it."
module: "tui::widgets::input"
kind: "class"
name: "Checkbox"
signature: "shared class Checkbox"
import: "use tui::widgets::input::{Checkbox};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/input.coil#L111"
order: 1
---

`[x] label`; Enter, Space or a click toggles it.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `label` | `string` | Text after the box. |
| `checked` | `bool` | Whether the box is ticked. |
| `on_change` | `fn(bool, Ctx) -> ()` | Called with the new state after each toggle. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/tui/reference/tui/widgets/input/Checkbox/new) | A checkbox labelled `label`, ticked when `checked`, with no callback. |

## Methods

| Name | Description |
|------|-------------|
| [`on_change`](/packages/tui/reference/tui/widgets/input/Checkbox/on_change) | Call `f` with the new state after each toggle (builder style). |

## Trait implementations

- `Component` for `Checkbox`

## See also

- [`Button`](/packages/tui/reference/tui/widgets/input/Button): A push button: Enter, Space or a click calls `on_press`.
- [`RadioGroup`](/packages/tui/reference/tui/widgets/input/RadioGroup): One choice out of several, listed top to bottom.
- [`TextInput`](/packages/tui/reference/tui/widgets/input/TextInput): A one-line text field with readline-style editing (`cli::line`).
