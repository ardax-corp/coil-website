---
slug: "num/clamp"
title: "clamp"
description: "Returns x limited to the range lo..=hi."
module: "num"
kind: "fn"
name: "clamp"
signature: "fn clamp<T: Ord>(T x, T lo, T hi) -> T"
import: "use num::{clamp};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/num.hy#L107"
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

- [`abs`](/docs/reference/num/abs): Returns the absolute value of x.
- [`min`](/docs/reference/num/min): Returns the smaller of a and b (a when they are equal).
- [`max`](/docs/reference/num/max): Returns the larger of a and b (a when they are equal).
- [`round`](/docs/reference/num/round): Rounds x to the nearest whole number; halves round away from zero.
- [`signum`](/docs/reference/num/signum): Returns -1, 0 or 1 by the sign of x.
- [`gcd`](/docs/reference/num/gcd): Returns the greatest common divisor of a and b, which should be non-negative.
- [`lcm`](/docs/reference/num/lcm): Returns the least common multiple of a and b, which should be non-negative; 0 when either is 0.
- [`trunc`](/docs/reference/num/trunc): Removes the fractional part of x, rounding toward zero.
