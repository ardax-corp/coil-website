---
slug: "num/round"
title: "round"
description: "Nearest int as float; halves round away from zero (via trunc bias)."
module: "num"
kind: "fn"
name: "round"
signature: "fn round(float x) -> float"
import: "use num::{round};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/num.hy#L56"
order: 3
---

Nearest int as float; halves round away from zero (via trunc bias).

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## See also

- [`abs`](/docs/reference/num/abs): Absolute value of an integer.
- [`min`](/docs/reference/num/min): Smaller of two Ord values.
- [`max`](/docs/reference/num/max): Larger of two Ord values.
- [`clamp`](/docs/reference/num/clamp): Clamp x into the inclusive range [lo, hi].
- [`signum`](/docs/reference/num/signum): Sign of an integer (-1, 0, or 1).
- [`gcd`](/docs/reference/num/gcd): Greatest common divisor for non-negative integers.
- [`lcm`](/docs/reference/num/lcm): Least common multiple for non-negative integers (0 if either operand is 0).
- [`trunc`](/docs/reference/num/trunc): Truncate toward zero.
