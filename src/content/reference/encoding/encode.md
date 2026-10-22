---
slug: "encoding/encode"
title: "encode"
description: "Encode bytes as standard Base64."
module: "encoding"
kind: "fn"
name: "encode"
signature: "fn encode(Vec<byte> data) -> string"
import: "use encoding::{encode};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/encoding.hy#L42"
order: 0
---

Encode bytes as standard Base64.

## Parameters

| Name | Type |
|------|------|
| `data` | `Vec<byte>` |

## Returns

`string`

## See also

- [`decode`](/docs/reference/encoding/decode): Decode standard Base64 into bytes.
