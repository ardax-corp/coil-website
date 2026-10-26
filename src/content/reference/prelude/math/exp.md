---
slug: "prelude/math/exp"
title: "exp"
description: "Returns e raised to the power x."
module: "prelude::math"
kind: "fn"
name: "exp"
signature: "fn exp(float x) -> float"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/builtin_docs/prelude/math.hy#L88"
order: 7
---

Returns `e` raised to the power `x`.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use tests::assert;
assert!(exp(0.0) == 1.0);
assert!(ln(exp(2.0)) == 2.0);
```

## See also

- [`sin`](/docs/reference/prelude/math/sin): Returns the sine of `x` (in radians).
- [`cos`](/docs/reference/prelude/math/cos): Returns the cosine of `x` (in radians).
- [`tan`](/docs/reference/prelude/math/tan): Returns the tangent of `x` (in radians).
- [`sqrt`](/docs/reference/prelude/math/sqrt): Returns the square root of `x`.
- [`floor`](/docs/reference/prelude/math/floor): Returns the largest whole number less than or equal to `x`, as a `float`.
- [`ceil`](/docs/reference/prelude/math/ceil): Returns the smallest whole number greater than or equal to `x`, as a `float`.
- [`ln`](/docs/reference/prelude/math/ln): Returns the natural logarithm of `x`.
- [`atan`](/docs/reference/prelude/math/atan): Returns the arctangent of `x`, in radians in `-pi/2..=pi/2`.
