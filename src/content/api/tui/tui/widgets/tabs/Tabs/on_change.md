---
slug: "tui/tui/widgets/tabs/Tabs/on_change"
package: "tui"
title: "Tabs::on_change"
description: "Call f with the new index on each change (builder style)."
module: "tui::widgets::tabs"
kind: "method"
name: "on_change"
parent: "Tabs"
signature: "pub fn on_change(fn(int, Ctx) -> () f) -> Tabs"
import: "use tui::widgets::tabs::{Tabs};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/tabs.hy#L65"
order: 3
---

Call `f` with the new index on each change (builder style).

Called on a `Tabs` value as `value.on_change(…)`.

## Parameters

| Name | Type |
|------|------|
| `f` | `fn(int, Ctx) -> ()` |

## Returns

`Tabs`

## See also

- [`Tabs`](/packages/tui/reference/tui/widgets/tabs/Tabs): A title bar over pages, one shown at a time.
- [`Tabs::new`](/packages/tui/reference/tui/widgets/tabs/Tabs/new): Tabs over `pages` titled `titles`, the first page shown.
- [`Tabs::show`](/packages/tui/reference/tui/widgets/tabs/Tabs/show): Make only the active page visible.
- [`Tabs::select`](/packages/tui/reference/tui/widgets/tabs/Tabs/select): Switch to page `i`; true when it changed.
