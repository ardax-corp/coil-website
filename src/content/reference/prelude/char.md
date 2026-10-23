---
slug: "prelude/char"
title: "char"
description: "Returns the one-character string whose code point is b."
module: "prelude"
kind: "fn"
name: "char"
signature: "fn char(byte b) -> Result<string, string>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/prelude.hy#L467"
order: 8
---

Returns the one-character string whose code point is `b`.

Values `0..=127` give an ASCII character; `128..=255` give the Latin-1
character with that code point (two bytes of UTF-8, so `char(233)` is
`"é"`). The result is `Err("byte out of range")` only if the value is
outside `0..=255`, which a well-typed [`byte`](/docs/reference/types/byte) never is. The inverse is [`ord`](/docs/reference/prelude/ord).

## Parameters

| Name | Type |
|------|------|
| `b` | `byte` |

## Returns

`Result<string, string>`

## Examples

```coil
use tests::assert;
let s = match char(66 as byte) {
    Result::Ok(c) => c,
    Result::Err(_) => "",
};
assert!(s == "B");
```

## See also

- [`byte`](/docs/reference/types/byte)
- [`ord`](/docs/reference/prelude/ord)
- [`black_box`](/docs/reference/prelude/black_box): Returns `x` unchanged, through a call the optimizer cannot see into.
