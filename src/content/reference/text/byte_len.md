---
slug: "text/byte_len"
title: "byte_len"
description: "Byte length of UTF-8 s (same as to_bytes(s).len())."
module: "text"
kind: "fn"
name: "byte_len"
signature: "fn byte_len(string s) -> int"
import: "use text::{byte_len};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/text.hy#L43"
order: 1
---

Byte length of UTF-8 `s` (same as `to_bytes(s).len()`).

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`int`

## See also

- [`ok_len`](/docs/reference/text/ok_len): Length of an Ok string, -1 for an Err (for contracts).
- [`slice`](/docs/reference/text/slice): Slice by byte offsets; returns Err if the slice is not valid UTF-8.
- [`trim_start`](/docs/reference/text/trim_start): Trim ASCII whitespace from the start.
- [`trim_end`](/docs/reference/text/trim_end): Trim ASCII whitespace from the end.
- [`trim`](/docs/reference/text/trim): Trim ASCII whitespace (space/tab/CR/LF) from both ends.
- [`contains`](/docs/reference/text/contains): True when hay contains needle as a byte-exact substring.
- [`starts_with`](/docs/reference/text/starts_with): True when s begins with prefix (byte identity).
- [`ends_with`](/docs/reference/text/ends_with): True when s ends with suffix (byte identity).
