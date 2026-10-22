---
description: "format, UTF-8 conversion and byte-offset helpers for string."
---
Strings are immutable UTF-8 text. Offsets in this module are byte offsets,
and `s.len()` is the length in bytes. Comparison needs no import: `==` compares
contents and `<` orders by UTF-8 bytes.

[`format`](/docs/reference/string/format) is how you build text from values;
it is checked at compile time. For trimming, splitting, replacing and other
text helpers, see the stdlib [`text`](/docs/reference/text) module.
