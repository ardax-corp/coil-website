---
description: "format, UTF-8 conversion and byte-offset helpers for string."
---
Strings are immutable UTF-8 text. Offsets in this module are byte offsets,
and `s.len()` is the length in bytes. Comparison needs no import: `==` compares
contents and `<` orders by UTF-8 bytes.

[`format`](/docs/reference/string/format) is how you build text from values;
it is checked at compile time. Read a byte with `s[i]`. For searching,
trimming, splitting, replacing and other text helpers, see the stdlib
[`text`](/docs/reference/text) module, which is plain loops over `s[i]`
that the compiler runs 64 bytes at a time
([Types](/docs/language/types#primitive-types)).
