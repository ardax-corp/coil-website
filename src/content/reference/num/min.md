---
slug: "num/min"
title: "min"
description: "Returns the smaller of a and b (a when they are equal)."
module: "num"
kind: "fn"
name: "min"
signature: "fn min<T: Ord>(T a, T b) -> T"
import: "use num::{min};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/num.hy#L58"
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

- [`abs`](/docs/reference/num/abs): Returns the absolute value of `x`.
- [`max`](/docs/reference/num/max): Returns the larger of `a` and `b` (`a` when they are equal).
- [`round`](/docs/reference/num/round): Rounds `x` to the nearest whole number; halves round away from zero.
- [`clamp`](/docs/reference/num/clamp): Returns `x` limited to the range `lo..=hi`.
- [`signum`](/docs/reference/num/signum): Returns `-1`, `0` or `1` by the sign of `x`.
- [`gcd`](/docs/reference/num/gcd): Returns the greatest common divisor of `a` and `b`, which should be non-negative.
- [`lcm`](/docs/reference/num/lcm): Returns the least common multiple of `a` and `b`, which should be non-negative; `0` when either is `0`.
- [`trunc`](/docs/reference/num/trunc): Removes the fractional part of `x`, rounding toward zero.
