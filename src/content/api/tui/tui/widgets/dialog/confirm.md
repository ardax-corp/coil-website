---
slug: "tui/tui/widgets/dialog/confirm"
package: "tui"
title: "confirm"
description: "Ask a yes/no question in a dialog; answer gets true for Yes, false for No and for Esc, which closes the dialog."
module: "tui::widgets::dialog"
kind: "fn"
name: "confirm"
signature: "fn confirm(Ctx ctx, string title, string message, fn(bool, Ctx) -> () answer)"
import: "use tui::widgets::dialog::{confirm};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/widgets/dialog.coil#L165"
order: 3
---

Ask a yes/no question in a dialog; `answer` gets true for Yes, false for No and for Esc, which closes the dialog.

## Parameters

| Name | Type |
|------|------|
| `ctx` | `Ctx` |
| `title` | `string` |
| `message` | `string` |
| `answer` | `fn(bool, Ctx) -> ()` |

## Examples

```coil
use cell::Ref;
use tui::node::Ctx;
use tui::testing::harness;
use tui::widgets::dialog::confirm;
use tui::widgets::input::button;
use tests::assert;
let said = Ref::new("");
let root = button("Delete", fn (Ctx c) use (said) {
    confirm(c, "Delete", "Really?", fn (bool yes, Ctx c2) use (said) {
        if yes {
            said.set("yes");
        } else {
            said.set("no");
        }
    });
});
let h = harness(root, 30, 10);
h.key("enter");
assert!(h.app.layer_count() == 2);
h.key("enter");
assert!(said.get() == "yes" && h.app.layer_count() == 1);
h.key("enter");
h.key("esc");
assert!(said.get() == "no" && h.app.layer_count() == 1);
```

## See also

- [`dialog`](/packages/tui/reference/tui/widgets/dialog/dialog): A titled, bordered dialog: `body` above a row of `buttons` (right aligned).
- [`alert`](/packages/tui/reference/tui/widgets/dialog/alert): Open a message box with an OK button.
- [`menu`](/packages/tui/reference/tui/widgets/dialog/menu): Open a popup menu at (`x`, `y`): Enter or a click on an item closes it and calls `pick` with the item's index; Esc closes it.
