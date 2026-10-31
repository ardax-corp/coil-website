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
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/dialog.hy#L54"
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
