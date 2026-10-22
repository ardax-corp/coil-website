---
slug: "encoding/decode"
title: "decode"
description: "Decodes standard Base64 text into bytes."
module: "encoding"
kind: "fn"
name: "decode"
signature: "fn decode(string s) -> Result<Vec<byte>, string>"
import: "use encoding::{decode};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/encoding.hy#L101"
order: 1
---

Decodes standard Base64 text into bytes.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<Vec<byte>, string>`

## Errors

Returns `Err` when `s` has a character outside the Base64 alphabet or a length that is not a multiple of 4.

## Examples

```coil
use encoding::{decode, encode};
use tests::assert;
let bytes = decode("aGVsbG8=") ?? Vec::new();
assert!(bytes.len() == 5);
assert!(encode(bytes) == "aGVsbG8=");
```

## See also

- [`encode`](/docs/reference/encoding/encode): Encodes data as standard Base64 (RFC 4648 alphabet, with = padding).
