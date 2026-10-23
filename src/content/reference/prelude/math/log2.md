---
slug: "prelude/math/log2"
title: "log2"
description: "Returns the base-2 logarithm of x."
module: "prelude::math"
kind: "fn"
name: "log2"
signature: "fn log2(float x) -> float"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/prelude/math.hy#L174"
order: 14
---

Returns the base-2 logarithm of `x`.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use tests::assert;
assert!(log2(8.0) == 3.0);
```

## See also

- [`sin`](/docs/reference/prelude/math/sin): Returns the sine of `x` (in radians).
- [`cos`](/docs/reference/prelude/math/cos): Returns the cosine of `x` (in radians).
- [`tan`](/docs/reference/prelude/math/tan): Returns the tangent of `x` (in radians).
- [`sqrt`](/docs/reference/prelude/math/sqrt): Returns the square root of `x`.
- [`floor`](/docs/reference/prelude/math/floor): Returns the largest whole number less than or equal to `x`, as a `float`.
- [`ceil`](/docs/reference/prelude/math/ceil): Returns the smallest whole number greater than or equal to `x`, as a `float`.
- [`exp`](/docs/reference/prelude/math/exp): Returns `e` raised to the power `x`.
- [`ln`](/docs/reference/prelude/math/ln): Returns the natural logarithm of `x`.
