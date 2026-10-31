---
slug: "tui/tui/node/fn.ctx"
package: "tui"
title: "ctx"
description: "A fresh context: the default theme, clock at 0, nothing focused."
module: "tui::node"
kind: "fn"
name: "ctx"
signature: "fn ctx() -> Ctx"
import: "use tui::node::{ctx};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/node.hy#L285"
order: 5
---

A fresh context: the default theme, clock at 0, nothing focused.

## Returns

`Ctx`

## See also

- [`mount`](/packages/tui/reference/tui/node/mount): Wrap a component in a node.
- [`current`](/packages/tui/reference/tui/node/current): The current context (a fresh one when no app has installed one).
- [`set_current`](/packages/tui/reference/tui/node/set_current): Make `c` the context handlers and `render` get.
- [`contains`](/packages/tui/reference/tui/node/contains): Whether `target` is `root` or one of its descendants.
- [`has_focusable`](/packages/tui/reference/tui/node/has_focusable): Whether `n` or a visible, enabled descendant can take focus.
