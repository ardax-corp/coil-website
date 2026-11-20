---
slug: "tui/tui/widgets/tabs/Tabs/select"
package: "tui"
title: "Tabs::select"
description: "Switch to page i; true when it changed."
module: "tui::widgets::tabs"
kind: "method"
name: "select"
parent: "Tabs"
signature: "pub fn select(int i, Ctx ctx) -> bool"
import: "use tui::widgets::tabs::{Tabs};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/0912e5a7bad70e7775e26db08f3f0efa46e1553f/src/tui/widgets/tabs.coil#L53"
order: 2
---

Switch to page `i`; true when it changed.

Called on a `Tabs` value as `value.select(…)`.

## Parameters

| Name | Type |
|------|------|
| `i` | `int` |
| `ctx` | `Ctx` |

## Returns

`bool`

## See also

- [`Tabs`](/packages/tui/reference/tui/widgets/tabs/Tabs): A title bar over pages, one shown at a time.
- [`Tabs::new`](/packages/tui/reference/tui/widgets/tabs/Tabs/new): Tabs over `pages` titled `titles`, the first page shown.
- [`Tabs::show`](/packages/tui/reference/tui/widgets/tabs/Tabs/show): Make only the active page visible.
- [`Tabs::on_change`](/packages/tui/reference/tui/widgets/tabs/Tabs/on_change): Call `f` with the new index on each change (builder style).
