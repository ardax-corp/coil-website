---
slug: "toml/toml/Toml/decode"
package: "toml"
title: "Toml::decode"
description: "Decodes a TOML document from bytes into its root table."
module: "toml"
kind: "method"
name: "decode"
parent: "Toml"
signature: "pub fn decode(Vec<byte> bytes) -> Result<TomlValue, TomlError>"
import: "use toml::{Toml};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/c03123838096b7fe8af6151ae8306728d56239db/src/toml.hy#L2398"
order: 2
---

Decodes a TOML document from `bytes` into its root table.

A leading UTF-8 byte order mark is skipped. Syntax errors and
duplicate keys or tables are [`TomlError::Invalid`](/packages/toml/reference/toml/TomlError#variant-invalid); malformed numbers
are [`TomlError::Number`](/packages/toml/reference/toml/TomlError#variant-number).

Called on a `Toml` value as `value.decode(…)`.

## Parameters

| Name | Type |
|------|------|
| `bytes` | `Vec<byte>` |

## Returns

`Result<TomlValue, TomlError>`

## Examples

```coil
use toml::{Toml, TomlValue};
use string::{to_bytes};
use tests::assert;
let v = Toml::v1().decode(to_bytes("n = 0xff\n")).unwrap_or(TomlValue::empty_table());
assert!(v.get("n").i == 255);
```

## See also

- [`toml::TomlError`](/packages/toml/reference/toml/TomlError)
- [`Toml`](/packages/toml/reference/toml/Toml): A TOML 1.0 codec: one-shot decode of bytes or a string to a `TomlValue`, and encode back.
- [`Toml::v1`](/packages/toml/reference/toml/Toml/v1): The TOML v1.0.0 codec.
- [`Toml::encode`](/packages/toml/reference/toml/Toml/encode): Encodes `value` as UTF-8 TOML bytes.
- [`Toml::encode_str`](/packages/toml/reference/toml/Toml/encode_str): Encodes `value` as a TOML `string`: `encode`, then the bytes read as UTF-8 (`TomlError::Utf8` if they are not).
- [`Toml::decode_str`](/packages/toml/reference/toml/Toml/decode_str): Decodes a TOML document from a string; same as `decode` on its bytes.
