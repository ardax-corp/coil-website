---
slug: "collections/set/index"
title: "collections::set"
description: "The collections::set module."
module: "collections::set"
kind: "module"
name: "collections::set"
origin: "stdlib"
auto: false
order: 19
---

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use collections::set::{HashSet};
```

## Types

| Name | Description |
|------|-------------|
| [`HashSet`](/docs/reference/collections/set/HashSet) | Set of unique values backed by `HashMap<T, bool>`. |
