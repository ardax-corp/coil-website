---
slug: "tui/tui/widgets/dialog/Popup/place"
package: "tui"
title: "Popup::place"
description: "Where the popup goes inside area, at the child's measured size."
module: "tui::widgets::dialog"
kind: "method"
name: "place"
parent: "Popup"
signature: "pub fn place(Rect area) -> Rect"
import: "use tui::widgets::dialog::{Popup};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/dialog.coil#L54"
order: 1
---

Where the popup goes inside `area`, at the child's measured size.

Called on a `Popup` value as `value.place(…)`.

## Parameters

| Name | Type |
|------|------|
| `area` | `Rect` |

## Returns

`Rect`

## See also

- [`Popup`](/packages/tui/reference/tui/widgets/dialog/Popup): A box drawn on top of the layers below: its area is cleared, it is centred (or placed at `x`, `y` when `at` is set) at its measured size, and Esc closes it.
- [`Popup::new`](/packages/tui/reference/tui/widgets/dialog/Popup/new): A centred popup around `child`.
