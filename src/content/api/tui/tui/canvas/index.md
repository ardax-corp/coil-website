---
slug: "tui/tui/canvas/index"
package: "tui"
title: "tui::canvas"
description: "The tui::canvas module."
module: "tui::canvas"
kind: "module"
name: "tui::canvas"
origin: "package"
auto: false
order: 1
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::canvas::{Frame, Canvas};
```

## Types

| Name | Description |
|------|-------------|
| [`Frame`](/packages/tui/reference/tui/canvas/Frame) | One frame being drawn: the buffer plus where the focused component wants the terminal cursor (absolute cell, or none). |
| [`Canvas`](/packages/tui/reference/tui/canvas/Canvas) | A view onto a [`Frame`](/packages/tui/reference/tui/canvas/Frame): local (0, 0) is `area`'s corner, and nothing is drawn outside `clip` (absolute coordinates, inside `area`). |

## Functions

| Name | Description |
|------|-------------|
| [`frame`](/packages/tui/reference/tui/canvas/fn.frame) | A frame drawing into `buf`, with no cursor requested. |
| [`canvas`](/packages/tui/reference/tui/canvas/fn.canvas) | A canvas over the whole of `f`'s buffer. |
