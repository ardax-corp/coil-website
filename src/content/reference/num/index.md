---
slug: "num/index"
title: "num"
description: "Numeric helpers: abs, min, max, clamp, round, gcd and the constants PI, E, TAU."
module: "num"
kind: "module"
name: "num"
origin: "stdlib"
auto: false
order: 37
---

Float functions such as `sqrt` and `sin` are in [`math`](/docs/reference/math); this module adds the rest. Powers are the `**` operator.

Part of [coil-stdlib](/packages/stdlib). spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use num::{PI, E};
```

## Constants

| Name | Description |
|------|-------------|
| [`PI`](/docs/reference/num/PI) | The circle constant π, as a [`float`](/docs/reference/types/float). |
| [`E`](/docs/reference/num/E) | Euler's number e, the base of `ln`, as a [`float`](/docs/reference/types/float). |
| [`TAU`](/docs/reference/num/TAU) | A full turn τ = 2π, as a [`float`](/docs/reference/types/float). |

## Functions

| Name | Description |
|------|-------------|
| [`abs`](/docs/reference/num/abs) | Returns the absolute value of `x`. |
| [`min`](/docs/reference/num/min) | Returns the smaller of `a` and `b` (`a` when they are equal). |
| [`max`](/docs/reference/num/max) | Returns the larger of `a` and `b` (`a` when they are equal). |
| [`round`](/docs/reference/num/round) | Rounds `x` to the nearest whole number; halves round away from zero. |
| [`clamp`](/docs/reference/num/clamp) | Returns `x` limited to the range `lo..=hi`. |
| [`signum`](/docs/reference/num/signum) | Returns `-1`, `0` or `1` by the sign of `x`. |
| [`gcd`](/docs/reference/num/gcd) | Returns the greatest common divisor of `a` and `b`, which should be non-negative. |
| [`lcm`](/docs/reference/num/lcm) | Returns the least common multiple of `a` and `b`, which should be non-negative; `0` when either is `0`. |
| [`trunc`](/docs/reference/num/trunc) | Removes the fractional part of `x`, rounding toward zero. |
| [`fract`](/docs/reference/num/fract) | Returns the fractional part of `x`, `x - trunc(x)`; it has the sign of `x`. |
| [`is_nan`](/docs/reference/num/is_nan) | Returns `true` when `x` is NaN (`0.0 / 0.0`, `sqrt(-1.0)`, …). |
| [`is_infinite`](/docs/reference/num/is_infinite) | Returns `true` when `x` is positive or negative infinity. |
| [`is_finite`](/docs/reference/num/is_finite) | Returns `true` when `x` is neither NaN nor infinite. |
| [`rem_euclid`](/docs/reference/num/rem_euclid) | Returns the remainder of `a / b` that is never negative: `0 <= r < abs(b)`. |
| [`div_euclid`](/docs/reference/num/div_euclid) | Returns the quotient that goes with [`rem_euclid`](/docs/reference/num/rem_euclid): `a == div_euclid(a, b) * b + rem_euclid(a, b)`. |
| [`hypot`](/docs/reference/num/hypot) | Returns `sqrt(a * a + b * b)`, the length of the hypotenuse. |
