---
slug: "stdlib/text/Text/split_at"
package: "stdlib"
title: "Text::split_at"
description: "Splits s at byte offset at (clamped to the text) into the part before and the part from at on."
module: "text"
kind: "method"
name: "split_at"
parent: "Text"
signature: "fn split_at(T s, int at) -> Result<(string, string), string>"
import: "use text::{Text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/text.hy#L771"
order: 14
---

Splits `s` at byte offset `at` (clamped to the text) into the part before and the part from `at` on.

## Parameters

| Name | Type |
|------|------|
| `s` | `T` |
| `at` | `int` |

## Returns

`Result<(string, string), string>`

## Errors

Returns `Err("utf8")` when `at` falls inside a multi-byte character.

## See also

- [`Text`](/packages/stdlib/reference/text/Text): String methods on `string`: trimming, case mapping, padding, line splitting, repeating and byte slicing.
- [`Text::trim`](/packages/stdlib/reference/text/Text/trim): Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_start`](/packages/stdlib/reference/text/Text/trim_start): Returns `s` without leading ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_end`](/packages/stdlib/reference/text/Text/trim_end): Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::to_lower`](/packages/stdlib/reference/text/Text/to_lower): Returns `s` in lower case: ASCII, Latin (Latin-1, Extended-A and Additional), Greek, Cyrillic and Armenian letters; other characters are unchanged.
- [`Text::to_upper`](/packages/stdlib/reference/text/Text/to_upper): Returns `s` in upper case, for the scripts [`Text::to_lower`] covers; other characters are unchanged.
- [`Text::chars`](/packages/stdlib/reference/text/Text/chars): Returns the characters of `s`, each as its own string.
- [`Text::codepoints`](/packages/stdlib/reference/text/Text/codepoints): Returns the Unicode code points of `s`.
