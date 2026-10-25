---
slug: "num/is_finite"
title: "is_finite"
description: "Returns true when x is neither NaN nor infinite."
module: "num"
kind: "fn"
name: "is_finite"
signature: "fn is_finite(float x) -> bool"
import: "use num::{is_finite};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/num.hy#L224"
order: 15
---

Returns `true` when `x` is neither NaN nor infinite.

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
