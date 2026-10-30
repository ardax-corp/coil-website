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
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/prelude/math.hy#L87"
order: 5
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
- [`dot`](/docs/reference/prelude/math/dot): Returns the dot product of two vectors of the same length.
- [`cross`](/docs/reference/prelude/math/cross): Returns the cross product of two 3-element vectors.
- [`matmul`](/docs/reference/prelude/math/matmul): Multiplies two matrices written as nested fixed-length arrays.
- [`matrix`](/docs/reference/prelude/math/fn.matrix): Wraps nested fixed-length rows as a `Matrix`.
- [`diff`](/docs/reference/prelude/math/diff): Returns a `byte` mask that is `1` where `a` has a non-zero cell and `b` has `0`.
