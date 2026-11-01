---
slug: "stdlib/text/Text"
package: "stdlib"
title: "Text"
description: "String methods on string: trimming, case mapping, padding, line splitting, repeating and byte slicing."
module: "text"
kind: "trait"
name: "Text"
signature: "trait Text<T>"
import: "use text::{Text};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/text.coil#L696"
order: 3
---

String methods on [`string`](/docs/reference/types/string): trimming, case mapping, padding, line splitting, repeating and byte slicing.

Offsets and widths count bytes. Everything except [[`Text::slice`](/packages/stdlib/reference/text/Text/slice)] and
[[`Text::split_at`](/packages/stdlib/reference/text/Text/split_at)] returns a plain value; those two return `Err("utf8")`
when an offset falls inside a multi-byte character.

## Required methods

| Name | Description |
|------|-------------|
| [`trim`](/packages/stdlib/reference/text/Text/trim) | Returns `s` without leading and trailing ASCII whitespace (space, tab, CR, LF). |
| [`trim_start`](/packages/stdlib/reference/text/Text/trim_start) | Returns `s` without leading ASCII whitespace (space, tab, CR, LF). |
| [`trim_end`](/packages/stdlib/reference/text/Text/trim_end) | Returns `s` without trailing ASCII whitespace (space, tab, CR, LF). |
| [`to_lower`](/packages/stdlib/reference/text/Text/to_lower) | Returns `s` in lower case: ASCII, Latin (Latin-1, Extended-A and Additional), Greek, Cyrillic and Armenian letters; other characters are unchanged. |
| [`to_upper`](/packages/stdlib/reference/text/Text/to_upper) | Returns `s` in upper case, for the scripts [[`Text::to_lower`](/packages/stdlib/reference/text/Text/to_lower)] covers; other characters are unchanged. |
| [`chars`](/packages/stdlib/reference/text/Text/chars) | Returns the characters of `s`, each as its own string. |
| [`codepoints`](/packages/stdlib/reference/text/Text/codepoints) | Returns the Unicode code points of `s`. |
| [`char_len`](/packages/stdlib/reference/text/Text/char_len) | Returns the number of characters (code points) in `s`; `s.len()` is bytes. |
| [`char_at`](/packages/stdlib/reference/text/Text/char_at) | Returns the character at character index `i`, or `None` when `i` is out of range. |
| [`pad_left`](/packages/stdlib/reference/text/Text/pad_left) | Returns `s` with copies of `fill` in front until it is at least `width` bytes long. |
| [`pad_right`](/packages/stdlib/reference/text/Text/pad_right) | Returns `s` with copies of `fill` at the end until it is at least `width` bytes long. |
| [`lines`](/packages/stdlib/reference/text/Text/lines) | Splits `s` into lines at each LF, dropping one CR before it (so CRLF works too). |
| [`repeat`](/packages/stdlib/reference/text/Text/repeat) | Returns `s` repeated `n` times; empty when `n <= 0`. |
| [`slice`](/packages/stdlib/reference/text/Text/slice) | Returns the part of `s` from byte offset `start` up to (not including) `end`. |
| [`split_at`](/packages/stdlib/reference/text/Text/split_at) | Splits `s` at byte offset `at` (clamped to the text) into the part before and the part from `at` on. |
| [`rfind`](/packages/stdlib/reference/text/Text/rfind) | Returns the byte span of the last `needle` in `s`, or `None`. |

## Examples

```coil
use text::{Text};
use tests::assert;
assert!("\t  Key = Value \r\n".trim().to_lower() == "key = value");
assert!("7".pad_left(3, "0") == "007");
assert!("one\ntwo\n".lines().len() == 2);
```

## See also

- [`string`](/docs/reference/types/string)
- [`Text::slice`](/packages/stdlib/reference/text/Text/slice)
- [`Text::split_at`](/packages/stdlib/reference/text/Text/split_at)
- [`Pattern`](/packages/stdlib/reference/text/Pattern): Something a [`Searchable`] value can be searched for: a plain `string` (matched literally), or a type such as coil-regex's `Regex`.
- [`Searchable`](/packages/stdlib/reference/text/Searchable): Pattern search methods (`contains`, `find`, `split`, `replace_all`, …) on any [`Show`] type, which search its display form.
- [`Joined`](/packages/stdlib/reference/text/Joined): `parts.join(sep)` on `Vec<string>`.
