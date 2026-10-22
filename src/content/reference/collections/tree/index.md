---
slug: "collections/tree/index"
title: "collections::tree"
description: "TreeMap: a map that keeps its keys in sorted order."
module: "collections::tree"
kind: "module"
name: "collections::tree"
origin: "stdlib"
auto: false
order: 27
---

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use collections::tree::{Entry, TreeMap};
```

## Types

| Name | Description |
|------|-------------|
| [`Entry`](/docs/reference/collections/tree/Entry) | One key-value pair, as [`TreeMap`](/docs/reference/collections/tree/TreeMap) iteration yields it. |
| [`TreeMap`](/docs/reference/collections/tree/TreeMap) | An ordered map from keys of type `K` to values of type `V`. |
| [`TreeMapIter`](/docs/reference/collections/tree/TreeMapIter) | An in-order iterator over a [`TreeMap`](/docs/reference/collections/tree/TreeMap), from [`TreeMap::iter`](/docs/reference/collections/tree/TreeMap/iter). |
