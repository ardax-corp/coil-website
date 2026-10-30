---
slug: "prelude/ops/BitNot"
title: "BitNot"
description: "The bitwise NOT operator ~x."
module: "prelude::ops"
kind: "trait"
name: "BitNot"
signature: "trait BitNot<T>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/builtin_docs/prelude/ops.hy#L425"
order: 13
---

The bitwise NOT operator `~x`.

`~x` on a type with a `BitNot` instance calls `bitnot(x)`. Only [`int`](/docs/reference/types/int) has
a builtin instance (`~x` is `-x - 1`); [`byte`](/docs/reference/types/byte) does not.

## Required methods

| Name | Description |
|------|-------------|
| [`bitnot`](/docs/reference/prelude/ops/BitNot/bitnot) | Returns `a` with every bit flipped. |

## Examples

```coil
use tests::assert;
class Flags {
    pub bits: int,
}

impl BitNot for Flags {
    pub fn bitnot(Flags a) -> Flags {
        return new Flags(~a.bits);
    }
}

fn main() {
    let f = ~new Flags(0);
    assert!(f.bits == -1);
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
