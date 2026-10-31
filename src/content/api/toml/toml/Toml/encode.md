---
slug: "toml/toml/Toml/encode"
package: "toml"
title: "Toml::encode"
description: "Encodes value as UTF-8 TOML bytes. A table becomes a document; any other value is written as its TOML literal (7, \"hi\")."
module: "toml"
kind: "method"
name: "encode"
parent: "Toml"
signature: "pub fn encode(TomlValue value) -> Result<Vec<byte>, TomlError>"
import: "use toml::{Toml};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/c03123838096b7fe8af6151ae8306728d56239db/src/toml.hy#L2377"
order: 1
---

Encodes `value` as UTF-8 TOML bytes. A table becomes a document; any other value is written as its TOML literal (`7`, `"hi"`).

Called on a `Toml` value as `value.encode(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `TomlValue` |

## Returns

`Result<Vec<byte>, TomlError>`

## See also

- [`Toml`](/packages/toml/reference/toml/Toml): A TOML 1.0 codec: one-shot decode of bytes or a string to a `TomlValue`, and encode back.
- [`Toml::v1`](/packages/toml/reference/toml/Toml/v1): The TOML v1.0.0 codec.
- [`Toml::decode`](/packages/toml/reference/toml/Toml/decode): Decodes a TOML document from `bytes` into its root table.
- [`Toml::encode_str`](/packages/toml/reference/toml/Toml/encode_str): Encodes `value` as a TOML `string`: `encode`, then the bytes read as UTF-8 (`TomlError::Utf8` if they are not).
- [`Toml::decode_str`](/packages/toml/reference/toml/Toml/decode_str): Decodes a TOML document from a string; same as `decode` on its bytes.
