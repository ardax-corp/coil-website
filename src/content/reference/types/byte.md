---
slug: "types/byte"
title: "byte"
description: "An unsigned 8-bit integer in 0..=255."
module: "types"
kind: "primitive"
name: "byte"
signature: "type byte"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/types.hy#L125"
order: 3
---

An unsigned 8-bit integer in `0..=255`.

There is no byte literal syntax. An integer literal in `0..=255` becomes a
`byte` where a `byte` is expected (an annotated `let`, an argument, a
return, a [`Vec<byte>`](/docs/reference/prelude/Vec) element), and so does a string literal that encodes
to exactly one UTF-8 byte (`let c: byte = "A";`). A literal outside the
range is a compile-time error. Elsewhere, write `n as byte`.

`byte` arithmetic wraps modulo 256: `+`, `-`, `*`, `**`, `<<` and unary
`-` keep the low 8 bits (`200 + 100` is `44`, `0 - 1` is `255`), and each
such operator warns `E0130`. Convert to [`int`](/docs/reference/types/int) first (`b as int`) for the
exact result. `/` and `%` by zero panic with `division by zero`.

Casts with `as`: `byte as int` is exact; `int as byte` keeps the low 8
bits. There is no direct cast to or from [`float`](/docs/reference/types/float).

`byte` implements [`Eq`](/docs/reference/prelude/ops/Eq), [`Show`](/docs/reference/prelude/ops/Show), [`Shl`](/docs/reference/prelude/ops/Shl), [`Shr`](/docs/reference/prelude/ops/Shr), [`BitAnd`](/docs/reference/prelude/ops/BitAnd), [`BitOr`](/docs/reference/prelude/ops/BitOr) and
[`BitXor`](/docs/reference/prelude/ops/BitXor), and supports `<`, `<=`, `>`, `>=`. It is not [`Num`](/docs/reference/prelude/ops/Num), [`BitNot`](/docs/reference/prelude/ops/BitNot)
or [`Integral`](/docs/reference/prelude/ops/Integral). Byte buffers are [`Vec<byte>`](/docs/reference/prelude/Vec); see [`string::to_bytes`](/docs/reference/string/to_bytes).

## Examples

```coil
use tests::assert;
let a: byte = 65;
let c: byte = "A";
assert!(a == c);
assert!(a as int + 200 == 265);
assert!((a | 32 as byte) == 97 as byte);
let n = 257;
assert!(n as byte == 1 as byte);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`Eq`](/docs/reference/prelude/ops/Eq)
- [`Show`](/docs/reference/prelude/ops/Show)
- [`Shl`](/docs/reference/prelude/ops/Shl)
- [`Shr`](/docs/reference/prelude/ops/Shr)
- [`BitAnd`](/docs/reference/prelude/ops/BitAnd)
- [`BitOr`](/docs/reference/prelude/ops/BitOr)
- [`BitXor`](/docs/reference/prelude/ops/BitXor)
- [`Num`](/docs/reference/prelude/ops/Num)
- [`BitNot`](/docs/reference/prelude/ops/BitNot)
- [`Integral`](/docs/reference/prelude/ops/Integral)
- [`string::to_bytes`](/docs/reference/string/to_bytes)
