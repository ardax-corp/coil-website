---
slug: "stdlib/collections/vec/VecEq"
package: "stdlib"
title: "VecEq"
description: "Methods on a Vec<T> whose elements are [Eq]."
module: "collections::vec"
kind: "trait"
name: "VecEq"
signature: "trait VecEq<V>"
import: "use collections::vec::{VecEq};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/collections/vec.hy#L321"
order: 2
---

Methods on a [`Vec<T>`](/docs/reference/prelude/Vec) whose elements are [[`Eq`](/docs/reference/prelude/ops/Eq)].

## Associated types

- `type Item`

## Required methods

| Name | Description |
|------|-------------|
| [`contains`](/packages/stdlib/reference/collections/vec/VecEq/contains) | Returns `true` when `needle` is in `xs`. |
| [`index_of`](/packages/stdlib/reference/collections/vec/VecEq/index_of) | Returns the index of the first `needle` in `xs`, or `None`. |
| [`dedup`](/packages/stdlib/reference/collections/vec/VecEq/dedup) | Returns `xs` with runs of equal neighbours collapsed to one value. |

## Examples

```coil
use collections::vec::{VecEq};
use tests::assert;
let xs: Vec<float> = [1.5, 1.5, 2.5];
assert!(xs.contains(2.5));
assert!(xs.index_of(2.5) == Option::Some(2));
assert!(xs.dedup().len() == 2);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`Eq`](/docs/reference/prelude/ops/Eq)
- [`VecOps`](/packages/stdlib/reference/collections/vec/VecOps): Methods on any `Vec<T>`.
- [`VecOrd`](/packages/stdlib/reference/collections/vec/VecOrd): Methods on a `Vec<T>` whose elements are [`Ord`].
- [`VecSum`](/packages/stdlib/reference/collections/vec/VecSum): `xs.sum()` on `Vec<int>` and `Vec<float>`; an empty vector sums to zero.
