---
slug: "tui/tui/node/Component/render"
package: "tui"
title: "Component::render"
description: "Draw into c, whose (0, 0) is this component's top-left corner."
module: "tui::node"
kind: "method"
name: "render"
parent: "Component"
signature: "fn render(T c, Canvas cv, Ctx ctx)"
import: "use tui::node::{Component};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/node.hy#L58"
order: 0
---

Draw into `c`, whose (0, 0) is this component's top-left corner.

## Parameters

| Name | Type |
|------|------|
| `c` | `T` |
| `cv` | `Canvas` |
| `ctx` | `Ctx` |

## See also

- [`Component`](/packages/tui/reference/tui/node/Component): What a component is: how it draws, sizes itself, handles input and holds children.
- [`Component::measure`](/packages/tui/reference/tui/node/Component/measure): Preferred size within `max` (used by `Auto` constraints and by containers that size to content).
- [`Component::handle`](/packages/tui/reference/tui/node/Component/handle): Handle an event; true when it was consumed.
- [`Component::focusable`](/packages/tui/reference/tui/node/Component/focusable): Whether this component can take keyboard focus (Tab stops on it).
- [`Component::children`](/packages/tui/reference/tui/node/Component/children): Child nodes, in paint and focus order.
- [`Component::arrange`](/packages/tui/reference/tui/node/Component/arrange): Rects for `children()` inside `area` (local coordinates).
- [`Component::constraint`](/packages/tui/reference/tui/node/Component/constraint): How a row or column sizes this component unless the node says otherwise.
