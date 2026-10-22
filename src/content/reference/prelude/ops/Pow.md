---
slug: "prelude/ops/Pow"
title: "Pow"
description: "The exponentiation operator **."
module: "prelude::ops"
kind: "trait"
name: "Pow"
signature: "trait Pow<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/prelude/ops.hy#L224"
order: 6
---

The exponentiation operator `**`.

`a ** b` on a type with a `Pow` instance calls `pow(a, b)`. [`int`](/docs/reference/types/int) and
[`float`](/docs/reference/types/float) have builtin instances. `**` is right-associative
(`2 ** 3 ** 2` is `512`). For [`int`](/docs/reference/types/int) a negative exponent panics with
`negative exponent` and a result that does not fit panics with
`integer overflow`.

## Required methods

| Name | Description |
|------|-------------|
| [`pow`](/docs/reference/prelude/ops/Pow/pow) | Returns `a` raised to the power `b`. |

## Examples

```coil
use tests::assert;
class Gain {
    pub g: int,
}

impl Pow for Gain {
    pub fn pow(Gain a, Gain b) -> Gain {
        return new Gain(a.g ** b.g);
    }
}

fn main() {
    let p = new Gain(3) ** new Gain(2);
    assert!(p.g == 9);
    assert!(2 ** 10 == 1024);
}
```

## See also

- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`Add`](/docs/reference/prelude/ops/Add): The addition operator `+`.
- [`Sub`](/docs/reference/prelude/ops/Sub): The subtraction operator `-`.
- [`Mul`](/docs/reference/prelude/ops/Mul): The multiplication operator `*`.
- [`Div`](/docs/reference/prelude/ops/Div): The division operator `/`.
- [`Neg`](/docs/reference/prelude/ops/Neg): The unary negation operator `-x`.
- [`Rem`](/docs/reference/prelude/ops/Rem): The remainder operator `%`.
