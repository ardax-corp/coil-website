---
slug: "json/json/Json/encode"
package: "json"
title: "Json::encode"
description: "Method Json::encode."
module: "json"
kind: "method"
name: "encode"
parent: "Json"
signature: "pub fn encode(JsonValue value) -> Result<Vec<byte>, JsonError>"
import: "use json::{Json};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L1209"
order: 2
---

*No documentation yet.*

Called on a `Json` value as `value.encode(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `JsonValue` |

## Returns

`Result<Vec<byte>, JsonError>`

## See also

- [`Json`](/packages/json/reference/json/Json): RFC 8259 codec.
- [`Json::strict`](/packages/json/reference/json/Json/strict): Strict RFC 8259 mode.
- [`Json::jsonc`](/packages/json/reference/json/Json/jsonc): JSONC decode: `//` / `/* */` comments and trailing commas.
- [`Json::decode`](/packages/json/reference/json/Json/decode)
- [`Json::encode_str`](/packages/json/reference/json/Json/encode_str)
- [`Json::decode_str`](/packages/json/reference/json/Json/decode_str)
