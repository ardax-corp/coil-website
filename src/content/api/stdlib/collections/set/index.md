---
slug: "stdlib/collections/set/index"
package: "stdlib"
title: "collections::set"
description: "HashSet: a set of unique values."
module: "collections::set"
kind: "module"
name: "collections::set"
origin: "stdlib"
auto: false
order: 9
---

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use collections::set::{HashSet};
```

## Types

| Name | Description |
|------|-------------|
| [`HashSet`](/packages/stdlib/reference/collections/set/HashSet) | A set of unique values. |
