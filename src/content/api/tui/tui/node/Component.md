---
slug: "tui/tui/node/Component"
package: "tui"
title: "Component"
description: "What a component is: how it draws, sizes itself, handles input and holds children. Only render is required."
module: "tui::node"
kind: "trait"
name: "Component"
signature: "trait Component<T>"
import: "use tui::node::{Component};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/node.coil#L56"
order: 0
---

What a component is: how it draws, sizes itself, handles input and holds children. Only [`render`](/packages/tui/reference/tui/node/Component/render) is required.

Components are ordinary objects that keep their own state; [`mount`](/packages/tui/reference/tui/node/mount)
turns one into a [`Node`](/packages/tui/reference/tui/node/Node) for the tree.

## Required methods

| Name | Description |
|------|-------------|
| [`render`](/packages/tui/reference/tui/node/Component/render) | Draw into `c`, whose (0, 0) is this component's top-left corner. |
| [`measure`](/packages/tui/reference/tui/node/Component/measure) | Preferred size within `max` (used by `Auto` constraints and by containers that size to content). |
| [`handle`](/packages/tui/reference/tui/node/Component/handle) | Handle an event; true when it was consumed. |
| [`focusable`](/packages/tui/reference/tui/node/Component/focusable) | Whether this component can take keyboard focus (Tab stops on it). |
| [`children`](/packages/tui/reference/tui/node/Component/children) | Child nodes, in paint and focus order. |
| [`arrange`](/packages/tui/reference/tui/node/Component/arrange) | Rects for [`children()`](/packages/tui/reference/tui/node/Component/children) inside `area` (local coordinates). |
| [`constraint`](/packages/tui/reference/tui/node/Component/constraint) | How a row or column sizes this component unless the node says otherwise. |

## Examples

```coil
use cli::keys::{Event, is_key};
use tui::canvas::Canvas;
use tui::node::{Component, Ctx, mount};
use tui::testing::harness;
use string::format;
use tests::assert;
shared class Counter {
    n: int,
}

impl Component for Counter {
    fn render(Counter c, Canvas cv, Ctx ctx) {
        cv.put(0, 0, format("count: %i", c.n), ctx.theme.text);
    }

    fn focusable(Counter c) -> bool {
        return true;
    }

    fn handle(Counter c, Event e, Ctx ctx) -> bool {
        if is_key(e, "i") {
            c.n++;
            return true;
        }
        return false;
    }
}

fn main() {
    let h = harness(mount(new Counter(0)), 12, 1);
    h.keys("i i");
    assert!(h.row(0) == "count: 2    ");
}
```

## See also

- [`Component::render`](/packages/tui/reference/tui/node/Component/render)
- [`tui::node::mount`](/packages/tui/reference/tui/node/mount)
- [`tui::node::Node`](/packages/tui/reference/tui/node/Node)
