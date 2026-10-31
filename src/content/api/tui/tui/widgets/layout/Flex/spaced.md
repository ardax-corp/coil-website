---
slug: "tui/tui/widgets/layout/Flex/spaced"
package: "tui"
title: "Flex::spaced"
description: "Put gap cells between neighbours (builder style)."
module: "tui::widgets::layout"
kind: "method"
name: "spaced"
parent: "Flex"
signature: "pub fn spaced(int gap) -> Flex"
import: "use tui::widgets::layout::{Flex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/layout.hy#L188"
order: 3
---

Put `gap` cells between neighbours (builder style).

Called on a `Flex` value as `value.spaced(…)`.

## Parameters

| Name | Type |
|------|------|
| `gap` | `int` |

## Returns

`Flex`

## See also

- [`Flex`](/packages/tui/reference/tui/widgets/layout/Flex): Children side by side (`horizontal`) or one under another, sized by their constraints.
- [`Flex::new`](/packages/tui/reference/tui/widgets/layout/Flex/new): A row (`horizontal`) or column of `kids`, no gap, children stretched on the cross axis.
- [`Flex::shown`](/packages/tui/reference/tui/widgets/layout/Flex/shown): Visible children (hidden ones take no space).
- [`Flex::add`](/packages/tui/reference/tui/widgets/layout/Flex/add): Append a child (builder style).
- [`Flex::aligned`](/packages/tui/reference/tui/widgets/layout/Flex/aligned): Place children on the cross axis by `a` (builder style).
