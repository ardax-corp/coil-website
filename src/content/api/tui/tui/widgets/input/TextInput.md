---
slug: "tui/tui/widgets/input/TextInput"
package: "tui"
title: "TextInput"
description: "A one-line text field with readline-style editing (cli::line). Tab, Esc and Ctrl-C are left to the app; Up/Down browse the history only when it has entries."
module: "tui::widgets::input"
kind: "class"
name: "TextInput"
signature: "shared class TextInput"
import: "use tui::widgets::input::{TextInput};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/input.coil#L309"
order: 3
---

A one-line text field with readline-style editing ([`cli::line`](/packages/cli/reference/cli/line)). Tab, Esc and Ctrl-C are left to the app; Up/Down browse the history only when it has entries.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `editor` | `Editor` | The line editor holding the text, cursor and history. |
| `placeholder` | `string` | Shown, dimmed, while the field is empty. |
| `mask` | `string` | Shown instead of each character when not "" (passwords). |
| `width` | `int` | Preferred width in a row. |
| `clear_on_submit` | `bool` | Empty the field after Enter (and add the line to the history). |
| `on_change` | `fn(string, Ctx) -> ()` | Called with the new text after each edit. |
| `on_submit` | `fn(string, Ctx) -> ()` | Called with the text when Enter is pressed. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/tui/reference/tui/widgets/input/TextInput/new) | An empty field showing `placeholder`, 20 columns wide, with a 100-entry history. |

## Methods

| Name | Description |
|------|-------------|
| [`value`](/packages/tui/reference/tui/widgets/input/TextInput/value) | The current text. |
| [`set_value`](/packages/tui/reference/tui/widgets/input/TextInput/set_value) | Replace the text and put the cursor at its end. |
| [`masked`](/packages/tui/reference/tui/widgets/input/TextInput/masked) | Show `m` for each character, for passwords (builder style). |
| [`on_change`](/packages/tui/reference/tui/widgets/input/TextInput/on_change) | Call `f` with the text after each edit (builder style). |
| [`on_submit`](/packages/tui/reference/tui/widgets/input/TextInput/on_submit) | Call `f` with the text on Enter (builder style). |
| [`clearing`](/packages/tui/reference/tui/widgets/input/TextInput/clearing) | Empty the field after Enter and add the line to the history (builder style). |

## Trait implementations

- `Component` for `TextInput`

## See also

- [`cli::line`](/packages/cli/reference/cli/line)
- [`Button`](/packages/tui/reference/tui/widgets/input/Button): A push button: Enter, Space or a click calls `on_press`.
- [`Checkbox`](/packages/tui/reference/tui/widgets/input/Checkbox): `[x] label`; Enter, Space or a click toggles it.
- [`RadioGroup`](/packages/tui/reference/tui/widgets/input/RadioGroup): One choice out of several, listed top to bottom.
