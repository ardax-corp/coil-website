---
slug: "tui/tui/node/Component/arrange"
package: "tui"
title: "Component::arrange"
description: "Rects for children() inside area (local coordinates). The default gives every child the whole area."
module: "tui::node"
kind: "method"
name: "arrange"
parent: "Component"
signature: "fn arrange(T c, Rect area) -> Vec<Rect>"
import: "use tui::node::{Component};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/node.hy#L84"
order: 5
---

Rects for [`children()`](/packages/tui/reference/tui/node/Component/children) inside `area` (local coordinates). The default gives every child the whole area.

## Parameters

| Name | Type |
|------|------|
| `c` | `T` |
| `area` | `Rect` |

## Returns

`Vec<Rect>`

## See also

- [`Component::children`](/packages/tui/reference/tui/node/Component/children)
- [`Component`](/packages/tui/reference/tui/node/Component): What a component is: how it draws, sizes itself, handles input and holds children.
- [`Component::render`](/packages/tui/reference/tui/node/Component/render): Draw into `c`, whose (0, 0) is this component's top-left corner.
- [`Component::measure`](/packages/tui/reference/tui/node/Component/measure): Preferred size within `max` (used by `Auto` constraints and by containers that size to content).
- [`Component::handle`](/packages/tui/reference/tui/node/Component/handle): Handle an event; true when it was consumed.
- [`Component::focusable`](/packages/tui/reference/tui/node/Component/focusable): Whether this component can take keyboard focus (Tab stops on it).
- [`Component::constraint`](/packages/tui/reference/tui/node/Component/constraint): How a row or column sizes this component unless the node says otherwise.
