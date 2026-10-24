---
slug: "num/lcm"
title: "lcm"
description: "Returns the least common multiple of a and b, which should be non-negative; 0 when either is 0."
module: "num"
kind: "fn"
name: "lcm"
signature: "fn lcm(int a, int b) -> int"
import: "use num::{lcm};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/bbab8785eee1ff5cde1ade831f952993476bad73/src/num.hy#L169"
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

- [`abs`](/docs/reference/num/abs): Returns the absolute value of `x`.
- [`min`](/docs/reference/num/min): Returns the smaller of `a` and `b` (`a` when they are equal).
- [`max`](/docs/reference/num/max): Returns the larger of `a` and `b` (`a` when they are equal).
- [`round`](/docs/reference/num/round): Rounds `x` to the nearest whole number; halves round away from zero.
- [`clamp`](/docs/reference/num/clamp): Returns `x` limited to the range `lo..=hi`.
- [`signum`](/docs/reference/num/signum): Returns `-1`, `0` or `1` by the sign of `x`.
- [`gcd`](/docs/reference/num/gcd): Returns the greatest common divisor of `a` and `b`, which should be non-negative.
- [`trunc`](/docs/reference/num/trunc): Removes the fractional part of `x`, rounding toward zero.
