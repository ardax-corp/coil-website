---
slug: "tui/tui/widgets/dialog/Popup/new"
package: "tui"
title: "Popup::new"
description: "A centred popup around child."
module: "tui::widgets::dialog"
kind: "static method"
name: "new"
parent: "Popup"
signature: "pub static fn new(Node child) -> Popup"
import: "use tui::widgets::dialog::{Popup};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/dialog.hy#L47"
order: 0
---

A centred popup around `child`.

## Parameters

| Name | Type |
|------|------|
| `child` | `Node` |

## Returns

`Popup`

## See also

- [`Popup`](/packages/tui/reference/tui/widgets/dialog/Popup): A box drawn on top of the layers below: its area is cleared, it is centred (or placed at `x`, `y` when `at` is set) at its measured size, and Esc closes it.
- [`Popup::place`](/packages/tui/reference/tui/widgets/dialog/Popup/place): Where the popup goes inside `area`, at the child's measured size.
