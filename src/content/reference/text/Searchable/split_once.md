---
slug: "text/Searchable/split_once"
title: "Searchable::split_once"
description: "Splits hay at the first match of pat into the parts before and after it."
module: "text"
kind: "method"
name: "split_once"
parent: "Searchable"
signature: "fn split_once<P: Pattern>(T hay, P pat) -> Option<(string, string)>"
import: "use text::{Searchable};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/534e3d9afcabefedc5f1aaeedc5f294cae0a64d6/src/text.hy#L599"
order: 6
---

Splits `hay` at the first match of `pat` into the parts before and after it.

## Parameters

| Name | Type |
|------|------|
| `hay` | `T` |
| `pat` | `P` |

## Returns

`Option<(string, string)>`

## See also

- [`Searchable`](/docs/reference/text/Searchable): Pattern search methods (`contains`, `find`, `split`, `replace_all`, …) on any [`Show`] type, which search its display form.
- [`Searchable::contains`](/docs/reference/text/Searchable/contains): Returns `true` when `pat` matches anywhere in `hay`.
- [`Searchable::starts_with`](/docs/reference/text/Searchable/starts_with): Returns `true` when a match of `pat` starts at the beginning of `hay`.
- [`Searchable::ends_with`](/docs/reference/text/Searchable/ends_with): Returns `true` when a match of `pat` ends at the end of `hay`.
- [`Searchable::find`](/docs/reference/text/Searchable/find): Returns the byte span of the first match of `pat`, or `None`.
- [`Searchable::find_all`](/docs/reference/text/Searchable/find_all): Returns the byte spans of every non-overlapping match, left to right.
- [`Searchable::split`](/docs/reference/text/Searchable/split): Returns the pieces of `hay` between the matches of `pat`.
- [`Searchable::replace_first`](/docs/reference/text/Searchable/replace_first): Returns `hay` with its first match of `pat` replaced by `with`.
