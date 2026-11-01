---
slug: "json/json/Json/decode_str"
package: "json"
title: "Json::decode_str"
description: "Decodes one JSON document from a string; same as decode on its bytes."
module: "json"
kind: "method"
name: "decode_str"
parent: "Json"
signature: "pub fn decode_str(string s) -> Result<JsonValue, JsonError>"
import: "use json::{Json};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/e19bb6df6e254766aac3717a85a724f108eb2006/src/json.coil#L1465"
order: 5
---

Decodes one JSON document from a string; same as [`decode`](/packages/json/reference/json/Json/decode) on its bytes.

Called on a `Json` value as `value.decode_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<JsonValue, JsonError>`

## See also

- [`Json::decode`](/packages/json/reference/json/Json/decode)
- [`Json`](/packages/json/reference/json/Json): A JSON codec: one-shot decode of bytes or a string to a `JsonValue`, and compact encode back.
- [`Json::strict`](/packages/json/reference/json/Json/strict): The strict RFC 8259 codec.
- [`Json::jsonc`](/packages/json/reference/json/Json/jsonc): The JSONC codec: decode also accepts `//` and `/* */` comments and trailing commas in arrays and objects.
- [`Json::encode`](/packages/json/reference/json/Json/encode): Encodes `value` as compact UTF-8 JSON bytes.
- [`Json::encode_str`](/packages/json/reference/json/Json/encode_str): Encodes `value` as a compact JSON `string`: `encode`, then the bytes read as UTF-8.
