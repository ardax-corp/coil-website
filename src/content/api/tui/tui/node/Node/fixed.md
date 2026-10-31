---
slug: "tui/tui/node/Node/fixed"
package: "tui"
title: "Node::fixed"
description: "Exactly n cells on the parent's main axis."
module: "tui::node"
kind: "method"
name: "fixed"
parent: "Node"
signature: "pub fn fixed(int n) -> Node"
import: "use tui::node::{Node};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/node.hy#L199"
order: 8
---

Exactly `n` cells on the parent's main axis.

Called on a `Node` value as `value.fixed(…)`.

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
