---
slug: "num/is_infinite"
title: "is_infinite"
description: "Returns true when x is positive or negative infinity."
module: "num"
kind: "fn"
name: "is_infinite"
signature: "fn is_infinite(float x) -> bool"
import: "use num::{is_infinite};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/num.hy#L210"
order: 14
---

Returns `true` when `x` is positive or negative infinity.

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
