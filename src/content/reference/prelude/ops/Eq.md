---
slug: "prelude/ops/Eq"
title: "Eq"
description: "The equality operators == and !=."
module: "prelude::ops"
kind: "trait"
name: "Eq"
signature: "trait Eq<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/builtin_docs/prelude/ops.hy#L480"
order: 15
---

The equality operators `==` and `!=`.

`a == b` calls `eq(a, b)` and `a != b` calls `ne(a, b)` on a type with an
`Eq` instance. The primitives have builtin instances (strings compare by
content). Arrays, [`Vec`](/docs/reference/prelude/Vec)s, tuples, records and enums compare structurally,
and an element with an `Eq` instance (a class's too) compares with it.
Classes without an instance compare by identity. `#[derive(Eq)]`
generates a field-by-field instance. An `impl Eq` writes [`eq`](/docs/reference/prelude/ops/Eq/eq) only:
[`ne`](/docs/reference/prelude/ops/Eq/ne) defaults to `!(a == b)`, and an impl may still write its own.

## Required methods

| Name | Description |
|------|-------------|
| [`eq`](/docs/reference/prelude/ops/Eq/eq) | Returns `true` when `a` and `b` are equal. |
| [`ne`](/docs/reference/prelude/ops/Eq/ne) | Returns `true` when `a` and `b` are not equal. |

## Examples

```coil
use tests::assert;
class Money {
    pub cents: int,
}

impl Eq for Money {
    pub fn eq(Money a, Money b) -> bool {
        return a.cents == b.cents;
    }
}

fn main() {
    assert!(new Money(100) == new Money(100));
    assert!(new Money(1) != new Money(2));
}
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`Eq::eq`](/docs/reference/prelude/ops/Eq/eq)
- [`Eq::ne`](/docs/reference/prelude/ops/Eq/ne)
- [`Add`](/docs/reference/prelude/ops/Add): The addition operator `+`.
- [`Sub`](/docs/reference/prelude/ops/Sub): The subtraction operator `-`.
- [`Mul`](/docs/reference/prelude/ops/Mul): The multiplication operator `*`.
- [`Div`](/docs/reference/prelude/ops/Div): The division operator `/`.
- [`Neg`](/docs/reference/prelude/ops/Neg): The unary negation operator `-x`.
