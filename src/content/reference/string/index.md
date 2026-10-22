---
slug: "string/index"
title: "string"
description: "format, UTF-8 conversion and byte-offset helpers for string."
module: "string"
kind: "module"
name: "string"
origin: "builtin"
auto: false
order: 7
---

Strings are immutable UTF-8 text. Offsets in this module are byte offsets,
and `s.len()` is the length in bytes. Comparison needs no import: `==` compares
contents and `<` orders by UTF-8 bytes.

[`format`](/docs/reference/string/format) is how you build text from values;
it is checked at compile time. For trimming, splitting, replacing and other
text helpers, see the stdlib [`text`](/docs/reference/text) module.

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use string::{byte_at, find_from};
```

## Functions

| Name | Description |
|------|-------------|
| [`byte_at`](/docs/reference/string/byte_at) | Returns the byte at byte offset `i` of `s`, or `-1` when `i` is out of range. |
| [`find_from`](/docs/reference/string/find_from) | Returns the byte offset of the first `needle` in `hay` at or after `start`, or `-1`. |
| [`format`](/docs/reference/string/format) | Builds a string from the literal `fmt` and the arguments that follow it. |
| [`from_bytes`](/docs/reference/string/from_bytes) | Decodes `bytes` as UTF-8 text. |
| [`match_at`](/docs/reference/string/match_at) | Returns whether `needle` occurs in `s` starting exactly at byte offset `at`. |
| [`rfind`](/docs/reference/string/rfind) | Returns the byte offset of the last `needle` in `hay`, or `-1`. |
| [`slice_bytes`](/docs/reference/string/slice_bytes) | Returns the part of `s` between byte offsets `start` (inclusive) and `end` (exclusive). |
| [`to_bytes`](/docs/reference/string/to_bytes) | Encodes `s` as UTF-8 into a new [`Vec<byte>`](/docs/reference/prelude/Vec). |
