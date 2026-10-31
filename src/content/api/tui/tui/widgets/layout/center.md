---
slug: "tui/tui/widgets/layout/center"
package: "tui"
title: "center"
description: "child at its measured size, centred in the area."
module: "tui::widgets::layout"
kind: "fn"
name: "center"
signature: "fn center(Node child) -> Node"
import: "use tui::widgets::layout::{center};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/layout.coil#L323"
order: 11
---

`child` at its measured size, centred in the area.

## Parameters

| Name | Type |
|------|------|
| `child` | `Node` |

## Returns

`Node`

## See also

- [`row`](/packages/tui/reference/tui/widgets/layout/row): Children left to right: `row([a, b, c])`, each sized on the main axis by its node's constraint (`fixed`, `fill`, `auto`, ...).
- [`column`](/packages/tui/reference/tui/widgets/layout/column): Children top to bottom: `column([a, b, c])`.
- [`flex`](/packages/tui/reference/tui/widgets/layout/fn.flex): A row or column you keep a reference to (to add children later, or set `gap` and `align`): `let f = flex(false); mount(f)`.
- [`stack`](/packages/tui/reference/tui/widgets/layout/fn.stack): `kids` drawn over each other, each over the whole area.
- [`pad`](/packages/tui/reference/tui/widgets/layout/fn.pad): `child` with `v` blank rows above and below and `h` blank columns on each side.
- [`align`](/packages/tui/reference/tui/widgets/layout/align): `child` at its measured size, aligned by `ax` and `ay`.
- [`spacer`](/packages/tui/reference/tui/widgets/layout/fn.spacer): Empty space taking what is left in a row or column.
- [`block`](/packages/tui/reference/tui/widgets/layout/fn.block): `child` in a light border with `title` ("" for none).
