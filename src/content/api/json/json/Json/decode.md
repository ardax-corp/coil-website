---
slug: "json/json/Json/decode"
package: "json"
title: "Json::decode"
description: "Decodes one JSON document from bytes."
module: "json"
kind: "method"
name: "decode"
parent: "Json"
signature: "pub fn decode(Vec<byte> bytes) -> Result<JsonValue, JsonError>"
import: "use json::{Json};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/e19bb6df6e254766aac3717a85a724f108eb2006/src/json.hy#L1438"
order: 3
---

Decodes one JSON document from `bytes`.

Whitespace may surround the value; anything else after it is
[`JsonError::Invalid`](/packages/json/reference/json/JsonError#variant-invalid), as is empty input. Bad UTF-8 in a string is
[`JsonError::Utf8`](/packages/json/reference/json/JsonError#variant-utf8), and a number that overflows a float is
[`JsonError::Number`](/packages/json/reference/json/JsonError#variant-number).

Called on a `Json` value as `value.decode(…)`.

## Parameters

| Name | Type |
|------|------|
| `bytes` | `Vec<byte>` |

## Returns

`Result<JsonValue, JsonError>`

## Examples

```coil
use json::{Json, JsonValue};
use string::{to_bytes};
use tests::assert;
let v = Json::strict().decode(to_bytes("[1, 2.5]")).unwrap_or(JsonValue::null());
assert!(v.at(0).map_or(false, fn (JsonValue x) => x.is_int()));
assert!(v.at(1).map_or(false, fn (JsonValue x) => x.is_float()));
```

## See also

- [`json::JsonError`](/packages/json/reference/json/JsonError)
- [`Json`](/packages/json/reference/json/Json): A JSON codec: one-shot decode of bytes or a string to a `JsonValue`, and compact encode back.
- [`Json::strict`](/packages/json/reference/json/Json/strict): The strict RFC 8259 codec.
- [`Json::jsonc`](/packages/json/reference/json/Json/jsonc): The JSONC codec: decode also accepts `//` and `/* */` comments and trailing commas in arrays and objects.
- [`Json::encode`](/packages/json/reference/json/Json/encode): Encodes `value` as compact UTF-8 JSON bytes.
- [`Json::encode_str`](/packages/json/reference/json/Json/encode_str): Encodes `value` as a compact JSON `string`: `encode`, then the bytes read as UTF-8.
- [`Json::decode_str`](/packages/json/reference/json/Json/decode_str): Decodes one JSON document from a string; same as `decode` on its bytes.
