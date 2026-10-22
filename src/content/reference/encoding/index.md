---
slug: "encoding/index"
title: "encoding"
description: "The encoding module."
module: "encoding"
kind: "module"
name: "encoding"
origin: "stdlib"
auto: false
order: 22
---

Part of [coil-stdlib](/packages/stdlib): add it with `spool add coil-stdlib` or pass `--root path/to/coil-stdlib/src`.

Import what you use (`use path::*` is not allowed):

```coil
use encoding::{encode, decode};
```

## Functions

| Name | Description |
|------|-------------|
| [`encode`](/docs/reference/encoding/encode) | Encode bytes as standard Base64. |
| [`decode`](/docs/reference/encoding/decode) | Decode standard Base64 into bytes. |
