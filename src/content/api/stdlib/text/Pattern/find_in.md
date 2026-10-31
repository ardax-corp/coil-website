---
slug: "stdlib/text/Pattern/find_in"
package: "stdlib"
title: "Pattern::find_in"
description: "Returns the span of the leftmost match in hay at or after byte from."
module: "text"
kind: "method"
name: "find_in"
parent: "Pattern"
signature: "fn find_in(P pat, string hay, int from) -> Option<Span>"
import: "use text::{Pattern};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/text.hy#L476"
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

- [`Pattern`](/packages/stdlib/reference/text/Pattern): Something a [`Searchable`] value can be searched for: a plain `string` (matched literally), or a type such as coil-regex's `Regex`.
- [`Pattern::is_prefix_of`](/packages/stdlib/reference/text/Pattern/is_prefix_of): Returns `true` when a match starts at the beginning of `hay`.
- [`Pattern::is_suffix_of`](/packages/stdlib/reference/text/Pattern/is_suffix_of): Returns `true` when a match ends at the end of `hay`.
- [`Pattern::expand`](/packages/stdlib/reference/text/Pattern/expand): Returns the replacement text for the match `find_in` just returned.
