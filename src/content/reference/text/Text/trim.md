---
slug: "text/Text/trim"
title: "Text::trim"
description: "Returns s without leading and trailing ASCII whitespace (space, tab, CR, LF)."
module: "text"
kind: "method"
name: "trim"
parent: "Text"
signature: "fn trim(T s) -> string"
import: "use text::{Text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/text.hy#L700"
order: 0
---

Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).

Other Unicode whitespace is kept.

## Parameters

| Name | Type |
|------|------|
| `s` | `T` |

## Returns

`string`

## See also

- [`Text`](/docs/reference/text/Text): String methods on `string`: trimming, case mapping, padding, line splitting, repeating and byte slicing.
- [`Text::trim_start`](/docs/reference/text/Text/trim_start): Returns `s` without leading ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_end`](/docs/reference/text/Text/trim_end): Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::to_lower`](/docs/reference/text/Text/to_lower): Returns `s` in lower case: ASCII, Latin (Latin-1, Extended-A and Additional), Greek, Cyrillic and Armenian letters; other characters are unchanged.
- [`Text::to_upper`](/docs/reference/text/Text/to_upper): Returns `s` in upper case, for the scripts [`Text::to_lower`] covers; other characters are unchanged.
- [`Text::chars`](/docs/reference/text/Text/chars): Returns the characters of `s`, each as its own string.
- [`Text::codepoints`](/docs/reference/text/Text/codepoints): Returns the Unicode code points of `s`.
- [`Text::char_len`](/docs/reference/text/Text/char_len): Returns the number of characters (code points) in `s`; `s.len()` is bytes.
