---
slug: "prelude/ops/BitOr"
title: "BitOr"
description: "The bitwise OR operator |."
module: "prelude::ops"
kind: "trait"
name: "BitOr"
signature: "trait BitOr<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/prelude/ops.hy#L367"
order: 11
---

The bitwise OR operator `|`.

`a | b` on a type with a `BitOr` instance calls `bitor(a, b)`. [`int`](/docs/reference/types/int) and
[`byte`](/docs/reference/types/byte) have builtin instances. For booleans use `||`.

## Required methods

| Name | Description |
|------|-------------|
| [`bitor`](/docs/reference/prelude/ops/BitOr/bitor) | Returns the bitwise OR of `a` and `b`. |

## Examples

```coil
use tests::assert;
class Flags {
    pub bits: int,
}

impl BitOr for Flags {
    pub fn bitor(Flags a, Flags b) -> Flags {
        return new Flags(a.bits | b.bits);
    }
}

fn main() {
    let f = new Flags(1) | new Flags(4);
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
