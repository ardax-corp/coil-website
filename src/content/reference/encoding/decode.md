---
slug: "encoding/decode"
title: "decode"
description: "Decode standard Base64 into bytes."
module: "encoding"
kind: "fn"
name: "decode"
signature: "fn decode(string s) -> Result<Vec<byte>, string>"
import: "use encoding::{decode};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/encoding.hy#L81"
order: 1
---

Decode standard Base64 into bytes.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<Vec<byte>, string>`

## See also

- [`encode`](/docs/reference/encoding/encode): Encode bytes as standard Base64.
