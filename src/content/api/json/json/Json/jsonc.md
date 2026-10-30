---
slug: "json/json/Json/jsonc"
package: "json"
title: "Json::jsonc"
description: "JSONC decode: // / /* */ comments and trailing commas. Encode is still RFC 8259."
module: "json"
kind: "static method"
name: "jsonc"
parent: "Json"
signature: "pub static fn jsonc() -> Json"
import: "use json::{Json};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L1205"
order: 1
---

JSONC decode: `//` / `/* */` comments and trailing commas. Encode is still RFC 8259.

## Returns

`Json`

## See also

- [`Json`](/packages/json/reference/json/Json): RFC 8259 codec.
- [`Json::strict`](/packages/json/reference/json/Json/strict): Strict RFC 8259 mode.
- [`Json::encode`](/packages/json/reference/json/Json/encode)
- [`Json::decode`](/packages/json/reference/json/Json/decode)
- [`Json::encode_str`](/packages/json/reference/json/Json/encode_str)
- [`Json::decode_str`](/packages/json/reference/json/Json/decode_str)
