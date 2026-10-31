---
slug: "stdlib/text/Searchable/find"
package: "stdlib"
title: "Searchable::find"
description: "Returns the byte span of the first match of pat, or None."
module: "text"
kind: "method"
name: "find"
parent: "Searchable"
signature: "fn find<P: Pattern>(T hay, P pat) -> Option<Span>"
import: "use text::{Searchable};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/text.hy#L574"
order: 3
---

Returns the byte span of the first match of `pat`, or `None`.

## Parameters

| Name | Type |
|------|------|
| `hay` | `T` |
| `pat` | `P` |

## Returns

`Option<Span>`

## See also

- [`Searchable`](/packages/stdlib/reference/text/Searchable): Pattern search methods (`contains`, `find`, `split`, `replace_all`, …) on any [`Show`] type, which search its display form.
- [`Searchable::contains`](/packages/stdlib/reference/text/Searchable/contains): Returns `true` when `pat` matches anywhere in `hay`.
- [`Searchable::starts_with`](/packages/stdlib/reference/text/Searchable/starts_with): Returns `true` when a match of `pat` starts at the beginning of `hay`.
- [`Searchable::ends_with`](/packages/stdlib/reference/text/Searchable/ends_with): Returns `true` when a match of `pat` ends at the end of `hay`.
- [`Searchable::find_all`](/packages/stdlib/reference/text/Searchable/find_all): Returns the byte spans of every non-overlapping match, left to right.
- [`Searchable::split`](/packages/stdlib/reference/text/Searchable/split): Returns the pieces of `hay` between the matches of `pat`.
- [`Searchable::split_once`](/packages/stdlib/reference/text/Searchable/split_once): Splits `hay` at the first match of `pat` into the parts before and after it.
- [`Searchable::replace_first`](/packages/stdlib/reference/text/Searchable/replace_first): Returns `hay` with its first match of `pat` replaced by `with`.
