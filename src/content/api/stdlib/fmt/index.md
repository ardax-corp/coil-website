---
slug: "stdlib/fmt/index"
package: "stdlib"
title: "fmt"
description: "Buf: a string builder for text assembled piece by piece."
module: "fmt"
kind: "module"
name: "fmt"
origin: "stdlib"
auto: false
order: 14
---

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use fmt::{Buf};
```

## Types

| Name | Description |
|------|-------------|
| [`Buf`](/packages/stdlib/reference/fmt/Buf) | A string builder: append pieces, then take the text with `to_string`. |
