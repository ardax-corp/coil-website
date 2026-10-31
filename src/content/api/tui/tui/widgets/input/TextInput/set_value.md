---
slug: "tui/tui/widgets/input/TextInput/set_value"
package: "tui"
title: "TextInput::set_value"
description: "Replace the text and put the cursor at its end."
module: "tui::widgets::input"
kind: "method"
name: "set_value"
parent: "TextInput"
signature: "pub fn set_value(string s)"
import: "use tui::widgets::input::{TextInput};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/input.coil#L347"
order: 2
---

Replace the text and put the cursor at its end.

Called on a `TextInput` value as `value.set_value(…)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## See also

- [`TextInput`](/packages/tui/reference/tui/widgets/input/TextInput): A one-line text field with readline-style editing (`cli::line`).
- [`TextInput::new`](/packages/tui/reference/tui/widgets/input/TextInput/new): An empty field showing `placeholder`, 20 columns wide, with a 100-entry history.
- [`TextInput::value`](/packages/tui/reference/tui/widgets/input/TextInput/value): The current text.
- [`TextInput::masked`](/packages/tui/reference/tui/widgets/input/TextInput/masked): Show `m` for each character, for passwords (builder style).
- [`TextInput::on_change`](/packages/tui/reference/tui/widgets/input/TextInput/on_change): Call `f` with the text after each edit (builder style).
- [`TextInput::on_submit`](/packages/tui/reference/tui/widgets/input/TextInput/on_submit): Call `f` with the text on Enter (builder style).
- [`TextInput::clearing`](/packages/tui/reference/tui/widgets/input/TextInput/clearing): Empty the field after Enter and add the line to the history (builder style).
