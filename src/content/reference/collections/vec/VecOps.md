---
slug: "collections/vec/VecOps"
title: "VecOps"
description: "Methods on any Vec<T>."
module: "collections::vec"
kind: "trait"
name: "VecOps"
signature: "trait VecOps<V>"
import: "use collections::vec::{VecOps};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/collections/vec.hy#L41"
order: 1
---

Methods on any [`Vec<T>`](/docs/reference/prelude/Vec).

## Associated types

- `type Item`

## Required methods

| Name | Description |
|------|-------------|
| [`map`](/docs/reference/collections/vec/VecOps/map) | Returns a new vector with `mapper` applied to each element, in order. |
| [`filter`](/docs/reference/collections/vec/VecOps/filter) | Returns the elements for which `pred` is `true`, in order. |
| [`fold`](/docs/reference/collections/vec/VecOps/fold) | Combines the elements left to right: starts from `init` and replaces the accumulator with `folder(acc, x)` for each `x`. |
| [`enumerate`](/docs/reference/collections/vec/VecOps/enumerate) | Returns `(index, element)` pairs, so `for (i, x) in xs.enumerate()` works. |
| [`zip`](/docs/reference/collections/vec/VecOps/zip) | Returns `(xs[i], ys[i])` pairs up to the shorter of the two vectors. |
| [`any`](/docs/reference/collections/vec/VecOps/any) | Returns `true` when `pred` holds for some element (`false` when empty). |
| [`all`](/docs/reference/collections/vec/VecOps/all) | Returns `true` when `pred` holds for every element (`true` when empty). |
| [`count`](/docs/reference/collections/vec/VecOps/count) | Returns how many elements `pred` holds for. |
| [`take`](/docs/reference/collections/vec/VecOps/take) | Returns the first `n` elements (all of them when `n` is larger, none when `n <= 0`). |
| [`skip`](/docs/reference/collections/vec/VecOps/skip) | Returns the elements after the first `n` (all of them when `n <= 0`). |
| [`first`](/docs/reference/collections/vec/VecOps/first) | Returns the first element, or `None` when `xs` is empty. |
| [`last`](/docs/reference/collections/vec/VecOps/last) | Returns the last element, or `None` when `xs` is empty. |
| [`concat`](/docs/reference/collections/vec/VecOps/concat) | Returns a new vector holding the elements of `xs` followed by those of `ys`. |
| [`chunks`](/docs/reference/collections/vec/VecOps/chunks) | Consecutive non-overlapping slices of `size` (the last one may be short). |
| [`windows`](/docs/reference/collections/vec/VecOps/windows) | Overlapping sliding windows of exactly `size`. |
| [`partition`](/docs/reference/collections/vec/VecOps/partition) | Splits `xs` into (`matched`, `rest`) by `pred`. |

## Examples

```coil
use collections::vec::{VecOps};
use tests::assert;
let xs: Vec<int> = [1, 2, 3, 4];
let big = xs.map(fn (int x) => x * 10).filter(fn (int x) => x > 15);
assert!(big.len() == 3 && big[0] == 20);
assert!(xs.fold(0, fn (int acc, int x) => acc + x) == 10);
for (i, x) in xs.enumerate() {
    assert!(xs[i] == x);
}
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`VecEq`](/docs/reference/collections/vec/VecEq): Methods on a `Vec<T>` whose elements are [`Eq`].
- [`VecOrd`](/docs/reference/collections/vec/VecOrd): Methods on a `Vec<T>` whose elements are [`Ord`].
- [`VecSum`](/docs/reference/collections/vec/VecSum): `xs.sum()` on `Vec<int>` and `Vec<float>`; an empty vector sums to zero.
