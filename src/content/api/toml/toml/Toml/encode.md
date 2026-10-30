---
slug: "toml/toml/Toml/encode"
package: "toml"
title: "Toml::encode"
description: "Method Toml::encode."
module: "toml"
kind: "method"
name: "encode"
parent: "Toml"
signature: "pub fn encode(TomlValue value) -> Result<Vec<byte>, TomlError>"
import: "use toml::{Toml};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/9123082b0a6374c00503b61dd222a68283b706f1/src/toml.hy#L2140"
order: 1
---

*No documentation yet.*

Called on a `Toml` value as `value.encode(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `TomlValue` |

## Returns

`Result<Vec<byte>, TomlError>`

## See also

- [`Toml`](/packages/toml/reference/toml/Toml): TOML 1.0 codec.
- [`Toml::v1`](/packages/toml/reference/toml/Toml/v1): TOML v1.0.0 encode/decode.
- [`Toml::decode`](/packages/toml/reference/toml/Toml/decode)
- [`Toml::encode_str`](/packages/toml/reference/toml/Toml/encode_str)
- [`Toml::decode_str`](/packages/toml/reference/toml/Toml/decode_str)
