---
slug: "stdlib/math/floor"
package: "stdlib"
title: "floor"
description: "Returns the largest whole number not greater than x."
module: "math"
kind: "fn"
name: "floor"
signature: "fn floor(float x) -> float"
import: "use math::{floor};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/math.coil#L662"
order: 0
---

Returns the largest whole number not greater than `x`.

`-0.0`, infinities and NaN come back unchanged.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{floor};
use tests::assert;
assert!(floor(2.7) == 2.0);
assert!(floor(-2.1) == -3.0);
assert!(floor(5.0) == 5.0);
```

## See also

- [`ceil`](/packages/stdlib/reference/math/ceil): Returns the smallest whole number not less than `x`.
- [`sqrt`](/packages/stdlib/reference/math/sqrt): Returns the square root of `x`, correctly rounded.
- [`cbrt`](/packages/stdlib/reference/math/cbrt): Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root.
- [`exp`](/packages/stdlib/reference/math/exp): Returns e raised to the power `x`.
- [`ln`](/packages/stdlib/reference/math/ln): Returns the natural logarithm of `x`.
- [`log2`](/packages/stdlib/reference/math/log2): Returns the base-2 logarithm of `x`; exact powers of two give whole numbers.
- [`log10`](/packages/stdlib/reference/math/log10): Returns the base-10 logarithm of `x`.
- [`sin`](/packages/stdlib/reference/math/sin): Returns the sine of `x` radians.
