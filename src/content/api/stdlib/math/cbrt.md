---
slug: "stdlib/math/cbrt"
package: "stdlib"
title: "cbrt"
description: "Returns the cube root of x, correctly rounded; negative x gives a negative root."
module: "math"
kind: "fn"
name: "cbrt"
signature: "fn cbrt(float x) -> float"
import: "use math::{cbrt};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/math.hy#L772"
order: 3
---

Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{cbrt};
use tests::assert;
assert!(cbrt(27.0) == 3.0);
assert!(cbrt(-8.0) == -2.0);
```

## See also

- [`floor`](/packages/stdlib/reference/math/floor): Returns the largest whole number not greater than `x`.
- [`ceil`](/packages/stdlib/reference/math/ceil): Returns the smallest whole number not less than `x`.
- [`sqrt`](/packages/stdlib/reference/math/sqrt): Returns the square root of `x`, correctly rounded.
- [`exp`](/packages/stdlib/reference/math/exp): Returns e raised to the power `x`.
- [`ln`](/packages/stdlib/reference/math/ln): Returns the natural logarithm of `x`.
- [`log2`](/packages/stdlib/reference/math/log2): Returns the base-2 logarithm of `x`; exact powers of two give whole numbers.
- [`log10`](/packages/stdlib/reference/math/log10): Returns the base-10 logarithm of `x`.
- [`sin`](/packages/stdlib/reference/math/sin): Returns the sine of `x` radians.
