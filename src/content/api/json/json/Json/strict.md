---
slug: "json/json/Json/strict"
package: "json"
title: "Json::strict"
description: "The strict RFC 8259 codec. Decode rejects comments and trailing commas."
module: "json"
kind: "static method"
name: "strict"
parent: "Json"
signature: "pub static fn strict() -> Json"
import: "use json::{Json};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/70900ca2e6f10b5a31c57279c1d2e24ce37a0cc1/src/json.hy#L1393"
order: 0
---

The strict RFC 8259 codec. Decode rejects comments and trailing commas.

## Returns

`Json`

## See also

- [`Json`](/packages/json/reference/json/Json): A JSON codec: one-shot decode of bytes or a string to a `JsonValue`, and compact encode back.
- [`Json::jsonc`](/packages/json/reference/json/Json/jsonc): The JSONC codec: decode also accepts `//` and `/* */` comments and trailing commas in arrays and objects.
- [`Json::encode`](/packages/json/reference/json/Json/encode): Encodes `value` as compact UTF-8 JSON bytes.
- [`Json::decode`](/packages/json/reference/json/Json/decode): Decodes one JSON document from `bytes`.
- [`Json::encode_str`](/packages/json/reference/json/Json/encode_str): Encodes `value` as a compact JSON `string`: `encode`, then the bytes read as UTF-8.
- [`Json::decode_str`](/packages/json/reference/json/Json/decode_str): Decodes one JSON document from a string; same as `decode` on its bytes.
