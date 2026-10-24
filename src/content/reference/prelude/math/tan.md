---
slug: "prelude/math/tan"
title: "tan"
description: "Returns the tangent of x (in radians)."
module: "prelude::math"
kind: "fn"
name: "tan"
signature: "fn tan(float x) -> float"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/builtin_docs/prelude/math.hy#L40"
order: 3
---

Returns the tangent of `x` (in radians).

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use tests::assert;
assert!(tan(0.0) == 0.0);
let t = tan(3.141592653589793 / 4.0);
assert!(t > 0.9999);
assert!(t < 1.5);
```

## See also

- [`sin`](/docs/reference/prelude/math/sin): Returns the sine of `x` (in radians).
- [`cos`](/docs/reference/prelude/math/cos): Returns the cosine of `x` (in radians).
- [`sqrt`](/docs/reference/prelude/math/sqrt): Returns the square root of `x`.
- [`floor`](/docs/reference/prelude/math/floor): Returns the largest whole number less than or equal to `x`, as a `float`.
- [`ceil`](/docs/reference/prelude/math/ceil): Returns the smallest whole number greater than or equal to `x`, as a `float`.
- [`exp`](/docs/reference/prelude/math/exp): Returns `e` raised to the power `x`.
- [`ln`](/docs/reference/prelude/math/ln): Returns the natural logarithm of `x`.
- [`atan`](/docs/reference/prelude/math/atan): Returns the arctangent of `x`, in radians in `-pi/2..=pi/2`.
