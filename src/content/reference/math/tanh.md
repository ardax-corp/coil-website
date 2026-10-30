---
slug: "math/tanh"
title: "tanh"
description: "Returns the hyperbolic tangent of x, in [-1, 1]."
module: "math"
kind: "fn"
name: "tanh"
signature: "fn tanh(float x) -> float"
import: "use math::{tanh};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/math.hy#L1903"
order: 17
---

Returns the hyperbolic tangent of `x`, in `[-1, 1]`.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{tanh};
use tests::assert;
assert!(tanh(0.0) == 0.0);
assert!(tanh(30.0) == 1.0);
assert!(tanh(-30.0) == -1.0);
```

## See also

- [`floor`](/docs/reference/math/floor): Returns the largest whole number not greater than `x`.
- [`ceil`](/docs/reference/math/ceil): Returns the smallest whole number not less than `x`.
- [`sqrt`](/docs/reference/math/sqrt): Returns the square root of `x`, correctly rounded.
- [`cbrt`](/docs/reference/math/cbrt): Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root.
- [`exp`](/docs/reference/math/exp): Returns e raised to the power `x`.
- [`ln`](/docs/reference/math/ln): Returns the natural logarithm of `x`.
- [`log2`](/docs/reference/math/log2): Returns the base-2 logarithm of `x`; exact powers of two give whole numbers.
- [`log10`](/docs/reference/math/log10): Returns the base-10 logarithm of `x`.
