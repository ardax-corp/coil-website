---
slug: "toml/toml/TomlError"
package: "toml"
title: "TomlError"
description: "Why a decode or encode failed."
module: "toml"
kind: "enum"
name: "TomlError"
signature: "enum TomlError"
import: "use toml::{TomlError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-toml/blob/c03123838096b7fe8af6151ae8306728d56239db/src/toml.hy#L207"
order: 0
---

Why a decode or encode failed.

Every variant carries the position of the failure: `line` and `column` are
1-based, and `column` counts bytes within the line. Malformed input is
always reported as an error, never as a panic.

## Variants

### `Invalid { line: int, column: int }` {#variant-invalid}

The input is not TOML: a syntax error, a duplicate key, a table
defined twice, or a bad string escape.

### `Utf8 { line: int, column: int }` {#variant-utf8}

The input is not valid UTF-8, or an encoded document could not be read
back as a [`string`](/docs/reference/types/string) ([`Toml::encode_str`](/packages/toml/reference/toml/Toml/encode_str)).

### `Number { line: int, column: int }` {#variant-number}

A malformed or out-of-range number, such as `0x` or a leading zero.

## Examples

```coil
use toml::{Toml, TomlError};
use string::{format};
use tests::assert;
let pos = match Toml::v1().decode_str("a = 1\na = 2\n") {
    Result::Ok(_) => "decoded",
    Result::Err(e) => match e {
        TomlError::Invalid { line, column } => format("duplicate key at %i:%i", line, column),
        default => "other error",
    },
};
assert!(pos == "duplicate key at 2:6");
```

## See also

- [`string`](/docs/reference/types/string)
- [`Toml::encode_str`](/packages/toml/reference/toml/Toml/encode_str)
