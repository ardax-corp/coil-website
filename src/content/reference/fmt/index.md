---
slug: "fmt/index"
title: "fmt"
description: "Buf: a string builder for text assembled piece by piece."
module: "fmt"
kind: "module"
name: "fmt"
origin: "stdlib"
auto: false
order: 29
---

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use fmt::{Buf};
```

## Types

| Name | Description |
|------|-------------|
| [`Buf`](/docs/reference/fmt/Buf) | A string builder: append pieces, then take the text with `to_string`. |
