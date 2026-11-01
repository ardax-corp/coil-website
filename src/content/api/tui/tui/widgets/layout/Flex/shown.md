---
slug: "tui/tui/widgets/layout/Flex/shown"
package: "tui"
title: "Flex::shown"
description: "Visible children (hidden ones take no space)."
module: "tui::widgets::layout"
kind: "method"
name: "shown"
parent: "Flex"
signature: "pub fn shown() -> Vec<Node>"
import: "use tui::widgets::layout::{Flex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/layout.coil#L57"
order: 1
---

Visible children (hidden ones take no space).

Called on a `Flex` value as `value.shown(…)`.

## Returns

`Vec<Node>`

## See also

- [`Flex`](/packages/tui/reference/tui/widgets/layout/Flex): Children side by side (`horizontal`) or one under another, sized by their constraints.
- [`Flex::new`](/packages/tui/reference/tui/widgets/layout/Flex/new): A row (`horizontal`) or column of `kids`, no gap, children stretched on the cross axis.
- [`Flex::add`](/packages/tui/reference/tui/widgets/layout/Flex/add): Append a child (builder style).
- [`Flex::spaced`](/packages/tui/reference/tui/widgets/layout/Flex/spaced): Put `gap` cells between neighbours (builder style).
- [`Flex::aligned`](/packages/tui/reference/tui/widgets/layout/Flex/aligned): Place children on the cross axis by `a` (builder style).
