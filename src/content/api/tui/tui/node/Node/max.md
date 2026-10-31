---
slug: "tui/tui/node/Node/max"
package: "tui"
title: "Node::max"
description: "Grows like fill(1), up to n cells."
module: "tui::node"
kind: "method"
name: "max"
parent: "Node"
signature: "pub fn max(int n) -> Node"
import: "use tui::node::{Node};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/node.hy#L224"
order: 13
---

Grows like `fill(1)`, up to `n` cells.

Called on a `Node` value as `value.max(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `int` |

## Returns

`Node`

## See also

- [`Node`](/packages/tui/reference/tui/node/Node): A component in the tree.
- [`Node::render`](/packages/tui/reference/tui/node/Node/render): Draw the component into `cv`.
- [`Node::measure`](/packages/tui/reference/tui/node/Node/measure): The component's preferred size within `max`.
- [`Node::handle`](/packages/tui/reference/tui/node/Node/handle): Offer `e` to the component; true when it was consumed.
- [`Node::can_focus`](/packages/tui/reference/tui/node/Node/can_focus): Focusable now: visible, enabled and the component accepts focus.
- [`Node::children`](/packages/tui/reference/tui/node/Node/children): The child nodes, in paint and focus order.
- [`Node::arrange`](/packages/tui/reference/tui/node/Node/arrange): The children's rects inside `area` (local coordinates).
- [`Node::named`](/packages/tui/reference/tui/node/Node/named): Set the id (builder style).
