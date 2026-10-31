---
slug: "stdlib/math/ceil"
package: "stdlib"
title: "ceil"
description: "Returns the smallest whole number not less than x."
module: "math"
kind: "fn"
name: "ceil"
signature: "fn ceil(float x) -> float"
import: "use math::{ceil};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/math.hy#L684"
order: 1
---

Returns the smallest whole number not less than `x`.

A negative `x` above `-1.0` gives `-0.0`; infinities and NaN come back unchanged.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{ceil};
use tests::assert;
assert!(ceil(2.1) == 3.0);
assert!(ceil(-2.7) == -2.0);
```

## See also

- [`floor`](/packages/stdlib/reference/math/floor): Returns the largest whole number not greater than `x`.
- [`sqrt`](/packages/stdlib/reference/math/sqrt): Returns the square root of `x`, correctly rounded.
- [`cbrt`](/packages/stdlib/reference/math/cbrt): Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root.
- [`exp`](/packages/stdlib/reference/math/exp): Returns e raised to the power `x`.
- [`ln`](/packages/stdlib/reference/math/ln): Returns the natural logarithm of `x`.
- [`log2`](/packages/stdlib/reference/math/log2): Returns the base-2 logarithm of `x`; exact powers of two give whole numbers.
- [`log10`](/packages/stdlib/reference/math/log10): Returns the base-10 logarithm of `x`.
- [`sin`](/packages/stdlib/reference/math/sin): Returns the sine of `x` radians.
