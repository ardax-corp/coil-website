---
slug: "num/round"
title: "round"
description: "Rounds x to the nearest whole number; halves round away from zero."
module: "num"
kind: "fn"
name: "round"
signature: "fn round(float x) -> float"
import: "use num::{round};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/num.hy#L90"
order: 6
---

Rounds `x` to the nearest whole number; halves round away from zero.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use num::{round};
use tests::assert;
assert!(round(2.5) == 3.0);
assert!(round(-2.5) == -3.0);
assert!(round(2.4) == 2.0);
```

## See also

- [`abs`](/docs/reference/num/abs): Returns the absolute value of `x`.
- [`min`](/docs/reference/num/min): Returns the smaller of `a` and `b` (`a` when they are equal).
- [`max`](/docs/reference/num/max): Returns the larger of `a` and `b` (`a` when they are equal).
- [`clamp`](/docs/reference/num/clamp): Returns `x` limited to the range `lo..=hi`.
- [`signum`](/docs/reference/num/signum): Returns `-1`, `0` or `1` by the sign of `x`.
- [`gcd`](/docs/reference/num/gcd): Returns the greatest common divisor of `a` and `b`, which should be non-negative.
- [`lcm`](/docs/reference/num/lcm): Returns the least common multiple of `a` and `b`, which should be non-negative; `0` when either is `0`.
- [`trunc`](/docs/reference/num/trunc): Removes the fractional part of `x`, rounding toward zero.
