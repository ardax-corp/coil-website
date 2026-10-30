---
slug: "prelude/ops/Ge"
title: "Ge"
description: "The greater-or-equal operator >=."
module: "prelude::ops"
kind: "trait"
name: "Ge"
signature: "trait Ge<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/builtin_docs/prelude/ops.hy#L628"
order: 20
---

The greater-or-equal operator `>=`.

`a >= b` on a type with a `Ge` instance calls `ge(a, b)`.

## Required methods

| Name | Description |
|------|-------------|
| [`ge`](/docs/reference/prelude/ops/Ge/ge) | Returns `true` when `a` is greater than or equal to `b`. |

## Examples

```coil
use tests::assert;
class Version {
    pub n: int,
}

impl Ge for Version {
    pub fn ge(Version a, Version b) -> bool {
        return a.n >= b.n;
    }
}

fn main() {
    assert!(new Version(2) >= new Version(1));
}
```

## See also

- [`Add`](/docs/reference/prelude/ops/Add): The addition operator `+`.
- [`Sub`](/docs/reference/prelude/ops/Sub): The subtraction operator `-`.
- [`Mul`](/docs/reference/prelude/ops/Mul): The multiplication operator `*`.
- [`Div`](/docs/reference/prelude/ops/Div): The division operator `/`.
- [`Neg`](/docs/reference/prelude/ops/Neg): The unary negation operator `-x`.
- [`Rem`](/docs/reference/prelude/ops/Rem): The remainder operator `%`.
- [`Pow`](/docs/reference/prelude/ops/Pow): The exponentiation operator `**`.
- [`Num`](/docs/reference/prelude/ops/Num): The numeric bundle: `Add`, `Sub`, `Mul`, `Div`, `Neg`, `Rem` and `Pow`.
