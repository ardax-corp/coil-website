---
slug: "stdlib/collections/tree/index"
package: "stdlib"
title: "collections::tree"
description: "TreeMap: a map that keeps its keys in sorted order."
module: "collections::tree"
kind: "module"
name: "collections::tree"
origin: "stdlib"
auto: false
order: 10
---

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use collections::tree::{Entry, TreeMap};
```

## Types

| Name | Description |
|------|-------------|
| [`Entry`](/packages/stdlib/reference/collections/tree/Entry) | One key-value pair, as [`TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap) iteration yields it. |
| [`TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap) | An ordered map from keys of type `K` to values of type `V`. |
| [`TreeMapIter`](/packages/stdlib/reference/collections/tree/TreeMapIter) | An in-order iterator over a [`TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap), from [`TreeMap::iter`](/packages/stdlib/reference/collections/tree/TreeMap/iter). |
