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
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/prelude/math.coil#L67"
order: 4
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
- [`dot`](/docs/reference/prelude/math/dot): Returns the dot product of two vectors of the same length.
- [`cross`](/docs/reference/prelude/math/cross): Returns the cross product of two 3-element vectors.
- [`matmul`](/docs/reference/prelude/math/matmul): Multiplies two matrices written as nested fixed-length arrays.
- [`intersect`](/docs/reference/prelude/math/intersect): Returns a `byte` mask that is `1` where both matrices have a non-zero cell.
- [`diff`](/docs/reference/prelude/math/diff): Returns a `byte` mask that is `1` where `a` has a non-zero cell and `b` has `0`.
