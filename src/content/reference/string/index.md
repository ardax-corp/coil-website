---
slug: "string/index"
title: "string"
description: "format, UTF-8 conversion and byte-offset helpers for string."
module: "string"
kind: "module"
name: "string"
origin: "builtin"
auto: false
order: 8
---

Strings are immutable UTF-8 text. Offsets in this module are byte offsets,
and `s.len()` is the length in bytes. Comparison needs no import: `==` compares
contents and `<` orders by UTF-8 bytes.

[`format`](/docs/reference/string/format) is how you build text from values;
it is checked at compile time. Read a byte with `s[i]`. For searching,
trimming, splitting, replacing and other text helpers, see the stdlib
[`text`](/docs/reference/text) module, which is plain loops over `s[i]`
that the compiler runs 64 bytes at a time
([Types](/docs/language/types#primitive-types)).

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use string::{format, from_bytes};
```

## Functions

| Name | Description |
|------|-------------|
| [`format`](/docs/reference/string/format) | Builds a string from the literal `fmt` and the arguments that follow it. |
| [`from_bytes`](/docs/reference/string/from_bytes) | Decodes `bytes` as UTF-8 text. |
| [`slice_bytes`](/docs/reference/string/slice_bytes) | Returns the part of `s` between byte offsets `start` (inclusive) and `end` (exclusive). |
| [`to_bytes`](/docs/reference/string/to_bytes) | Encodes `s` as UTF-8 into a new [`Vec<byte>`](/docs/reference/prelude/Vec). |
