---
slug: "text/slice"
title: "slice"
description: "Returns the part of s from byte offset start up to (not including) end."
module: "text"
kind: "fn"
name: "slice"
signature: "fn slice(string s, int start, int end) -> Result<string, string>"
import: "use text::{slice};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/de7dc3b341ae9bbbcdd775a2dfa282870f0cbf82/src/text.hy#L60"
order: 1
---

Returns the part of `s` from byte offset `start` up to (not including) `end`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `start` | `int` |
| `end` | `int` |

## Returns

`Result<string, string>`

## Errors

Returns `Err("utf8")` when an offset falls inside a multi-byte character.

## Examples

```coil
use text::{slice};
use tests::assert;
assert!((slice("hello", 1, 4) ?? "") == "ell");
```

## See also

- [`byte_len`](/docs/reference/text/byte_len): Returns the length of s in bytes; the same as s.len().
- [`trim_start`](/docs/reference/text/trim_start): Returns s without leading ASCII whitespace (space, tab, CR, LF).
- [`trim_end`](/docs/reference/text/trim_end): Returns s without trailing ASCII whitespace (space, tab, CR, LF).
- [`trim`](/docs/reference/text/trim): Returns s without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`contains`](/docs/reference/text/contains): Returns true when needle occurs in hay.
- [`starts_with`](/docs/reference/text/starts_with): Returns true when s begins with prefix.
- [`ends_with`](/docs/reference/text/ends_with): Returns true when s ends with suffix.
- [`find`](/docs/reference/text/find): Returns the byte offset of the first needle in hay, or -1.
