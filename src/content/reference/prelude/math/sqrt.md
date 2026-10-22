---
slug: "prelude/math/sqrt"
title: "sqrt"
description: "Returns the square root of x."
module: "prelude::math"
kind: "fn"
name: "sqrt"
signature: "fn sqrt(float x) -> float"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/prelude/math.hy#L53"
order: 4
---

Returns the square root of `x`.

A negative `x` gives NaN.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use tests::assert;
assert!(sqrt(16.0) == 4.0);
assert!(sqrt(2.0) * sqrt(2.0) > 1.9999);
```

## See also

- [`sin`](/docs/reference/prelude/math/sin): Returns the sine of `x` (in radians).
- [`cos`](/docs/reference/prelude/math/cos): Returns the cosine of `x` (in radians).
- [`tan`](/docs/reference/prelude/math/tan): Returns the tangent of `x` (in radians).
- [`floor`](/docs/reference/prelude/math/floor): Returns the largest whole number less than or equal to `x`, as a `float`.
- [`ceil`](/docs/reference/prelude/math/ceil): Returns the smallest whole number greater than or equal to `x`, as a `float`.
- [`exp`](/docs/reference/prelude/math/exp): Returns `e` raised to the power `x`.
- [`ln`](/docs/reference/prelude/math/ln): Returns the natural logarithm of `x`.
- [`atan`](/docs/reference/prelude/math/atan): Returns the arctangent of `x`, in radians in `-pi/2..=pi/2`.
