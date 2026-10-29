---
slug: "prelude/ops/Show"
title: "Show"
description: "Conversion to a display string, used by the %v format specifier."
module: "prelude::ops"
kind: "trait"
name: "Show"
signature: "trait Show<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/prelude/ops.hy#L665"
order: 21
---

Conversion to a display string, used by the `%v` format specifier.

[`int`](/docs/reference/types/int), [`float`](/docs/reference/types/float), [`byte`](/docs/reference/types/byte), [`string`](/docs/reference/types/string), [`bool`](/docs/reference/types/bool) and [`unit`](/docs/reference/types/unit) have builtin
instances; tuples and records are shown structurally. A non-generic class
without an instance shows its type name, and a non-generic enum its
qualified variant name (`E::V`, payload elided). `#[derive(Show)]`
generates a field-by-field instance.

## Required methods

| Name | Description |
|------|-------------|
| [`show`](/docs/reference/prelude/ops/Show/show) | Returns the display form of `value`. |

## Examples

```coil
use tests::assert;
use string::{format};

class Point {
    pub x: int,
    pub y: int,
}

impl Show for Point {
    pub fn show(Point p) -> string {
        return format("(%i, %i)", p.x, p.y);
    }
}

fn main() {
    let p = new Point(1, 2);
    assert!(show(p) == "(1, 2)");
    assert!(format("at %v", p) == "at (1, 2)");
    assert!(show(2.5) == "2.5");
}
```

## See also

- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`byte`](/docs/reference/types/byte)
- [`string`](/docs/reference/types/string)
- [`bool`](/docs/reference/types/bool)
- [`unit`](/docs/reference/types/unit)
- [`Add`](/docs/reference/prelude/ops/Add): The addition operator `+`.
- [`Sub`](/docs/reference/prelude/ops/Sub): The subtraction operator `-`.
