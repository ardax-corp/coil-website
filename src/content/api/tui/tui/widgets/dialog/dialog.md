---
slug: "tui/tui/widgets/dialog/dialog"
package: "tui"
title: "dialog"
description: "A titled, bordered dialog: body above a row of buttons (right aligned). Open it with ctx.push_layer(...); buttons usually call ctx.pop_layer()."
module: "tui::widgets::dialog"
kind: "fn"
name: "dialog"
signature: "fn dialog(string title, Node body, Vec<Node> buttons) -> Node"
import: "use tui::widgets::dialog::{dialog};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/dialog.coil#L102"
order: 1
---

A titled, bordered dialog: `body` above a row of `buttons` (right aligned). Open it with `ctx.push_layer(...)`; buttons usually call `ctx.pop_layer()`.

## Parameters

| Name | Type |
|------|------|
| `title` | `string` |
| `body` | `Node` |
| `buttons` | `Vec<Node>` |

## Returns

`Node`

## See also

- [`alert`](/packages/tui/reference/tui/widgets/dialog/alert): Open a message box with an OK button.
- [`confirm`](/packages/tui/reference/tui/widgets/dialog/confirm): Ask a yes/no question in a dialog; `answer` gets true for Yes, false for No.
- [`menu`](/packages/tui/reference/tui/widgets/dialog/menu): Open a popup menu at (`x`, `y`): Enter or a click on an item closes it and calls `pick` with the item's index; Esc closes it.
