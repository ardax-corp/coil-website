---
slug: "tui/tui/widgets/tabs/Tabs/new"
package: "tui"
title: "Tabs::new"
description: "Tabs over pages titled titles, the first page shown."
module: "tui::widgets::tabs"
kind: "static method"
name: "new"
parent: "Tabs"
signature: "pub static fn new(Vec<string> titles, Vec<Node> pages) -> Tabs"
import: "use tui::widgets::tabs::{Tabs};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/tabs.hy#L37"
order: 0
---

Tabs over `pages` titled `titles`, the first page shown.

## Parameters

| Name | Type |
|------|------|
| `titles` | `Vec<string>` |
| `pages` | `Vec<Node>` |

## Returns

`Tabs`

## See also

- [`Tabs`](/packages/tui/reference/tui/widgets/tabs/Tabs): A title bar over pages, one shown at a time.
- [`Tabs::show`](/packages/tui/reference/tui/widgets/tabs/Tabs/show): Make only the active page visible.
- [`Tabs::select`](/packages/tui/reference/tui/widgets/tabs/Tabs/select): Switch to page `i`; true when it changed.
- [`Tabs::on_change`](/packages/tui/reference/tui/widgets/tabs/Tabs/on_change): Call `f` with the new index on each change (builder style).
