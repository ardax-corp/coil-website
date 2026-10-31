---
slug: "stdlib/collections/map/index"
package: "stdlib"
title: "collections::map"
description: "HashMap: a hash map from keys to values."
module: "collections::map"
kind: "module"
name: "collections::map"
origin: "stdlib"
auto: false
order: 8
---

Keys need [`Eq`](/docs/reference/prelude/ops/Eq) and `Hash`. For keys in sorted order, use [`TreeMap`](/packages/stdlib/reference/collections/tree/TreeMap).

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use collections::map::{Entry, HashMap};
```

## Types

| Name | Description |
|------|-------------|
| [`Entry`](/packages/stdlib/reference/collections/map/Entry) | One key-value pair, as [`HashMap`](/packages/stdlib/reference/collections/map/HashMap) iteration yields it. |
| [`HashMap`](/packages/stdlib/reference/collections/map/HashMap) | A hash map from keys of type `K` to values of type `V`. |
| [`HashMapIter`](/packages/stdlib/reference/collections/map/HashMapIter) | An iterator over the entries of a [`HashMap`](/packages/stdlib/reference/collections/map/HashMap), from [`HashMap::iter`](/packages/stdlib/reference/collections/map/HashMap/iter). |
