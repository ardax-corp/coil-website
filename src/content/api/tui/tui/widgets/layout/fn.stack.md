---
slug: "tui/tui/widgets/layout/fn.stack"
package: "tui"
title: "stack"
description: "kids drawn over each other, each over the whole area."
module: "tui::widgets::layout"
kind: "fn"
name: "stack"
signature: "fn stack(Vec<Node> kids) -> Node"
import: "use tui::widgets::layout::{stack};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/layout.hy#L226"
order: 9
---

`kids` drawn over each other, each over the whole area.

## Parameters

| Name | Type |
|------|------|
| `kids` | `Vec<Node>` |

## Returns

`Node`

## See also

- [`row`](/packages/tui/reference/tui/widgets/layout/row): Children left to right: `row([a, b, c])`, each sized on the main axis by its node's constraint (`fixed`, `fill`, `auto`, ...).
- [`column`](/packages/tui/reference/tui/widgets/layout/column): Children top to bottom: `column([a, b, c])`.
- [`flex`](/packages/tui/reference/tui/widgets/layout/fn.flex): A row or column you keep a reference to (to add children later, or set `gap` and `align`): `let f = flex(false); mount(f)`.
- [`pad`](/packages/tui/reference/tui/widgets/layout/fn.pad): `child` with `v` blank rows above and below and `h` blank columns on each side.
- [`center`](/packages/tui/reference/tui/widgets/layout/center): `child` at its measured size, centred in the area.
- [`align`](/packages/tui/reference/tui/widgets/layout/align): `child` at its measured size, aligned by `ax` and `ay`.
- [`spacer`](/packages/tui/reference/tui/widgets/layout/fn.spacer): Empty space taking what is left in a row or column.
- [`block`](/packages/tui/reference/tui/widgets/layout/fn.block): `child` in a light border with `title` ("" for none).
