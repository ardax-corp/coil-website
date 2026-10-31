---
slug: "stdlib/collections/vec/VecSum"
package: "stdlib"
title: "VecSum"
description: "xs.sum() on Vec<int> and Vec<float>; an empty vector sums to zero."
module: "collections::vec"
kind: "trait"
name: "VecSum"
signature: "trait VecSum<V>"
import: "use collections::vec::{VecSum};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/vec.hy#L470"
order: 4
---

`xs.sum()` on [`Vec<int>`](/docs/reference/prelude/Vec) and [`Vec<float>`](/docs/reference/prelude/Vec); an empty vector sums to zero.

## Associated types

- `type Item`

## Required methods

| Name | Description |
|------|-------------|
| [`sum`](/packages/stdlib/reference/collections/vec/VecSum/sum) | Returns the sum of the elements (overflow traps, as `+` does). |

## Examples

```coil
use collections::vec::{VecSum};
use tests::assert;
let xs: Vec<int> = [1, 2, 3];
let fs: Vec<float> = [0.5, 0.25];
assert!(xs.sum() == 6 && fs.sum() == 0.75);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`VecOps`](/packages/stdlib/reference/collections/vec/VecOps): Methods on any `Vec<T>`.
- [`VecEq`](/packages/stdlib/reference/collections/vec/VecEq): Methods on a `Vec<T>` whose elements are [`Eq`].
- [`VecOrd`](/packages/stdlib/reference/collections/vec/VecOrd): Methods on a `Vec<T>` whose elements are [`Ord`].
