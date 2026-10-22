---
slug: "prelude/math/intersect"
title: "intersect"
description: "Returns a byte mask that is 1 where both matrices have a non-zero cell."
module: "prelude::math"
kind: "fn"
name: "intersect"
signature: "fn intersect<D, M>(Matrix<D> a, Matrix<D> b) -> Matrix<M>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/prelude/math.hy#L304"
order: 23
---

Returns a [`byte`](/docs/reference/types/byte) mask that is `1` where both matrices have a non-zero cell.

`a` and `b` must have the same shape. A cell counts as present when it is
not `0` (NaN counts as present). The result is a [`Matrix`](/docs/reference/prelude/math/Matrix) of [`byte`](/docs/reference/types/byte)
cells with the same shape; there is no scalar broadcast.

## Parameters

| Name | Type |
|------|------|
| `a` | `Matrix<D>` |
| `b` | `Matrix<D>` |

## Returns

`Matrix<M>`

## Examples

```coil
use tests::assert;
let a = matrix([[1, 0], [2, 3]]);
let b = matrix([[5, 6], [0, 7]]);
let m = intersect(a, b);
assert!(m[0][0] == 1 as byte);
assert!(m[0][1] == 0 as byte);
assert!(m[1][0] == 0 as byte);
assert!(m[1][1] == 1 as byte);
```

## See also

- [`byte`](/docs/reference/types/byte)
- [`Matrix`](/docs/reference/prelude/math/Matrix)
- [`sin`](/docs/reference/prelude/math/sin): Returns the sine of x (in radians).
- [`cos`](/docs/reference/prelude/math/cos): Returns the cosine of x (in radians).
- [`tan`](/docs/reference/prelude/math/tan): Returns the tangent of x (in radians).
- [`sqrt`](/docs/reference/prelude/math/sqrt): Returns the square root of x.
- [`floor`](/docs/reference/prelude/math/floor): Returns the largest whole number less than or equal to x, as a float.
- [`ceil`](/docs/reference/prelude/math/ceil): Returns the smallest whole number greater than or equal to x, as a float.
