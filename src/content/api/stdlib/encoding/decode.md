---
slug: "stdlib/encoding/decode"
package: "stdlib"
title: "decode"
description: "Decodes standard Base64 text into bytes."
module: "encoding"
kind: "fn"
name: "decode"
signature: "fn decode(string s) -> Result<Vec<byte>, string>"
import: "use encoding::{decode};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/encoding.coil#L101"
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
let bytes = decode("aGVsbG8=").ok() ?? Vec::new();
assert!(bytes.len() == 5);
assert!(encode(bytes) == "aGVsbG8=");
```

## See also

- [`encode`](/packages/stdlib/reference/encoding/encode): Encodes `data` as standard Base64 (RFC 4648 alphabet, with `=` padding).
