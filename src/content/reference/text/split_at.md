---
slug: "text/split_at"
title: "split_at"
description: "Splits s at byte offset at into the part before and the part from at on."
module: "text"
kind: "fn"
name: "split_at"
signature: "fn split_at(string s, int at) -> Result<(string, string), string>"
import: "use text::{split_at};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/b5b5517a66f16a51245becefecbc896a1a674022/src/text.hy#L223"
order: 10
---

Splits `s` at byte offset `at` into the part before and the part from `at` on.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |
| `at` | `int` |

## Returns

`Result<(string, string), string>`

## Errors

Returns `Err("utf8")` when `at` falls inside a multi-byte character.

## Examples

```coil
use text::{split_at};
use tests::assert;
let (a, b) = split_at("hello", 2) ?? ("", "");
assert!(a == "he" && b == "llo");
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
