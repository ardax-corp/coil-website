---
slug: "types/string"
title: "string"
description: "A UTF-8 text string."
module: "types"
kind: "primitive"
name: "string"
signature: "type string"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/types.hy#L151"
order: 4
---

A UTF-8 text string.

Literals are written in double quotes, with escapes `\\`, `\"`, `\n`,
`\r`, `\t`, `\0`, `\e`, `\xHH` and `\u{HEX}`. `+` and `+=` concatenate two
strings (adding a non-string is a type error). `==` compares contents,
and `<`, `<=`, `>`, `>=` order strings by their UTF-8 bytes ([`string`](/docs/reference/string) is
[`Ord`](/docs/reference/prelude/ops/Ord), so [`collections::sort`](/docs/reference/collections/sort) sorts a [`Vec<string>`](/docs/reference/prelude/Vec)). `s.len()` counts
UTF-8 bytes, not characters.

A string is not cast with `as`: use [`string::to_bytes`](/docs/reference/string/to_bytes) for its bytes and
[`string::format`](/docs/reference/string/format) to build strings from other values. A one-byte string
literal coerces to [`byte`](/docs/reference/types/byte) where a [`byte`](/docs/reference/types/byte) is expected.

## Examples

```coil
use tests::assert;
let s = "héllo";
assert!(s.len() == 6);
let greeting = "hi" + ", " + "there";
greeting += "!";
assert!(greeting == "hi, there!");
assert!("apple" < "banana" && "B" < "a");
assert!(show(s) == "héllo");
```

## See also

- [`string`](/docs/reference/string)
- [`Ord`](/docs/reference/prelude/ops/Ord)
- [`collections::sort`](/docs/reference/collections/sort)
- [`Vec`](/docs/reference/prelude/Vec)
- [`string::to_bytes`](/docs/reference/string/to_bytes)
- [`string::format`](/docs/reference/string/format)
- [`byte`](/docs/reference/types/byte)
- [`int`](/docs/reference/types/int): A 64-bit signed integer, from -9223372036854775808 to 9223372036854775807.
