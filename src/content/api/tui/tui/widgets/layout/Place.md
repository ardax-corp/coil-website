---
slug: "tui/tui/widgets/layout/Place"
package: "tui"
title: "Place"
description: "child at its measured size, aligned inside the area."
module: "tui::widgets::layout"
kind: "class"
name: "Place"
signature: "shared class Place"
import: "use tui::widgets::layout::{Place};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/layout.hy#L292"
order: 3
---

`child` at its measured size, aligned inside the area.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `child` | `Node` | The placed child. |
| `ax` | `Align` | Horizontal alignment. |
| `ay` | `Align` | Vertical alignment. |
| `kids` | `Vec<Node>` | `[child]`, for `children`. |

## Trait implementations

- `Component` for `Place`

## See also

- [`Flex`](/packages/tui/reference/tui/widgets/layout/Flex): Children side by side (`horizontal`) or one under another, sized by their constraints.
- [`Stack`](/packages/tui/reference/tui/widgets/layout/Stack): Children drawn on top of each other, each over the whole area (later ones on top).
- [`Pad`](/packages/tui/reference/tui/widgets/layout/Pad): Space around one child.
- [`Spacer`](/packages/tui/reference/tui/widgets/layout/Spacer): Empty space that takes what is left (`Fill(1)`).
- [`Block`](/packages/tui/reference/tui/widgets/layout/Block): A border with an optional title around one child.
