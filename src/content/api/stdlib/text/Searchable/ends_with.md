---
slug: "stdlib/text/Searchable/ends_with"
package: "stdlib"
title: "Searchable::ends_with"
description: "Returns true when a match of pat ends at the end of hay."
module: "text"
kind: "method"
name: "ends_with"
parent: "Searchable"
signature: "fn ends_with<P: Pattern>(T hay, P pat) -> bool"
import: "use text::{Searchable};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/text.coil#L569"
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

- [`Searchable`](/packages/stdlib/reference/text/Searchable): Pattern search methods (`contains`, `find`, `split`, `replace_all`, …) on any [`Show`] type, which search its display form.
- [`Searchable::contains`](/packages/stdlib/reference/text/Searchable/contains): Returns `true` when `pat` matches anywhere in `hay`.
- [`Searchable::starts_with`](/packages/stdlib/reference/text/Searchable/starts_with): Returns `true` when a match of `pat` starts at the beginning of `hay`.
- [`Searchable::find`](/packages/stdlib/reference/text/Searchable/find): Returns the byte span of the first match of `pat`, or `None`.
- [`Searchable::find_all`](/packages/stdlib/reference/text/Searchable/find_all): Returns the byte spans of every non-overlapping match, left to right.
- [`Searchable::split`](/packages/stdlib/reference/text/Searchable/split): Returns the pieces of `hay` between the matches of `pat`.
- [`Searchable::split_once`](/packages/stdlib/reference/text/Searchable/split_once): Splits `hay` at the first match of `pat` into the parts before and after it.
- [`Searchable::replace_first`](/packages/stdlib/reference/text/Searchable/replace_first): Returns `hay` with its first match of `pat` replaced by `with`.
