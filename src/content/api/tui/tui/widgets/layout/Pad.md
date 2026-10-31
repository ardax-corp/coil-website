---
slug: "tui/tui/widgets/layout/Pad"
package: "tui"
title: "Pad"
description: "Space around one child."
module: "tui::widgets::layout"
kind: "class"
name: "Pad"
signature: "shared class Pad"
import: "use tui::widgets::layout::{Pad};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/layout.hy#L231"
order: 2
---

Space around one child.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `child` | `Node` | The padded child. |
| `top` | `int` | Blank rows above. |
| `right` | `int` | Blank columns on the right. |
| `bottom` | `int` | Blank rows below. |
| `left` | `int` | Blank columns on the left. |
| `kids` | `Vec<Node>` | `[child]`, for `children`. |

## Trait implementations

- `Component` for `Pad`

## See also

- [`Flex`](/packages/tui/reference/tui/widgets/layout/Flex): Children side by side (`horizontal`) or one under another, sized by their constraints.
- [`Stack`](/packages/tui/reference/tui/widgets/layout/Stack): Children drawn on top of each other, each over the whole area (later ones on top).
- [`Place`](/packages/tui/reference/tui/widgets/layout/Place): `child` at its measured size, aligned inside the area.
- [`Spacer`](/packages/tui/reference/tui/widgets/layout/Spacer): Empty space that takes what is left (`Fill(1)`).
- [`Block`](/packages/tui/reference/tui/widgets/layout/Block): A border with an optional title around one child.
