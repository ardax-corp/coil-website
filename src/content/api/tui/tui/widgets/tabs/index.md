---
slug: "tui/tui/widgets/tabs/index"
package: "tui"
title: "tui::widgets::tabs"
description: "The tui::widgets::tabs module."
module: "tui::widgets::tabs"
kind: "module"
name: "tui::widgets::tabs"
origin: "package"
auto: false
order: 14
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::widgets::tabs::{Tabs, tabs};
```

## Types

| Name | Description |
|------|-------------|
| [`Tabs`](/packages/tui/reference/tui/widgets/tabs/Tabs) | A title bar over pages, one shown at a time. |

## Functions

| Name | Description |
|------|-------------|
| [`tabs`](/packages/tui/reference/tui/widgets/tabs/fn.tabs) | A tabs node over `pages` titled `titles` (see [`Tabs`](/packages/tui/reference/tui/widgets/tabs/Tabs)). |
