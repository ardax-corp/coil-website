---
slug: "tui/tui/widgets/input/TextInput/on_change"
package: "tui"
title: "TextInput::on_change"
description: "Call f with the text after each edit (builder style)."
module: "tui::widgets::input"
kind: "method"
name: "on_change"
parent: "TextInput"
signature: "pub fn on_change(fn(string, Ctx) -> () f) -> TextInput"
import: "use tui::widgets::input::{TextInput};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/input.hy#L358"
order: 4
---

Call `f` with the text after each edit (builder style).

Called on a `TextInput` value as `value.on_change(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `fn(string, Ctx) -> ()` |

## Returns

`TextInput`

## See also

- [`TextInput`](/packages/tui/reference/tui/widgets/input/TextInput): A one-line text field with readline-style editing (`cli::line`).
- [`TextInput::new`](/packages/tui/reference/tui/widgets/input/TextInput/new): An empty field showing `placeholder`, 20 columns wide, with a 100-entry history.
- [`TextInput::value`](/packages/tui/reference/tui/widgets/input/TextInput/value): The current text.
- [`TextInput::set_value`](/packages/tui/reference/tui/widgets/input/TextInput/set_value): Replace the text and put the cursor at its end.
- [`TextInput::masked`](/packages/tui/reference/tui/widgets/input/TextInput/masked): Show `m` for each character, for passwords (builder style).
- [`TextInput::on_submit`](/packages/tui/reference/tui/widgets/input/TextInput/on_submit): Call `f` with the text on Enter (builder style).
- [`TextInput::clearing`](/packages/tui/reference/tui/widgets/input/TextInput/clearing): Empty the field after Enter and add the line to the history (builder style).
