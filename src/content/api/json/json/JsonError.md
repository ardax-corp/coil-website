---
slug: "json/json/JsonError"
package: "json"
title: "JsonError"
description: "Why a decode or encode failed."
module: "json"
kind: "enum"
name: "JsonError"
signature: "enum JsonError"
import: "use json::{JsonError};"
origin: "package"
source: "https://github.com/ardax-corp/coil-json/blob/e19bb6df6e254766aac3717a85a724f108eb2006/src/json.coil#L144"
order: 1
---

Why a decode or encode failed.

Every variant carries the position of the failure: `line` and `column` are
1-based, and `column` counts bytes within the line. Malformed input is
always reported as an error, never as a panic.

## Variants

### `Invalid { line: int, column: int }` {#variant-invalid}

The input is not JSON: a syntax error, an unexpected byte, trailing
data after the value, or empty input.

### `Utf8 { line: int, column: int }` {#variant-utf8}

A string is not valid UTF-8, or an encoded document could not be read
back as a [`string`](/docs/reference/types/string) ([`Json::encode_str`](/packages/json/reference/json/Json/encode_str)).

### `Number { line: int, column: int }` {#variant-number}

A number overflows, or a float is not finite (JSON has no `inf` or
`NaN`).

## Examples

```coil
use json::{Json, JsonError};
use string::{format};
use tests::assert;
let pos = match Json::strict().decode_str("[1,\n 2,]") {
    Result::Ok(_) => "decoded",
    Result::Err(e) => match e {
        JsonError::Invalid { line, column } => format("invalid at %i:%i", line, column),
        default => "other error",
    },
};
assert!(pos == "invalid at 2:4");
```

## See also

- [`string`](/docs/reference/types/string)
- [`Json::encode_str`](/packages/json/reference/json/Json/encode_str)
