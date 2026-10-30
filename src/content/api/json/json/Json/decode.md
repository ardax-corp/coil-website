---
slug: "json/json/Json/decode"
package: "json"
title: "Json::decode"
description: "Method Json::decode."
module: "json"
kind: "method"
name: "decode"
parent: "Json"
signature: "pub fn decode(Vec<byte> bytes) -> Result<JsonValue, JsonError>"
import: "use json::{Json};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L1213"
order: 3
---

*No documentation yet.*

Called on a `Json` value as `value.decode(…)`.

## Parameters

| Name | Type |
|------|------|
| `bytes` | `Vec<byte>` |

## Returns

`Result<JsonValue, JsonError>`

## See also

- [`Json`](/packages/json/reference/json/Json): RFC 8259 codec.
- [`Json::strict`](/packages/json/reference/json/Json/strict): Strict RFC 8259 mode.
- [`Json::jsonc`](/packages/json/reference/json/Json/jsonc): JSONC decode: `//` / `/* */` comments and trailing commas.
- [`Json::encode`](/packages/json/reference/json/Json/encode)
- [`Json::encode_str`](/packages/json/reference/json/Json/encode_str)
- [`Json::decode_str`](/packages/json/reference/json/Json/decode_str)
