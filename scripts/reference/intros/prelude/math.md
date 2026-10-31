---
description: "Small linear algebra (dot, cross, matmul, Matrix) on fixed-size float arrays. Auto-imported."
---
The linear-algebra helpers work on fixed-size arrays (`[float; 3]`,
`[[float; 2]; 2]`) and check shapes at compile time.

Scalar float functions (`sqrt`, `sin`, `ln`, …) are not here: they are the
standard library's [`math`](/packages/stdlib/reference/math) module, imported with
`use math::{sqrt};`. Powers and remainders are the `**` and `%` operators.
For integer helpers (`abs`, `gcd`, `clamp`, …) and constants such as `PI`, see
the stdlib [`num`](/packages/stdlib/reference/num) module; for overflow-aware integer
powers, [`arith`](/packages/stdlib/reference/arith).
