---
slug: "stdlib/math/log2"
package: "stdlib"
title: "log2"
description: "Returns the base-2 logarithm of x; exact powers of two give whole numbers."
module: "math"
kind: "fn"
name: "log2"
signature: "fn log2(float x) -> float"
import: "use math::{log2};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/math.coil#L1080"
order: 6
---

Returns the base-2 logarithm of `x`; exact powers of two give whole numbers.

## Parameters

| Name | Type |
|------|------|
| `x` | `float` |

## Returns

`float`

## Examples

```coil
use math::{log2};
use tests::assert;
assert!(log2(8.0) == 3.0);
assert!(log2(0.5) == -1.0);
```

## See also

- [`floor`](/packages/stdlib/reference/math/floor): Returns the largest whole number not greater than `x`.
- [`ceil`](/packages/stdlib/reference/math/ceil): Returns the smallest whole number not less than `x`.
- [`sqrt`](/packages/stdlib/reference/math/sqrt): Returns the square root of `x`, correctly rounded.
- [`cbrt`](/packages/stdlib/reference/math/cbrt): Returns the cube root of `x`, correctly rounded; negative `x` gives a negative root.
- [`exp`](/packages/stdlib/reference/math/exp): Returns e raised to the power `x`.
- [`ln`](/packages/stdlib/reference/math/ln): Returns the natural logarithm of `x`.
- [`log10`](/packages/stdlib/reference/math/log10): Returns the base-10 logarithm of `x`.
- [`sin`](/packages/stdlib/reference/math/sin): Returns the sine of `x` radians.
