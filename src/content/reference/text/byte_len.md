---
slug: "text/byte_len"
title: "byte_len"
description: "Returns the length of s in bytes; the same as s.len()."
module: "text"
kind: "fn"
name: "byte_len"
signature: "fn byte_len(string s) -> int"
import: "use text::{byte_len};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/text.hy#L43"
order: 0
---

Returns the length of `s` in bytes; the same as `s.len()`.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`int`

## See also

- [`slice`](/docs/reference/text/slice): Returns the part of s from byte offset start up to (not including) end.
- [`trim_start`](/docs/reference/text/trim_start): Returns s without leading ASCII whitespace (space, tab, CR, LF).
- [`trim_end`](/docs/reference/text/trim_end): Returns s without trailing ASCII whitespace (space, tab, CR, LF).
- [`trim`](/docs/reference/text/trim): Returns s without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`contains`](/docs/reference/text/contains): Returns true when needle occurs in hay.
- [`starts_with`](/docs/reference/text/starts_with): Returns true when s begins with prefix.
- [`ends_with`](/docs/reference/text/ends_with): Returns true when s ends with suffix.
- [`find`](/docs/reference/text/find): Returns the byte offset of the first needle in hay, or -1.
