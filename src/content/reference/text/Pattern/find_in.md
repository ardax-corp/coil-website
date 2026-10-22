---
slug: "text/Pattern/find_in"
title: "Pattern::find_in"
description: "Returns the span of the leftmost match in hay at or after byte from."
module: "text"
kind: "method"
name: "find_in"
parent: "Pattern"
signature: "fn find_in(P pat, string hay, int from) -> Option<Span>"
import: "use text::{Pattern};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/text.hy#L420"
order: 0
---

Returns the span of the leftmost match in `hay` at or after byte `from`.

## Parameters

| Name | Type |
|------|------|
| `pat` | `P` |
| `hay` | `string` |
| `from` | `int` |

## Returns

`Option<Span>`

## See also

- [`Pattern`](/docs/reference/text/Pattern): Something a [Searchable] value can be searched for: a plain string (matched literally), or a type such as coil-regex's Regex.
- [`Pattern::is_prefix_of`](/docs/reference/text/Pattern/is_prefix_of): Returns true when a match starts at the beginning of hay.
- [`Pattern::is_suffix_of`](/docs/reference/text/Pattern/is_suffix_of): Returns true when a match ends at the end of hay.
- [`Pattern::expand`](/docs/reference/text/Pattern/expand): Returns the replacement text for the match find_in just returned.
