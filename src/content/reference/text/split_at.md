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
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/text.hy#L159"
order: 9
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

- [`byte_len`](/docs/reference/text/byte_len): Returns the length of `s` in bytes; the same as `s.len()`.
- [`slice`](/docs/reference/text/slice): Returns the part of `s` from byte offset `start` up to (not including) `end`.
- [`trim_start`](/docs/reference/text/trim_start): Returns `s` without leading ASCII whitespace (space, tab, CR, LF).
- [`trim_end`](/docs/reference/text/trim_end): Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).
- [`trim`](/docs/reference/text/trim): Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`rfind`](/docs/reference/text/rfind): Returns the byte offset of the last `needle` in `hay`, or `-1`.
- [`join`](/docs/reference/text/join): Returns the `parts` concatenated with `sep` between each pair.
- [`repeat`](/docs/reference/text/repeat): Returns `s` repeated `n` times; empty when `n <= 0`.
