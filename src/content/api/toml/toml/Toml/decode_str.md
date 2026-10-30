---
slug: "toml/toml/Toml/decode_str"
package: "toml"
title: "Toml::decode_str"
description: "Method Toml::decode_str."
module: "toml"
kind: "method"
name: "decode_str"
parent: "Toml"
signature: "pub fn decode_str(string s) -> Result<TomlValue, TomlError>"
import: "use toml::{Toml};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/9123082b0a6374c00503b61dd222a68283b706f1/src/toml.hy#L2161"
order: 4
---

*No documentation yet.*

Called on a `Toml` value as `value.decode_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<TomlValue, TomlError>`

## See also

- [`Toml`](/packages/toml/reference/toml/Toml): TOML 1.0 codec.
- [`Toml::v1`](/packages/toml/reference/toml/Toml/v1): TOML v1.0.0 encode/decode.
- [`Toml::encode`](/packages/toml/reference/toml/Toml/encode)
- [`Toml::decode`](/packages/toml/reference/toml/Toml/decode)
- [`Toml::encode_str`](/packages/toml/reference/toml/Toml/encode_str)
