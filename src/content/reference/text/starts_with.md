---
slug: "text/starts_with"
title: "starts_with"
description: "True when s begins with prefix (byte identity)."
module: "text"
kind: "fn"
name: "starts_with"
signature: "fn starts_with(string s, string prefix) -> bool ensures !result || prefix.len() <= s.len()"
import: "use text::{starts_with};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/text.hy#L98"
order: 7
---

True when `s` begins with `prefix` (byte identity).

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `prefix` | `string` |

## Returns

`bool`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures !result || prefix.len() <= s.len()
```

## See also

- [`ok_len`](/docs/reference/text/ok_len): Length of an Ok string, -1 for an Err (for contracts).
- [`byte_len`](/docs/reference/text/byte_len): Byte length of UTF-8 s (same as to_bytes(s).len()).
- [`slice`](/docs/reference/text/slice): Slice by byte offsets; returns Err if the slice is not valid UTF-8.
- [`trim_start`](/docs/reference/text/trim_start): Trim ASCII whitespace from the start.
- [`trim_end`](/docs/reference/text/trim_end): Trim ASCII whitespace from the end.
- [`trim`](/docs/reference/text/trim): Trim ASCII whitespace (space/tab/CR/LF) from both ends.
- [`contains`](/docs/reference/text/contains): True when hay contains needle as a byte-exact substring.
- [`ends_with`](/docs/reference/text/ends_with): True when s ends with suffix (byte identity).
