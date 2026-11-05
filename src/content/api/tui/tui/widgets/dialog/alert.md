---
slug: "tui/tui/widgets/dialog/alert"
package: "tui"
title: "alert"
description: "Open a message box with an OK button."
module: "tui::widgets::dialog"
kind: "fn"
name: "alert"
signature: "fn alert(Ctx ctx, string title, string message)"
import: "use tui::widgets::dialog::{alert};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/widgets/dialog.coil#L122"
order: 2
---

Open a message box with an OK button.

## Parameters

| Name | Type |
|------|------|
| `ctx` | `Ctx` |
| `title` | `string` |
| `message` | `string` |

## See also

- [`dialog`](/packages/tui/reference/tui/widgets/dialog/dialog): A titled, bordered dialog: `body` above a row of `buttons` (right aligned).
- [`confirm`](/packages/tui/reference/tui/widgets/dialog/confirm): Ask a yes/no question in a dialog; `answer` gets true for Yes, false for No and for Esc, which closes the dialog.
- [`menu`](/packages/tui/reference/tui/widgets/dialog/menu): Open a popup menu at (`x`, `y`): Enter or a click on an item closes it and calls `pick` with the item's index; Esc closes it.
