---
slug: "string/match_at"
title: "match_at"
description: "Returns whether needle occurs in s starting exactly at byte offset at."
module: "string"
kind: "fn"
name: "match_at"
signature: "fn match_at(string s, string needle, int at) -> bool"
import: "use string::{match_at};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/string.hy#L103"
order: 4
---

Returns whether `needle` occurs in `s` starting exactly at byte offset `at`.

`false` when `at` is negative or the match would run past the end.
An empty `needle` matches at any offset in `0..=s.len()`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `needle` | `string` |
| `at` | `int` |

## Returns

`bool`

## Examples

```coil
use string::{match_at};
use tests::assert;
assert!(match_at("key=value", "=", 3));
assert!(!match_at("key=value", "=", 2));
assert!(!match_at("ab", "abc", 0));
```

## See also

- [`byte_at`](/docs/reference/string/byte_at): Returns the byte at byte offset i of s, or -1 when i is out of range.
- [`find_from`](/docs/reference/string/find_from): Returns the byte offset of the first needle in hay at or after start, or -1.
- [`format`](/docs/reference/string/format): Builds a string from the literal fmt and the arguments that follow it.
- [`from_bytes`](/docs/reference/string/from_bytes): Decodes bytes as UTF-8 text.
- [`rfind`](/docs/reference/string/rfind): Returns the byte offset of the last needle in hay, or -1.
- [`slice_bytes`](/docs/reference/string/slice_bytes): Returns the part of s between byte offsets start (inclusive) and end (exclusive).
- [`to_bytes`](/docs/reference/string/to_bytes): Encodes s as UTF-8 into a new Vec<byte>.
