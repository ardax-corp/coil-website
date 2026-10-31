---
slug: "stdlib/num/div_euclid"
package: "stdlib"
title: "div_euclid"
description: "Returns the quotient that goes with rem_euclid: a == div_euclid(a, b) * b + rem_euclid(a, b)."
module: "num"
kind: "fn"
name: "div_euclid"
signature: "fn div_euclid(int a, int b) -> int"
import: "use num::{div_euclid};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/num.hy#L256"
order: 17
---

Returns the quotient that goes with [`rem_euclid`](/packages/stdlib/reference/num/rem_euclid): `a == div_euclid(a, b) * b + rem_euclid(a, b)`.

## Parameters

| Name | Type |
|------|------|
| `a` | `int` |
| `b` | `int` |

## Returns

`int`

## Examples

```coil
use num::{div_euclid};
use tests::assert;
assert!(div_euclid(-7, 3) == -3);
```

## See also

- [`num::rem_euclid`](/packages/stdlib/reference/num/rem_euclid)
- [`abs`](/packages/stdlib/reference/num/abs): Returns the absolute value of `x`.
- [`min`](/packages/stdlib/reference/num/min): Returns the smaller of `a` and `b` (`a` when they are equal).
- [`max`](/packages/stdlib/reference/num/max): Returns the larger of `a` and `b` (`a` when they are equal).
- [`round`](/packages/stdlib/reference/num/round): Rounds `x` to the nearest whole number; halves round away from zero.
- [`clamp`](/packages/stdlib/reference/num/clamp): Returns `x` limited to the range `lo..=hi`.
- [`signum`](/packages/stdlib/reference/num/signum): Returns `-1`, `0` or `1` by the sign of `x`.
- [`gcd`](/packages/stdlib/reference/num/gcd): Returns the greatest common divisor of `a` and `b`, which should be non-negative.
