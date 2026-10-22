---
slug: "text/eq"
title: "eq"
description: "Returns true when a and b hold the same bytes; the same as a == b."
module: "text"
kind: "fn"
name: "eq"
signature: "fn eq(string a, string b) -> bool"
import: "use text::{eq};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/text.hy#L298"
order: 16
---

Returns `true` when `a` and `b` hold the same bytes; the same as `a == b`.

## Parameters

| Name | Type |
|------|------|
| `a` | `string` |
| `b` | `string` |

## Returns

`bool`

## See also

- [`byte_len`](/docs/reference/text/byte_len): Returns the length of s in bytes; the same as s.len().
- [`slice`](/docs/reference/text/slice): Returns the part of s from byte offset start up to (not including) end.
- [`trim_start`](/docs/reference/text/trim_start): Returns s without leading ASCII whitespace (space, tab, CR, LF).
- [`trim_end`](/docs/reference/text/trim_end): Returns s without trailing ASCII whitespace (space, tab, CR, LF).
- [`trim`](/docs/reference/text/trim): Returns s without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`rfind`](/docs/reference/text/rfind): Returns the byte offset of the last needle in hay, or -1.
- [`split_at`](/docs/reference/text/split_at): Splits s at byte offset at into the part before and the part from at on.
- [`join`](/docs/reference/text/join): Returns the parts concatenated with sep between each pair.
