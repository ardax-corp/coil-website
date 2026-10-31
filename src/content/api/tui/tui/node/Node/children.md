---
slug: "tui/tui/node/Node/children"
package: "tui"
title: "Node::children"
description: "The child nodes, in paint and focus order."
module: "tui::node"
kind: "method"
name: "children"
parent: "Node"
signature: "pub fn children() -> Vec<Node>"
import: "use tui::node::{Node};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/node.hy#L176"
order: 4
---

The child nodes, in paint and focus order.

Called on a `Node` value as `value.children(…)`.

## Returns

`Vec<Node>`

## See also

- [`Node`](/packages/tui/reference/tui/node/Node): A component in the tree.
- [`Node::render`](/packages/tui/reference/tui/node/Node/render): Draw the component into `cv`.
- [`Node::measure`](/packages/tui/reference/tui/node/Node/measure): The component's preferred size within `max`.
- [`Node::handle`](/packages/tui/reference/tui/node/Node/handle): Offer `e` to the component; true when it was consumed.
- [`Node::can_focus`](/packages/tui/reference/tui/node/Node/can_focus): Focusable now: visible, enabled and the component accepts focus.
- [`Node::arrange`](/packages/tui/reference/tui/node/Node/arrange): The children's rects inside `area` (local coordinates).
- [`Node::named`](/packages/tui/reference/tui/node/Node/named): Set the id (builder style).
- [`Node::sized`](/packages/tui/reference/tui/node/Node/sized): Set the constraint (builder style).
