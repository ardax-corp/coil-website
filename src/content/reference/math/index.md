---
slug: "math/index"
title: "math"
description: "IEEE-754 double functions: sin, cos, sqrt, exp, ln, atan2 and the rest, written in Coil."
module: "math"
kind: "module"
name: "math"
origin: "stdlib"
auto: false
order: 35
---

The float functions, written in Coil itself rather than as host natives:
trigonometry ([`sin`](/docs/reference/math/sin), [`cos`](/docs/reference/math/cos), [`tan`](/docs/reference/math/tan), [`asin`](/docs/reference/math/asin), [`acos`](/docs/reference/math/acos), [`atan`](/docs/reference/math/atan), [`atan2`](/docs/reference/math/atan2)),
exponentials and logarithms ([`exp`](/docs/reference/math/exp), [`ln`](/docs/reference/math/ln), [`log2`](/docs/reference/math/log2), [`log10`](/docs/reference/math/log10)), roots ([`sqrt`](/docs/reference/math/sqrt),
[`cbrt`](/docs/reference/math/cbrt)), rounding ([`floor`](/docs/reference/math/floor), [`ceil`](/docs/reference/math/ceil)) and the hyperbolic functions ([`sinh`](/docs/reference/math/sinh),
[`cosh`](/docs/reference/math/cosh), [`tanh`](/docs/reference/math/tanh)). Import the ones a file uses: `use math::{sin, sqrt};`.

[`sqrt`](/docs/reference/math/sqrt), [`floor`](/docs/reference/math/floor), [`ceil`](/docs/reference/math/ceil) and [`cbrt`](/docs/reference/math/cbrt) are correctly rounded; the others are
within an ulp or two of the platform libm. Every function takes and returns
[`float`](/docs/reference/types/float) and follows IEEE-754: invalid inputs give NaN and overflow gives
infinity. Rounding to the nearest whole number, `trunc` and `hypot` are in
[`num`](/docs/reference/num); powers are the `**` operator.

Part of [coil-stdlib](/packages/stdlib). spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use math::{floor, ceil};
```

## Functions

| Name | Description |
|------|-------------|
| [`floor`](/docs/reference/math/floor) | Returns the largest whole number not greater than `x`. |
| [`ceil`](/docs/reference/math/ceil) | Returns the smallest whole number not less than `x`. |
| [`sqrt`](/docs/reference/math/sqrt) | Returns the square root of `x`, correctly rounded. |
| [`cbrt`](/docs/reference/math/cbrt) | Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root. |
| [`exp`](/docs/reference/math/exp) | Returns e raised to the power `x`. |
| [`ln`](/docs/reference/math/ln) | Returns the natural logarithm of `x`. |
| [`log2`](/docs/reference/math/log2) | Returns the base-2 logarithm of `x`; exact powers of two give whole numbers. |
| [`log10`](/docs/reference/math/log10) | Returns the base-10 logarithm of `x`. |
| [`sin`](/docs/reference/math/sin) | Returns the sine of `x` radians. |
| [`cos`](/docs/reference/math/cos) | Returns the cosine of `x` radians. |
| [`tan`](/docs/reference/math/tan) | Returns the tangent of `x` radians. |
| [`atan`](/docs/reference/math/atan) | Returns the arc tangent of `x`, in radians in `[-pi/2, pi/2]`. |
| [`atan2`](/docs/reference/math/atan2) | Returns the angle of the point `(x, y)` from the positive x axis, in radians in `[-pi, pi]`. |
| [`asin`](/docs/reference/math/asin) | Returns the arc sine of `x`, in radians in `[-pi/2, pi/2]`; NaN outside `[-1, 1]`. |
| [`acos`](/docs/reference/math/acos) | Returns the arc cosine of `x`, in radians in `[0, pi]`; NaN outside `[-1, 1]`. |
| [`sinh`](/docs/reference/math/sinh) | Returns the hyperbolic sine of `x`. |
| [`cosh`](/docs/reference/math/cosh) | Returns the hyperbolic cosine of `x`. |
| [`tanh`](/docs/reference/math/tanh) | Returns the hyperbolic tangent of `x`, in `[-1, 1]`. |
