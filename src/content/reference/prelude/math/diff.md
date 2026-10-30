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
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/prelude/math.hy#L106"
order: 6
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
- [`dot`](/docs/reference/prelude/math/dot): Returns the dot product of two vectors of the same length.
- [`cross`](/docs/reference/prelude/math/cross): Returns the cross product of two 3-element vectors.
- [`matmul`](/docs/reference/prelude/math/matmul): Multiplies two matrices written as nested fixed-length arrays.
- [`matrix`](/docs/reference/prelude/math/fn.matrix): Wraps nested fixed-length rows as a `Matrix`.
