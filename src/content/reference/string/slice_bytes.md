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
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/builtin_docs/string.hy#L85"
order: 2
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

- [`format`](/docs/reference/string/format): Builds a string from the literal `fmt` and the arguments that follow it.
- [`from_bytes`](/docs/reference/string/from_bytes): Decodes `bytes` as UTF-8 text.
- [`to_bytes`](/docs/reference/string/to_bytes): Encodes `s` as UTF-8 into a new `Vec<byte>`.
