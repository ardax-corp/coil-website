---
slug: "text/Searchable/ends_with"
title: "Searchable::ends_with"
description: "Returns true when a match of pat ends at the end of hay."
module: "text"
kind: "method"
name: "ends_with"
parent: "Searchable"
signature: "fn ends_with<P: Pattern>(T hay, P pat) -> bool"
import: "use text::{Searchable};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/6386d3482335236362f6c39ca75d10e20186dfa8/src/text.hy#L513"
order: 2
---

Returns `true` when a match of `pat` ends at the end of `hay`.

## Parameters

| Name | Type |
|------|------|
| `hay` | `T` |
| `pat` | `P` |

## Returns

`bool`

## See also

- [`Searchable`](/docs/reference/text/Searchable): Pattern search methods (`contains`, `find`, `split`, `replace_all`, …) on any [`Show`] type, which search its display form.
- [`Searchable::contains`](/docs/reference/text/Searchable/contains): Returns `true` when `pat` matches anywhere in `hay`.
- [`Searchable::starts_with`](/docs/reference/text/Searchable/starts_with): Returns `true` when a match of `pat` starts at the beginning of `hay`.
- [`Searchable::find`](/docs/reference/text/Searchable/find): Returns the byte span of the first match of `pat`, or `None`.
- [`Searchable::find_all`](/docs/reference/text/Searchable/find_all): Returns the byte spans of every non-overlapping match, left to right.
- [`Searchable::split`](/docs/reference/text/Searchable/split): Returns the pieces of `hay` between the matches of `pat`.
- [`Searchable::split_once`](/docs/reference/text/Searchable/split_once): Splits `hay` at the first match of `pat` into the parts before and after it.
- [`Searchable::replace_first`](/docs/reference/text/Searchable/replace_first): Returns `hay` with its first match of `pat` replaced by `with`.
