---
slug: "text/Searchable/find_all"
title: "Searchable::find_all"
description: "Returns the byte spans of every non-overlapping match, left to right."
module: "text"
kind: "method"
name: "find_all"
parent: "Searchable"
signature: "fn find_all<P: Pattern>(T hay, P pat) -> Vec<Span>"
import: "use text::{Searchable};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/text.hy#L552"
order: 4
---

Returns the byte spans of every non-overlapping match, left to right.

## Parameters

| Name | Type |
|------|------|
| `hay` | `T` |
| `pat` | `P` |

## Returns

`Vec<Span>`

## See also

- [`Searchable`](/docs/reference/text/Searchable): Pattern search methods (`contains`, `find`, `split`, `replace_all`, …) on any [`Show`] type, which search its display form.
- [`Searchable::contains`](/docs/reference/text/Searchable/contains): Returns `true` when `pat` matches anywhere in `hay`.
- [`Searchable::starts_with`](/docs/reference/text/Searchable/starts_with): Returns `true` when a match of `pat` starts at the beginning of `hay`.
- [`Searchable::ends_with`](/docs/reference/text/Searchable/ends_with): Returns `true` when a match of `pat` ends at the end of `hay`.
- [`Searchable::find`](/docs/reference/text/Searchable/find): Returns the byte span of the first match of `pat`, or `None`.
- [`Searchable::split`](/docs/reference/text/Searchable/split): Returns the pieces of `hay` between the matches of `pat`.
- [`Searchable::split_once`](/docs/reference/text/Searchable/split_once): Splits `hay` at the first match of `pat` into the parts before and after it.
- [`Searchable::replace_first`](/docs/reference/text/Searchable/replace_first): Returns `hay` with its first match of `pat` replaced by `with`.
