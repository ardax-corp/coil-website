---
slug: "tui/tui/widgets/layout/Block/styled"
package: "tui"
title: "Block::styled"
description: "Draw the border in s always (builder style)."
module: "tui::widgets::layout"
kind: "method"
name: "styled"
parent: "Block"
signature: "pub fn styled(Style s) -> Block"
import: "use tui::widgets::layout::{Block};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/layout.hy#L389"
order: 3
---

Draw the border in `s` always (builder style).

Called on a `Block` value as `value.styled(…)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `Style` |

## Returns

`Block`

## See also

- [`Block`](/packages/tui/reference/tui/widgets/layout/Block): A border with an optional title around one child.
- [`Block::new`](/packages/tui/reference/tui/widgets/layout/Block/new): `child` in a light border titled `title`, no padding.
- [`Block::rounded`](/packages/tui/reference/tui/widgets/layout/Block/rounded): Use rounded corners (builder style).
- [`Block::padded`](/packages/tui/reference/tui/widgets/layout/Block/padded): Leave `n` blank cells inside the border (builder style).
- [`Block::title_at`](/packages/tui/reference/tui/widgets/layout/Block/title_at): Place the title by `a` (builder style).
