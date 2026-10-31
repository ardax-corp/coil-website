---
slug: "tui/tui/widgets/layout/Stack"
package: "tui"
title: "Stack"
description: "Children drawn on top of each other, each over the whole area (later ones on top)."
module: "tui::widgets::layout"
kind: "class"
name: "Stack"
signature: "shared class Stack"
import: "use tui::widgets::layout::{Stack};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/layout.coil#L202"
order: 1
---

Children drawn on top of each other, each over the whole area (later ones on top).

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `kids` | `Vec<Node>` | The layers, bottom first. |

## Trait implementations

- `Component` for `Stack`

## See also

- [`Flex`](/packages/tui/reference/tui/widgets/layout/Flex): Children side by side (`horizontal`) or one under another, sized by their constraints.
- [`Pad`](/packages/tui/reference/tui/widgets/layout/Pad): Space around one child.
- [`Place`](/packages/tui/reference/tui/widgets/layout/Place): `child` at its measured size, aligned inside the area.
- [`Spacer`](/packages/tui/reference/tui/widgets/layout/Spacer): Empty space that takes what is left (`Fill(1)`).
- [`Block`](/packages/tui/reference/tui/widgets/layout/Block): A border with an optional title around one child.
