---
slug: "num/lcm"
title: "lcm"
description: "Least common multiple for non-negative integers (0 if either operand is 0)."
module: "num"
kind: "fn"
name: "lcm"
signature: "fn lcm(int a, int b) -> int"
import: "use num::{lcm};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/num.hy#L104"
order: 7
---

Least common multiple for non-negative integers (`0` if either operand is `0`).

## Parameters

| Name | Type |
|------|------|
| `a` | `int` |
| `b` | `int` |

## Returns

`int`

## See also

- [`abs`](/docs/reference/num/abs): Absolute value of an integer.
- [`min`](/docs/reference/num/min): Smaller of two Ord values.
- [`max`](/docs/reference/num/max): Larger of two Ord values.
- [`round`](/docs/reference/num/round): Nearest int as float; halves round away from zero (via trunc bias).
- [`clamp`](/docs/reference/num/clamp): Clamp x into the inclusive range [lo, hi].
- [`signum`](/docs/reference/num/signum): Sign of an integer (-1, 0, or 1).
- [`gcd`](/docs/reference/num/gcd): Greatest common divisor for non-negative integers.
- [`trunc`](/docs/reference/num/trunc): Truncate toward zero.
