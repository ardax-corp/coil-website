---
slug: "tui/tui/node/Component/children"
package: "tui"
title: "Component::children"
description: "Child nodes, in paint and focus order."
module: "tui::node"
kind: "method"
name: "children"
parent: "Component"
signature: "fn children(T c) -> Vec<Node>"
import: "use tui::node::{Component};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/node.hy#L78"
order: 4
---

Child nodes, in paint and focus order.

## Parameters

| Name | Type |
|------|------|
| `c` | `T` |

## Returns

`Vec<Node>`

## See also

- [`Component`](/packages/tui/reference/tui/node/Component): What a component is: how it draws, sizes itself, handles input and holds children.
- [`Component::render`](/packages/tui/reference/tui/node/Component/render): Draw into `c`, whose (0, 0) is this component's top-left corner.
- [`Component::measure`](/packages/tui/reference/tui/node/Component/measure): Preferred size within `max` (used by `Auto` constraints and by containers that size to content).
- [`Component::handle`](/packages/tui/reference/tui/node/Component/handle): Handle an event; true when it was consumed.
- [`Component::focusable`](/packages/tui/reference/tui/node/Component/focusable): Whether this component can take keyboard focus (Tab stops on it).
- [`Component::arrange`](/packages/tui/reference/tui/node/Component/arrange): Rects for `children()` inside `area` (local coordinates).
- [`Component::constraint`](/packages/tui/reference/tui/node/Component/constraint): How a row or column sizes this component unless the node says otherwise.
