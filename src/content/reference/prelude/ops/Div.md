---
slug: "prelude/ops/Div"
title: "Div"
description: "The division operator /."
module: "prelude::ops"
kind: "trait"
name: "Div"
signature: "trait Div<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/prelude/ops.hy#L128"
order: 3
---

The division operator `/`.

`a / b` on a type with a `Div` instance calls `div(a, b)`. [`int`](/docs/reference/types/int) and
[`float`](/docs/reference/types/float) have builtin instances: [`int`](/docs/reference/types/int) division truncates toward zero and
panics with `division by zero` when `b` is `0`; [`float`](/docs/reference/types/float) division follows
IEEE-754 (`1.0 / 0.0` is infinity).

## Required methods

| Name | Description |
|------|-------------|
| [`div`](/docs/reference/prelude/ops/Div/div) | Returns `a / b`. |

## Examples

```coil
use tests::assert;
class V2 {
    pub x: int,
    pub y: int,
}

impl Div for V2 {
    pub fn div(V2 a, V2 b) -> V2 {
        return new V2(a.x / b.x, a.y / b.y);
    }
}

fn main() {
    let q = new V2(9, 8) / new V2(3, 2);
    assert!(q.x == 3);
    assert!(q.y == 4);
    assert!(-7 / 2 == -3);
}
```

## See also

- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`Add`](/docs/reference/prelude/ops/Add): The addition operator `+`.
- [`Sub`](/docs/reference/prelude/ops/Sub): The subtraction operator `-`.
- [`Mul`](/docs/reference/prelude/ops/Mul): The multiplication operator `*`.
- [`Neg`](/docs/reference/prelude/ops/Neg): The unary negation operator `-x`.
- [`Rem`](/docs/reference/prelude/ops/Rem): The remainder operator `%`.
- [`Pow`](/docs/reference/prelude/ops/Pow): The exponentiation operator `**`.
