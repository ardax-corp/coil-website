---
slug: "stdlib/math/exp"
package: "stdlib"
title: "exp"
description: "Returns e raised to the power x."
module: "math"
kind: "fn"
name: "exp"
signature: "fn exp(float x) -> float"
import: "use math::{exp};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/math.hy#L867"
order: 4
---

Returns e raised to the power `x`.

Overflows to infinity above about `709.78` and underflows to `0.0` below about `-745.13`.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{exp};
use num::{E};
use tests::assert;
assert!(exp(0.0) == 1.0);
assert!(exp(1.0) == E);
```

## See also

- [`floor`](/packages/stdlib/reference/math/floor): Returns the largest whole number not greater than `x`.
- [`ceil`](/packages/stdlib/reference/math/ceil): Returns the smallest whole number not less than `x`.
- [`sqrt`](/packages/stdlib/reference/math/sqrt): Returns the square root of `x`, correctly rounded.
- [`cbrt`](/packages/stdlib/reference/math/cbrt): Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root.
- [`ln`](/packages/stdlib/reference/math/ln): Returns the natural logarithm of `x`.
- [`log2`](/packages/stdlib/reference/math/log2): Returns the base-2 logarithm of `x`; exact powers of two give whole numbers.
- [`log10`](/packages/stdlib/reference/math/log10): Returns the base-10 logarithm of `x`.
- [`sin`](/packages/stdlib/reference/math/sin): Returns the sine of `x` radians.
