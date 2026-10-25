---
slug: "prelude/math/cos"
title: "cos"
description: "Returns the cosine of x (in radians)."
module: "prelude::math"
kind: "fn"
name: "cos"
signature: "fn cos(float x) -> float"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/prelude/math.hy#L27"
order: 2
---

Returns the cosine of `x` (in radians).

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use tests::assert;
assert!(cos(0.0) == 1.0);
```

## See also

- [`sin`](/docs/reference/prelude/math/sin): Returns the sine of `x` (in radians).
- [`tan`](/docs/reference/prelude/math/tan): Returns the tangent of `x` (in radians).
- [`sqrt`](/docs/reference/prelude/math/sqrt): Returns the square root of `x`.
- [`floor`](/docs/reference/prelude/math/floor): Returns the largest whole number less than or equal to `x`, as a `float`.
- [`ceil`](/docs/reference/prelude/math/ceil): Returns the smallest whole number greater than or equal to `x`, as a `float`.
- [`exp`](/docs/reference/prelude/math/exp): Returns `e` raised to the power `x`.
- [`ln`](/docs/reference/prelude/math/ln): Returns the natural logarithm of `x`.
- [`atan`](/docs/reference/prelude/math/atan): Returns the arctangent of `x`, in radians in `-pi/2..=pi/2`.
