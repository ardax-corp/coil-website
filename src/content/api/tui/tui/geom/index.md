---
slug: "tui/tui/geom/index"
package: "tui"
title: "tui::geom"
description: "The tui::geom module."
module: "tui::geom"
kind: "module"
name: "tui::geom"
origin: "package"
auto: false
order: 2
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::geom::{Size, Align};
```

## Types

| Name | Description |
|------|-------------|
| [`Size`](/packages/tui/reference/tui/geom/Size) | A width and height in cells. |
| [`Align`](/packages/tui/reference/tui/geom/Align) | Alignment on one axis. |
| [`Rect`](/packages/tui/reference/tui/geom/Rect) | A rectangle of cells: top-left corner (`x`, `y`) and size. |

## Functions

| Name | Description |
|------|-------------|
| [`size`](/packages/tui/reference/tui/geom/fn.size) | A `w` by `h` size; negative values become 0. |
| [`imin`](/packages/tui/reference/tui/geom/imin) | The smaller of `a` and `b`. |
| [`imax`](/packages/tui/reference/tui/geom/imax) | The larger of `a` and `b`. |
| [`clamp`](/packages/tui/reference/tui/geom/clamp) | Clamp `v` into `lo..=hi` (`lo` wins when `hi < lo`). |
| [`rect`](/packages/tui/reference/tui/geom/fn.rect) | A rect at (`x`, `y`), `w` by `h`; a negative size becomes 0. |
| [`empty`](/packages/tui/reference/tui/geom/empty) | The empty rect at (0, 0). |
