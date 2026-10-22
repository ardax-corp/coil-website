---
slug: "prelude/math/atan"
title: "atan"
description: "Returns the arctangent of x, in radians in -pi/2..=pi/2."
module: "prelude::math"
kind: "fn"
name: "atan"
signature: "fn atan(float x) -> float"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/prelude/math.hy#L112"
order: 9
---

Returns the arctangent of `x`, in radians in `-pi/2..=pi/2`.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use tests::assert;
assert!(atan(0.0) == 0.0);
assert!(atan(1.0) * 4.0 == 3.141592653589793);
```

## See also

- [`sin`](/docs/reference/prelude/math/sin): Returns the sine of x (in radians).
- [`cos`](/docs/reference/prelude/math/cos): Returns the cosine of x (in radians).
- [`tan`](/docs/reference/prelude/math/tan): Returns the tangent of x (in radians).
- [`sqrt`](/docs/reference/prelude/math/sqrt): Returns the square root of x.
- [`floor`](/docs/reference/prelude/math/floor): Returns the largest whole number less than or equal to x, as a float.
- [`ceil`](/docs/reference/prelude/math/ceil): Returns the smallest whole number greater than or equal to x, as a float.
- [`exp`](/docs/reference/prelude/math/exp): Returns e raised to the power x.
- [`ln`](/docs/reference/prelude/math/ln): Returns the natural logarithm of x.
