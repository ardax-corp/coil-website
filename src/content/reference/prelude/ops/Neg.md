---
slug: "prelude/ops/Neg"
title: "Neg"
description: "The unary negation operator -x."
module: "prelude::ops"
kind: "trait"
name: "Neg"
signature: "trait Neg<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/builtin_docs/prelude/ops.hy#L160"
order: 4
---

The unary negation operator `-x`.

`-x` on a type with a `Neg` instance calls `neg(x)`. [`int`](/docs/reference/types/int) and [`float`](/docs/reference/types/float)
have builtin instances; negating the smallest [`int`](/docs/reference/types/int) panics with
`integer overflow`.

## Required methods

| Name | Description |
|------|-------------|
| [`neg`](/docs/reference/prelude/ops/Neg/neg) | Returns `-a`. |

## Examples

```coil
use tests::assert;
class V2 {
    pub x: int,
    pub y: int,
}

impl Neg for V2 {
    pub fn neg(V2 a) -> V2 {
        return new V2(-a.x, -a.y);
    }
}

fn main() {
    let n = -new V2(1, -2);
    assert!(n.x == -1);
    assert!(n.y == 2);
}
```

## See also

- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`Add`](/docs/reference/prelude/ops/Add): The addition operator `+`.
- [`Sub`](/docs/reference/prelude/ops/Sub): The subtraction operator `-`.
- [`Mul`](/docs/reference/prelude/ops/Mul): The multiplication operator `*`.
- [`Div`](/docs/reference/prelude/ops/Div): The division operator `/`.
- [`Rem`](/docs/reference/prelude/ops/Rem): The remainder operator `%`.
- [`Pow`](/docs/reference/prelude/ops/Pow): The exponentiation operator `**`.
