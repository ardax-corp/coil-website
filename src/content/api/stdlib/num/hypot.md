---
slug: "stdlib/num/hypot"
package: "stdlib"
title: "hypot"
description: "Returns sqrt(a * a + b * b), the length of the hypotenuse."
module: "num"
kind: "fn"
name: "hypot"
signature: "fn hypot(float a, float b) -> float"
import: "use num::{hypot};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/num.hy#L269"
order: 18
---

Returns `sqrt(a * a + b * b)`, the length of the hypotenuse.

## Parameters

| Name | Type |
|------|------|
| `a` | `float` |
| `b` | `float` |

## Returns

`float`

## Examples

```coil
use num::{hypot};
use tests::assert;
assert!(hypot(3.0, 4.0) == 5.0);
```

## See also

- [`abs`](/packages/stdlib/reference/num/abs): Returns the absolute value of `x`.
- [`min`](/packages/stdlib/reference/num/min): Returns the smaller of `a` and `b` (`a` when they are equal).
- [`max`](/packages/stdlib/reference/num/max): Returns the larger of `a` and `b` (`a` when they are equal).
- [`round`](/packages/stdlib/reference/num/round): Rounds `x` to the nearest whole number; halves round away from zero.
- [`clamp`](/packages/stdlib/reference/num/clamp): Returns `x` limited to the range `lo..=hi`.
- [`signum`](/packages/stdlib/reference/num/signum): Returns `-1`, `0` or `1` by the sign of `x`.
- [`gcd`](/packages/stdlib/reference/num/gcd): Returns the greatest common divisor of `a` and `b`, which should be non-negative.
- [`lcm`](/packages/stdlib/reference/num/lcm): Returns the least common multiple of `a` and `b`, which should be non-negative; `0` when either is `0`.
