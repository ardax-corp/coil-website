---
slug: "tui/tui/widgets/layout/Block/rounded"
package: "tui"
title: "Block::rounded"
description: "Use rounded corners (builder style)."
module: "tui::widgets::layout"
kind: "method"
name: "rounded"
parent: "Block"
signature: "pub fn rounded() -> Block"
import: "use tui::widgets::layout::{Block};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/widgets/layout.coil#L377"
order: 1
---

Use rounded corners (builder style).

Called on a `Block` value as `value.rounded(…)`.

## Returns

`Block`

## See also

- [`Block`](/packages/tui/reference/tui/widgets/layout/Block): A border with an optional title around one child.
- [`Block::new`](/packages/tui/reference/tui/widgets/layout/Block/new): `child` in a light border titled `title`, no padding.
- [`Block::padded`](/packages/tui/reference/tui/widgets/layout/Block/padded): Leave `n` blank cells inside the border (builder style).
- [`Block::styled`](/packages/tui/reference/tui/widgets/layout/Block/styled): Draw the border in `s` always (builder style).
- [`Block::title_at`](/packages/tui/reference/tui/widgets/layout/Block/title_at): Place the title by `a` (builder style).
