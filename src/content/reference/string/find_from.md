---
slug: "string/find_from"
title: "find_from"
description: "Returns the byte offset of the first needle in hay at or after start, or -1."
module: "string"
kind: "fn"
name: "find_from"
signature: "fn find_from(string hay, string needle, int start) -> int"
import: "use string::{find_from};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/string.hy#L34"
order: 1
---

Returns the byte offset of the first `needle` in `hay` at or after `start`, or `-1`.

`start` is clamped to `0..=hay.len()`. An empty `needle` matches at the
clamped `start`. Offsets are byte offsets.

## Parameters

| Name | Type |
|------|------|
| `hay` | `string` |
| `needle` | `string` |
| `start` | `int` |

## Returns

`int`

## Examples

```coil
use string::{find_from};
use tests::assert;
assert!(find_from("a-b-c", "-", 0) == 1);
assert!(find_from("a-b-c", "-", 2) == 3);
assert!(find_from("a-b-c", "x", 0) == -1);
assert!(find_from("abc", "", 10) == 3);
```

## See also

- [`byte_at`](/docs/reference/string/byte_at): Returns the byte at byte offset i of s, or -1 when i is out of range.
- [`format`](/docs/reference/string/format): Builds a string from the literal fmt and the arguments that follow it.
- [`from_bytes`](/docs/reference/string/from_bytes): Decodes bytes as UTF-8 text.
- [`match_at`](/docs/reference/string/match_at): Returns whether needle occurs in s starting exactly at byte offset at.
- [`rfind`](/docs/reference/string/rfind): Returns the byte offset of the last needle in hay, or -1.
- [`slice_bytes`](/docs/reference/string/slice_bytes): Returns the part of s between byte offsets start (inclusive) and end (exclusive).
- [`to_bytes`](/docs/reference/string/to_bytes): Encodes s as UTF-8 into a new Vec<byte>.
