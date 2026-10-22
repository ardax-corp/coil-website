---
slug: "num/min"
title: "min"
description: "Smaller of two Ord values."
module: "num"
kind: "fn"
name: "min"
signature: "fn min<T: Ord>(T a, T b) -> T"
import: "use num::{min};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/num.hy#L40"
order: 1
---

Smaller of two [`Ord`](/docs/reference/prelude/ops/Ord) values.

## Parameters

| Name | Type |
|------|------|
| `a` | `T` |
| `b` | `T` |

## Returns

`T`

## See also

- [`Ord`](/docs/reference/prelude/ops/Ord)
- [`abs`](/docs/reference/num/abs): Absolute value of an integer.
- [`max`](/docs/reference/num/max): Larger of two Ord values.
- [`round`](/docs/reference/num/round): Nearest int as float; halves round away from zero (via trunc bias).
- [`clamp`](/docs/reference/num/clamp): Clamp x into the inclusive range [lo, hi].
- [`signum`](/docs/reference/num/signum): Sign of an integer (-1, 0, or 1).
- [`gcd`](/docs/reference/num/gcd): Greatest common divisor for non-negative integers.
- [`lcm`](/docs/reference/num/lcm): Least common multiple for non-negative integers (0 if either operand is 0).
