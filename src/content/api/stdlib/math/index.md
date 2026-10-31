---
slug: "stdlib/math/index"
package: "stdlib"
title: "math"
description: "IEEE-754 double functions: sin, cos, sqrt, exp, ln, atan2 and the rest, written in Coil."
module: "math"
kind: "module"
name: "math"
origin: "stdlib"
auto: false
order: 19
---

The float functions, written in Coil itself rather than as host natives:
trigonometry ([`sin`](/packages/stdlib/reference/math/sin), [`cos`](/packages/stdlib/reference/math/cos), [`tan`](/packages/stdlib/reference/math/tan), [`asin`](/packages/stdlib/reference/math/asin), [`acos`](/packages/stdlib/reference/math/acos), [`atan`](/packages/stdlib/reference/math/atan), [`atan2`](/packages/stdlib/reference/math/atan2)),
exponentials and logarithms ([`exp`](/packages/stdlib/reference/math/exp), [`ln`](/packages/stdlib/reference/math/ln), [`log2`](/packages/stdlib/reference/math/log2), [`log10`](/packages/stdlib/reference/math/log10)), roots ([`sqrt`](/packages/stdlib/reference/math/sqrt),
[`cbrt`](/packages/stdlib/reference/math/cbrt)), rounding ([`floor`](/packages/stdlib/reference/math/floor), [`ceil`](/packages/stdlib/reference/math/ceil)) and the hyperbolic functions ([`sinh`](/packages/stdlib/reference/math/sinh),
[`cosh`](/packages/stdlib/reference/math/cosh), [`tanh`](/packages/stdlib/reference/math/tanh)). Import the ones a file uses: `use math::{sin, sqrt};`.

[`sqrt`](/packages/stdlib/reference/math/sqrt), [`floor`](/packages/stdlib/reference/math/floor), [`ceil`](/packages/stdlib/reference/math/ceil) and [`cbrt`](/packages/stdlib/reference/math/cbrt) are correctly rounded; the others are
within an ulp or two of the platform libm. Every function takes and returns
[`float`](/docs/reference/types/float) and follows IEEE-754: invalid inputs give NaN and overflow gives
infinity. Rounding to the nearest whole number, `trunc` and `hypot` are in
[`num`](/packages/stdlib/reference/num); powers are the `**` operator.

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use math::{floor, ceil};
```

## Functions

| Name | Description |
|------|-------------|
| [`floor`](/packages/stdlib/reference/math/floor) | Returns the largest whole number not greater than `x`. |
| [`ceil`](/packages/stdlib/reference/math/ceil) | Returns the smallest whole number not less than `x`. |
| [`sqrt`](/packages/stdlib/reference/math/sqrt) | Returns the square root of `x`, correctly rounded. |
| [`cbrt`](/packages/stdlib/reference/math/cbrt) | Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root. |
| [`exp`](/packages/stdlib/reference/math/exp) | Returns e raised to the power `x`. |
| [`ln`](/packages/stdlib/reference/math/ln) | Returns the natural logarithm of `x`. |
| [`log2`](/packages/stdlib/reference/math/log2) | Returns the base-2 logarithm of `x`; exact powers of two give whole numbers. |
| [`log10`](/packages/stdlib/reference/math/log10) | Returns the base-10 logarithm of `x`. |
| [`sin`](/packages/stdlib/reference/math/sin) | Returns the sine of `x` radians. |
| [`cos`](/packages/stdlib/reference/math/cos) | Returns the cosine of `x` radians. |
| [`tan`](/packages/stdlib/reference/math/tan) | Returns the tangent of `x` radians. |
| [`atan`](/packages/stdlib/reference/math/atan) | Returns the arc tangent of `x`, in radians in `[-pi/2, pi/2]`. |
| [`atan2`](/packages/stdlib/reference/math/atan2) | Returns the angle of the point `(x, y)` from the positive x axis, in radians in `[-pi, pi]`. |
| [`asin`](/packages/stdlib/reference/math/asin) | Returns the arc sine of `x`, in radians in `[-pi/2, pi/2]`; NaN outside `[-1, 1]`. |
| [`acos`](/packages/stdlib/reference/math/acos) | Returns the arc cosine of `x`, in radians in `[0, pi]`; NaN outside `[-1, 1]`. |
| [`sinh`](/packages/stdlib/reference/math/sinh) | Returns the hyperbolic sine of `x`. |
| [`cosh`](/packages/stdlib/reference/math/cosh) | Returns the hyperbolic cosine of `x`. |
| [`tanh`](/packages/stdlib/reference/math/tanh) | Returns the hyperbolic tangent of `x`, in `[-1, 1]`. |
