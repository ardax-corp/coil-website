---
slug: "tui/tui/widgets/dialog/index"
package: "tui"
title: "tui::widgets::dialog"
description: "The tui::widgets::dialog module."
module: "tui::widgets::dialog"
kind: "module"
name: "tui::widgets::dialog"
origin: "package"
auto: false
order: 8
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::widgets::dialog::{Popup, dialog};
```

## Types

| Name | Description |
|------|-------------|
| [`Popup`](/packages/tui/reference/tui/widgets/dialog/Popup) | A box drawn on top of the layers below: its area is cleared, it is centred (or placed at `x`, `y` when `at` is set) at its measured size, and Esc closes it. |

## Functions

| Name | Description |
|------|-------------|
| [`dialog`](/packages/tui/reference/tui/widgets/dialog/dialog) | A titled, bordered dialog: `body` above a row of `buttons` (right aligned). |
| [`alert`](/packages/tui/reference/tui/widgets/dialog/alert) | Open a message box with an OK button. |
| [`confirm`](/packages/tui/reference/tui/widgets/dialog/confirm) | Ask a yes/no question in a dialog; `answer` gets true for Yes, false for No. |
| [`menu`](/packages/tui/reference/tui/widgets/dialog/menu) | Open a popup menu at (`x`, `y`): Enter or a click on an item closes it and calls `pick` with the item's index; Esc closes it. |
