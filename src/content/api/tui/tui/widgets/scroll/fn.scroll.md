---
slug: "tui/tui/widgets/scroll/fn.scroll"
package: "tui"
title: "scroll"
description: "A scroll view node over child (see Scroll)."
module: "tui::widgets::scroll"
kind: "fn"
name: "scroll"
signature: "fn scroll(Node child) -> Node"
import: "use tui::widgets::scroll::{scroll};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/scroll.coil#L165"
order: 1
---

A scroll view node over `child` (see [`Scroll`](/packages/tui/reference/tui/widgets/scroll/Scroll)).

## Parameters

| Name | Type |
|------|------|
| `child` | `Node` |

## Returns

`Node`

## Examples

```coil
use tui::testing::harness;
use tui::widgets::scroll::scroll;
use tui::widgets::text::text;
use tests::assert;
let h = harness(scroll(text("1\n2\n3\n4\n5")), 4, 2);
assert!(h.row(0).starts_with("1"));
h.key("pagedown");
assert!(!h.row(0).starts_with("1"));
```

## See also

- [`tui::widgets::scroll::Scroll`](/packages/tui/reference/tui/widgets/scroll/Scroll)
