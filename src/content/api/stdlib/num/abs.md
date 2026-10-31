---
slug: "stdlib/num/abs"
package: "stdlib"
title: "abs"
description: "Returns the absolute value of x."
module: "num"
kind: "fn"
name: "abs"
signature: "fn abs(int x) -> int"
signatures: ["fn abs(int x) -> int","fn abs(float x) -> float"]
import: "use num::{abs};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/num.hy#L32"
order: 3
---

Returns the absolute value of `x`.

Panics with `integer overflow` for the smallest [`int`](/docs/reference/types/int), whose absolute value does not fit.

### `fn abs(int x) -> int`

#### Parameters

| Name | Type |
|------|------|
| `x` | `int` |

#### Returns

`int`

### `fn abs(float x) -> float`

Returns the absolute value of `x`; `-0.0` becomes `0.0`.

#### Parameters

| Name | Type |
|------|------|
| `x` | `float` |

#### Returns

`float`

## Examples

```coil
use num::{abs};
use tests::assert;
assert!(abs(-5) == 5);
assert!(abs(2.5) == 2.5);
```

## See also

- [`int`](/docs/reference/types/int)
- [`min`](/packages/stdlib/reference/num/min): Returns the smaller of `a` and `b` (`a` when they are equal).
- [`max`](/packages/stdlib/reference/num/max): Returns the larger of `a` and `b` (`a` when they are equal).
- [`round`](/packages/stdlib/reference/num/round): Rounds `x` to the nearest whole number; halves round away from zero.
- [`clamp`](/packages/stdlib/reference/num/clamp): Returns `x` limited to the range `lo..=hi`.
- [`signum`](/packages/stdlib/reference/num/signum): Returns `-1`, `0` or `1` by the sign of `x`.
- [`gcd`](/packages/stdlib/reference/num/gcd): Returns the greatest common divisor of `a` and `b`, which should be non-negative.
- [`lcm`](/packages/stdlib/reference/num/lcm): Returns the least common multiple of `a` and `b`, which should be non-negative; `0` when either is `0`.
