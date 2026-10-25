---
slug: "string/from_bytes"
title: "from_bytes"
description: "Decodes bytes as UTF-8 text."
module: "string"
kind: "fn"
name: "from_bytes"
signature: "fn from_bytes(Vec<byte> bytes) -> Result<string, IoError>"
import: "use string::{from_bytes};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/string.hy#L54"
order: 1
---

Decodes `bytes` as UTF-8 text.

Returns `Err(IoError::InvalidInput)` when `bytes` is not valid UTF-8.
The inverse of [`to_bytes`](/docs/reference/string/to_bytes).

## Parameters

| Name | Type |
|------|------|
| `bytes` | `Vec<byte>` |

## Returns

`Result<string, IoError>`

## Examples

```coil
use io::{IoError};
use string::{from_bytes};
use tests::assert;
let text = match from_bytes(Vec::from([111 as byte, 107 as byte])) {
    Result::Ok(s) => s,
    Result::Err(_) => "",
};
assert!(text == "ok");
let bad = match from_bytes(Vec::from([255 as byte])) {
    Result::Err(IoError::InvalidInput) => true,
    default => false,
};
assert!(bad);
```

## See also

- [`string::to_bytes`](/docs/reference/string/to_bytes)
- [`format`](/docs/reference/string/format): Builds a string from the literal `fmt` and the arguments that follow it.
- [`slice_bytes`](/docs/reference/string/slice_bytes): Returns the part of `s` between byte offsets `start` (inclusive) and `end` (exclusive).
