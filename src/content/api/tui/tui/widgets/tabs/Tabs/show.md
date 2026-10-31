---
slug: "tui/tui/widgets/tabs/Tabs/show"
package: "tui"
title: "Tabs::show"
description: "Make only the active page visible."
module: "tui::widgets::tabs"
kind: "method"
name: "show"
parent: "Tabs"
signature: "pub fn show()"
import: "use tui::widgets::tabs::{Tabs};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/tabs.hy#L44"
order: 1
---

Make only the active page visible.

Called on a `Tabs` value as `value.show(…)`.

## See also

- [`Tabs`](/packages/tui/reference/tui/widgets/tabs/Tabs): A title bar over pages, one shown at a time.
- [`Tabs::new`](/packages/tui/reference/tui/widgets/tabs/Tabs/new): Tabs over `pages` titled `titles`, the first page shown.
- [`Tabs::select`](/packages/tui/reference/tui/widgets/tabs/Tabs/select): Switch to page `i`; true when it changed.
- [`Tabs::on_change`](/packages/tui/reference/tui/widgets/tabs/Tabs/on_change): Call `f` with the new index on each change (builder style).
