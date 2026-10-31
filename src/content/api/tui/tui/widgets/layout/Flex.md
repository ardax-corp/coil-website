---
slug: "tui/tui/widgets/layout/Flex"
package: "tui"
title: "Flex"
description: "Children side by side (horizontal) or one under another, sized by their constraints."
module: "tui::widgets::layout"
kind: "class"
name: "Flex"
signature: "shared class Flex"
import: "use tui::widgets::layout::{Flex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/layout.hy#L38"
order: 0
---

Children side by side (`horizontal`) or one under another, sized by their constraints.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `kids` | `Vec<Node>` | The children, in order. |
| `horizontal` | `bool` | Side by side (`true`) or one under another. |
| `gap` | `int` | Cells between neighbours. |
| `align` | `Align` | Cross-axis placement of children (default `Stretch`). |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/tui/reference/tui/widgets/layout/Flex/new) | A row (`horizontal`) or column of `kids`, no gap, children stretched on the cross axis. |

## Methods

| Name | Description |
|------|-------------|
| [`shown`](/packages/tui/reference/tui/widgets/layout/Flex/shown) | Visible children (hidden ones take no space). |
| [`add`](/packages/tui/reference/tui/widgets/layout/Flex/add) | Append a child (builder style). |
| [`spaced`](/packages/tui/reference/tui/widgets/layout/Flex/spaced) | Put `gap` cells between neighbours (builder style). |
| [`aligned`](/packages/tui/reference/tui/widgets/layout/Flex/aligned) | Place children on the cross axis by `a` (builder style). |

## Trait implementations

- `Component` for `Flex`

## See also

- [`Stack`](/packages/tui/reference/tui/widgets/layout/Stack): Children drawn on top of each other, each over the whole area (later ones on top).
- [`Pad`](/packages/tui/reference/tui/widgets/layout/Pad): Space around one child.
- [`Place`](/packages/tui/reference/tui/widgets/layout/Place): `child` at its measured size, aligned inside the area.
- [`Spacer`](/packages/tui/reference/tui/widgets/layout/Spacer): Empty space that takes what is left (`Fill(1)`).
- [`Block`](/packages/tui/reference/tui/widgets/layout/Block): A border with an optional title around one child.
