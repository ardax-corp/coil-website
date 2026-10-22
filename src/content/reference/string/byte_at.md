---
slug: "string/byte_at"
title: "byte_at"
description: "Returns the byte at byte offset i of s, or -1 when i is out of range."
module: "string"
kind: "fn"
name: "byte_at"
signature: "fn byte_at(string s, int i) -> int"
import: "use string::{byte_at};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/string.hy#L17"
order: 0
---

Returns the byte at byte offset `i` of `s`, or `-1` when `i` is out of range.

Offsets count UTF-8 bytes, not characters, and `s.len()` is the byte
length. The result is `0..=255` for any offset in `0..s.len()`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `i` | `int` |

## Returns

`int`

## Examples

```coil
use string::{byte_at};
use tests::assert;
assert!(byte_at("abc", 0) == 97);
assert!(byte_at("abc", 3) == -1);
assert!(byte_at("abc", -1) == -1);
```

## See also

- [`find_from`](/docs/reference/string/find_from): Returns the byte offset of the first needle in hay at or after start, or -1.
- [`format`](/docs/reference/string/format): Builds a string from the literal fmt and the arguments that follow it.
- [`from_bytes`](/docs/reference/string/from_bytes): Decodes bytes as UTF-8 text.
- [`match_at`](/docs/reference/string/match_at): Returns whether needle occurs in s starting exactly at byte offset at.
- [`rfind`](/docs/reference/string/rfind): Returns the byte offset of the last needle in hay, or -1.
- [`slice_bytes`](/docs/reference/string/slice_bytes): Returns the part of s between byte offsets start (inclusive) and end (exclusive).
- [`to_bytes`](/docs/reference/string/to_bytes): Encodes s as UTF-8 into a new Vec<byte>.
