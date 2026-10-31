---
slug: "tui/tui/node/Node"
package: "tui"
title: "Node"
description: "A component in the tree. Holds the component behind closures (so nodes of every component type share one class) plus per-node layout state."
module: "tui::node"
kind: "class"
name: "Node"
signature: "shared class Node"
import: "use tui::node::{Node};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/node.hy#L102"
order: 1
---

A component in the tree. Holds the component behind closures (so nodes of every component type share one class) plus per-node layout state.

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Name for `App.find` and tests ("" = none). |
| `constraint` | `Constraint` | How a row or column sizes this node on its main axis. |
| `rect` | `Rect` | Absolute area from the last draw. |
| `clip` | `Rect` | The visible part of `rect` (clipped by ancestors). |
| `visible` | `bool` | Whether the node is laid out and drawn at all (see [`hidden`](/packages/tui/reference/tui/node/Node/hidden)). |
| `disabled` | `bool` | Whether the node is skipped by focus (see [`enabled`](/packages/tui/reference/tui/node/Node/enabled)). |
| `kids` | `Vec<Node>` | The component's children (the vector it returned from [`children()`](/packages/tui/reference/tui/node/Node/children) at mount; a container that adds to its own vector later is seen here too). |

## Methods

| Name | Description |
|------|-------------|
| [`render`](/packages/tui/reference/tui/node/Node/render) | Draw the component into `cv`. |
| [`measure`](/packages/tui/reference/tui/node/Node/measure) | The component's preferred size within `max`. |
| [`handle`](/packages/tui/reference/tui/node/Node/handle) | Offer `e` to the component; true when it was consumed. |
| [`can_focus`](/packages/tui/reference/tui/node/Node/can_focus) | Focusable now: visible, enabled and the component accepts focus. |
| [`children`](/packages/tui/reference/tui/node/Node/children) | The child nodes, in paint and focus order. |
| [`arrange`](/packages/tui/reference/tui/node/Node/arrange) | The children's rects inside `area` (local coordinates). |
| [`named`](/packages/tui/reference/tui/node/Node/named) | Set the id (builder style). |
| [`sized`](/packages/tui/reference/tui/node/Node/sized) | Set the constraint (builder style). |
| [`fixed`](/packages/tui/reference/tui/node/Node/fixed) | Exactly `n` cells on the parent's main axis. |
| [`percent`](/packages/tui/reference/tui/node/Node/percent) | `p` percent of the parent's space. |
| [`fill`](/packages/tui/reference/tui/node/Node/fill) | A `weight` share of the leftover space. |
| [`auto`](/packages/tui/reference/tui/node/Node/auto) | The component's measured size. |
| [`min`](/packages/tui/reference/tui/node/Node/min) | At least `n` cells, growing like `fill(1)`. |
| [`max`](/packages/tui/reference/tui/node/Node/max) | Grows like `fill(1)`, up to `n` cells. |
| [`hidden`](/packages/tui/reference/tui/node/Node/hidden) | Hide the node (`true`) or show it again; hidden nodes take no space. |
| [`enabled`](/packages/tui/reference/tui/node/Node/enabled) | Enable or disable the node; disabled nodes do not take focus. |

## See also

- [`Node::hidden`](/packages/tui/reference/tui/node/Node/hidden)
- [`Node::enabled`](/packages/tui/reference/tui/node/Node/enabled)
- [`Node::children`](/packages/tui/reference/tui/node/Node/children)
- [`Timer`](/packages/tui/reference/tui/node/Timer): A scheduled callback.
- [`Ctx`](/packages/tui/reference/tui/node/Ctx): What handlers, callbacks and `render` get: the theme, the clock, who has focus, and requests to the app (quit, focus, layers, timers), which the app carries out after the handler returns.
