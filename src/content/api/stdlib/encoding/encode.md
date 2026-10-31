---
slug: "stdlib/encoding/encode"
package: "stdlib"
title: "encode"
description: "Encodes data as standard Base64 (RFC 4648 alphabet, with = padding)."
module: "encoding"
kind: "fn"
name: "encode"
signature: "fn encode(Vec<byte> data) -> string"
import: "use encoding::{encode};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/encoding.hy#L49"
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

- [`decode`](/packages/stdlib/reference/encoding/decode): Decodes standard Base64 text into bytes.
