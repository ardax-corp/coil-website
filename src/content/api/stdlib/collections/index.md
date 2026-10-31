---
slug: "stdlib/collections/index"
package: "stdlib"
title: "collections"
description: "Sorting and other helpers over Vec, plus the collection types in its submodules."
module: "collections"
kind: "module"
name: "collections"
origin: "stdlib"
auto: false
order: 4
---

The collection types live in submodules: [`HashMap`](/packages/stdlib/reference/collections/map/HashMap), [`HashSet`](/packages/stdlib/reference/collections/set/HashSet), [`TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap), [`VecDeque`](/packages/stdlib/reference/collections/deque/VecDeque), [`List`](/packages/stdlib/reference/collections/list/List) and [`BitSet`](/packages/stdlib/reference/collections/bitset/BitSet). [`Vec`](/docs/reference/prelude/Vec) itself is in the [prelude](/docs/reference/prelude/Vec); its functional helpers ([`map`](/packages/stdlib/reference/collections/map), `filter`, `fold`, …) are in [`collections::vec`](/packages/stdlib/reference/collections/vec).

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use collections::{sort, sort_by};
```

## Modules

| Module | Description |
|--------|-------------|
| [`collections::bitset`](/packages/stdlib/reference/collections/bitset) | BitSet: a compact set of small non-negative integers. |
| [`collections::deque`](/packages/stdlib/reference/collections/deque) | VecDeque: a double-ended queue with fast push and pop at both ends. |
| [`collections::list`](/packages/stdlib/reference/collections/list) | List: a singly-linked list. |
| [`collections::map`](/packages/stdlib/reference/collections/map) | HashMap: a hash map from keys to values. |
| [`collections::set`](/packages/stdlib/reference/collections/set) | HashSet: a set of unique values. |
| [`collections::tree`](/packages/stdlib/reference/collections/tree) | TreeMap: a map that keeps its keys in sorted order. |
| [`collections::vec`](/packages/stdlib/reference/collections/vec) | Functional helpers for Vec: map, filter, fold, chunks, windows, partition, search. |

## Functions

| Name | Description |
|------|-------------|
| [`sort`](/packages/stdlib/reference/collections/sort) | Returns a sorted copy of `arr`, in ascending order. |
| [`sort_by`](/packages/stdlib/reference/collections/sort_by) | Returns a copy of `arr` sorted by the value `key` gives each element, in ascending order. |
| [`reverse`](/packages/stdlib/reference/collections/reverse) | Returns a copy of `arr` in reverse order. |
| [`collect_ints`](/packages/stdlib/reference/collections/collect_ints) | Returns the values of the range `a..b` as a [`Vec<int>`](/docs/reference/prelude/Vec). |
| [`collect_ints_inclusive`](/packages/stdlib/reference/collections/collect_ints_inclusive) | Returns the values of the inclusive range `a..=b` as a [`Vec<int>`](/docs/reference/prelude/Vec). |
