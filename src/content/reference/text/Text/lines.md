---
slug: "text/Text/lines"
title: "Text::lines"
description: "Splits s into lines at each LF, dropping one CR before it (so CRLF works too)."
module: "text"
kind: "method"
name: "lines"
parent: "Text"
signature: "fn lines(T s) -> Vec<string>"
import: "use text::{Text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/text.hy#L754"
order: 11
---

Splits `s` into lines at each LF, dropping one CR before it (so CRLF works too).

A final LF ends the last line rather than starting an empty one, so
`"a\nb\n"` and `"a\nb"` both give two lines, and `""` gives none.

## Parameters

| Name | Type |
|------|------|
| `s` | `T` |

## Returns

`Vec<string>`

## See also

- [`Text`](/docs/reference/text/Text): String methods on `string`: trimming, case mapping, padding, line splitting, repeating and byte slicing.
- [`Text::trim`](/docs/reference/text/Text/trim): Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_start`](/docs/reference/text/Text/trim_start): Returns `s` without leading ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_end`](/docs/reference/text/Text/trim_end): Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::to_lower`](/docs/reference/text/Text/to_lower): Returns `s` in lower case: ASCII, Latin (Latin-1, Extended-A and Additional), Greek, Cyrillic and Armenian letters; other characters are unchanged.
- [`Text::to_upper`](/docs/reference/text/Text/to_upper): Returns `s` in upper case, for the scripts [`Text::to_lower`] covers; other characters are unchanged.
- [`Text::chars`](/docs/reference/text/Text/chars): Returns the characters of `s`, each as its own string.
- [`Text::codepoints`](/docs/reference/text/Text/codepoints): Returns the Unicode code points of `s`.
