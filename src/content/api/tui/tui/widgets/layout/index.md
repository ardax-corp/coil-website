---
slug: "tui/tui/widgets/layout/index"
package: "tui"
title: "tui::widgets::layout"
description: "The tui::widgets::layout module."
module: "tui::widgets::layout"
kind: "module"
name: "tui::widgets::layout"
origin: "package"
auto: false
order: 10
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::widgets::layout::{Flex, Stack};
```

## Types

| Name | Description |
|------|-------------|
| [`Flex`](/packages/tui/reference/tui/widgets/layout/Flex) | Children side by side (`horizontal`) or one under another, sized by their constraints. |
| [`Stack`](/packages/tui/reference/tui/widgets/layout/Stack) | Children drawn on top of each other, each over the whole area (later ones on top). |
| [`Pad`](/packages/tui/reference/tui/widgets/layout/Pad) | Space around one child. |
| [`Place`](/packages/tui/reference/tui/widgets/layout/Place) | `child` at its measured size, aligned inside the area. |
| [`Spacer`](/packages/tui/reference/tui/widgets/layout/Spacer) | Empty space that takes what is left (`Fill(1)`). |
| [`Block`](/packages/tui/reference/tui/widgets/layout/Block) | A border with an optional title around one child. |

## Functions

| Name | Description |
|------|-------------|
| [`row`](/packages/tui/reference/tui/widgets/layout/row) | Children left to right: `row([a, b, c])`, each sized on the main axis by its node's constraint (`fixed`, `fill`, `auto`, ...). |
| [`column`](/packages/tui/reference/tui/widgets/layout/column) | Children top to bottom: `column([a, b, c])`. |
| [`flex`](/packages/tui/reference/tui/widgets/layout/fn.flex) | A row or column you keep a reference to (to add children later, or set `gap` and [`align`](/packages/tui/reference/tui/widgets/layout/align)): `let f = flex(false); mount(f)`. |
| [`stack`](/packages/tui/reference/tui/widgets/layout/fn.stack) | `kids` drawn over each other, each over the whole area. |
| [`pad`](/packages/tui/reference/tui/widgets/layout/fn.pad) | `child` with `v` blank rows above and below and `h` blank columns on each side. |
| [`center`](/packages/tui/reference/tui/widgets/layout/center) | `child` at its measured size, centred in the area. |
| [`align`](/packages/tui/reference/tui/widgets/layout/align) | `child` at its measured size, aligned by `ax` and `ay`. |
| [`spacer`](/packages/tui/reference/tui/widgets/layout/fn.spacer) | Empty space taking what is left in a row or column. |
| [`block`](/packages/tui/reference/tui/widgets/layout/fn.block) | `child` in a light border with `title` ("" for none). |
