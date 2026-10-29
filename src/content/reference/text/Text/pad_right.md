---
slug: "text/Text/pad_right"
title: "Text::pad_right"
description: "Returns s with copies of fill at the end until it is at least width bytes long."
module: "text"
kind: "method"
name: "pad_right"
parent: "Text"
signature: "fn pad_right(T s, int width, string fill) -> string"
import: "use text::{Text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/47c059804a7a85f79bd400eb26bb1241e7b44441/src/text.hy#L748"
order: 10
---

Returns `s` with copies of `fill` at the end until it is at least `width` bytes long.

A one-byte `fill` gives exactly `width` bytes. Text already `width`
bytes or longer, or an empty `fill`, comes back unchanged.

## Parameters

| Name | Type |
|------|------|
| `s` | `T` |
| `width` | `int` |
| `fill` | `string` |

## Returns

`string`

## See also

- [`Text`](/docs/reference/text/Text): String methods on `string`: trimming, case mapping, padding, line splitting, repeating and byte slicing.
- [`Text::trim`](/docs/reference/text/Text/trim): Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_start`](/docs/reference/text/Text/trim_start): Returns `s` without leading ASCII whitespace (space, tab, CR, LF).
- [`Text::trim_end`](/docs/reference/text/Text/trim_end): Returns `s` without trailing ASCII whitespace (space, tab, CR, LF).
- [`Text::to_lower`](/docs/reference/text/Text/to_lower): Returns `s` in lower case: ASCII, Latin (Latin-1, Extended-A and Additional), Greek, Cyrillic and Armenian letters; other characters are unchanged.
- [`Text::to_upper`](/docs/reference/text/Text/to_upper): Returns `s` in upper case, for the scripts [`Text::to_lower`] covers; other characters are unchanged.
- [`Text::chars`](/docs/reference/text/Text/chars): Returns the characters of `s`, each as its own string.
- [`Text::codepoints`](/docs/reference/text/Text/codepoints): Returns the Unicode code points of `s`.
