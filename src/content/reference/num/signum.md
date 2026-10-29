---
slug: "num/signum"
title: "signum"
description: "Returns -1, 0 or 1 by the sign of x."
module: "num"
kind: "fn"
name: "signum"
signature: "fn signum(int x) -> int"
signatures: ["fn signum(int x) -> int","fn signum(float x) -> float"]
import: "use num::{signum};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/num.hy#L121"
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

- [`abs`](/docs/reference/num/abs): Returns the absolute value of `x`.
- [`min`](/docs/reference/num/min): Returns the smaller of `a` and `b` (`a` when they are equal).
- [`max`](/docs/reference/num/max): Returns the larger of `a` and `b` (`a` when they are equal).
- [`round`](/docs/reference/num/round): Rounds `x` to the nearest whole number; halves round away from zero.
- [`clamp`](/docs/reference/num/clamp): Returns `x` limited to the range `lo..=hi`.
- [`gcd`](/docs/reference/num/gcd): Returns the greatest common divisor of `a` and `b`, which should be non-negative.
- [`lcm`](/docs/reference/num/lcm): Returns the least common multiple of `a` and `b`, which should be non-negative; `0` when either is `0`.
- [`trunc`](/docs/reference/num/trunc): Removes the fractional part of `x`, rounding toward zero.
