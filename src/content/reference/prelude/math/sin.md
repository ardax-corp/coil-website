---
slug: "prelude/math/sin"
title: "sin"
description: "Returns the sine of x (in radians)."
module: "prelude::math"
kind: "fn"
name: "sin"
signature: "fn sin(float x) -> float"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/prelude/math.hy#L17"
order: 1
---

Returns the sine of `x` (in radians).

Like every scalar function in [`prelude::math`](/docs/reference/prelude/math), it takes and returns
[`float`](/docs/reference/types/float) and follows IEEE-754: invalid inputs give NaN and overflow gives
infinity, never a clamped value. Auto-imported.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use tests::assert;
let pi = 3.141592653589793;
assert!(sin(0.0) == 0.0);
assert!(sin(pi / 2.0) == 1.0);
```

## See also

- [`prelude::math`](/docs/reference/prelude/math)
- [`float`](/docs/reference/types/float)
- [`cos`](/docs/reference/prelude/math/cos): Returns the cosine of `x` (in radians).
- [`tan`](/docs/reference/prelude/math/tan): Returns the tangent of `x` (in radians).
- [`sqrt`](/docs/reference/prelude/math/sqrt): Returns the square root of `x`.
- [`floor`](/docs/reference/prelude/math/floor): Returns the largest whole number less than or equal to `x`, as a `float`.
- [`ceil`](/docs/reference/prelude/math/ceil): Returns the smallest whole number greater than or equal to `x`, as a `float`.
- [`exp`](/docs/reference/prelude/math/exp): Returns `e` raised to the power `x`.
