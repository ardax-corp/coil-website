---
slug: "tui/tui/layout/index"
package: "tui"
title: "tui::layout"
description: "The tui::layout module."
module: "tui::layout"
kind: "module"
name: "tui::layout"
origin: "package"
auto: false
order: 3
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::layout::{Constraint, split};
```

## Types

| Name | Description |
|------|-------------|
| [`Constraint`](/packages/tui/reference/tui/layout/Constraint) | How a row or column sizes a child on its main axis. |

## Functions

| Name | Description |
|------|-------------|
| [`split`](/packages/tui/reference/tui/layout/split) | Sizes along one axis for children with `cs` constraints and `naturals` measured sizes (used by `Auto`), in `total` cells with `gap` cells between neighbours. |
| [`stack_rects`](/packages/tui/reference/tui/layout/stack_rects) | Rects for children laid out left to right (`horizontal`) or top to bottom inside `area`, sized by `sizes` along the main axis, `gap` cells apart. |
