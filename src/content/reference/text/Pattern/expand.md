---
slug: "text/Pattern/expand"
title: "Pattern::expand"
description: "Returns the replacement text for the match find_in just returned."
module: "text"
kind: "method"
name: "expand"
parent: "Pattern"
signature: "fn expand(P pat, string template) -> string"
import: "use text::{Pattern};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/text.hy#L497"
order: 3
---

Returns the replacement text for the match [`find_in`](/docs/reference/text/Pattern/find_in) just returned.

The default is `template` itself. A regex substitutes its captures
(`$1`, `${name}`).

## Parameters

| Name | Type |
|------|------|
| `pat` | `P` |
| `template` | `string` |

## Returns

`string`

## See also

- [`Pattern::find_in`](/docs/reference/text/Pattern/find_in)
- [`Pattern`](/docs/reference/text/Pattern): Something a [`Searchable`] value can be searched for: a plain `string` (matched literally), or a type such as coil-regex's `Regex`.
- [`Pattern::is_prefix_of`](/docs/reference/text/Pattern/is_prefix_of): Returns `true` when a match starts at the beginning of `hay`.
- [`Pattern::is_suffix_of`](/docs/reference/text/Pattern/is_suffix_of): Returns `true` when a match ends at the end of `hay`.
