---
slug: "string/rfind"
title: "rfind"
description: "Returns the byte offset of the last needle in hay, or -1."
module: "string"
kind: "fn"
name: "rfind"
signature: "fn rfind(string hay, string needle) -> int"
import: "use string::{rfind};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/string.hy#L118"
order: 5
---

Returns the byte offset of the last `needle` in `hay`, or `-1`.

An empty `needle` matches at `hay.len()`.

## Parameters

| Name | Type |
|------|------|
| `hay` | `string` |
| `needle` | `string` |

## Returns

`int`

## Examples

```coil
use string::{rfind};
use tests::assert;
assert!(rfind("a/b/c", "/") == 3);
assert!(rfind("abc", "x") == -1);
assert!(rfind("abc", "") == 3);
```

## See also

- [`byte_at`](/docs/reference/string/byte_at): Returns the byte at byte offset `i` of `s`, or `-1` when `i` is out of range.
- [`find_from`](/docs/reference/string/find_from): Returns the byte offset of the first `needle` in `hay` at or after `start`, or `-1`.
- [`format`](/docs/reference/string/format): Builds a string from the literal `fmt` and the arguments that follow it.
- [`from_bytes`](/docs/reference/string/from_bytes): Decodes `bytes` as UTF-8 text.
- [`match_at`](/docs/reference/string/match_at): Returns whether `needle` occurs in `s` starting exactly at byte offset `at`.
- [`slice_bytes`](/docs/reference/string/slice_bytes): Returns the part of `s` between byte offsets `start` (inclusive) and `end` (exclusive).
- [`to_bytes`](/docs/reference/string/to_bytes): Encodes `s` as UTF-8 into a new `Vec<byte>`.
