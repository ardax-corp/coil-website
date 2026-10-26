---
slug: "text/Text/to_lower"
title: "Text::to_lower"
description: "Returns s in lower case: ASCII, Latin (Latin-1, Extended-A and Additional), Greek, Cyrillic and Armenian letters; other characters are unchanged."
module: "text"
kind: "method"
name: "to_lower"
parent: "Text"
signature: "fn to_lower(T s) -> string"
import: "use text::{Text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/a5615b7cd941dfa56fc0e1f42de4832c354630a3/src/text.hy#L715"
order: 3
---

Returns `s` in lower case: ASCII, Latin (Latin-1, Extended-A and Additional), Greek, Cyrillic and Armenian letters; other characters are unchanged.

Each character maps to one character (`"SS"` does not become `"ß"`),
so the byte length can change only where the two cases differ in
width (`İ` / `i`).

## Parameters

| Name | Type |
|------|------|
| `s` | `T` |

## Returns

`string`

## See also

- [`Text`](/docs/reference/text/Text): String methods on `string`: trimming, case mapping, padding, line splitting, repeating and byte slicing.
- [`Text::trim`](/docs/reference/text/Text/trim): Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_start`](/docs/reference/text/Text/trim_start): Returns `s` without leading ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_end`](/docs/reference/text/Text/trim_end): Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::to_upper`](/docs/reference/text/Text/to_upper): Returns `s` in upper case, for the scripts [`Text::to_lower`] covers; other characters are unchanged.
- [`Text::chars`](/docs/reference/text/Text/chars): Returns the characters of `s`, each as its own string.
- [`Text::codepoints`](/docs/reference/text/Text/codepoints): Returns the Unicode code points of `s`.
- [`Text::char_len`](/docs/reference/text/Text/char_len): Returns the number of characters (code points) in `s`; `s.len()` is bytes.
