---
slug: "text/Text/to_upper"
title: "Text::to_upper"
description: "Returns s in upper case, for the scripts [Text::to_lower] covers; other characters are unchanged."
module: "text"
kind: "method"
name: "to_upper"
parent: "Text"
signature: "fn to_upper(T s) -> string"
import: "use text::{Text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/text.hy#L721"
order: 4
---

Returns `s` in upper case, for the scripts [[`Text::to_lower`](/docs/reference/text/Text/to_lower)] covers; other characters are unchanged.

`ß` stays `ß` (its upper case is two characters) and final `ς` becomes `Σ`.

## Parameters

| Name | Type |
|------|------|
| `s` | `T` |

## Returns

`string`

## See also

- [`Text::to_lower`](/docs/reference/text/Text/to_lower)
- [`Text`](/docs/reference/text/Text): String methods on `string`: trimming, case mapping, padding, line splitting, repeating and byte slicing.
- [`Text::trim`](/docs/reference/text/Text/trim): Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_start`](/docs/reference/text/Text/trim_start): Returns `s` without leading ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_end`](/docs/reference/text/Text/trim_end): Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::chars`](/docs/reference/text/Text/chars): Returns the characters of `s`, each as its own string.
- [`Text::codepoints`](/docs/reference/text/Text/codepoints): Returns the Unicode code points of `s`.
- [`Text::char_len`](/docs/reference/text/Text/char_len): Returns the number of characters (code points) in `s`; `s.len()` is bytes.
