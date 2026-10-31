---
slug: "json/json/Json/encode"
package: "json"
title: "Json::encode"
description: "Encodes value as compact UTF-8 JSON bytes."
module: "json"
kind: "method"
name: "encode"
parent: "Json"
signature: "pub fn encode(JsonValue value) -> Result<Vec<byte>, JsonError>"
import: "use json::{Json};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/70900ca2e6f10b5a31c57279c1d2e24ce37a0cc1/src/json.hy#L1417"
order: 2
---

Encodes `value` as compact UTF-8 JSON bytes.

Fails with [`JsonError::Number`](/packages/json/reference/json/JsonError#variant-number) when the value holds a non-finite float.

Called on a `Json` value as `value.encode(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `JsonValue` |

## Returns

`Result<Vec<byte>, JsonError>`

## See also

- [`json::JsonError`](/packages/json/reference/json/JsonError)
- [`Json`](/packages/json/reference/json/Json): A JSON codec: one-shot decode of bytes or a string to a `JsonValue`, and compact encode back.
- [`Json::strict`](/packages/json/reference/json/Json/strict): The strict RFC 8259 codec.
- [`Json::jsonc`](/packages/json/reference/json/Json/jsonc): The JSONC codec: decode also accepts `//` and `/* */` comments and trailing commas in arrays and objects.
- [`Json::decode`](/packages/json/reference/json/Json/decode): Decodes one JSON document from `bytes`.
- [`Json::encode_str`](/packages/json/reference/json/Json/encode_str): Encodes `value` as a compact JSON `string`: `encode`, then the bytes read as UTF-8.
- [`Json::decode_str`](/packages/json/reference/json/Json/decode_str): Decodes one JSON document from a string; same as `decode` on its bytes.
