---
slug: "tui/tui/app/index"
package: "tui"
title: "tui::app"
description: "The tui::app module."
module: "tui::app"
kind: "module"
name: "tui::app"
origin: "package"
auto: false
order: 0
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::app::{App, app};
```

## Types

| Name | Description |
|------|-------------|
| [`App`](/packages/tui/reference/tui/app/App) | The application: a stack of layers (the root first, dialogs and popups on top), focus, event routing, key bindings, timers and drawing. |

## Functions

| Name | Description |
|------|-------------|
| [`app`](/packages/tui/reference/tui/app/fn.app) | An app with `root` as its base layer, drawing with colour `level`. |
