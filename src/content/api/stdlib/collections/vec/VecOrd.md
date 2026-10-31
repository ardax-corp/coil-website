---
slug: "stdlib/collections/vec/VecOrd"
package: "stdlib"
title: "VecOrd"
description: "Methods on a Vec<T> whose elements are [Ord]."
module: "collections::vec"
kind: "trait"
name: "VecOrd"
signature: "trait VecOrd<V>"
import: "use collections::vec::{VecOrd};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/collections/vec.coil#L391"
order: 3
---

Methods on a [`Vec<T>`](/docs/reference/prelude/Vec) whose elements are [[`Ord`](/docs/reference/prelude/ops/Ord)].

## Associated types

- `type Item`

## Required methods

| Name | Description |
|------|-------------|
| [`min`](/packages/stdlib/reference/collections/vec/VecOrd/min) | Returns the smallest element (the first of equal ones), or `None` when `xs` is empty. |
| [`max`](/packages/stdlib/reference/collections/vec/VecOrd/max) | Returns the largest element (the first of equal ones), or `None` when `xs` is empty. |
| [`binary_search`](/packages/stdlib/reference/collections/vec/VecOrd/binary_search) | Finds `needle` in the ascending vector `xs` by halving, and returns an index holding it. |

## Examples

```coil
use collections::vec::{VecOrd};
use tests::assert;
let xs: Vec<int> = [1, 3, 5, 7, 9];
assert!(xs.min() == Option::Some(1) && xs.max() == Option::Some(9));
assert!((xs.binary_search(7) ?? -1) == 3);
assert!(xs.binary_search(4).is_none());
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`Ord`](/docs/reference/prelude/ops/Ord)
- [`VecOps`](/packages/stdlib/reference/collections/vec/VecOps): Methods on any `Vec<T>`.
- [`VecEq`](/packages/stdlib/reference/collections/vec/VecEq): Methods on a `Vec<T>` whose elements are [`Eq`].
- [`VecSum`](/packages/stdlib/reference/collections/vec/VecSum): `xs.sum()` on `Vec<int>` and `Vec<float>`; an empty vector sums to zero.
