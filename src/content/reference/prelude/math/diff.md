---
slug: "prelude/math/diff"
title: "diff"
description: "Returns a byte mask that is 1 where a has a non-zero cell and b has 0."
module: "prelude::math"
kind: "fn"
name: "diff"
signature: "fn diff<D, M>(Matrix<D> a, Matrix<D> b) -> Matrix<M>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/builtin_docs/prelude/math.hy#L323"
order: 24
---

Returns a [`byte`](/docs/reference/types/byte) mask that is `1` where `a` has a non-zero cell and `b` has `0`.

Same shape rules as [`intersect`](/docs/reference/prelude/math/intersect). The result is a [`Matrix`](/docs/reference/prelude/math/Matrix) of [`byte`](/docs/reference/types/byte)
cells.

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
let a = matrix([[1, 2], [3, 0]]);
let b = matrix([[1, 0], [0, 0]]);
let d = diff(a, b);
assert!(d[0][0] == 0 as byte);
assert!(d[0][1] == 1 as byte);
assert!(d[1][0] == 1 as byte);
assert!(d[1][1] == 0 as byte);
```

## See also

- [`byte`](/docs/reference/types/byte)
- [`intersect`](/docs/reference/prelude/math/intersect)
- [`Matrix`](/docs/reference/prelude/math/Matrix)
- [`sin`](/docs/reference/prelude/math/sin): Returns the sine of `x` (in radians).
- [`cos`](/docs/reference/prelude/math/cos): Returns the cosine of `x` (in radians).
- [`tan`](/docs/reference/prelude/math/tan): Returns the tangent of `x` (in radians).
- [`sqrt`](/docs/reference/prelude/math/sqrt): Returns the square root of `x`.
- [`floor`](/docs/reference/prelude/math/floor): Returns the largest whole number less than or equal to `x`, as a `float`.
