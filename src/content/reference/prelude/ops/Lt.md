---
slug: "prelude/ops/Lt"
title: "Lt"
description: "The less-than operator <."
module: "prelude::ops"
kind: "trait"
name: "Lt"
signature: "trait Lt<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/prelude/ops.hy#L548"
order: 17
---

The less-than operator `<`.

`a < b` on a type with an `Lt` instance calls `lt(a, b)`.

## Required methods

| Name | Description |
|------|-------------|
| [`lt`](/docs/reference/prelude/ops/Lt/lt) | Returns true when a is less than b. |

## Examples

```coil
use tests::assert;
class Version {
    pub n: int,
}

impl Lt for Version {
    pub fn lt(Version a, Version b) -> bool {
        return a.n < b.n;
    }
}

fn main() {
    assert!(new Version(1) < new Version(2));
}
```

## See also

- [`Add`](/docs/reference/prelude/ops/Add): The addition operator +.
- [`Sub`](/docs/reference/prelude/ops/Sub): The subtraction operator -.
- [`Mul`](/docs/reference/prelude/ops/Mul): The multiplication operator *.
- [`Div`](/docs/reference/prelude/ops/Div): The division operator /.
- [`Neg`](/docs/reference/prelude/ops/Neg): The unary negation operator -x.
- [`Rem`](/docs/reference/prelude/ops/Rem): The remainder operator %.
- [`Pow`](/docs/reference/prelude/ops/Pow): The exponentiation operator **.
- [`Num`](/docs/reference/prelude/ops/Num): The numeric bundle: Add, Sub, Mul, Div, Neg, Rem and Pow.
