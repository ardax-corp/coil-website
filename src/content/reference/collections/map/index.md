---
slug: "collections/map/index"
title: "collections::map"
description: "HashMap: a hash map from keys to values."
module: "collections::map"
kind: "module"
name: "collections::map"
origin: "stdlib"
auto: false
order: 25
---

Keys need [`Eq`](/docs/reference/prelude/ops/Eq) and `Hash`. For keys in sorted order, use [`TreeMap`](/docs/reference/collections/tree/TreeMap).

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use collections::map::{Entry, HashMap};
```

## Types

| Name | Description |
|------|-------------|
| [`Entry`](/docs/reference/collections/map/Entry) | One key-value pair, as [`HashMap`](/docs/reference/collections/map/HashMap) iteration yields it. |
| [`HashMap`](/docs/reference/collections/map/HashMap) | A hash map from keys of type `K` to values of type `V`. |
| [`HashMapIter`](/docs/reference/collections/map/HashMapIter) | An iterator over the entries of a [`HashMap`](/docs/reference/collections/map/HashMap), from [`HashMap::iter`](/docs/reference/collections/map/HashMap/iter). |
