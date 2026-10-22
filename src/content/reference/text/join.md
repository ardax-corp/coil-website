---
slug: "text/join"
title: "join"
description: "Join strings with sep between adjacent parts."
module: "text"
kind: "fn"
name: "join"
signature: "fn join(Vec<string> parts, string sep) -> string ensures parts.len() > 0 || result == \"\" ensures parts.len() != 1 || result == parts[0]"
import: "use text::{join};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/text.hy#L191"
order: 15
---

Join strings with `sep` between adjacent parts.

## Parameters

| Name | Type |
|------|------|
| `parts` | `Vec<string>` |
| `sep` | `string` |

## Returns

`string`

## Contracts

Checked according to `--contracts` (see [Contracts](/docs/language/contracts)).

```coil
ensures parts.len() > 0 || result == ""
ensures parts.len() != 1 || result == parts[0]
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
