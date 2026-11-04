---
slug: "stdlib/text/Pattern/split_of"
package: "stdlib"
title: "Pattern::split_of"
description: "Returns the pieces of hay between the matches of pat, as [Searchable::split] gives them."
module: "text"
kind: "method"
name: "split_of"
parent: "Pattern"
signature: "fn split_of(P pat, string hay) -> Vec<string>"
import: "use text::{Pattern};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/72363df1f418f029700c2e574fbc0479390432f0/src/text.coil#L489"
order: 3
---

Returns the pieces of `hay` between the matches of `pat`, as [[`Searchable::split`](/packages/stdlib/reference/text/Searchable/split)] gives them.

The default goes through [`find_in`](/packages/stdlib/reference/text/Pattern/find_in); an instance overrides it when it
can split faster (a one-byte [`string`](/docs/reference/types/string) scans for that byte).

## Parameters

| Name | Type |
|------|------|
| `pat` | `P` |
| `hay` | `string` |

## Returns

`Vec<string>`

## See also

- [`Searchable::split`](/packages/stdlib/reference/text/Searchable/split)
- [`Pattern::find_in`](/packages/stdlib/reference/text/Pattern/find_in)
- [`string`](/docs/reference/types/string)
- [`Pattern`](/packages/stdlib/reference/text/Pattern): Something a [`Searchable`] value can be searched for: a plain `string` (matched literally), or a type such as coil-regex's `Regex`.
- [`Pattern::is_prefix_of`](/packages/stdlib/reference/text/Pattern/is_prefix_of): Returns `true` when a match starts at the beginning of `hay`.
- [`Pattern::is_suffix_of`](/packages/stdlib/reference/text/Pattern/is_suffix_of): Returns `true` when a match ends at the end of `hay`.
- [`Pattern::expand`](/packages/stdlib/reference/text/Pattern/expand): Returns the replacement text for the match `find_in` just returned.
