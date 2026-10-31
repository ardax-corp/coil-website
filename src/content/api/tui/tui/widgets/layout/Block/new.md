---
slug: "tui/tui/widgets/layout/Block/new"
package: "tui"
title: "Block::new"
description: "child in a light border titled title, no padding."
module: "tui::widgets::layout"
kind: "static method"
name: "new"
parent: "Block"
signature: "pub static fn new(string title, Node child) -> Block"
import: "use tui::widgets::layout::{Block};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/layout.hy#L372"
order: 0
---

`child` in a light border titled `title`, no padding.

## Parameters

| Name | Type |
|------|------|
| `title` | `string` |
| `child` | `Node` |

## Returns

`Block`

## See also

- [`Block`](/packages/tui/reference/tui/widgets/layout/Block): A border with an optional title around one child.
- [`Block::rounded`](/packages/tui/reference/tui/widgets/layout/Block/rounded): Use rounded corners (builder style).
- [`Block::padded`](/packages/tui/reference/tui/widgets/layout/Block/padded): Leave `n` blank cells inside the border (builder style).
- [`Block::styled`](/packages/tui/reference/tui/widgets/layout/Block/styled): Draw the border in `s` always (builder style).
- [`Block::title_at`](/packages/tui/reference/tui/widgets/layout/Block/title_at): Place the title by `a` (builder style).
