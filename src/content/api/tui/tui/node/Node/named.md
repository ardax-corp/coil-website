---
slug: "tui/tui/node/Node/named"
package: "tui"
title: "Node::named"
description: "Set the id (builder style)."
module: "tui::node"
kind: "method"
name: "named"
parent: "Node"
signature: "pub fn named(string id) -> Node"
import: "use tui::node::{Node};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/node.coil#L187"
order: 6
---

Set the id (builder style).

Called on a `Node` value as `value.named(…)`.

## Parameters

| Name | Type |
|------|------|
| `id` | `string` |

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
- [`Node::sized`](/packages/tui/reference/tui/node/Node/sized): Set the constraint (builder style).
