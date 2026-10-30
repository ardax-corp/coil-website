---
slug: "json/json/Json/encode_str"
package: "json"
title: "Json::encode_str"
description: "Method Json::encode_str."
module: "json"
kind: "method"
name: "encode_str"
parent: "Json"
signature: "pub fn encode_str(JsonValue value) -> Result<string, JsonError>"
import: "use json::{Json};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L1226"
order: 4
---

*No documentation yet.*

Called on a `Json` value as `value.encode_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `JsonValue` |

## Returns

`Result<string, JsonError>`

## See also

- [`Json`](/packages/json/reference/json/Json): RFC 8259 codec.
- [`Json::strict`](/packages/json/reference/json/Json/strict): Strict RFC 8259 mode.
- [`Json::jsonc`](/packages/json/reference/json/Json/jsonc): JSONC decode: `//` / `/* */` comments and trailing commas.
- [`Json::encode`](/packages/json/reference/json/Json/encode)
- [`Json::decode`](/packages/json/reference/json/Json/decode)
- [`Json::decode_str`](/packages/json/reference/json/Json/decode_str)
