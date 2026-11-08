---
slug: "stdlib/text/ord"
package: "stdlib"
title: "ord"
description: "Returns the code of the single character in s as a byte."
module: "text"
kind: "fn"
name: "ord"
signature: "fn ord(string s) -> Result<byte, string>"
import: "use text::{ord};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/5fb432feb5350a70b043a82a7d58c905c8d7414d/src/text.coil#L1056"
order: 6
---

Returns the code of the single character in `s` as a [`byte`](/docs/reference/types/byte).

`s` must hold exactly one character whose Unicode code point is at most
255 (ASCII or Latin-1, so `ord("é")` is `233`). Otherwise the result is
`Err` with a message: `"empty string"`, `"expected single character"` or
`"character code out of byte range"`. The inverse is [`char`](/packages/stdlib/reference/text/char). For the
UTF-8 bytes of any string, use [`string::to_bytes`](/docs/reference/string/to_bytes).

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<byte, string>`

## Examples

```coil
use text::ord;
use tests::assert;
assert!((ord("A")? as int) == 65);
assert!((ord("\u{e9}")? as int) == 233);
let err = match ord("AB") {
    Result::Ok(_) => "",
    Result::Err(e) => e,
};
assert!(err == "expected single character");
```

## See also

- [`byte`](/docs/reference/types/byte)
- [`text::char`](/packages/stdlib/reference/text/char)
- [`string::to_bytes`](/docs/reference/string/to_bytes)
- [`from_codepoints`](/packages/stdlib/reference/text/from_codepoints): Returns the string whose characters are the code points `cps`.
