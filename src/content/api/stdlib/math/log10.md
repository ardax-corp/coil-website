---
slug: "stdlib/math/log10"
package: "stdlib"
title: "log10"
description: "Returns the base-10 logarithm of x."
module: "math"
kind: "fn"
name: "log10"
signature: "fn log10(float x) -> float"
import: "use math::{log10};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/math.hy#L1121"
order: 7
---

Returns the base-10 logarithm of `x`.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{log10};
use tests::assert;
assert!(log10(1000.0) == 3.0);
assert!(log10(0.01) == -2.0);
```

## See also

- [`floor`](/packages/stdlib/reference/math/floor): Returns the largest whole number not greater than `x`.
- [`ceil`](/packages/stdlib/reference/math/ceil): Returns the smallest whole number not less than `x`.
- [`sqrt`](/packages/stdlib/reference/math/sqrt): Returns the square root of `x`, correctly rounded.
- [`cbrt`](/packages/stdlib/reference/math/cbrt): Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root.
- [`exp`](/packages/stdlib/reference/math/exp): Returns e raised to the power `x`.
- [`ln`](/packages/stdlib/reference/math/ln): Returns the natural logarithm of `x`.
- [`log2`](/packages/stdlib/reference/math/log2): Returns the base-2 logarithm of `x`; exact powers of two give whole numbers.
- [`sin`](/packages/stdlib/reference/math/sin): Returns the sine of `x` radians.
