---
slug: "stdlib/num/rem_euclid"
package: "stdlib"
title: "rem_euclid"
description: "Returns the remainder of a / b that is never negative: 0 <= r < abs(b)."
module: "num"
kind: "fn"
name: "rem_euclid"
signature: "fn rem_euclid(int a, int b) -> int"
import: "use num::{rem_euclid};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/num.coil#L240"
order: 16
---

Returns the remainder of `a / b` that is never negative: `0 <= r < abs(b)`.

Unlike `%`, whose result takes the sign of `a`. Panics with `division by zero` when `b` is `0`.

## Parameters

| Name | Type |
|------|------|
| `a` | `int` |
| `b` | `int` |

## Returns

`int`

## Examples

```coil
use num::{rem_euclid};
use tests::assert;
assert!(rem_euclid(-7, 3) == 2);
assert!(-7 % 3 == -1);
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
