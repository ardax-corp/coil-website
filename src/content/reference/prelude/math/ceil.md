---
slug: "prelude/math/ceil"
title: "ceil"
description: "Returns the smallest whole number greater than or equal to x, as a float."
module: "prelude::math"
kind: "fn"
name: "ceil"
signature: "fn ceil(float x) -> float"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/prelude/math.hy#L77"
order: 6
---

Returns the smallest whole number greater than or equal to `x`, as a [`float`](/docs/reference/types/float).

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use tests::assert;
assert!(ceil(2.1) == 3.0);
assert!(ceil(-2.7) == -2.0);
```

## See also

- [`float`](/docs/reference/types/float)
- [`sin`](/docs/reference/prelude/math/sin): Returns the sine of x (in radians).
- [`cos`](/docs/reference/prelude/math/cos): Returns the cosine of x (in radians).
- [`tan`](/docs/reference/prelude/math/tan): Returns the tangent of x (in radians).
- [`sqrt`](/docs/reference/prelude/math/sqrt): Returns the square root of x.
- [`floor`](/docs/reference/prelude/math/floor): Returns the largest whole number less than or equal to x, as a float.
- [`exp`](/docs/reference/prelude/math/exp): Returns e raised to the power x.
- [`ln`](/docs/reference/prelude/math/ln): Returns the natural logarithm of x.
