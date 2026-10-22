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
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/prelude/math.hy#L234"
order: 19
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
- [`sin`](/docs/reference/prelude/math/sin): Returns the sine of x (in radians).
- [`cos`](/docs/reference/prelude/math/cos): Returns the cosine of x (in radians).
- [`tan`](/docs/reference/prelude/math/tan): Returns the tangent of x (in radians).
- [`sqrt`](/docs/reference/prelude/math/sqrt): Returns the square root of x.
- [`floor`](/docs/reference/prelude/math/floor): Returns the largest whole number less than or equal to x, as a float.
