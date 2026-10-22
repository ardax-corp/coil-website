---
slug: "prelude/ord"
title: "ord"
description: "Returns the code of the single character in s as a byte."
module: "prelude"
kind: "fn"
name: "ord"
signature: "fn ord(string s) -> Result<byte, string>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/prelude.hy#L456"
order: 7
---

Returns the code of the single character in `s` as a [`byte`](/docs/reference/types/byte).

`s` must hold exactly one character whose Unicode code point is at most
255 (ASCII or Latin-1, so `ord("é")` is `233`). Otherwise the result is
`Err` with a message: `"empty string"`, `"expected single character"` or
`"character code out of byte range"`. The inverse is [`char`](/docs/reference/prelude/char).

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<byte, string>`

## Examples

```coil
use tests::assert;
let code = match ord("A") {
    Result::Ok(b) => b as int,
    Result::Err(_) => -1,
};
assert!(code == 65);
let err = match ord("AB") {
    Result::Ok(_) => "",
    Result::Err(e) => e,
};
assert!(err == "expected single character");
```

## See also

- [`byte`](/docs/reference/types/byte)
- [`char`](/docs/reference/prelude/char)
- [`black_box`](/docs/reference/prelude/black_box): Returns x unchanged, through a call the optimizer cannot see into.
