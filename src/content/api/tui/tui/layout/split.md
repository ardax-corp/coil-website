---
slug: "tui/tui/layout/split"
package: "tui"
title: "split"
description: "Sizes along one axis for children with cs constraints and naturals measured sizes (used by Auto), in total cells with gap cells between neighbours."
module: "tui::layout"
kind: "fn"
name: "split"
signature: "fn split(int total, Vec<Constraint> cs, Vec<int> naturals, int gap) -> Vec<int>"
import: "use tui::layout::{split};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/layout.coil#L105"
order: 1
---

Sizes along one axis for children with `cs` constraints and `naturals` measured sizes (used by `Auto`), in `total` cells with `gap` cells between neighbours.

Fixed, percent, auto and min sizes come first; when they do not fit
they are shrunk in proportion. What is left goes to fill, min and
max children by weight, with max children capped. Leftover space with
no fill child to take it stays unused at the end.

## Parameters

| Name | Type |
|------|------|
| `total` | `int` |
| `cs` | `Vec<Constraint>` |
| `naturals` | `Vec<int>` |
| `gap` | `int` |

## Returns

`Vec<int>`

## Examples

```coil
use tui::layout::{Constraint, split};
use tests::assert;
let cs: Vec<Constraint> = [Constraint::Fixed(5), Constraint::Fill(1), Constraint::Fill(2)];
let none: Vec<int> = Vec::new();
let sizes = split(21, cs, none, 0);
assert!(sizes[0] == 5 && sizes[1] == 6 && sizes[2] == 10);
let gapped = split(21, cs, none, 2);
assert!(gapped[0] + gapped[1] + gapped[2] == 17);
```

## See also

- [`stack_rects`](/packages/tui/reference/tui/layout/stack_rects): Rects for children laid out left to right (`horizontal`) or top to bottom inside `area`, sized by `sizes` along the main axis, `gap` cells apart.
