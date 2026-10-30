---
slug: "stdlib/num/clamp"
package: "stdlib"
title: "clamp"
description: "Returns x limited to the range lo..=hi."
module: "num"
kind: "fn"
name: "clamp"
signature: "fn clamp<T: Ord>(T x, T lo, T hi) -> T"
import: "use num::{clamp};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/num.hy#L108"
order: 7
---

Returns `x` limited to the range `lo..=hi`.

## Parameters

| Name | Type |
|------|------|
| `x` | `T` |
| `lo` | `T` |
| `hi` | `T` |

## Returns

`T`

## Examples

```coil
use num::{clamp};
use tests::assert;
assert!(clamp(15, 0, 10) == 10);
assert!(clamp(-3, 0, 10) == 0);
assert!(clamp(4, 0, 10) == 4);
```

## See also

- [`abs`](/packages/stdlib/reference/num/abs): Returns the absolute value of `x`.
- [`min`](/packages/stdlib/reference/num/min): Returns the smaller of `a` and `b` (`a` when they are equal).
- [`max`](/packages/stdlib/reference/num/max): Returns the larger of `a` and `b` (`a` when they are equal).
- [`round`](/packages/stdlib/reference/num/round): Rounds `x` to the nearest whole number; halves round away from zero.
- [`signum`](/packages/stdlib/reference/num/signum): Returns `-1`, `0` or `1` by the sign of `x`.
- [`gcd`](/packages/stdlib/reference/num/gcd): Returns the greatest common divisor of `a` and `b`, which should be non-negative.
- [`lcm`](/packages/stdlib/reference/num/lcm): Returns the least common multiple of `a` and `b`, which should be non-negative; `0` when either is `0`.
- [`trunc`](/packages/stdlib/reference/num/trunc): Removes the fractional part of `x`, rounding toward zero.
