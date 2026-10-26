---
slug: "types/unit"
title: "unit"
description: "The type with a single value, (), used where there is no meaningful value."
module: "types"
kind: "primitive"
name: "unit"
signature: "type unit"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/builtin_docs/types.hy#L179"
order: 5
---

The type with a single value, `()`, used where there is no meaningful value.

A function with no `->` return type returns `unit`, and statements have
type `unit`. It is also written `void` (for example as an FFI return
type). [`Result<unit, E>`](/docs/reference/prelude/Result) is the usual result of an operation that can
fail but returns nothing.

## Examples

```coil
use tests::assert;
fn check(int n) -> Result<unit, string> {
    if n < 0 {
        raise "negative";
    }
    return ();
}

fn main() {
    let ok = match check(1) {
        Result::Ok(_) => true,
        Result::Err(_) => false,
    };
    assert!(ok);
}
```

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`int`](/docs/reference/types/int): A 64-bit signed integer, from `-9223372036854775808` to `9223372036854775807`.
- [`float`](/docs/reference/types/float): A 64-bit IEEE-754 floating-point number.
- [`bool`](/docs/reference/types/bool): A boolean: `true` or `false`.
- [`byte`](/docs/reference/types/byte): An unsigned 8-bit integer in `0..=255`.
- [`string`](/docs/reference/types/string): A UTF-8 text string.
