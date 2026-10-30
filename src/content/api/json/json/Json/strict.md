---
slug: "json/json/Json/strict"
package: "json"
title: "Json::strict"
description: "Strict RFC 8259 mode. Rejects comments and trailing commas."
module: "json"
kind: "static method"
name: "strict"
parent: "Json"
signature: "pub static fn strict() -> Json"
import: "use json::{Json};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L1200"
order: 0
---

Strict RFC 8259 mode. Rejects comments and trailing commas.

## Returns

`Json`

## See also

- [`Json`](/packages/json/reference/json/Json): RFC 8259 codec.
- [`Json::jsonc`](/packages/json/reference/json/Json/jsonc): JSONC decode: `//` / `/* */` comments and trailing commas.
- [`Json::encode`](/packages/json/reference/json/Json/encode)
- [`Json::decode`](/packages/json/reference/json/Json/decode)
- [`Json::encode_str`](/packages/json/reference/json/Json/encode_str)
- [`Json::decode_str`](/packages/json/reference/json/Json/decode_str)
