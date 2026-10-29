---
slug: "text/Searchable/replace_all"
title: "Searchable::replace_all"
description: "Returns hay with every non-overlapping match of pat replaced by with."
module: "text"
kind: "method"
name: "replace_all"
parent: "Searchable"
signature: "fn replace_all<P: Pattern>(T hay, P pat, string with) -> string"
import: "use text::{Searchable};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/text.hy#L654"
order: 8
---

Returns `hay` with every non-overlapping match of `pat` replaced by `with`.

A regex pattern expands `$1` / `${name}` in `with`.

## Parameters

| Name | Type |
|------|------|
| `hay` | `T` |
| `pat` | `P` |
| `with` | `string` |

## Returns

`string`

## See also

- [`Searchable`](/docs/reference/text/Searchable): Pattern search methods (`contains`, `find`, `split`, `replace_all`, …) on any [`Show`] type, which search its display form.
- [`Searchable::contains`](/docs/reference/text/Searchable/contains): Returns `true` when `pat` matches anywhere in `hay`.
- [`Searchable::starts_with`](/docs/reference/text/Searchable/starts_with): Returns `true` when a match of `pat` starts at the beginning of `hay`.
- [`Searchable::ends_with`](/docs/reference/text/Searchable/ends_with): Returns `true` when a match of `pat` ends at the end of `hay`.
- [`Searchable::find`](/docs/reference/text/Searchable/find): Returns the byte span of the first match of `pat`, or `None`.
- [`Searchable::find_all`](/docs/reference/text/Searchable/find_all): Returns the byte spans of every non-overlapping match, left to right.
- [`Searchable::split`](/docs/reference/text/Searchable/split): Returns the pieces of `hay` between the matches of `pat`.
- [`Searchable::split_once`](/docs/reference/text/Searchable/split_once): Splits `hay` at the first match of `pat` into the parts before and after it.
