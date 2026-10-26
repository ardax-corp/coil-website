---
slug: "prelude/ops/Num"
title: "Num"
description: "The numeric bundle: Add, Sub, Mul, Div, Neg, Rem and Pow."
module: "prelude::ops"
kind: "trait"
name: "Num"
signature: "trait Num<T: Add + Sub + Mul + Div + Neg + Rem + Pow>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/builtin_docs/prelude/ops.hy#L249"
order: 7
---

The numeric bundle: [`Add`](/docs/reference/prelude/ops/Add), [`Sub`](/docs/reference/prelude/ops/Sub), [`Mul`](/docs/reference/prelude/ops/Mul), [`Div`](/docs/reference/prelude/ops/Div), [`Neg`](/docs/reference/prelude/ops/Neg), [`Rem`](/docs/reference/prelude/ops/Rem) and [`Pow`](/docs/reference/prelude/ops/Pow).

`Num` has no methods of its own. A bound `T: Num` lets a generic function
use every arithmetic operator on `T`. [`int`](/docs/reference/types/int) and [`float`](/docs/reference/types/float) are `Num`
([`byte`](/docs/reference/types/byte) is not). A hand-written `impl Num for X` needs an instance of each
of the seven traits first.

## Examples

```coil
use tests::assert;
fn square_plus<T: Num>(T a, T b) -> T {
    return a * a + b;
}

fn main() {
    assert!(square_plus(3, 1) == 10);
    assert!(square_plus(1.5, 0.75) == 3.0);
}
```

## See also

- [`Add`](/docs/reference/prelude/ops/Add)
- [`Sub`](/docs/reference/prelude/ops/Sub)
- [`Mul`](/docs/reference/prelude/ops/Mul)
- [`Div`](/docs/reference/prelude/ops/Div)
- [`Neg`](/docs/reference/prelude/ops/Neg)
- [`Rem`](/docs/reference/prelude/ops/Rem)
- [`Pow`](/docs/reference/prelude/ops/Pow)
- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`byte`](/docs/reference/types/byte)
