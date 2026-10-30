---
slug: "encoding/index"
title: "encoding"
description: "Base64 encoding and decoding."
module: "encoding"
kind: "module"
name: "encoding"
origin: "stdlib"
auto: false
order: 31
---

Part of [coil-stdlib](/packages/stdlib). spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use encoding::{encode, decode};
```

## Functions

| Name | Description |
|------|-------------|
| [`encode`](/docs/reference/encoding/encode) | Encodes `data` as standard Base64 (RFC 4648 alphabet, with `=` padding). |
| [`decode`](/docs/reference/encoding/decode) | Decodes standard Base64 text into bytes. |
