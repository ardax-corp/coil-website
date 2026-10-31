---
slug: "tui/tui/node/Component/handle"
package: "tui"
title: "Component::handle"
description: "Handle an event; true when it was consumed. Unconsumed events bubble to the parent."
module: "tui::node"
kind: "method"
name: "handle"
parent: "Component"
signature: "fn handle(T c, Event e, Ctx ctx) -> bool"
import: "use tui::node::{Component};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/node.hy#L68"
order: 2
---

Handle an event; true when it was consumed. Unconsumed events bubble to the parent.

## Parameters

| Name | Type |
|------|------|
| `c` | `T` |
| `e` | `Event` |
| `ctx` | `Ctx` |

## Returns

`bool`

## See also

- [`Component`](/packages/tui/reference/tui/node/Component): What a component is: how it draws, sizes itself, handles input and holds children.
- [`Component::render`](/packages/tui/reference/tui/node/Component/render): Draw into `c`, whose (0, 0) is this component's top-left corner.
- [`Component::measure`](/packages/tui/reference/tui/node/Component/measure): Preferred size within `max` (used by `Auto` constraints and by containers that size to content).
- [`Component::focusable`](/packages/tui/reference/tui/node/Component/focusable): Whether this component can take keyboard focus (Tab stops on it).
- [`Component::children`](/packages/tui/reference/tui/node/Component/children): Child nodes, in paint and focus order.
- [`Component::arrange`](/packages/tui/reference/tui/node/Component/arrange): Rects for `children()` inside `area` (local coordinates).
- [`Component::constraint`](/packages/tui/reference/tui/node/Component/constraint): How a row or column sizes this component unless the node says otherwise.
