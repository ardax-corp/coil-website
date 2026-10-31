---
slug: "tui/tui/node/set_current"
package: "tui"
title: "set_current"
description: "Make c the context handlers and render get."
module: "tui::node"
kind: "fn"
name: "set_current"
signature: "fn set_current(Ctx c)"
import: "use tui::node::{set_current};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/node.hy#L315"
order: 7
---

Make `c` the context handlers and `render` get.

## Parameters

| Name | Type |
|------|------|
| `c` | `Ctx` |

## See also

- [`mount`](/packages/tui/reference/tui/node/mount): Wrap a component in a node.
- [`ctx`](/packages/tui/reference/tui/node/fn.ctx): A fresh context: the default theme, clock at 0, nothing focused.
- [`current`](/packages/tui/reference/tui/node/current): The current context (a fresh one when no app has installed one).
- [`contains`](/packages/tui/reference/tui/node/contains): Whether `target` is `root` or one of its descendants.
- [`has_focusable`](/packages/tui/reference/tui/node/has_focusable): Whether `n` or a visible, enabled descendant can take focus.
