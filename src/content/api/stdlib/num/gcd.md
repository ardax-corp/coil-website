---
slug: "stdlib/num/gcd"
package: "stdlib"
title: "gcd"
description: "Returns the greatest common divisor of a and b, which should be non-negative. gcd(0, 0) is 0."
module: "num"
kind: "fn"
name: "gcd"
signature: "fn gcd(int a, int b) -> int"
import: "use num::{gcd};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/num.hy#L150"
order: 9
---

Returns the greatest common divisor of `a` and `b`, which should be non-negative. `gcd(0, 0)` is `0`.

## Parameters

| Name | Type |
|------|------|
| `a` | `int` |
| `b` | `int` |

## Returns

`int`

## Examples

```coil
use num::{gcd};
use tests::assert;
assert!(gcd(12, 18) == 6);
```

## See also

- [`abs`](/packages/stdlib/reference/num/abs): Returns the absolute value of `x`.
- [`min`](/packages/stdlib/reference/num/min): Returns the smaller of `a` and `b` (`a` when they are equal).
- [`max`](/packages/stdlib/reference/num/max): Returns the larger of `a` and `b` (`a` when they are equal).
- [`round`](/packages/stdlib/reference/num/round): Rounds `x` to the nearest whole number; halves round away from zero.
- [`clamp`](/packages/stdlib/reference/num/clamp): Returns `x` limited to the range `lo..=hi`.
- [`signum`](/packages/stdlib/reference/num/signum): Returns `-1`, `0` or `1` by the sign of `x`.
- [`lcm`](/packages/stdlib/reference/num/lcm): Returns the least common multiple of `a` and `b`, which should be non-negative; `0` when either is `0`.
- [`trunc`](/packages/stdlib/reference/num/trunc): Removes the fractional part of `x`, rounding toward zero.
