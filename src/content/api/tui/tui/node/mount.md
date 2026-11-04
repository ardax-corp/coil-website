---
slug: "tui/tui/node/mount"
package: "tui"
title: "mount"
description: "Wrap a component in a node."
module: "tui::node"
kind: "fn"
name: "mount"
signature: "fn mount<T: Component>(T c) -> Node"
import: "use tui::node::{mount};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/node.coil#L131"
order: 4
---

Wrap a component in a node.

## Parameters

| Name | Type |
|------|------|
| `c` | `T` |

## Returns

`Node`

## See also

- [`ctx`](/packages/tui/reference/tui/node/fn.ctx): A fresh context: the default theme, clock at 0, nothing focused.
- [`current`](/packages/tui/reference/tui/node/current): The current context (a fresh one when no app has installed one).
- [`set_current`](/packages/tui/reference/tui/node/set_current): Make `c` the context handlers and `render` get.
- [`contains`](/packages/tui/reference/tui/node/contains): Whether `target` is `root` or one of its descendants.
- [`has_focusable`](/packages/tui/reference/tui/node/has_focusable): Whether `n` or a visible, enabled descendant can take focus.
