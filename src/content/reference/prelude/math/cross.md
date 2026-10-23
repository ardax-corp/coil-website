---
slug: "prelude/math/cross"
title: "cross"
description: "Returns the cross product of two 3-element vectors."
module: "prelude::math"
kind: "fn"
name: "cross"
signature: "fn cross<V>(V a, V b) -> V"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/prelude/math.hy#L249"
order: 20
---

Returns the cross product of two 3-element vectors.

`a` and `b` are both 3-tuples or both `[T; 3]` arrays of the same numeric
element type; the result has the same shape.

## Parameters

| Name | Type |
|------|------|
| `a` | `V` |
| `b` | `V` |

## Returns

`V`

## Examples

```coil
use tests::assert;
assert!(cross((1, 0, 0), (0, 1, 0)) == (0, 0, 1));
let z = cross([0.0, 1.0, 0.0], [0.0, 0.0, 1.0]);
assert!(z[0] == 1.0);
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
