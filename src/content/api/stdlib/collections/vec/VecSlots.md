---
slug: "stdlib/collections/vec/VecSlots"
package: "stdlib"
title: "VecSlots"
description: "slot(i) on any Vec<T>: the place of element i, which panics when i is out of range as xs[i] does."
module: "collections::vec"
kind: "trait"
name: "VecSlots"
signature: "trait VecSlots<V>"
import: "use collections::vec::{VecSlots};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/collections/vec.coil#L563"
order: 5
---

`slot(i)` on any [`Vec<T>`](/docs/reference/prelude/Vec): the place of element `i`, which panics when `i` is out of range as `xs[i]` does.

## Associated types

- `type Item`

## Required methods

| Name | Description |
|------|-------------|
| [`slot`](/packages/stdlib/reference/collections/vec/VecSlots/slot) | The place of element `i`: a view whose [`set`](/packages/stdlib/reference/collections/set) and `update` write `xs`. |

## Examples

```coil
use collections::vec::{VecSlots};
use tests::assert;
let xs: Vec<int> = [1, 2, 3];
assert!(xs.slot(2).set(30).get() == 30);
assert!(xs[2] == 30);
```

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`VecOps`](/packages/stdlib/reference/collections/vec/VecOps): Methods on any `Vec<T>`.
- [`VecEq`](/packages/stdlib/reference/collections/vec/VecEq): Methods on a `Vec<T>` whose elements are [`Eq`].
- [`VecOrd`](/packages/stdlib/reference/collections/vec/VecOrd): Methods on a `Vec<T>` whose elements are [`Ord`].
- [`VecSum`](/packages/stdlib/reference/collections/vec/VecSum): `xs.sum()` on `Vec<int>` and `Vec<float>`; an empty vector sums to zero.
