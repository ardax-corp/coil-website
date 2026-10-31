---
slug: "prelude/math/dot"
title: "dot"
description: "Returns the dot product of two vectors of the same length."
module: "prelude::math"
kind: "fn"
name: "dot"
signature: "fn dot<V, T>(V a, V b) -> T"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/prelude/math.hy#L17"
order: 1
---

Returns the dot product of two vectors of the same length.

`a` and `b` are both tuples or both fixed arrays (`[T; N]`) of the same
numeric element type ([`int`](/docs/reference/types/int), [`float`](/docs/reference/types/float) or [`byte`](/docs/reference/types/byte)) and length. The result is
the sum of the element-wise products, of the element type. `*` on tuples
and arrays is element-wise, not a dot product.

## Parameters

| Name | Type |
|------|------|
| `a` | `V` |
| `b` | `V` |

## Returns

`T`

## Examples

```coil
use tests::assert;
assert!(dot((1, 2, 3), (4, 5, 6)) == 32);
assert!(dot([1.5, 2.0], [2.0, 4.0]) == 11.0);
```

## See also

- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`byte`](/docs/reference/types/byte)
- [`cross`](/docs/reference/prelude/math/cross): Returns the cross product of two 3-element vectors.
- [`matmul`](/docs/reference/prelude/math/matmul): Multiplies two matrices written as nested fixed-length arrays.
- [`matrix`](/docs/reference/prelude/math/fn.matrix): Wraps nested fixed-length rows as a `Matrix`.
- [`intersect`](/docs/reference/prelude/math/intersect): Returns a `byte` mask that is `1` where both matrices have a non-zero cell.
- [`diff`](/docs/reference/prelude/math/diff): Returns a `byte` mask that is `1` where `a` has a non-zero cell and `b` has `0`.
