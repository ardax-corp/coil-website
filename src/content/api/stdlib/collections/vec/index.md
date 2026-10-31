---
slug: "stdlib/collections/vec/index"
package: "stdlib"
title: "collections::vec"
description: "Functional helpers for Vec: map, filter, fold, chunks, windows, partition, search."
module: "collections::vec"
kind: "module"
name: "collections::vec"
origin: "stdlib"
auto: false
order: 11
---

These are free functions that take the vector first: `map(xs, f)`. The methods on [`Vec`](/docs/reference/prelude/Vec) itself (`push`, `pop`, `len`, …) are in the [prelude](/docs/reference/prelude/Vec).

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use collections::vec::{Partitioned, VecOps};
```

## Types

| Name | Description |
|------|-------------|
| [`Partitioned`](/packages/stdlib/reference/collections/vec/Partitioned) | Two-bucket result of `partition` (`matched` = pred true, `rest` = pred false). |

## Traits

| Name | Description |
|------|-------------|
| [`VecOps`](/packages/stdlib/reference/collections/vec/VecOps) | Methods on any [`Vec<T>`](/docs/reference/prelude/Vec). |
| [`VecEq`](/packages/stdlib/reference/collections/vec/VecEq) | Methods on a [`Vec<T>`](/docs/reference/prelude/Vec) whose elements are [[`Eq`](/docs/reference/prelude/ops/Eq)]. |
| [`VecOrd`](/packages/stdlib/reference/collections/vec/VecOrd) | Methods on a [`Vec<T>`](/docs/reference/prelude/Vec) whose elements are [[`Ord`](/docs/reference/prelude/ops/Ord)]. |
| [`VecSum`](/packages/stdlib/reference/collections/vec/VecSum) | `xs.sum()` on [`Vec<int>`](/docs/reference/prelude/Vec) and [`Vec<float>`](/docs/reference/prelude/Vec); an empty vector sums to zero. |
