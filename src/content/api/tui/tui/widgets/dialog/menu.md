---
slug: "tui/tui/widgets/dialog/menu"
package: "tui"
title: "menu"
description: "Open a popup menu at (x, y): Enter or a click on an item closes it and calls pick with the item's index; Esc closes it."
module: "tui::widgets::dialog"
kind: "fn"
name: "menu"
signature: "fn menu(Ctx ctx, int x, int y, Vec<string> items, fn(int, Ctx) -> () pick)"
import: "use tui::widgets::dialog::{menu};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/dialog.coil#L183"
order: 4
---

Open a popup menu at (`x`, `y`): Enter or a click on an item closes it and calls `pick` with the item's index; Esc closes it.

## Parameters

| Name | Type |
|------|------|
| `ctx` | `Ctx` |
| `x` | `int` |
| `y` | `int` |
| `items` | `Vec<string>` |
| `pick` | `fn(int, Ctx) -> ()` |

## See also

- [`dialog`](/packages/tui/reference/tui/widgets/dialog/dialog): A titled, bordered dialog: `body` above a row of `buttons` (right aligned).
- [`alert`](/packages/tui/reference/tui/widgets/dialog/alert): Open a message box with an OK button.
- [`confirm`](/packages/tui/reference/tui/widgets/dialog/confirm): Ask a yes/no question in a dialog; `answer` gets true for Yes, false for No.
