---
slug: "math/cos"
title: "cos"
description: "Returns the cosine of x radians."
module: "math"
kind: "fn"
name: "cos"
signature: "fn cos(float x) -> float"
import: "use math::{cos};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/math.hy#L1543"
order: 9
---

Returns the cosine of `x` radians.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{cos};
use num::{PI};
use tests::assert;
assert!(cos(0.0) == 1.0);
assert!(cos(PI) == -1.0);
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
