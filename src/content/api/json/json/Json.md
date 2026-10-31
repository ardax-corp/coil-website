---
slug: "json/json/Json"
package: "json"
title: "Json"
description: "A JSON codec: one-shot decode of bytes or a string to a JsonValue, and compact encode back."
module: "json"
kind: "class"
name: "Json"
signature: "class Json"
import: "use json::{Json};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/e19bb6df6e254766aac3717a85a724f108eb2006/src/json.hy#L1387"
order: 2
---

A JSON codec: one-shot decode of bytes or a string to a [`JsonValue`](/packages/json/reference/json/JsonValue), and compact encode back.

[`Json::strict()`](/packages/json/reference/json/Json/strict) accepts RFC 8259 only. [`Json::jsonc()`](/packages/json/reference/json/Json/jsonc) also accepts
`//` and `/* */` comments and trailing commas on decode (JSONC, not
JSON5); both encode the same strict, compact JSON with no extra spaces.
Failures are a [`JsonError`](/packages/json/reference/json/JsonError) with the line and column, never a panic.

## Associated functions

| Name | Description |
|------|-------------|
| [`strict`](/packages/json/reference/json/Json/strict) | The strict RFC 8259 codec. |
| [`jsonc`](/packages/json/reference/json/Json/jsonc) | The JSONC codec: decode also accepts `//` and `/* */` comments and trailing commas in arrays and objects. |

## Methods

| Name | Description |
|------|-------------|
| [`encode`](/packages/json/reference/json/Json/encode) | Encodes `value` as compact UTF-8 JSON bytes. |
| [`decode`](/packages/json/reference/json/Json/decode) | Decodes one JSON document from `bytes`. |
| [`encode_str`](/packages/json/reference/json/Json/encode_str) | Encodes `value` as a compact JSON [`string`](/docs/reference/types/string): [`encode`](/packages/json/reference/json/Json/encode), then the bytes read as UTF-8. |
| [`decode_str`](/packages/json/reference/json/Json/decode_str) | Decodes one JSON document from a string; same as [`decode`](/packages/json/reference/json/Json/decode) on its bytes. |

## Examples

```coil
use json::{Json, JsonValue, JsonError};
use tests::assert;
let j = Json::strict();
let out = match j.decode_str("{ \"a\": [1, true, null] }") {
    Result::Ok(v) => j.encode_str(v).unwrap_or("encode failed"),
    Result::Err(_) => "decode failed",
};
assert!(out == "{\"a\":[1,true,null]}");

let cfg = Json::jsonc().decode_str("// settings\n{ \"debug\": true, }");
assert!(cfg.is_ok());
assert!(j.decode_str("// settings\n{ \"debug\": true, }").is_err());
```

## See also

- [`json::JsonValue`](/packages/json/reference/json/JsonValue)
- [`Json::strict`](/packages/json/reference/json/Json/strict)
- [`Json::jsonc`](/packages/json/reference/json/Json/jsonc)
- [`json::JsonError`](/packages/json/reference/json/JsonError)
