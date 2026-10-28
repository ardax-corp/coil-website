---
slug: "text/Searchable/find"
title: "Searchable::find"
description: "Returns the byte span of the first match of pat, or None."
module: "text"
kind: "method"
name: "find"
parent: "Searchable"
signature: "fn find<P: Pattern>(T hay, P pat) -> Option<Span>"
import: "use text::{Searchable};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/text.hy#L574"
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

- [`Searchable`](/docs/reference/text/Searchable): Pattern search methods (`contains`, `find`, `split`, `replace_all`, …) on any [`Show`] type, which search its display form.
- [`Searchable::contains`](/docs/reference/text/Searchable/contains): Returns `true` when `pat` matches anywhere in `hay`.
- [`Searchable::starts_with`](/docs/reference/text/Searchable/starts_with): Returns `true` when a match of `pat` starts at the beginning of `hay`.
- [`Searchable::ends_with`](/docs/reference/text/Searchable/ends_with): Returns `true` when a match of `pat` ends at the end of `hay`.
- [`Searchable::find_all`](/docs/reference/text/Searchable/find_all): Returns the byte spans of every non-overlapping match, left to right.
- [`Searchable::split`](/docs/reference/text/Searchable/split): Returns the pieces of `hay` between the matches of `pat`.
- [`Searchable::split_once`](/docs/reference/text/Searchable/split_once): Splits `hay` at the first match of `pat` into the parts before and after it.
- [`Searchable::replace_first`](/docs/reference/text/Searchable/replace_first): Returns `hay` with its first match of `pat` replaced by `with`.
