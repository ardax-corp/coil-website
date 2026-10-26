---
slug: "prelude/ops/Gt"
title: "Gt"
description: "The greater-than operator >."
module: "prelude::ops"
kind: "trait"
name: "Gt"
signature: "trait Gt<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/builtin_docs/prelude/ops.hy#L602"
order: 19
---

The greater-than operator `>`.

`a > b` on a type with a `Gt` instance calls `gt(a, b)`.

## Required methods

| Name | Description |
|------|-------------|
| [`gt`](/docs/reference/prelude/ops/Gt/gt) | Returns `true` when `a` is greater than `b`. |

## Examples

```coil
use tests::assert;
class Version {
    pub n: int,
}

impl Gt for Version {
    pub fn gt(Version a, Version b) -> bool {
        return a.n > b.n;
    }
}

fn main() {
    assert!(new Version(3) > new Version(2));
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
