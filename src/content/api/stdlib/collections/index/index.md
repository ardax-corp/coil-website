---
slug: "stdlib/collections/index/index"
package: "stdlib"
title: "collections::index"
description: "The collections::index module."
module: "collections::index"
kind: "module"
name: "collections::index"
origin: "stdlib"
auto: false
order: 7
---

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use collections::index::{KeyIndex};
```

## Types

| Name | Description |
|------|-------------|
| [`KeyIndex`](/packages/stdlib/reference/collections/index/KeyIndex) | Gives each distinct key a slot number: `0` for the first key added, then `1`, `2` and so on. |
