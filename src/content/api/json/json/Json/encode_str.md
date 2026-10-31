---
slug: "json/json/Json/encode_str"
package: "json"
title: "Json::encode_str"
description: "Encodes value as a compact JSON string: encode, then the bytes read as UTF-8."
module: "json"
kind: "method"
name: "encode_str"
parent: "Json"
signature: "pub fn encode_str(JsonValue value) -> Result<string, JsonError>"
import: "use json::{Json};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/e19bb6df6e254766aac3717a85a724f108eb2006/src/json.hy#L1456"
order: 4
---

Encodes `value` as a compact JSON [`string`](/docs/reference/types/string): [`encode`](/packages/json/reference/json/Json/encode), then the bytes read as UTF-8.

Fails like [`encode`](/packages/json/reference/json/Json/encode), or with [`JsonError::Utf8`](/packages/json/reference/json/JsonError#variant-utf8) when the encoded bytes
are not valid UTF-8.

Called on a `Json` value as `value.encode_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `JsonValue` |

## Returns

`Result<string, JsonError>`

## See also

- [`string`](/docs/reference/types/string)
- [`Json::encode`](/packages/json/reference/json/Json/encode)
- [`json::JsonError`](/packages/json/reference/json/JsonError)
- [`Json`](/packages/json/reference/json/Json): A JSON codec: one-shot decode of bytes or a string to a `JsonValue`, and compact encode back.
- [`Json::strict`](/packages/json/reference/json/Json/strict): The strict RFC 8259 codec.
- [`Json::jsonc`](/packages/json/reference/json/Json/jsonc): The JSONC codec: decode also accepts `//` and `/* */` comments and trailing commas in arrays and objects.
- [`Json::decode`](/packages/json/reference/json/Json/decode): Decodes one JSON document from `bytes`.
- [`Json::decode_str`](/packages/json/reference/json/Json/decode_str): Decodes one JSON document from a string; same as `decode` on its bytes.
