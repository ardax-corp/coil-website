---
slug: "stdlib/path/index"
package: "stdlib"
title: "path"
description: "Path: build, take apart and use file-system paths."
module: "path"
kind: "module"
name: "path"
origin: "stdlib"
auto: false
order: 22
---

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use path::{Path};
```

## Types

| Name | Description |
|------|-------------|
| [`Path`](/packages/stdlib/reference/path/Path) | A file-system path, with helpers to take it apart and to use it. |
