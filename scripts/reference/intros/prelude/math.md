---
description: "Float math (sqrt, sin, ln, …) and small linear algebra (dot, cross, matmul, Matrix). Auto-imported."
---
Scalar functions take and return `float` and follow IEEE-754: an invalid input
gives NaN and an overflow gives infinity, never a panic. Powers and remainders
are the `**` and `%` operators, not functions.

The linear-algebra helpers work on fixed-size arrays (`[float; 3]`,
`[[float; 2]; 2]`) and check shapes at compile time.

For integer helpers (`abs`, `gcd`, `clamp`, …) and constants such as `PI`, see
the stdlib [`num`](/docs/reference/num) module; for overflow-aware integer
powers, [`arith`](/docs/reference/arith).
