---
slug: "stdlib/math/tanh"
package: "stdlib"
title: "tanh"
description: "Returns the hyperbolic tangent of x, in [-1, 1]."
module: "math"
kind: "fn"
name: "tanh"
signature: "fn tanh(float x) -> float"
import: "use math::{tanh};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/math.hy#L1903"
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

- [`floor`](/packages/stdlib/reference/math/floor): Returns the largest whole number not greater than `x`.
- [`ceil`](/packages/stdlib/reference/math/ceil): Returns the smallest whole number not less than `x`.
- [`sqrt`](/packages/stdlib/reference/math/sqrt): Returns the square root of `x`, correctly rounded.
- [`cbrt`](/packages/stdlib/reference/math/cbrt): Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root.
- [`exp`](/packages/stdlib/reference/math/exp): Returns e raised to the power `x`.
- [`ln`](/packages/stdlib/reference/math/ln): Returns the natural logarithm of `x`.
- [`log2`](/packages/stdlib/reference/math/log2): Returns the base-2 logarithm of `x`; exact powers of two give whole numbers.
- [`log10`](/packages/stdlib/reference/math/log10): Returns the base-10 logarithm of `x`.
