---
slug: "math/asin"
title: "asin"
description: "Returns the arc sine of x, in radians in [-pi/2, pi/2]; NaN outside [-1, 1]."
module: "math"
kind: "fn"
name: "asin"
signature: "fn asin(float x) -> float"
import: "use math::{asin};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/math.hy#L1760"
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

- [`floor`](/docs/reference/math/floor): Returns the largest whole number not greater than `x`.
- [`ceil`](/docs/reference/math/ceil): Returns the smallest whole number not less than `x`.
- [`sqrt`](/docs/reference/math/sqrt): Returns the square root of `x`, correctly rounded.
- [`cbrt`](/docs/reference/math/cbrt): Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root.
- [`exp`](/docs/reference/math/exp): Returns e raised to the power `x`.
- [`ln`](/docs/reference/math/ln): Returns the natural logarithm of `x`.
- [`log2`](/docs/reference/math/log2): Returns the base-2 logarithm of `x`; exact powers of two give whole numbers.
- [`log10`](/docs/reference/math/log10): Returns the base-10 logarithm of `x`.
