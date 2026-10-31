---
slug: "tui/tui/node/current"
package: "tui"
title: "current"
description: "The current context (a fresh one when no app has installed one)."
module: "tui::node"
kind: "fn"
name: "current"
signature: "fn current() -> Ctx"
import: "use tui::node::{current};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/node.hy#L307"
order: 6
---

The current context (a fresh one when no app has installed one).

## Returns

`Ctx`

## See also

- [`mount`](/packages/tui/reference/tui/node/mount): Wrap a component in a node.
- [`ctx`](/packages/tui/reference/tui/node/fn.ctx): A fresh context: the default theme, clock at 0, nothing focused.
- [`set_current`](/packages/tui/reference/tui/node/set_current): Make `c` the context handlers and `render` get.
- [`contains`](/packages/tui/reference/tui/node/contains): Whether `target` is `root` or one of its descendants.
- [`has_focusable`](/packages/tui/reference/tui/node/has_focusable): Whether `n` or a visible, enabled descendant can take focus.
