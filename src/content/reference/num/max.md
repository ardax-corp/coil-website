---
slug: "num/max"
title: "max"
description: "Returns the larger of a and b (a when they are equal)."
module: "num"
kind: "fn"
name: "max"
signature: "fn max<T: Ord>(T a, T b) -> T"
import: "use num::{max};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/num.hy#L73"
order: 5
---

Returns the larger of `a` and `b` (`a` when they are equal).

## Parameters

| Name | Type |
|------|------|
| `a` | `T` |
| `b` | `T` |

## Returns

`T`

## Examples

```coil
use num::{max};
use tests::assert;
assert!(max(3, 7) == 7);
```

## See also

- [`abs`](/docs/reference/num/abs): Returns the absolute value of `x`.
- [`min`](/docs/reference/num/min): Returns the smaller of `a` and `b` (`a` when they are equal).
- [`round`](/docs/reference/num/round): Rounds `x` to the nearest whole number; halves round away from zero.
- [`clamp`](/docs/reference/num/clamp): Returns `x` limited to the range `lo..=hi`.
- [`signum`](/docs/reference/num/signum): Returns `-1`, `0` or `1` by the sign of `x`.
- [`gcd`](/docs/reference/num/gcd): Returns the greatest common divisor of `a` and `b`, which should be non-negative.
- [`lcm`](/docs/reference/num/lcm): Returns the least common multiple of `a` and `b`, which should be non-negative; `0` when either is `0`.
- [`trunc`](/docs/reference/num/trunc): Removes the fractional part of `x`, rounding toward zero.
