---
slug: "text/Pattern/is_suffix_of"
title: "Pattern::is_suffix_of"
description: "Returns true when a match ends at the end of hay."
module: "text"
kind: "method"
name: "is_suffix_of"
parent: "Pattern"
signature: "fn is_suffix_of(P pat, string hay) -> bool"
import: "use text::{Pattern};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/text.hy#L426"
order: 2
---

Returns `true` when a match ends at the end of `hay`.

## Parameters

| Name | Type |
|------|------|
| `pat` | `P` |
| `hay` | `string` |

## Returns

`bool`

## See also

- [`Pattern`](/docs/reference/text/Pattern): Something a [`Searchable`] value can be searched for: a plain `string` (matched literally), or a type such as coil-regex's `Regex`.
- [`Pattern::find_in`](/docs/reference/text/Pattern/find_in): Returns the span of the leftmost match in `hay` at or after byte `from`.
- [`Pattern::is_prefix_of`](/docs/reference/text/Pattern/is_prefix_of): Returns `true` when a match starts at the beginning of `hay`.
- [`Pattern::expand`](/docs/reference/text/Pattern/expand): Returns the replacement text for the match `find_in` just returned.
