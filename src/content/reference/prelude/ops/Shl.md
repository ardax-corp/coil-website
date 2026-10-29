---
slug: "prelude/ops/Shl"
title: "Shl"
description: "The left shift operator <<."
module: "prelude::ops"
kind: "trait"
name: "Shl"
signature: "trait Shl<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/prelude/ops.hy#L278"
order: 8
---

The left shift operator `<<`.

`a << n` on a type with a `Shl` instance calls `shl(a, n)`. The shift
count is always an [`int`](/docs/reference/types/int), whatever the type of `a`, and the result has
the type of `a`. [`int`](/docs/reference/types/int) and [`byte`](/docs/reference/types/byte) have builtin instances; shifting a
[`byte`](/docs/reference/types/byte) keeps the low 8 bits.

## Required methods

| Name | Description |
|------|-------------|
| [`shl`](/docs/reference/prelude/ops/Shl/shl) | Returns `a` shifted left by `n` bits. |

## Examples

```coil
use tests::assert;
class Flags {
    pub bits: int,
}

impl Shl for Flags {
    pub fn shl(Flags a, int n) -> Flags {
        return new Flags(a.bits << n);
    }
}

fn main() {
    let f = new Flags(1) << 3;
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
