---
slug: "prelude/math/acos"
title: "acos"
description: "Returns the arccosine of x, in radians in 0..=pi."
module: "prelude::math"
kind: "fn"
name: "acos"
signature: "fn acos(float x) -> float"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/builtin_docs/prelude/math.hy#L154"
order: 12
---

Returns the arccosine of `x`, in radians in `0..=pi`.

`x` outside `-1.0..=1.0` gives NaN.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use tests::assert;
assert!(acos(1.0) == 0.0);
assert!(acos(-1.0) == 3.141592653589793);
```

## See also

- [`sin`](/docs/reference/prelude/math/sin): Returns the sine of `x` (in radians).
- [`cos`](/docs/reference/prelude/math/cos): Returns the cosine of `x` (in radians).
- [`tan`](/docs/reference/prelude/math/tan): Returns the tangent of `x` (in radians).
- [`sqrt`](/docs/reference/prelude/math/sqrt): Returns the square root of `x`.
- [`floor`](/docs/reference/prelude/math/floor): Returns the largest whole number less than or equal to `x`, as a `float`.
- [`ceil`](/docs/reference/prelude/math/ceil): Returns the smallest whole number greater than or equal to `x`, as a `float`.
- [`exp`](/docs/reference/prelude/math/exp): Returns `e` raised to the power `x`.
- [`ln`](/docs/reference/prelude/math/ln): Returns the natural logarithm of `x`.
