---
slug: "tui/tui/widgets/input/index"
package: "tui"
title: "tui::widgets::input"
description: "The tui::widgets::input module."
module: "tui::widgets::input"
kind: "module"
name: "tui::widgets::input"
origin: "package"
auto: false
order: 9
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::widgets::input::{Button, Checkbox};
```

## Types

| Name | Description |
|------|-------------|
| [`Button`](/packages/tui/reference/tui/widgets/input/Button) | A push button: Enter, Space or a click calls `on_press`. |
| [`Checkbox`](/packages/tui/reference/tui/widgets/input/Checkbox) | `[x] label`; Enter, Space or a click toggles it. |
| [`RadioGroup`](/packages/tui/reference/tui/widgets/input/RadioGroup) | One choice out of several, listed top to bottom. |
| [`TextInput`](/packages/tui/reference/tui/widgets/input/TextInput) | A one-line text field with readline-style editing ([`cli::line`](/packages/cli/reference/cli/line)). |

## Functions

| Name | Description |
|------|-------------|
| [`button`](/packages/tui/reference/tui/widgets/input/fn.button) | A button node: `[ label ]`, focusable, sized to its label; Enter, Space or a click calls `on_press`. |
| [`checkbox`](/packages/tui/reference/tui/widgets/input/fn.checkbox) | A checkbox node calling `on_change` with the new state. |
| [`radio_group`](/packages/tui/reference/tui/widgets/input/radio_group) | A radio group node calling `on_change` with the new index. |
| [`text_input`](/packages/tui/reference/tui/widgets/input/text_input) | A text field showing `placeholder`. |
