---
slug: "stdlib/math/atan2"
package: "stdlib"
title: "atan2"
description: "Returns the angle of the point (x, y) from the positive x axis, in radians in [-pi, pi]."
module: "math"
kind: "fn"
name: "atan2"
signature: "fn atan2(float y, float x) -> float"
import: "use math::{atan2};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/math.coil#L1678"
order: 12
---

Returns the angle of the point `(x, y)` from the positive x axis, in radians in `[-pi, pi]`.

Note the argument order: `y` first, as in C.

## Parameters

| Name | Type |
|------|------|
| `y` | `float` |
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{atan2};
use num::{PI};
use tests::assert;
assert!(atan2(1.0, 1.0) == PI / 4.0);
assert!(atan2(0.0, -1.0) == PI);
assert!(atan2(-1.0, 0.0) == -PI / 2.0);
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
