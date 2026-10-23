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
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/prelude/ops.hy#L482"
order: 15
---

The equality operators `==` and `!=`.

`a == b` calls `eq(a, b)` and `a != b` calls `ne(a, b)` on a type with an
`Eq` instance. The primitives have builtin instances (strings compare by
content). Arrays, [`Vec`](/docs/reference/prelude/Vec)s, tuples, records and enums compare structurally,
and an element with an `Eq` instance (a class's too) compares with it.
Classes without an instance compare by identity. `#[derive(Eq)]`
generates a field-by-field instance.

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
    pub fn ne(Money a, Money b) -> bool {
        return a.cents != b.cents;
    }
}

fn main() {
    assert!(new Money(100) == new Money(100));
    assert!(new Money(1) != new Money(2));
}
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`Add`](/docs/reference/prelude/ops/Add): The addition operator `+`.
- [`Sub`](/docs/reference/prelude/ops/Sub): The subtraction operator `-`.
- [`Mul`](/docs/reference/prelude/ops/Mul): The multiplication operator `*`.
- [`Div`](/docs/reference/prelude/ops/Div): The division operator `/`.
- [`Neg`](/docs/reference/prelude/ops/Neg): The unary negation operator `-x`.
- [`Rem`](/docs/reference/prelude/ops/Rem): The remainder operator `%`.
- [`Pow`](/docs/reference/prelude/ops/Pow): The exponentiation operator `**`.
