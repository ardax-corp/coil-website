---
slug: "json/json/Json"
package: "json"
title: "Json"
description: "RFC 8259 codec. Json::jsonc() is parse-only sugar on the same parser."
module: "json"
kind: "class"
name: "Json"
signature: "class Json"
import: "use json::{Json};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/6ccd5778fa8274febae9671020f18968540571de/src/json.hy#L1194"
order: 3
---

RFC 8259 codec. [`Json::jsonc()`](/packages/json/reference/json/Json/jsonc) is parse-only sugar on the same parser.

## Associated functions

| Name | Description |
|------|-------------|
| [`strict`](/packages/json/reference/json/Json/strict) | Strict RFC 8259 mode. |
| [`jsonc`](/packages/json/reference/json/Json/jsonc) | JSONC decode: `//` / `/* */` comments and trailing commas. |

## Methods

| Name | Description |
|------|-------------|
| [`encode`](/packages/json/reference/json/Json/encode) |  |
| [`decode`](/packages/json/reference/json/Json/decode) |  |
| [`encode_str`](/packages/json/reference/json/Json/encode_str) |  |
| [`decode_str`](/packages/json/reference/json/Json/decode_str) |  |

## See also

- [`Json::jsonc`](/packages/json/reference/json/Json/jsonc)
- [`JsonValue`](/packages/json/reference/json/JsonValue): Strict JSON value.
- [`Parser`](/packages/json/reference/json/Parser)
- [`Store`](/packages/json/reference/json/Store)
