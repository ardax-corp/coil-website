---
slug: "prelude/ops/Mul"
title: "Mul"
description: "The multiplication operator *."
module: "prelude::ops"
kind: "trait"
name: "Mul"
signature: "trait Mul<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/builtin_docs/prelude/ops.hy#L94"
order: 2
---

The multiplication operator `*`.

`a * b` on a type with a `Mul` instance calls `mul(a, b)`. [`int`](/docs/reference/types/int) and
[`float`](/docs/reference/types/float) have builtin instances. On [`Matrix`](/docs/reference/prelude/math/Matrix) values `*` is matrix
multiplication.

## Required methods

| Name | Description |
|------|-------------|
| [`mul`](/docs/reference/prelude/ops/Mul/mul) | Returns `a * b`. |

## Examples

```coil
use tests::assert;
class V2 {
    pub x: int,
    pub y: int,
}

impl Mul for V2 {
    pub fn mul(V2 a, V2 b) -> V2 {
        return new V2(a.x * b.x, a.y * b.y);
    }
}

fn main() {
    let p = new V2(2, 3) * new V2(4, 5);
    assert!(p.x == 8);
    assert!(p.y == 15);
}
```

## See also

- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`Matrix`](/docs/reference/prelude/math/Matrix)
- [`Add`](/docs/reference/prelude/ops/Add): The addition operator `+`.
- [`Sub`](/docs/reference/prelude/ops/Sub): The subtraction operator `-`.
- [`Div`](/docs/reference/prelude/ops/Div): The division operator `/`.
- [`Neg`](/docs/reference/prelude/ops/Neg): The unary negation operator `-x`.
- [`Rem`](/docs/reference/prelude/ops/Rem): The remainder operator `%`.
