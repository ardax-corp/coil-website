---
slug: "text/replace"
title: "replace"
description: "Returns s with every non-overlapping old replaced by new, scanning left to right."
module: "text"
kind: "fn"
name: "replace"
signature: "fn replace(string s, string old, string new) -> Result<string, string>"
import: "use text::{replace};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/text.hy#L303"
order: 13
---

Returns `s` with every non-overlapping `old` replaced by `new`, scanning left to right.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `old` | `string` |
| `new` | `string` |

## Returns

`Result<string, string>`

## Examples

```coil
use text::{replace};
use tests::assert;
assert!((replace("a-b-c", "-", ", ") ?? "") == "a, b, c");
```

## See also

- [`byte_len`](/docs/reference/text/byte_len): Returns the length of s in bytes; the same as s.len().
- [`slice`](/docs/reference/text/slice): Returns the part of s from byte offset start up to (not including) end.
- [`trim_start`](/docs/reference/text/trim_start): Returns s without leading ASCII whitespace (space, tab, CR, LF).
- [`trim_end`](/docs/reference/text/trim_end): Returns s without trailing ASCII whitespace (space, tab, CR, LF).
- [`trim`](/docs/reference/text/trim): Returns s without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`contains`](/docs/reference/text/contains): Returns true when needle occurs in hay.
- [`starts_with`](/docs/reference/text/starts_with): Returns true when s begins with prefix.
- [`ends_with`](/docs/reference/text/ends_with): Returns true when s ends with suffix.
