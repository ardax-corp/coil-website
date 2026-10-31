---
slug: "tui/tui/widgets/layout/Flex/new"
package: "tui"
title: "Flex::new"
description: "A row (horizontal) or column of kids, no gap, children stretched on the cross axis."
module: "tui::widgets::layout"
kind: "static method"
name: "new"
parent: "Flex"
signature: "pub static fn new(bool horizontal, Vec<Node> kids) -> Flex"
import: "use tui::widgets::layout::{Flex};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/widgets/layout.hy#L52"
order: 0
---

A row (`horizontal`) or column of `kids`, no gap, children stretched on the cross axis.

## Parameters

| Name | Type |
|------|------|
| `horizontal` | `bool` |
| `kids` | `Vec<Node>` |

## Returns

`Flex`

## See also

- [`Flex`](/packages/tui/reference/tui/widgets/layout/Flex): Children side by side (`horizontal`) or one under another, sized by their constraints.
- [`Flex::shown`](/packages/tui/reference/tui/widgets/layout/Flex/shown): Visible children (hidden ones take no space).
- [`Flex::add`](/packages/tui/reference/tui/widgets/layout/Flex/add): Append a child (builder style).
- [`Flex::spaced`](/packages/tui/reference/tui/widgets/layout/Flex/spaced): Put `gap` cells between neighbours (builder style).
- [`Flex::aligned`](/packages/tui/reference/tui/widgets/layout/Flex/aligned): Place children on the cross axis by `a` (builder style).
