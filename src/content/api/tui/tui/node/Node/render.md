---
slug: "tui/tui/node/Node/render"
package: "tui"
title: "Node::render"
description: "Draw the component into cv."
module: "tui::node"
kind: "method"
name: "render"
parent: "Node"
signature: "pub fn render(Canvas cv)"
import: "use tui::node::{Node};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/node.coil#L152"
order: 0
---

Draw the component into `cv`.

Called on a `Node` value as `value.render(…)`.

## Parameters

| Name | Type |
|------|------|
| `cv` | `Canvas` |

## See also

- [`Node`](/packages/tui/reference/tui/node/Node): A component in the tree.
- [`Node::measure`](/packages/tui/reference/tui/node/Node/measure): The component's preferred size within `max`.
- [`Node::handle`](/packages/tui/reference/tui/node/Node/handle): Offer `e` to the component; true when it was consumed.
- [`Node::can_focus`](/packages/tui/reference/tui/node/Node/can_focus): Focusable now: visible, enabled and the component accepts focus.
- [`Node::children`](/packages/tui/reference/tui/node/Node/children): The child nodes, in paint and focus order.
- [`Node::arrange`](/packages/tui/reference/tui/node/Node/arrange): The children's rects inside `area` (local coordinates).
- [`Node::named`](/packages/tui/reference/tui/node/Node/named): Set the id (builder style).
- [`Node::sized`](/packages/tui/reference/tui/node/Node/sized): Set the constraint (builder style).
