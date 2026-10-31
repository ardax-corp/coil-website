---
slug: "tui/tui/widgets/input/RadioGroup"
package: "tui"
title: "RadioGroup"
description: "One choice out of several, listed top to bottom. Up/Down (or a click) select."
module: "tui::widgets::input"
kind: "class"
name: "RadioGroup"
signature: "shared class RadioGroup"
import: "use tui::widgets::input::{RadioGroup};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/input.hy#L195"
order: 2
---

One choice out of several, listed top to bottom. Up/Down (or a click) select.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `options` | `Vec<string>` | The choices, top to bottom. |
| `selected` | `int` | Index of the selected choice (-1 for none). |
| `on_change` | `fn(int, Ctx) -> ()` | Called with the new index when the selection changes. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/tui/reference/tui/widgets/input/RadioGroup/new) | A group of `options` with `selected` chosen and no callback. |

## Methods

| Name | Description |
|------|-------------|
| [`on_change`](/packages/tui/reference/tui/widgets/input/RadioGroup/on_change) | Call `f` with the new index on each change (builder style). |
| [`value`](/packages/tui/reference/tui/widgets/input/RadioGroup/value) | The selected option's text, or "" when none is selected. |
| [`select`](/packages/tui/reference/tui/widgets/input/RadioGroup/select) | Select option `i` and call [`on_change`](/packages/tui/reference/tui/widgets/input/RadioGroup/on_change); false (and nothing happens) when `i` is out of range or already selected. |

## Trait implementations

- `Component` for `RadioGroup`

## See also

- [`Button`](/packages/tui/reference/tui/widgets/input/Button): A push button: Enter, Space or a click calls `on_press`.
- [`Checkbox`](/packages/tui/reference/tui/widgets/input/Checkbox): `[x] label`; Enter, Space or a click toggles it.
- [`TextInput`](/packages/tui/reference/tui/widgets/input/TextInput): A one-line text field with readline-style editing (`cli::line`).
