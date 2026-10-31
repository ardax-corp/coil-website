---
slug: "tui/tui/widgets/tabs/fn.tabs"
package: "tui"
title: "tabs"
description: "A tabs node over pages titled titles (see Tabs)."
module: "tui::widgets::tabs"
kind: "fn"
name: "tabs"
signature: "fn tabs(Vec<string> titles, Vec<Node> pages) -> Node"
import: "use tui::widgets::tabs::{tabs};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/tabs.hy#L189"
order: 1
---

A tabs node over `pages` titled `titles` (see [`Tabs`](/packages/tui/reference/tui/widgets/tabs/Tabs)).

## Parameters

| Name | Type |
|------|------|
| `titles` | `Vec<string>` |
| `pages` | `Vec<Node>` |

## Returns

`Node`

## Examples

```coil
use text::Searchable;
use tui::testing::harness;
use tui::widgets::tabs::tabs;
use tui::widgets::text::text;
use tests::assert;
let h = harness(tabs(["One", "Two"], [text("first page"), text("second page")]), 20, 3);
assert!(h.text().contains("first page"));
h.key("right");
assert!(h.text().contains("second page"));
```

## See also

- [`tui::widgets::tabs::Tabs`](/packages/tui/reference/tui/widgets/tabs/Tabs)
