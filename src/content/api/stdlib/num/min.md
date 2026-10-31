---
slug: "stdlib/num/min"
package: "stdlib"
title: "min"
description: "Returns the smaller of a and b (a when they are equal)."
module: "num"
kind: "fn"
name: "min"
signature: "fn min<T: Ord>(T a, T b) -> T"
import: "use num::{min};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/num.hy#L59"
order: 4
---

Returns the smaller of `a` and `b` (`a` when they are equal).

## Parameters

| Name | Type |
|------|------|
| `a` | `T` |
| `b` | `T` |

## Returns

`T`

## Examples

```coil
use num::{min};
use tests::assert;
assert!(min(3, 7) == 3);
assert!(min("pear", "apple") == "apple");
```

## See also

- [`abs`](/packages/stdlib/reference/num/abs): Returns the absolute value of `x`.
- [`max`](/packages/stdlib/reference/num/max): Returns the larger of `a` and `b` (`a` when they are equal).
- [`round`](/packages/stdlib/reference/num/round): Rounds `x` to the nearest whole number; halves round away from zero.
- [`clamp`](/packages/stdlib/reference/num/clamp): Returns `x` limited to the range `lo..=hi`.
- [`signum`](/packages/stdlib/reference/num/signum): Returns `-1`, `0` or `1` by the sign of `x`.
- [`gcd`](/packages/stdlib/reference/num/gcd): Returns the greatest common divisor of `a` and `b`, which should be non-negative.
- [`lcm`](/packages/stdlib/reference/num/lcm): Returns the least common multiple of `a` and `b`, which should be non-negative; `0` when either is `0`.
- [`trunc`](/packages/stdlib/reference/num/trunc): Removes the fractional part of `x`, rounding toward zero.
