---
slug: "toml/toml/Toml/encode_str"
package: "toml"
title: "Toml::encode_str"
description: "Encodes value as a TOML string: encode, then the bytes read as UTF-8 (TomlError::Utf8 if they are not)."
module: "toml"
kind: "method"
name: "encode_str"
parent: "Toml"
signature: "pub fn encode_str(TomlValue value) -> Result<string, TomlError>"
import: "use toml::{Toml};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/ceb0ab800e13abbb0ec43cfc61e9ae1d326d5ccc/src/toml.hy#L2407"
order: 3
---

Encodes `value` as a TOML [`string`](/docs/reference/types/string): [`encode`](/packages/toml/reference/toml/Toml/encode), then the bytes read as UTF-8 ([`TomlError::Utf8`](/packages/toml/reference/toml/TomlError#variant-utf8) if they are not).

Called on a `Toml` value as `value.encode_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `TomlValue` |

## Returns

`Result<string, TomlError>`

## See also

- [`string`](/docs/reference/types/string)
- [`Toml::encode`](/packages/toml/reference/toml/Toml/encode)
- [`toml::TomlError`](/packages/toml/reference/toml/TomlError)
- [`Toml`](/packages/toml/reference/toml/Toml): A TOML 1.0 codec: one-shot decode of bytes or a string to a `TomlValue`, and encode back.
- [`Toml::v1`](/packages/toml/reference/toml/Toml/v1): The TOML v1.0.0 codec.
- [`Toml::decode`](/packages/toml/reference/toml/Toml/decode): Decodes a TOML document from `bytes` into its root table.
- [`Toml::decode_str`](/packages/toml/reference/toml/Toml/decode_str): Decodes a TOML document from a string; same as `decode` on its bytes.
