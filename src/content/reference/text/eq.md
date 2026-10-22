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
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/text.hy#L446"
order: 20
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
- [`contains`](/docs/reference/text/contains): Returns true when needle occurs in hay.
- [`starts_with`](/docs/reference/text/starts_with): Returns true when s begins with prefix.
- [`ends_with`](/docs/reference/text/ends_with): Returns true when s ends with suffix.
