---
slug: "toml/toml/Toml"
package: "toml"
title: "Toml"
description: "A TOML 1.0 codec: one-shot decode of bytes or a string to a TomlValue, and encode back."
module: "toml"
kind: "class"
name: "Toml"
signature: "class Toml"
import: "use toml::{Toml};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/c03123838096b7fe8af6151ae8306728d56239db/src/toml.hy#L2365"
order: 2
---

A TOML 1.0 codec: one-shot decode of bytes or a string to a [`TomlValue`](/packages/toml/reference/toml/TomlValue), and encode back.

Decode covers the whole of TOML 1.0.0: comments, bare, quoted and dotted
keys, basic and literal strings (multi-line too), integers in every radix,
floats with `inf` / `nan`, booleans, date-times, arrays, inline tables,
`[table]` headers and `[[array of tables]]`. Encode writes a table as
`key = value` lines followed by `[table]` and `[[array]]` sections.

## Associated functions

| Name | Description |
|------|-------------|
| [`v1`](/packages/toml/reference/toml/Toml/v1) | The TOML v1.0.0 codec. |

## Methods

| Name | Description |
|------|-------------|
| [`encode`](/packages/toml/reference/toml/Toml/encode) | Encodes `value` as UTF-8 TOML bytes. |
| [`decode`](/packages/toml/reference/toml/Toml/decode) | Decodes a TOML document from `bytes` into its root table. |
| [`encode_str`](/packages/toml/reference/toml/Toml/encode_str) | Encodes `value` as a TOML [`string`](/docs/reference/types/string): [`encode`](/packages/toml/reference/toml/Toml/encode), then the bytes read as UTF-8 ([`TomlError::Utf8`](/packages/toml/reference/toml/TomlError#variant-utf8) if they are not). |
| [`decode_str`](/packages/toml/reference/toml/Toml/decode_str) | Decodes a TOML document from a string; same as [`decode`](/packages/toml/reference/toml/Toml/decode) on its bytes. |

## Examples

```coil
use toml::{Toml, TomlValue, TomlError};
use tests::assert;
let t = Toml::v1();
let doc = "name = \"demo\"\nports = [80, 443]\n\n[server]\nhost = \"localhost\"\n";
let out = match t.decode_str(doc) {
    Result::Ok(v) => t.encode_str(v).unwrap_or("encode failed"),
    Result::Err(_) => "decode failed",
};
assert!(out == "name = \"demo\"\nports = [80, 443]\n[server]\nhost = \"localhost\"\n");
assert!(t.decode_str("name = ").is_err());
```

## See also

- [`toml::TomlValue`](/packages/toml/reference/toml/TomlValue)
