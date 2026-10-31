---
slug: "stdlib/num/signum"
package: "stdlib"
title: "signum"
description: "Returns -1, 0 or 1 by the sign of x."
module: "num"
kind: "fn"
name: "signum"
signature: "fn signum(int x) -> int"
signatures: ["fn signum(int x) -> int","fn signum(float x) -> float"]
import: "use num::{signum};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/num.hy#L121"
order: 8
---

Returns `-1`, `0` or `1` by the sign of `x`.

### `fn signum(int x) -> int`

#### Parameters

| Name | Type |
|------|------|
| `x` | `int` |

#### Returns

`int`

### `fn signum(float x) -> float`

Returns `-1.0`, `0.0` or `1.0` by the sign of `x`; a zero keeps its sign.

#### Parameters

| Name | Type |
|------|------|
| `x` | `float` |

#### Returns

`float`

## Examples

```coil
use num::{signum};
use tests::assert;
assert!(signum(-8) == -1);
assert!(signum(0) == 0);
```

## See also

- [`abs`](/packages/stdlib/reference/num/abs): Returns the absolute value of `x`.
- [`min`](/packages/stdlib/reference/num/min): Returns the smaller of `a` and `b` (`a` when they are equal).
- [`max`](/packages/stdlib/reference/num/max): Returns the larger of `a` and `b` (`a` when they are equal).
- [`round`](/packages/stdlib/reference/num/round): Rounds `x` to the nearest whole number; halves round away from zero.
- [`clamp`](/packages/stdlib/reference/num/clamp): Returns `x` limited to the range `lo..=hi`.
- [`gcd`](/packages/stdlib/reference/num/gcd): Returns the greatest common divisor of `a` and `b`, which should be non-negative.
- [`lcm`](/packages/stdlib/reference/num/lcm): Returns the least common multiple of `a` and `b`, which should be non-negative; `0` when either is `0`.
- [`trunc`](/packages/stdlib/reference/num/trunc): Removes the fractional part of `x`, rounding toward zero.
