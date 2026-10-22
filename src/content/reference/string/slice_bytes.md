---
slug: "string/slice_bytes"
title: "slice_bytes"
description: "Returns the part of s between byte offsets start (inclusive) and end (exclusive)."
module: "string"
kind: "fn"
name: "slice_bytes"
signature: "fn slice_bytes(string s, int start, int end) -> Result<string, IoError>"
import: "use string::{slice_bytes};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/string.hy#L149"
order: 6
---

Returns the part of `s` between byte offsets `start` (inclusive) and `end` (exclusive).

Offsets are clamped to `0..=s.len()`, and `end` to at least `start`, so
out-of-range offsets give a shorter (possibly empty) string rather than
an error. Returns `Err(IoError::InvalidInput)` when an offset falls
inside a multi-byte UTF-8 character.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `start` | `int` |
| `end` | `int` |

## Returns

`Result<string, IoError>`

## Examples

```coil
use io::{IoError};
use string::{slice_bytes};
use tests::assert;
let mid = match slice_bytes("hello", 1, 4) {
    Result::Ok(s) => s,
    Result::Err(_) => "",
};
assert!(mid == "ell");
let clamped = match slice_bytes("hello", 3, 100) {
    Result::Ok(s) => s,
    Result::Err(_) => "",
};
assert!(clamped == "lo");
let split_char = match slice_bytes("é", 0, 1) {
    Result::Err(IoError::InvalidInput) => true,
    default => false,
};
assert!(split_char);
```

## See also

- [`byte_at`](/docs/reference/string/byte_at): Returns the byte at byte offset i of s, or -1 when i is out of range.
- [`find_from`](/docs/reference/string/find_from): Returns the byte offset of the first needle in hay at or after start, or -1.
- [`format`](/docs/reference/string/format): Builds a string from the literal fmt and the arguments that follow it.
- [`from_bytes`](/docs/reference/string/from_bytes): Decodes bytes as UTF-8 text.
- [`match_at`](/docs/reference/string/match_at): Returns whether needle occurs in s starting exactly at byte offset at.
- [`rfind`](/docs/reference/string/rfind): Returns the byte offset of the last needle in hay, or -1.
- [`to_bytes`](/docs/reference/string/to_bytes): Encodes s as UTF-8 into a new Vec<byte>.
