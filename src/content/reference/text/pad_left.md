---
slug: "text/pad_left"
title: "pad_left"
description: "Pad on the left to a byte width using a one-byte fill string."
module: "text"
kind: "fn"
name: "pad_left"
signature: "fn pad_left(string s, int width, string fill) -> Result<string, string> ensures fill.len() != 1 || ok_len(result) == max_int(width, s.len()) ensures fill.len() == 1 || ok_len(result) == -1"
import: "use text::{pad_left};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/text.hy#L222"
order: 17
---

Pad on the left to a byte width using a one-byte `fill` string.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `width` | `int` |
| `fill` | `string` |

## Returns

`Result<string, string>`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures fill.len() != 1 || ok_len(result) == max_int(width, s.len())
ensures fill.len() == 1 || ok_len(result) == -1
```

## See also

- [`ok_len`](/docs/reference/text/ok_len): Length of an Ok string, -1 for an Err (for contracts).
- [`byte_len`](/docs/reference/text/byte_len): Byte length of UTF-8 s (same as to_bytes(s).len()).
- [`slice`](/docs/reference/text/slice): Slice by byte offsets; returns Err if the slice is not valid UTF-8.
- [`trim_start`](/docs/reference/text/trim_start): Trim ASCII whitespace from the start.
- [`trim_end`](/docs/reference/text/trim_end): Trim ASCII whitespace from the end.
- [`trim`](/docs/reference/text/trim): Trim ASCII whitespace (space/tab/CR/LF) from both ends.
- [`contains`](/docs/reference/text/contains): True when hay contains needle as a byte-exact substring.
- [`starts_with`](/docs/reference/text/starts_with): True when s begins with prefix (byte identity).
