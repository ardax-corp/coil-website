---
slug: "stdlib/math/acos"
package: "stdlib"
title: "acos"
description: "Returns the arc cosine of x, in radians in [0, pi]; NaN outside [-1, 1]."
module: "math"
kind: "fn"
name: "acos"
signature: "fn acos(float x) -> float"
import: "use math::{acos};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/math.coil#L1803"
order: 14
---

Returns the arc cosine of `x`, in radians in `[0, pi]`; NaN outside `[-1, 1]`.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{acos};
use num::{PI};
use tests::assert;
assert!(acos(1.0) == 0.0);
assert!(acos(-1.0) == PI);
assert!(acos(0.0) == PI / 2.0);
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
