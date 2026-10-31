---
slug: "tui/tui/run/index"
package: "tui"
title: "tui::run"
description: "The tui::run module."
module: "tui::run"
kind: "module"
name: "tui::run"
origin: "package"
auto: false
order: 5
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::run::{run, run_app};
```

## Functions

| Name | Description |
|------|-------------|
| [`run`](/packages/tui/reference/tui/run/run) | Run `root` full screen until something quits (`ctx.quit()`, Ctrl-C by default) or input ends. |
| [`run_app`](/packages/tui/reference/tui/run/run_app) | [`run`](/packages/tui/reference/tui/run/run) for an `App` you set up yourself (theme, key bindings, timers). |
