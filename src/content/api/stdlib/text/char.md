---
slug: "stdlib/text/char"
package: "stdlib"
title: "char"
description: "Returns the one-character string whose code point is b."
module: "text"
kind: "fn"
name: "char"
signature: "fn char(byte b) -> Result<string, string>"
import: "use text::{char};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/text.coil#L1088"
order: 7
---

Returns the one-character string whose code point is `b`.

Values `0..=127` give an ASCII character; `128..=255` give the Latin-1
character with that code point (two bytes of UTF-8, so `char(233)` is
`"é"`). Every [`byte`](/docs/reference/types/byte) has one, so the result is always `Ok`; it stays a
[`Result`](/docs/reference/prelude/Result) so code written against the old prelude `char` still reads it
with `?`. The inverse is [`ord`](/packages/stdlib/reference/text/ord). To decode UTF-8 bytes, use
[`string::from_bytes`](/docs/reference/string/from_bytes).

## Parameters

| Name | Type |
|------|------|
| `b` | `byte` |

## Returns

`Result<string, string>`

## Examples

```coil
use text::char;
use tests::assert;
assert!(char(66 as byte)? == "B");
assert!(char(233 as byte)? == "\u{e9}");
```

## See also

- [`byte`](/docs/reference/types/byte)
- [`Result`](/docs/reference/prelude/Result)
- [`text::ord`](/packages/stdlib/reference/text/ord)
- [`string::from_bytes`](/docs/reference/string/from_bytes)
- [`from_codepoints`](/packages/stdlib/reference/text/from_codepoints): Returns the string whose characters are the code points `cps`.
