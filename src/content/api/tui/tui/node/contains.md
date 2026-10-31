---
slug: "tui/tui/node/contains"
package: "tui"
title: "contains"
description: "Whether target is root or one of its descendants."
module: "tui::node"
kind: "fn"
name: "contains"
signature: "fn contains(Node root, Node target) -> bool"
import: "use tui::node::{contains};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/node.hy#L324"
order: 8
---

Whether `target` is `root` or one of its descendants.

## Parameters

| Name | Type |
|------|------|
| `root` | `Node` |
| `target` | `Node` |

## Returns

`bool`

## See also

- [`mount`](/packages/tui/reference/tui/node/mount): Wrap a component in a node.
- [`ctx`](/packages/tui/reference/tui/node/fn.ctx): A fresh context: the default theme, clock at 0, nothing focused.
- [`current`](/packages/tui/reference/tui/node/current): The current context (a fresh one when no app has installed one).
- [`set_current`](/packages/tui/reference/tui/node/set_current): Make `c` the context handlers and `render` get.
- [`has_focusable`](/packages/tui/reference/tui/node/has_focusable): Whether `n` or a visible, enabled descendant can take focus.
