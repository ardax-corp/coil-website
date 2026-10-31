---
slug: "stdlib/math/asin"
package: "stdlib"
title: "asin"
description: "Returns the arc sine of x, in radians in [-pi/2, pi/2]; NaN outside [-1, 1]."
module: "math"
kind: "fn"
name: "asin"
signature: "fn asin(float x) -> float"
import: "use math::{asin};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/math.coil#L1760"
order: 13
---

Returns the arc sine of `x`, in radians in `[-pi/2, pi/2]`; NaN outside `[-1, 1]`.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{asin};
use num::{PI};
use tests::assert;
assert!(asin(0.0) == 0.0);
assert!(asin(1.0) == PI / 2.0);
assert!(asin(2.0) != asin(2.0));
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
