---
slug: "stdlib/text/Text/rfind"
package: "stdlib"
title: "Text::rfind"
description: "Returns the byte span of the last needle in s, or None."
module: "text"
kind: "method"
name: "rfind"
parent: "Text"
signature: "fn rfind(T s, string needle) -> Option<Span>"
import: "use text::{Text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/text.hy#L777"
order: 15
---

Returns the byte span of the last `needle` in `s`, or `None`.

An empty `needle` matches at the end. The search runs backwards, so
unlike [[`Searchable::find`](/packages/stdlib/reference/text/Searchable/find)] it takes a plain [`string`](/docs/reference/types/string), not a [[`Pattern`](/packages/stdlib/reference/text/Pattern)].

## Parameters

| Name | Type |
|------|------|
| `s` | `T` |
| `needle` | `string` |

## Returns

`Option<Span>`

## See also

- [`Searchable::find`](/packages/stdlib/reference/text/Searchable/find)
- [`string`](/docs/reference/types/string)
- [`text::Pattern`](/packages/stdlib/reference/text/Pattern)
- [`Text`](/packages/stdlib/reference/text/Text): String methods on `string`: trimming, case mapping, padding, line splitting, repeating and byte slicing.
- [`Text::trim`](/packages/stdlib/reference/text/Text/trim): Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_start`](/packages/stdlib/reference/text/Text/trim_start): Returns `s` without leading ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_end`](/packages/stdlib/reference/text/Text/trim_end): Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::to_lower`](/packages/stdlib/reference/text/Text/to_lower): Returns `s` in lower case: ASCII, Latin (Latin-1, Extended-A and Additional), Greek, Cyrillic and Armenian letters; other characters are unchanged.
