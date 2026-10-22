---
slug: "prelude/ops/Into"
title: "Into"
description: "Conversion from S into T, written impl Into<T> for S."
module: "prelude::ops"
kind: "trait"
name: "Into"
signature: "trait Into<S, T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/prelude/ops.hy#L733"
order: 23
---

Conversion from `S` into `T`, written `impl Into<T> for S`.

Call it as a method where the target type is known:
`let y: T = x.into();`. There are no builtin instances; use `as` for
primitive conversions. Both `S` and `T` must be types defined in the
current module (an instance with a builtin type such as [`int`](/docs/reference/types/int) on either
side is rejected as an orphan).

## Required methods

| Name | Description |
|------|-------------|
| [`into`](/docs/reference/prelude/ops/Into/into) | Converts value into a T. |

## Examples

```coil
use tests::assert;
class Celsius {
    pub c: int,
}

class Fahrenheit {
    pub f: int,
}

impl Into<Fahrenheit> for Celsius {
    pub fn into(Celsius x) -> Fahrenheit {
        return new Fahrenheit(x.c * 9 / 5 + 32);
    }
}

fn main() {
    let f: Fahrenheit = new Celsius(100).into();
    assert!(f.f == 212);
}
```

## See also

- [`int`](/docs/reference/types/int)
- [`Add`](/docs/reference/prelude/ops/Add): The addition operator +.
- [`Sub`](/docs/reference/prelude/ops/Sub): The subtraction operator -.
- [`Mul`](/docs/reference/prelude/ops/Mul): The multiplication operator *.
- [`Div`](/docs/reference/prelude/ops/Div): The division operator /.
- [`Neg`](/docs/reference/prelude/ops/Neg): The unary negation operator -x.
- [`Rem`](/docs/reference/prelude/ops/Rem): The remainder operator %.
- [`Pow`](/docs/reference/prelude/ops/Pow): The exponentiation operator **.
