---
slug: "prelude/ops/Add"
title: "Add"
description: "The addition operator +."
module: "prelude::ops"
kind: "trait"
name: "Add"
signature: "trait Add<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/builtin_docs/prelude/ops.hy#L31"
order: 0
---

The addition operator `+`.

`a + b` on a type with an `Add` instance calls `add(a, b)`. [`int`](/docs/reference/types/int) and
[`float`](/docs/reference/types/float) have builtin instances (compiled to machine adds, not calls).
String concatenation with `+` is a separate rule and does not go through
`Add`. In a generic function, `T: Add` (or `T: Num`) allows `+` on `T`.

## Required methods

| Name | Description |
|------|-------------|
| [`add`](/docs/reference/prelude/ops/Add/add) | Returns `a + b`. |

## Examples

```coil
use tests::assert;
class V2 {
    pub x: int,
    pub y: int,
}

impl Add for V2 {
    pub fn add(V2 a, V2 b) -> V2 {
        return new V2(a.x + b.x, a.y + b.y);
    }
}

fn main() {
    let p = new V2(1, 2) + new V2(10, 20);
    assert!(p.x == 11);
    assert!(p.y == 22);
}
```

## See also

- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`Sub`](/docs/reference/prelude/ops/Sub): The subtraction operator `-`.
- [`Mul`](/docs/reference/prelude/ops/Mul): The multiplication operator `*`.
- [`Div`](/docs/reference/prelude/ops/Div): The division operator `/`.
- [`Neg`](/docs/reference/prelude/ops/Neg): The unary negation operator `-x`.
- [`Rem`](/docs/reference/prelude/ops/Rem): The remainder operator `%`.
- [`Pow`](/docs/reference/prelude/ops/Pow): The exponentiation operator `**`.
