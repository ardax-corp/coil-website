---
description: "IEEE-754 double functions: sin, cos, sqrt, exp, ln, atan2 and the rest, written in Coil."
---
The float functions, written in Coil itself rather than as host natives:
trigonometry (`sin`, `cos`, `tan`, `asin`, `acos`, `atan`, `atan2`),
exponentials and logarithms (`exp`, `ln`, `log2`, `log10`), roots (`sqrt`,
`cbrt`), rounding (`floor`, `ceil`) and the hyperbolic functions (`sinh`,
`cosh`, `tanh`). Import the ones a file uses: `use math::{sin, sqrt};`.

`sqrt`, `floor`, `ceil` and `cbrt` are correctly rounded; the others are
within an ulp or two of the platform libm. Every function takes and returns
`float` and follows IEEE-754: invalid inputs give NaN and overflow gives
infinity. Rounding to the nearest whole number, `trunc` and `hypot` are in
[`num`](/docs/reference/num); powers are the `**` operator.
