---
slug: "types/int"
title: "int"
description: "A 64-bit signed integer, from -9223372036854775808 to 9223372036854775807."
module: "types"
kind: "primitive"
name: "int"
signature: "type int"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/types.hy#L40"
order: 0
---

A 64-bit signed integer, from `-9223372036854775808` to `9223372036854775807`.

Literals are decimal (`42`, `-1`); there are no hex, binary or
digit-separator forms. The smallest value cannot be written as a literal;
use `-9223372036854775807 - 1`.

Arithmetic is exact or it panics, in every build: `+`, `-`, `*`, `**`,
unary `-`, `++` / `--` and compound assignments panic with
`integer overflow` when the result does not fit; `/` and `%` by zero panic
with `division by zero`; `**` with a negative exponent panics with
`negative exponent`. `/` truncates toward zero and `%` takes the sign of
the left operand. `<<` and `>>` panic with `shift count out of range`
when the count is outside `0..=63` (a constant count is a compile error);
bitwise operators never panic. For wrapping,
checked or saturating arithmetic see the stdlib [`arith`](/docs/reference/arith) module.

Casts with `as`: `int as float` converts exactly when it can;
`int as byte` keeps the low 8 bits (an out-of-range literal is a
compile-time error); `int as bool` is `true` for any non-zero value.
Mixing `int` and [`float`](/docs/reference/types/float) in one operator is a type error, so cast first.

`int` implements [`Num`](/docs/reference/prelude/ops/Num), [`Integral`](/docs/reference/prelude/ops/Integral), [`Ord`](/docs/reference/prelude/ops/Ord), [`Eq`](/docs/reference/prelude/ops/Eq) and [`Show`](/docs/reference/prelude/ops/Show).

## Examples

```coil
use tests::assert;
let n = 7;
assert!(n / 2 == 3);
assert!(-7 / 2 == -3);
assert!(-7 % 2 == -1);
assert!(2 ** 10 == 1024);
assert!(n as float == 7.0);
let big = 300;
assert!(big as byte == 44 as byte);
assert!(5 as bool);
```

## See also

- [`arith`](/docs/reference/arith)
- [`float`](/docs/reference/types/float)
- [`Num`](/docs/reference/prelude/ops/Num)
- [`Integral`](/docs/reference/prelude/ops/Integral)
- [`Ord`](/docs/reference/prelude/ops/Ord)
- [`Eq`](/docs/reference/prelude/ops/Eq)
- [`Show`](/docs/reference/prelude/ops/Show)
- [`bool`](/docs/reference/types/bool): A boolean: `true` or `false`.
