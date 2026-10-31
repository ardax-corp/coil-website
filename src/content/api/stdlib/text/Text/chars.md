---
slug: "stdlib/text/Text/chars"
package: "stdlib"
title: "Text::chars"
description: "Returns the characters of s, each as its own string."
module: "text"
kind: "method"
name: "chars"
parent: "Text"
signature: "fn chars(T s) -> Vec<string>"
import: "use text::{Text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/text.hy#L727"
order: 5
---

Returns the characters of `s`, each as its own string.

`s[i]` and `s.len()` count bytes; this counts characters (code points),
so `"héllo".chars()` has five items.

## Parameters

| Name | Type |
|------|------|
| `s` | `T` |

## Returns

`Vec<string>`

## See also

- [`Text`](/packages/stdlib/reference/text/Text): String methods on `string`: trimming, case mapping, padding, line splitting, repeating and byte slicing.
- [`Text::trim`](/packages/stdlib/reference/text/Text/trim): Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_start`](/packages/stdlib/reference/text/Text/trim_start): Returns `s` without leading ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_end`](/packages/stdlib/reference/text/Text/trim_end): Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::to_lower`](/packages/stdlib/reference/text/Text/to_lower): Returns `s` in lower case: ASCII, Latin (Latin-1, Extended-A and Additional), Greek, Cyrillic and Armenian letters; other characters are unchanged.
- [`Text::to_upper`](/packages/stdlib/reference/text/Text/to_upper): Returns `s` in upper case, for the scripts [`Text::to_lower`] covers; other characters are unchanged.
- [`Text::codepoints`](/packages/stdlib/reference/text/Text/codepoints): Returns the Unicode code points of `s`.
- [`Text::char_len`](/packages/stdlib/reference/text/Text/char_len): Returns the number of characters (code points) in `s`; `s.len()` is bytes.
