---
slug: "prelude/math/atan2"
title: "atan2"
description: "Returns the angle of the point (x, y) from the positive x axis, in radians in -pi..=pi."
module: "prelude::math"
kind: "fn"
name: "atan2"
signature: "fn atan2(float y, float x) -> float"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/prelude/math.hy#L128"
order: 10
---

Returns the angle of the point `(x, y)` from the positive x axis, in radians in `-pi..=pi`.

Note the argument order: `y` first, then `x`. Unlike `atan(y / x)` it
uses the signs of both arguments to pick the right quadrant.

## Parameters

| Name | Type |
|------|------|
| `y` | `float` |
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use tests::assert;
let pi = 3.141592653589793;
assert!(atan2(0.0, 1.0) == 0.0);
assert!(atan2(1.0, 0.0) == pi / 2.0);
assert!(atan2(0.0, -1.0) == pi);
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
