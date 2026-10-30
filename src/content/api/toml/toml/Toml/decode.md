---
slug: "toml/toml/Toml/decode"
package: "toml"
title: "Toml::decode"
description: "Method Toml::decode."
module: "toml"
kind: "method"
name: "decode"
parent: "Toml"
signature: "pub fn decode(Vec<byte> bytes) -> Result<TomlValue, TomlError>"
import: "use toml::{Toml};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/9123082b0a6374c00503b61dd222a68283b706f1/src/toml.hy#L2146"
order: 2
---

*No documentation yet.*

Called on a `Toml` value as `value.decode(…)`.

## Parameters

| Name | Type |
|------|------|
| `bytes` | `Vec<byte>` |

## Returns

`Result<TomlValue, TomlError>`

## See also

- [`Toml`](/packages/toml/reference/toml/Toml): TOML 1.0 codec.
- [`Toml::v1`](/packages/toml/reference/toml/Toml/v1): TOML v1.0.0 encode/decode.
- [`Toml::encode`](/packages/toml/reference/toml/Toml/encode)
- [`Toml::encode_str`](/packages/toml/reference/toml/Toml/encode_str)
- [`Toml::decode_str`](/packages/toml/reference/toml/Toml/decode_str)
