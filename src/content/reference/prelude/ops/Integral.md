---
slug: "prelude/ops/Integral"
title: "Integral"
description: "The integer bundle: Num plus Shl, Shr, BitAnd, BitOr, BitXor and BitNot."
module: "prelude::ops"
kind: "trait"
name: "Integral"
signature: "trait Integral<T: Num + Shl + Shr + BitAnd + BitOr + BitXor + BitNot>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/builtin_docs/prelude/ops.hy#L448"
order: 14
---

The integer bundle: [`Num`](/docs/reference/prelude/ops/Num) plus [`Shl`](/docs/reference/prelude/ops/Shl), [`Shr`](/docs/reference/prelude/ops/Shr), [`BitAnd`](/docs/reference/prelude/ops/BitAnd), [`BitOr`](/docs/reference/prelude/ops/BitOr), [`BitXor`](/docs/reference/prelude/ops/BitXor) and [`BitNot`](/docs/reference/prelude/ops/BitNot).

`Integral` has no methods of its own. A bound `T: Integral` allows the
arithmetic, shift and bitwise operators on `T`. Only [`int`](/docs/reference/types/int) is `Integral`
([`float`](/docs/reference/types/float) is [`Num`](/docs/reference/prelude/ops/Num) but not `Integral`).

## Examples

```coil
use tests::assert;
fn low_bits<T: Integral>(T x, T mask) -> T {
    return x & mask;
}

fn main() {
    assert!(low_bits(13, 3) == 1);
}
```

## See also

- [`Num`](/docs/reference/prelude/ops/Num)
- [`Shl`](/docs/reference/prelude/ops/Shl)
- [`Shr`](/docs/reference/prelude/ops/Shr)
- [`BitAnd`](/docs/reference/prelude/ops/BitAnd)
- [`BitOr`](/docs/reference/prelude/ops/BitOr)
- [`BitXor`](/docs/reference/prelude/ops/BitXor)
- [`BitNot`](/docs/reference/prelude/ops/BitNot)
- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
