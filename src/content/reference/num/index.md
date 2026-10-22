---
slug: "num/index"
title: "num"
description: "The num module."
module: "num"
kind: "module"
name: "num"
origin: "stdlib"
auto: false
order: 25
---

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use num::{abs, min};
```

## Functions

| Name | Description |
|------|-------------|
| [`abs`](/docs/reference/num/abs) | Absolute value of an integer. |
| [`min`](/docs/reference/num/min) | Smaller of two [`Ord`](/docs/reference/prelude/ops/Ord) values. |
| [`max`](/docs/reference/num/max) | Larger of two [`Ord`](/docs/reference/prelude/ops/Ord) values. |
| [`round`](/docs/reference/num/round) | Nearest int as float; halves round away from zero (via trunc bias). |
| [`clamp`](/docs/reference/num/clamp) | Clamp `x` into the inclusive range `[lo, hi]`. |
| [`signum`](/docs/reference/num/signum) | Sign of an integer (`-1`, `0`, or `1`). |
| [`gcd`](/docs/reference/num/gcd) | Greatest common divisor for non-negative integers. |
| [`lcm`](/docs/reference/num/lcm) | Least common multiple for non-negative integers (`0` if either operand is `0`). |
| [`trunc`](/docs/reference/num/trunc) | Truncate toward zero. |
| [`fract`](/docs/reference/num/fract) | Fractional part (`x - trunc(x)`). |
| [`is_nan`](/docs/reference/num/is_nan) | True when `x` is NaN. |
| [`is_infinite`](/docs/reference/num/is_infinite) | True when `x` is infinite (not NaN). |
| [`is_finite`](/docs/reference/num/is_finite) | True when `x` is neither NaN nor infinite. |
| [`rem_euclid`](/docs/reference/num/rem_euclid) | Euclidean remainder (`0 <= rem < abs(b)` when `b != 0`). |
| [`div_euclid`](/docs/reference/num/div_euclid) | Euclidean division quotient. |
| [`hypot`](/docs/reference/num/hypot) | Hypotenuse `sqrt(a*a + b*b)`. |
