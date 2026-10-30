---
slug: "json/json/Json/decode_str"
package: "json"
title: "Json::decode_str"
description: "Method Json::decode_str."
module: "json"
kind: "method"
name: "decode_str"
parent: "Json"
signature: "pub fn decode_str(string s) -> Result<JsonValue, JsonError>"
import: "use json::{Json};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L1234"
order: 5
---

*No documentation yet.*

Called on a `Json` value as `value.decode_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<JsonValue, JsonError>`

## See also

- [`Json`](/packages/json/reference/json/Json): RFC 8259 codec.
- [`Json::strict`](/packages/json/reference/json/Json/strict): Strict RFC 8259 mode.
- [`Json::jsonc`](/packages/json/reference/json/Json/jsonc): JSONC decode: `//` / `/* */` comments and trailing commas.
- [`Json::encode`](/packages/json/reference/json/Json/encode)
- [`Json::decode`](/packages/json/reference/json/Json/decode)
- [`Json::encode_str`](/packages/json/reference/json/Json/encode_str)
