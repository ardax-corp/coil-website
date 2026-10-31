---
slug: "stdlib/text/Text/to_upper"
package: "stdlib"
title: "Text::to_upper"
description: "Returns s in upper case, for the scripts [Text::to_lower] covers; other characters are unchanged."
module: "text"
kind: "method"
name: "to_upper"
parent: "Text"
signature: "fn to_upper(T s) -> string"
import: "use text::{Text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/text.hy#L721"
order: 4
---

Returns `s` in upper case, for the scripts [[`Text::to_lower`](/packages/stdlib/reference/text/Text/to_lower)] covers; other characters are unchanged.

`ß` stays `ß` (its upper case is two characters) and final `ς` becomes `Σ`.

## Parameters

| Name | Type |
|------|------|
| `s` | `T` |

## Returns

`string`

## See also

- [`Text::to_lower`](/packages/stdlib/reference/text/Text/to_lower)
- [`Text`](/packages/stdlib/reference/text/Text): String methods on `string`: trimming, case mapping, padding, line splitting, repeating and byte slicing.
- [`Text::trim`](/packages/stdlib/reference/text/Text/trim): Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_start`](/packages/stdlib/reference/text/Text/trim_start): Returns `s` without leading ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_end`](/packages/stdlib/reference/text/Text/trim_end): Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::chars`](/packages/stdlib/reference/text/Text/chars): Returns the characters of `s`, each as its own string.
- [`Text::codepoints`](/packages/stdlib/reference/text/Text/codepoints): Returns the Unicode code points of `s`.
- [`Text::char_len`](/packages/stdlib/reference/text/Text/char_len): Returns the number of characters (code points) in `s`; `s.len()` is bytes.
