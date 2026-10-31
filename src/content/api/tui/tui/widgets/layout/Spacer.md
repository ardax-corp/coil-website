---
slug: "tui/tui/widgets/layout/Spacer"
package: "tui"
title: "Spacer"
description: "Empty space that takes what is left (Fill(1))."
module: "tui::widgets::layout"
kind: "class"
name: "Spacer"
signature: "shared class Spacer"
import: "use tui::widgets::layout::{Spacer};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/layout.hy#L333"
order: 4
---

Empty space that takes what is left (`Fill(1)`).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `n` | `int` | Unused; the spacer has no settings. |

## Trait implementations

- `Component` for `Spacer`

## See also

- [`Flex`](/packages/tui/reference/tui/widgets/layout/Flex): Children side by side (`horizontal`) or one under another, sized by their constraints.
- [`Stack`](/packages/tui/reference/tui/widgets/layout/Stack): Children drawn on top of each other, each over the whole area (later ones on top).
- [`Pad`](/packages/tui/reference/tui/widgets/layout/Pad): Space around one child.
- [`Place`](/packages/tui/reference/tui/widgets/layout/Place): `child` at its measured size, aligned inside the area.
- [`Block`](/packages/tui/reference/tui/widgets/layout/Block): A border with an optional title around one child.
