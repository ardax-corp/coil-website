---
slug: "prelude/ops/BitAnd"
title: "BitAnd"
description: "The bitwise AND operator &."
module: "prelude::ops"
kind: "trait"
name: "BitAnd"
signature: "trait BitAnd<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/prelude/ops.hy#L338"
order: 10
---

The bitwise AND operator `&`.

`a & b` on a type with a `BitAnd` instance calls `bitand(a, b)`. [`int`](/docs/reference/types/int)
and [`byte`](/docs/reference/types/byte) have builtin instances. For booleans use `&&`.

## Required methods

| Name | Description |
|------|-------------|
| [`bitand`](/docs/reference/prelude/ops/BitAnd/bitand) | Returns the bitwise AND of `a` and `b`. |

## Examples

```coil
use tests::assert;
class Flags {
    pub bits: int,
}

impl BitAnd for Flags {
    pub fn bitand(Flags a, Flags b) -> Flags {
        return new Flags(a.bits & b.bits);
    }
}

fn main() {
    let f = new Flags(12) & new Flags(10);
    assert!(f.bits == 8);
}
```

## See also

- [`int`](/docs/reference/types/int)
- [`byte`](/docs/reference/types/byte)
- [`Add`](/docs/reference/prelude/ops/Add): The addition operator `+`.
- [`Sub`](/docs/reference/prelude/ops/Sub): The subtraction operator `-`.
- [`Mul`](/docs/reference/prelude/ops/Mul): The multiplication operator `*`.
- [`Div`](/docs/reference/prelude/ops/Div): The division operator `/`.
- [`Neg`](/docs/reference/prelude/ops/Neg): The unary negation operator `-x`.
- [`Rem`](/docs/reference/prelude/ops/Rem): The remainder operator `%`.
