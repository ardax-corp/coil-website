---
slug: "prelude/ops/BitXor"
title: "BitXor"
description: "The bitwise XOR operator ^."
module: "prelude::ops"
kind: "trait"
name: "BitXor"
signature: "trait BitXor<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/builtin_docs/prelude/ops.hy#L396"
order: 12
---

The bitwise XOR operator `^`.

`a ^ b` on a type with a `BitXor` instance calls `bitxor(a, b)`. [`int`](/docs/reference/types/int)
and [`byte`](/docs/reference/types/byte) have builtin instances.

## Required methods

| Name | Description |
|------|-------------|
| [`bitxor`](/docs/reference/prelude/ops/BitXor/bitxor) | Returns the bitwise XOR of `a` and `b`. |

## Examples

```coil
use tests::assert;
class Flags {
    pub bits: int,
}

impl BitXor for Flags {
    pub fn bitxor(Flags a, Flags b) -> Flags {
        return new Flags(a.bits ^ b.bits);
    }
}

fn main() {
    let f = new Flags(6) ^ new Flags(3);
    assert!(f.bits == 5);
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
