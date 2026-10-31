---
slug: "prelude/ops/Shr"
title: "Shr"
description: "The right shift operator >>."
module: "prelude::ops"
kind: "trait"
name: "Shr"
signature: "trait Shr<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/prelude/ops.coil#L309"
order: 9
---

The right shift operator `>>`.

`a >> n` on a type with a `Shr` instance calls `shr(a, n)`. The shift
count is always an [`int`](/docs/reference/types/int). [`int`](/docs/reference/types/int) and [`byte`](/docs/reference/types/byte) have builtin instances; the
[`int`](/docs/reference/types/int) shift is arithmetic (it keeps the sign, so `-8 >> 1` is `-4`).

## Required methods

| Name | Description |
|------|-------------|
| [`shr`](/docs/reference/prelude/ops/Shr/shr) | Returns `a` shifted right by `n` bits. |

## Examples

```coil
use tests::assert;
class Flags {
    pub bits: int,
}

impl Shr for Flags {
    pub fn shr(Flags a, int n) -> Flags {
        return new Flags(a.bits >> n);
    }
}

fn main() {
    let f = new Flags(32) >> 2;
    assert!(f.bits == 8);
    assert!(-8 >> 1 == -4);
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
