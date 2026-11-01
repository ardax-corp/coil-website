---
slug: "tui/tui/node/Component/measure"
package: "tui"
title: "Component::measure"
description: "Preferred size within max (used by Auto constraints and by containers that size to content)."
module: "tui::node"
kind: "method"
name: "measure"
parent: "Component"
signature: "fn measure(T c, Size max) -> Size"
import: "use tui::node::{Component};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/node.coil#L62"
order: 1
---

Preferred size within `max` (used by `Auto` constraints and by containers that size to content).

## Parameters

| Name | Type |
|------|------|
| `c` | `T` |
| `max` | `Size` |

## Returns

`Size`

## See also

- [`Component`](/packages/tui/reference/tui/node/Component): What a component is: how it draws, sizes itself, handles input and holds children.
- [`Component::render`](/packages/tui/reference/tui/node/Component/render): Draw into `c`, whose (0, 0) is this component's top-left corner.
- [`Component::handle`](/packages/tui/reference/tui/node/Component/handle): Handle an event; true when it was consumed.
- [`Component::focusable`](/packages/tui/reference/tui/node/Component/focusable): Whether this component can take keyboard focus (Tab stops on it).
- [`Component::children`](/packages/tui/reference/tui/node/Component/children): Child nodes, in paint and focus order.
- [`Component::arrange`](/packages/tui/reference/tui/node/Component/arrange): Rects for `children()` inside `area` (local coordinates).
- [`Component::constraint`](/packages/tui/reference/tui/node/Component/constraint): How a row or column sizes this component unless the node says otherwise.
