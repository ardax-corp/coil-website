---
slug: "stdlib/num/lcm"
package: "stdlib"
title: "lcm"
description: "Returns the least common multiple of a and b, which should be non-negative; 0 when either is 0."
module: "num"
kind: "fn"
name: "lcm"
signature: "fn lcm(int a, int b) -> int"
import: "use num::{lcm};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/num.hy#L170"
order: 10
---

Returns the least common multiple of `a` and `b`, which should be non-negative; `0` when either is `0`.

## Parameters

| Name | Type |
|------|------|
| `a` | `int` |
| `b` | `int` |

## Returns

`int`

## Examples

```coil
use num::{lcm};
use tests::assert;
assert!(lcm(4, 6) == 12);
```

## See also

- [`abs`](/packages/stdlib/reference/num/abs): Returns the absolute value of `x`.
- [`min`](/packages/stdlib/reference/num/min): Returns the smaller of `a` and `b` (`a` when they are equal).
- [`max`](/packages/stdlib/reference/num/max): Returns the larger of `a` and `b` (`a` when they are equal).
- [`round`](/packages/stdlib/reference/num/round): Rounds `x` to the nearest whole number; halves round away from zero.
- [`clamp`](/packages/stdlib/reference/num/clamp): Returns `x` limited to the range `lo..=hi`.
- [`signum`](/packages/stdlib/reference/num/signum): Returns `-1`, `0` or `1` by the sign of `x`.
- [`gcd`](/packages/stdlib/reference/num/gcd): Returns the greatest common divisor of `a` and `b`, which should be non-negative.
- [`trunc`](/packages/stdlib/reference/num/trunc): Removes the fractional part of `x`, rounding toward zero.
