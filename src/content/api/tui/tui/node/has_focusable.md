---
slug: "tui/tui/node/has_focusable"
package: "tui"
title: "has_focusable"
description: "Whether n or a visible, enabled descendant can take focus."
module: "tui::node"
kind: "fn"
name: "has_focusable"
signature: "fn has_focusable(Node n) -> bool"
import: "use tui::node::{has_focusable};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/node.hy#L337"
order: 9
---

Whether `n` or a visible, enabled descendant can take focus.

## Parameters

| Name | Type |
|------|------|
| `n` | `Node` |

## Returns

`bool`

## See also

- [`mount`](/packages/tui/reference/tui/node/mount): Wrap a component in a node.
- [`ctx`](/packages/tui/reference/tui/node/fn.ctx): A fresh context: the default theme, clock at 0, nothing focused.
- [`current`](/packages/tui/reference/tui/node/current): The current context (a fresh one when no app has installed one).
- [`set_current`](/packages/tui/reference/tui/node/set_current): Make `c` the context handlers and `render` get.
- [`contains`](/packages/tui/reference/tui/node/contains): Whether `target` is `root` or one of its descendants.
