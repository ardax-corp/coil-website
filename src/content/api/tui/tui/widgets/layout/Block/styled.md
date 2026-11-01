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
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/layout.coil#L389"
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
