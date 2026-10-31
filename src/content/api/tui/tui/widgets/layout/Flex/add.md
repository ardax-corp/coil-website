---
slug: "tui/tui/widgets/layout/Flex/add"
package: "tui"
title: "Flex::add"
description: "Append a child (builder style)."
module: "tui::widgets::layout"
kind: "method"
name: "add"
parent: "Flex"
signature: "pub fn add(Node n) -> Flex"
import: "use tui::widgets::layout::{Flex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/77c5a22802df3416c576f798d69d570535e77c01/src/tui/widgets/layout.hy#L182"
order: 2
---

Append a child (builder style).

Called on a `Flex` value as `value.add(…)`.

## Parameters

| Name | Type |
|------|------|
| `n` | `Node` |

## Returns

`Flex`

## See also

- [`Flex`](/packages/tui/reference/tui/widgets/layout/Flex): Children side by side (`horizontal`) or one under another, sized by their constraints.
- [`Flex::new`](/packages/tui/reference/tui/widgets/layout/Flex/new): A row (`horizontal`) or column of `kids`, no gap, children stretched on the cross axis.
- [`Flex::shown`](/packages/tui/reference/tui/widgets/layout/Flex/shown): Visible children (hidden ones take no space).
- [`Flex::spaced`](/packages/tui/reference/tui/widgets/layout/Flex/spaced): Put `gap` cells between neighbours (builder style).
- [`Flex::aligned`](/packages/tui/reference/tui/widgets/layout/Flex/aligned): Place children on the cross axis by `a` (builder style).
