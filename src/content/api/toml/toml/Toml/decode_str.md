---
slug: "toml/toml/Toml/decode_str"
package: "toml"
title: "Toml::decode_str"
description: "Decodes a TOML document from a string; same as decode on its bytes."
module: "toml"
kind: "method"
name: "decode_str"
parent: "Toml"
signature: "pub fn decode_str(string s) -> Result<TomlValue, TomlError>"
import: "use toml::{Toml};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/ceb0ab800e13abbb0ec43cfc61e9ae1d326d5ccc/src/toml.hy#L2416"
order: 4
---

Decodes a TOML document from a string; same as [`decode`](/packages/toml/reference/toml/Toml/decode) on its bytes.

Called on a `Toml` value as `value.decode_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<TomlValue, TomlError>`

## See also

- [`Toml::decode`](/packages/toml/reference/toml/Toml/decode)
- [`Toml`](/packages/toml/reference/toml/Toml): A TOML 1.0 codec: one-shot decode of bytes or a string to a `TomlValue`, and encode back.
- [`Toml::v1`](/packages/toml/reference/toml/Toml/v1): The TOML v1.0.0 codec.
- [`Toml::encode`](/packages/toml/reference/toml/Toml/encode): Encodes `value` as UTF-8 TOML bytes.
- [`Toml::encode_str`](/packages/toml/reference/toml/Toml/encode_str): Encodes `value` as a TOML `string`: `encode`, then the bytes read as UTF-8 (`TomlError::Utf8` if they are not).
