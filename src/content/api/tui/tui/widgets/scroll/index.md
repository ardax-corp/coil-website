---
slug: "tui/tui/widgets/scroll/index"
package: "tui"
title: "tui::widgets::scroll"
description: "The tui::widgets::scroll module."
module: "tui::widgets::scroll"
kind: "module"
name: "tui::widgets::scroll"
origin: "package"
auto: false
order: 12
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::widgets::scroll::{Scroll, scroll};
```

## Types

| Name | Description |
|------|-------------|
| [`Scroll`](/packages/tui/reference/tui/widgets/scroll/Scroll) | Shows `child` at its measured height through a window, scrolled by PageUp/PageDown, the wheel, and (when the scroll itself has focus, because nothing inside can take it) Up/Down/Home/End. |

## Functions

| Name | Description |
|------|-------------|
| [`scroll`](/packages/tui/reference/tui/widgets/scroll/fn.scroll) | A scroll view node over `child` (see [`Scroll`](/packages/tui/reference/tui/widgets/scroll/Scroll)). |
