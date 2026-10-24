---
slug: "encoding/encode"
title: "encode"
description: "Encodes data as standard Base64 (RFC 4648 alphabet, with = padding)."
module: "encoding"
kind: "fn"
name: "encode"
signature: "fn encode(Vec<byte> data) -> string"
import: "use encoding::{encode};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/bbab8785eee1ff5cde1ade831f952993476bad73/src/encoding.hy#L49"
order: 0
---

Encodes `data` as standard Base64 (RFC 4648 alphabet, with `=` padding).

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`string`

## Examples

```coil
use encoding::{encode};
use tests::assert;
assert!(encode("hello") == "aGVsbG8=");
```

## See also

- [`decode`](/docs/reference/encoding/decode): Decodes standard Base64 text into bytes.
