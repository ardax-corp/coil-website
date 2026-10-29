---
slug: "math/atan2"
title: "atan2"
description: "Returns the angle of the point (x, y) from the positive x axis, in radians in [-pi, pi]."
module: "math"
kind: "fn"
name: "atan2"
signature: "fn atan2(float y, float x) -> float"
import: "use math::{atan2};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/math.hy#L1678"
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

- [`floor`](/docs/reference/math/floor): Returns the largest whole number not greater than `x`.
- [`ceil`](/docs/reference/math/ceil): Returns the smallest whole number not less than `x`.
- [`sqrt`](/docs/reference/math/sqrt): Returns the square root of `x`, correctly rounded.
- [`cbrt`](/docs/reference/math/cbrt): Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root.
- [`exp`](/docs/reference/math/exp): Returns e raised to the power `x`.
- [`ln`](/docs/reference/math/ln): Returns the natural logarithm of `x`.
- [`log2`](/docs/reference/math/log2): Returns the base-2 logarithm of `x`; exact powers of two give whole numbers.
- [`log10`](/docs/reference/math/log10): Returns the base-10 logarithm of `x`.
