---
slug: "path/index"
title: "path"
description: "Path: build, take apart and use file-system paths."
module: "path"
kind: "module"
name: "path"
origin: "stdlib"
auto: false
order: 35
---

Part of [coil-stdlib](/packages/stdlib). spool projects get it automatically; with plain `coil`, pass `--root ~/.coil/stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use path::{Path};
```

## Types

| Name | Description |
|------|-------------|
| [`Path`](/docs/reference/path/Path) | A file-system path, with helpers to take it apart and to use it. |
