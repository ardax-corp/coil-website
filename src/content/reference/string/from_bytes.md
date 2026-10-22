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
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/string.hy#L87"
order: 3
---

Decodes [`bytes`](/docs/reference/bytes) as UTF-8 text.

Returns `Err(IoError::InvalidInput)` when [`bytes`](/docs/reference/bytes) is not valid UTF-8.
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

- [`bytes`](/docs/reference/bytes)
- [`string::to_bytes`](/docs/reference/string/to_bytes)
- [`byte_at`](/docs/reference/string/byte_at): Returns the byte at byte offset i of s, or -1 when i is out of range.
- [`find_from`](/docs/reference/string/find_from): Returns the byte offset of the first needle in hay at or after start, or -1.
- [`format`](/docs/reference/string/format): Builds a string from the literal fmt and the arguments that follow it.
- [`match_at`](/docs/reference/string/match_at): Returns whether needle occurs in s starting exactly at byte offset at.
- [`rfind`](/docs/reference/string/rfind): Returns the byte offset of the last needle in hay, or -1.
- [`slice_bytes`](/docs/reference/string/slice_bytes): Returns the part of s between byte offsets start (inclusive) and end (exclusive).
