---
slug: "prelude/math/fn.matrix"
title: "matrix"
description: "Wraps nested fixed-length rows as a Matrix."
module: "prelude::math"
kind: "fn"
name: "matrix"
signature: "fn matrix<D>(D rows) -> Matrix<D>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/prelude/math.hy#L284"
order: 22
---

Wraps nested fixed-length rows as a [`Matrix`](/docs/reference/prelude/math/Matrix).

`rows` is nested numeric data such as `[[int; 2]; 2]` (or a tuple of
equal-length rows). There is no runtime cost: the [`Matrix`](/docs/reference/prelude/math/Matrix) is the same
data with a type that gives operators matrix meaning (see [`Matrix`](/docs/reference/prelude/math/Matrix)).

## Parameters

| Name | Type |
|------|------|
| `rows` | `D` |

## Returns

`Matrix<D>`

## Examples

```coil
use tests::assert;
let a = matrix([[1, 2], [3, 4]]);
let sq = a * a;
assert!(sq[0][0] == 7);
assert!(sq[1][1] == 22);
```

## See also

- [`Matrix`](/docs/reference/prelude/math/Matrix)
- [`sin`](/docs/reference/prelude/math/sin): Returns the sine of x (in radians).
- [`cos`](/docs/reference/prelude/math/cos): Returns the cosine of x (in radians).
- [`tan`](/docs/reference/prelude/math/tan): Returns the tangent of x (in radians).
- [`sqrt`](/docs/reference/prelude/math/sqrt): Returns the square root of x.
- [`floor`](/docs/reference/prelude/math/floor): Returns the largest whole number less than or equal to x, as a float.
- [`ceil`](/docs/reference/prelude/math/ceil): Returns the smallest whole number greater than or equal to x, as a float.
- [`exp`](/docs/reference/prelude/math/exp): Returns e raised to the power x.
