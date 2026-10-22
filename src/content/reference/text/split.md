---
slug: "text/split"
title: "split"
description: "Split s on every occurrence of sep (byte-exact). Empty sep → [s]."
module: "text"
kind: "fn"
name: "split"
signature: "fn split(string s, string sep) -> Result<Vec<string>, string>"
import: "use text::{split};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/text.hy#L142"
order: 12
---

Split `s` on every occurrence of `sep` (byte-exact). Empty sep → `[s]`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `sep` | `string` |

## Returns

`Result<Vec<string>, string>`

## See also

- [`ok_len`](/docs/reference/text/ok_len): Length of an Ok string, -1 for an Err (for contracts).
- [`byte_len`](/docs/reference/text/byte_len): Byte length of UTF-8 s (same as to_bytes(s).len()).
- [`slice`](/docs/reference/text/slice): Slice by byte offsets; returns Err if the slice is not valid UTF-8.
- [`trim_start`](/docs/reference/text/trim_start): Trim ASCII whitespace from the start.
- [`trim_end`](/docs/reference/text/trim_end): Trim ASCII whitespace from the end.
- [`trim`](/docs/reference/text/trim): Trim ASCII whitespace (space/tab/CR/LF) from both ends.
- [`contains`](/docs/reference/text/contains): True when hay contains needle as a byte-exact substring.
- [`starts_with`](/docs/reference/text/starts_with): True when s begins with prefix (byte identity).
