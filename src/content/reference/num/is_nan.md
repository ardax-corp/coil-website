---
slug: "num/is_nan"
title: "is_nan"
description: "Returns true when x is NaN (0.0 / 0.0, sqrt(-1.0), …)."
module: "num"
kind: "fn"
name: "is_nan"
signature: "fn is_nan(float x) -> bool"
import: "use num::{is_nan};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/num.hy#L205"
order: 13
---

Returns `true` when `x` is NaN (`0.0 / 0.0`, `sqrt(-1.0)`, …).

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`bool`

## See also

- [`abs`](/docs/reference/num/abs): Returns the absolute value of `x`.
- [`min`](/docs/reference/num/min): Returns the smaller of `a` and `b` (`a` when they are equal).
- [`max`](/docs/reference/num/max): Returns the larger of `a` and `b` (`a` when they are equal).
- [`round`](/docs/reference/num/round): Rounds `x` to the nearest whole number; halves round away from zero.
- [`clamp`](/docs/reference/num/clamp): Returns `x` limited to the range `lo..=hi`.
- [`signum`](/docs/reference/num/signum): Returns `-1`, `0` or `1` by the sign of `x`.
- [`gcd`](/docs/reference/num/gcd): Returns the greatest common divisor of `a` and `b`, which should be non-negative.
- [`lcm`](/docs/reference/num/lcm): Returns the least common multiple of `a` and `b`, which should be non-negative; `0` when either is `0`.
