---
slug: "toml/toml/Toml/encode_str"
package: "toml"
title: "Toml::encode_str"
description: "Method Toml::encode_str."
module: "toml"
kind: "method"
name: "encode_str"
parent: "Toml"
signature: "pub fn encode_str(TomlValue value) -> Result<string, TomlError>"
import: "use toml::{Toml};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/9123082b0a6374c00503b61dd222a68283b706f1/src/toml.hy#L2153"
order: 3
---

*No documentation yet.*

Called on a `Toml` value as `value.encode_str(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `TomlValue` |

## Returns

`Result<string, TomlError>`

## See also

- [`Toml`](/packages/toml/reference/toml/Toml): TOML 1.0 codec.
- [`Toml::v1`](/packages/toml/reference/toml/Toml/v1): TOML v1.0.0 encode/decode.
- [`Toml::encode`](/packages/toml/reference/toml/Toml/encode)
- [`Toml::decode`](/packages/toml/reference/toml/Toml/decode)
- [`Toml::decode_str`](/packages/toml/reference/toml/Toml/decode_str)
