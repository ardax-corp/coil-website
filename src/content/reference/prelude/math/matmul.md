---
slug: "prelude/math/matmul"
title: "matmul"
description: "Multiplies two matrices written as nested fixed-length arrays."
module: "prelude::math"
kind: "fn"
name: "matmul"
signature: "fn matmul<A, B, C>(A a, B b) -> C"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/prelude/math.hy#L50"
order: 3
---

Multiplies two matrices written as nested fixed-length arrays.

`a` is `[[T; K]; M]` and `b` is `[[T; N]; K]`; the result is the row-major
product `[[T; N]; M]`. A mismatched inner dimension is a compile-time
error. For `*` as matrix multiplication, wrap the data with [`matrix`](/docs/reference/prelude/math/fn.matrix).

## Parameters

| Name | Type |
|------|------|
| `a` | `A` |
| `b` | `B` |

## Returns

`C`

## Examples

```coil
use tests::assert;
let p = matmul([[1, 2], [3, 4]], [[5, 6], [7, 8]]);
assert!(p[0][0] == 19);
assert!(p[0][1] == 22);
assert!(p[1][0] == 43);
assert!(p[1][1] == 50);
```

## See also

- [`matrix`](/docs/reference/prelude/math/fn.matrix)
- [`dot`](/docs/reference/prelude/math/dot): Returns the dot product of two vectors of the same length.
- [`cross`](/docs/reference/prelude/math/cross): Returns the cross product of two 3-element vectors.
- [`intersect`](/docs/reference/prelude/math/intersect): Returns a `byte` mask that is `1` where both matrices have a non-zero cell.
- [`diff`](/docs/reference/prelude/math/diff): Returns a `byte` mask that is `1` where `a` has a non-zero cell and `b` has `0`.
