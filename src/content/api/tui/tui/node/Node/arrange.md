---
slug: "tui/tui/node/Node/arrange"
package: "tui"
title: "Node::arrange"
description: "The children's rects inside area (local coordinates)."
module: "tui::node"
kind: "method"
name: "arrange"
parent: "Node"
signature: "pub fn arrange(Rect area) -> Vec<Rect>"
import: "use tui::node::{Node};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/611cfd9b4c061de7df4a8352a34580911bde46b9/src/tui/node.coil#L181"
order: 5
---

The children's rects inside `area` (local coordinates).

Called on a `Node` value as `value.arrange(…)`.

## Parameters

| Name | Type |
|------|------|
| `area` | `Rect` |

## Returns

`Vec<Rect>`

## See also

- [`Node`](/packages/tui/reference/tui/node/Node): A component in the tree.
- [`Node::render`](/packages/tui/reference/tui/node/Node/render): Draw the component into `cv`.
- [`Node::measure`](/packages/tui/reference/tui/node/Node/measure): The component's preferred size within `max`.
- [`Node::handle`](/packages/tui/reference/tui/node/Node/handle): Offer `e` to the component; true when it was consumed.
- [`Node::can_focus`](/packages/tui/reference/tui/node/Node/can_focus): Focusable now: visible, enabled and the component accepts focus.
- [`Node::children`](/packages/tui/reference/tui/node/Node/children): The child nodes, in paint and focus order.
- [`Node::named`](/packages/tui/reference/tui/node/Node/named): Set the id (builder style).
- [`Node::sized`](/packages/tui/reference/tui/node/Node/sized): Set the constraint (builder style).
