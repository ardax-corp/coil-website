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
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/builtin_docs/prelude/math.hy#L32"
order: 2
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

- [`dot`](/docs/reference/prelude/math/dot): Returns the dot product of two vectors of the same length.
- [`matmul`](/docs/reference/prelude/math/matmul): Multiplies two matrices written as nested fixed-length arrays.
- [`matrix`](/docs/reference/prelude/math/fn.matrix): Wraps nested fixed-length rows as a `Matrix`.
- [`intersect`](/docs/reference/prelude/math/intersect): Returns a `byte` mask that is `1` where both matrices have a non-zero cell.
- [`diff`](/docs/reference/prelude/math/diff): Returns a `byte` mask that is `1` where `a` has a non-zero cell and `b` has `0`.
