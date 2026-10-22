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
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/prelude/math.hy#L267"
order: 21
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
- [`sin`](/docs/reference/prelude/math/sin): Returns the sine of `x` (in radians).
- [`cos`](/docs/reference/prelude/math/cos): Returns the cosine of `x` (in radians).
- [`tan`](/docs/reference/prelude/math/tan): Returns the tangent of `x` (in radians).
- [`sqrt`](/docs/reference/prelude/math/sqrt): Returns the square root of `x`.
- [`floor`](/docs/reference/prelude/math/floor): Returns the largest whole number less than or equal to `x`, as a `float`.
- [`ceil`](/docs/reference/prelude/math/ceil): Returns the smallest whole number greater than or equal to `x`, as a `float`.
- [`exp`](/docs/reference/prelude/math/exp): Returns `e` raised to the power `x`.
