---
slug: "tui/tui/widgets/layout/row"
package: "tui"
title: "row"
description: "Children left to right: row([a, b, c]), each sized on the main axis by its node's constraint (fixed, fill, auto, ...)."
module: "tui::widgets::layout"
kind: "fn"
name: "row"
signature: "fn row(Vec<Node> kids) -> Node"
import: "use tui::widgets::layout::{row};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/layout.hy#L165"
order: 6
---

Children left to right: `row([a, b, c])`, each sized on the main axis by its node's constraint (`fixed`, `fill`, `auto`, ...).

## Parameters

| Name | Type |
|------|------|
| `kids` | `Vec<Node>` |

## Returns

`Node`

## Examples

```coil
use tui::testing::harness;
use tui::widgets::layout::{block, column, row, spacer};
use tui::widgets::text::text;
use tests::assert;
let top = row([text("L").fixed(3), text("R").fill(1)]).fixed(1);
let h = harness(block("Box", column([top, spacer()])), 10, 4);
assert!(h.row(0) == "┌ Box ───┐");
assert!(h.row(1) == "│L  R    │");
assert!(h.row(3) == "└────────┘");
```

## See also

- [`column`](/packages/tui/reference/tui/widgets/layout/column): Children top to bottom: `column([a, b, c])`.
- [`flex`](/packages/tui/reference/tui/widgets/layout/fn.flex): A row or column you keep a reference to (to add children later, or set `gap` and `align`): `let f = flex(false); mount(f)`.
- [`stack`](/packages/tui/reference/tui/widgets/layout/fn.stack): `kids` drawn over each other, each over the whole area.
- [`pad`](/packages/tui/reference/tui/widgets/layout/fn.pad): `child` with `v` blank rows above and below and `h` blank columns on each side.
- [`center`](/packages/tui/reference/tui/widgets/layout/center): `child` at its measured size, centred in the area.
- [`align`](/packages/tui/reference/tui/widgets/layout/align): `child` at its measured size, aligned by `ax` and `ay`.
- [`spacer`](/packages/tui/reference/tui/widgets/layout/fn.spacer): Empty space taking what is left in a row or column.
- [`block`](/packages/tui/reference/tui/widgets/layout/fn.block): `child` in a light border with `title` ("" for none).
