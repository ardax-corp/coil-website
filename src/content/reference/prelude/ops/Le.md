---
slug: "prelude/ops/Le"
title: "Le"
description: "The less-or-equal operator <=."
module: "prelude::ops"
kind: "trait"
name: "Le"
signature: "trait Le<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/builtin_docs/prelude/ops.hy#L575"
order: 18
---

The less-or-equal operator `<=`.

`a <= b` on a type with an `Le` instance calls `le(a, b)`.

## Required methods

| Name | Description |
|------|-------------|
| [`le`](/docs/reference/prelude/ops/Le/le) | Returns `true` when `a` is less than or equal to `b`. |

## Examples

```coil
use tests::assert;
class Version {
    pub n: int,
}

impl Le for Version {
    pub fn le(Version a, Version b) -> bool {
        return a.n <= b.n;
    }
}

fn main() {
    assert!(new Version(2) <= new Version(2));
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
