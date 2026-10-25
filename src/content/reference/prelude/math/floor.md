---
slug: "prelude/math/floor"
title: "floor"
description: "Returns the largest whole number less than or equal to x, as a float."
module: "prelude::math"
kind: "fn"
name: "floor"
signature: "fn floor(float x) -> float"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/prelude/math.hy#L66"
order: 5
---

Returns the largest whole number less than or equal to `x`, as a [`float`](/docs/reference/types/float).

Use `floor(x) as int` to get an [`int`](/docs/reference/types/int).

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use tests::assert;
assert!(floor(2.7) == 2.0);
assert!(floor(-2.1) == -3.0);
```

## See also

- [`float`](/docs/reference/types/float)
- [`int`](/docs/reference/types/int)
- [`sin`](/docs/reference/prelude/math/sin): Returns the sine of `x` (in radians).
- [`cos`](/docs/reference/prelude/math/cos): Returns the cosine of `x` (in radians).
- [`tan`](/docs/reference/prelude/math/tan): Returns the tangent of `x` (in radians).
- [`sqrt`](/docs/reference/prelude/math/sqrt): Returns the square root of `x`.
- [`ceil`](/docs/reference/prelude/math/ceil): Returns the smallest whole number greater than or equal to `x`, as a `float`.
- [`exp`](/docs/reference/prelude/math/exp): Returns `e` raised to the power `x`.
