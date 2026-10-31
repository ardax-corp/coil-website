---
slug: "tui/tui/node/index"
package: "tui"
title: "tui::node"
description: "The tui::node module."
module: "tui::node"
kind: "module"
name: "tui::node"
origin: "package"
auto: false
order: 4
---

Part of the [tui](/packages/tui) package ([coil-tui](https://github.com/ardax-corp/coil-tui)), not the compiler or coil-stdlib. Add it to `[dependencies]` in `coil.toml` to use it (see the [package overview](/packages/tui)).

Import what you use (`use path::*` is not allowed):

```coil
use tui::node::{Component, Node};
```

## Types

| Name | Description |
|------|-------------|
| [`Node`](/packages/tui/reference/tui/node/Node) | A component in the tree. |
| [`Timer`](/packages/tui/reference/tui/node/Timer) | A scheduled callback. |
| [`Ctx`](/packages/tui/reference/tui/node/Ctx) | What handlers, callbacks and `render` get: the theme, the clock, who has focus, and requests to the app (quit, focus, layers, timers), which the app carries out after the handler returns. |

## Traits

| Name | Description |
|------|-------------|
| [`Component`](/packages/tui/reference/tui/node/Component) | What a component is: how it draws, sizes itself, handles input and holds children. |

## Functions

| Name | Description |
|------|-------------|
| [`mount`](/packages/tui/reference/tui/node/mount) | Wrap a component in a node. |
| [`ctx`](/packages/tui/reference/tui/node/fn.ctx) | A fresh context: the default theme, clock at 0, nothing focused. |
| [`current`](/packages/tui/reference/tui/node/current) | The current context (a fresh one when no app has installed one). |
| [`set_current`](/packages/tui/reference/tui/node/set_current) | Make `c` the context handlers and `render` get. |
| [`contains`](/packages/tui/reference/tui/node/contains) | Whether `target` is `root` or one of its descendants. |
| [`has_focusable`](/packages/tui/reference/tui/node/has_focusable) | Whether `n` or a visible, enabled descendant can take focus. |
