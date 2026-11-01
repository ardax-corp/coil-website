---
slug: "tui/tui/widgets/input/TextInput/new"
package: "tui"
title: "TextInput::new"
description: "An empty field showing placeholder, 20 columns wide, with a 100-entry history."
module: "tui::widgets::input"
kind: "static method"
name: "new"
parent: "TextInput"
signature: "pub static fn new(string placeholder) -> TextInput"
import: "use tui::widgets::input::{TextInput};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/input.coil#L329"
order: 0
---

An empty field showing `placeholder`, 20 columns wide, with a 100-entry history.

## Parameters

| Name | Type |
|------|------|
| `placeholder` | `string` |

## Returns

`TextInput`

## See also

- [`TextInput`](/packages/tui/reference/tui/widgets/input/TextInput): A one-line text field with readline-style editing (`cli::line`).
- [`TextInput::value`](/packages/tui/reference/tui/widgets/input/TextInput/value): The current text.
- [`TextInput::set_value`](/packages/tui/reference/tui/widgets/input/TextInput/set_value): Replace the text and put the cursor at its end.
- [`TextInput::masked`](/packages/tui/reference/tui/widgets/input/TextInput/masked): Show `m` for each character, for passwords (builder style).
- [`TextInput::on_change`](/packages/tui/reference/tui/widgets/input/TextInput/on_change): Call `f` with the text after each edit (builder style).
- [`TextInput::on_submit`](/packages/tui/reference/tui/widgets/input/TextInput/on_submit): Call `f` with the text on Enter (builder style).
- [`TextInput::clearing`](/packages/tui/reference/tui/widgets/input/TextInput/clearing): Empty the field after Enter and add the line to the history (builder style).
