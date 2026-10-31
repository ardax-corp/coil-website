---
slug: "tui/tui/layout/stack_rects"
package: "tui"
title: "stack_rects"
description: "Rects for children laid out left to right (horizontal) or top to bottom inside area, sized by sizes along the main axis, gap cells apart. On the cross axis each child takes cross[i] cells aligned by align (Stretch ignores cross)."
module: "tui::layout"
kind: "fn"
name: "stack_rects"
signature: "fn stack_rects( Rect area, bool horizontal, Vec<int> sizes, int gap, Vec<int> cross, Align align, ) -> Vec<Rect>"
import: "use tui::layout::{stack_rects};"
origin: "package"
source: "https://github.com/ardax-corp/coil-tui/blob/e9b465674e02eee2b78c82c0e7fef33d891c8c82/src/tui/layout.hy#L195"
order: 2
---

Rects for children laid out left to right (`horizontal`) or top to bottom inside `area`, sized by `sizes` along the main axis, `gap` cells apart. On the cross axis each child takes `cross[i]` cells aligned by `align` (`Stretch` ignores `cross`).

## Parameters

| Name | Type |
|------|------|
| `area` | `Rect` |
| `horizontal` | `bool` |
| `sizes` | `Vec<int>` |
| `gap` | `int` |
| `cross` | `Vec<int>` |
| `align` | `Align` |

## Returns

`Vec<Rect>`

## Examples

```coil
use tui::layout::stack_rects;
use tui::geom::{Align, rect};
use tests::assert;
let none: Vec<int> = Vec::new();
let rs = stack_rects(rect(0, 0, 20, 4), true, [5, 15], 0, none, Align::Stretch);
assert!(rs[0].eq(rect(0, 0, 5, 4)));
assert!(rs[1].eq(rect(5, 0, 15, 4)));
```

## See also

- [`split`](/packages/tui/reference/tui/layout/split): Sizes along one axis for children with `cs` constraints and `naturals` measured sizes (used by `Auto`), in `total` cells with `gap` cells between neighbours.
