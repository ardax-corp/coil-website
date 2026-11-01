---
slug: "tui/tui/widgets/layout/Block"
package: "tui"
title: "Block"
description: "A border with an optional title around one child."
module: "tui::widgets::layout"
kind: "class"
name: "Block"
signature: "shared class Block"
import: "use tui::widgets::layout::{Block};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/layout.coil#L352"
order: 5
---

A border with an optional title around one child.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `child` | `Node` | The bordered child. |
| `title` | `string` | Title on the top border ("" for none). |
| `title_align` | `Align` | Where the title sits on the top border. |
| `chars` | `BoxChars` | The border characters (`light_box()` by default). |
| `padding` | `int` | Blank cells inside the border. |
| `style` | `Option<Style>` | Border style; `None` uses the theme (focused style when focus is inside). |
| `kids` | `Vec<Node>` | `[child]`, for `children`. |

## Associated functions

| Name | Description |
|------|-------------|
| [`new`](/packages/tui/reference/tui/widgets/layout/Block/new) | `child` in a light border titled `title`, no padding. |

## Methods

| Name | Description |
|------|-------------|
| [`rounded`](/packages/tui/reference/tui/widgets/layout/Block/rounded) | Use rounded corners (builder style). |
| [`padded`](/packages/tui/reference/tui/widgets/layout/Block/padded) | Leave `n` blank cells inside the border (builder style). |
| [`styled`](/packages/tui/reference/tui/widgets/layout/Block/styled) | Draw the border in `s` always (builder style). |
| [`title_at`](/packages/tui/reference/tui/widgets/layout/Block/title_at) | Place the title by `a` (builder style). |

## Trait implementations

- `Component` for `Block`

## See also

- [`Flex`](/packages/tui/reference/tui/widgets/layout/Flex): Children side by side (`horizontal`) or one under another, sized by their constraints.
- [`Stack`](/packages/tui/reference/tui/widgets/layout/Stack): Children drawn on top of each other, each over the whole area (later ones on top).
- [`Pad`](/packages/tui/reference/tui/widgets/layout/Pad): Space around one child.
- [`Place`](/packages/tui/reference/tui/widgets/layout/Place): `child` at its measured size, aligned inside the area.
- [`Spacer`](/packages/tui/reference/tui/widgets/layout/Spacer): Empty space that takes what is left (`Fill(1)`).
