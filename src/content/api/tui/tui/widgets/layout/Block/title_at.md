---
slug: "tui/tui/widgets/layout/Block/title_at"
package: "tui"
title: "Block::title_at"
description: "Place the title by a (builder style)."
module: "tui::widgets::layout"
kind: "method"
name: "title_at"
parent: "Block"
signature: "pub fn title_at(Align a) -> Block"
import: "use tui::widgets::layout::{Block};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/layout.coil#L395"
order: 4
---

Place the title by `a` (builder style).

Called on a `Block` value as `value.title_at(…)`.

## Parameters

| Name | Type |
|------|------|
| `a` | `Align` |

## Returns

`Block`

## See also

- [`Block`](/packages/tui/reference/tui/widgets/layout/Block): A border with an optional title around one child.
- [`Block::new`](/packages/tui/reference/tui/widgets/layout/Block/new): `child` in a light border titled `title`, no padding.
- [`Block::rounded`](/packages/tui/reference/tui/widgets/layout/Block/rounded): Use rounded corners (builder style).
- [`Block::padded`](/packages/tui/reference/tui/widgets/layout/Block/padded): Leave `n` blank cells inside the border (builder style).
- [`Block::styled`](/packages/tui/reference/tui/widgets/layout/Block/styled): Draw the border in `s` always (builder style).
