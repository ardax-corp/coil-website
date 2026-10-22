---
slug: "num/signum"
title: "signum"
description: "Sign of an integer (-1, 0, or 1)."
module: "num"
kind: "fn"
name: "signum"
signature: "fn signum(int x) -> int"
signatures: ["fn signum(int x) -> int","fn signum(float x) -> float"]
import: "use num::{signum};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/num.hy#L69"
order: 5
---

Sign of an integer (`-1`, `0`, or `1`).

### `signum!(x)`

## Parameters

| Name | Type |
|------|------|
| `x` | `int` |

### `signum!(x)`

Sign of a float (`-1.0`, `0.0`, or `1.0`; preserves signed zero).

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## See also

- [`abs`](/docs/reference/num/abs): Absolute value of an integer.
- [`min`](/docs/reference/num/min): Smaller of two Ord values.
- [`max`](/docs/reference/num/max): Larger of two Ord values.
- [`round`](/docs/reference/num/round): Nearest int as float; halves round away from zero (via trunc bias).
- [`clamp`](/docs/reference/num/clamp): Clamp x into the inclusive range [lo, hi].
- [`gcd`](/docs/reference/num/gcd): Greatest common divisor for non-negative integers.
- [`lcm`](/docs/reference/num/lcm): Least common multiple for non-negative integers (0 if either operand is 0).
- [`trunc`](/docs/reference/num/trunc): Truncate toward zero.
