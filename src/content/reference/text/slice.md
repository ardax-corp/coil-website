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
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/text.hy#L60"
order: 4
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

- [`byte_len`](/docs/reference/text/byte_len): Returns the length of `s` in bytes; the same as `s.len()`.
- [`trim_start`](/docs/reference/text/trim_start): Returns `s` without leading ASCII whitespace (space, tab, CR, LF).
- [`trim_end`](/docs/reference/text/trim_end): Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).
- [`trim`](/docs/reference/text/trim): Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`rfind`](/docs/reference/text/rfind): Returns the byte offset of the last `needle` in `hay`, or `-1`.
- [`split_at`](/docs/reference/text/split_at): Splits `s` at byte offset `at` into the part before and the part from `at` on.
- [`join`](/docs/reference/text/join): Returns the `parts` concatenated with `sep` between each pair.
- [`repeat`](/docs/reference/text/repeat): Returns `s` repeated `n` times; empty when `n <= 0`.
