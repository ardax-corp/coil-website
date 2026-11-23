---
slug: "ffi/types/Int"
title: "Int"
description: "FFI tag for a 64-bit signed integer (int64_t), passed from and returned as int."
module: "ffi::types"
kind: "class"
name: "Int"
signature: "class Int"
import: "use ffi::types::{Int};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/5949c73a89666e807490a6e6573daf60068768ea/compiler/src/builtin_docs/ffi/types.coil#L21"
order: 0
---

FFI tag for a 64-bit signed integer (`int64_t`), passed from and returned as [`int`](/docs/reference/types/int).

Written [`int`](/docs/reference/types/int) in an `extern` block.

## Examples

```text
extern "sum" {
    fn sum(int a, int b) -> int; // int64_t sum(int64_t, int64_t)
}

let n = sum(40, 2);
```

## See also

- [`int`](/docs/reference/types/int)
- [`Float`](/docs/reference/ffi/types/Float): FFI tag for a 64-bit float (`double`), passed from and returned as `float`.
- [`String`](/docs/reference/ffi/types/String): FFI tag for a NUL-terminated C string (`const char *`), passed from and returned as `string`.
- [`Void`](/docs/reference/ffi/types/Void): FFI tag for no value (`void`), valid only as a return type.
- [`Bool`](/docs/reference/ffi/types/Bool): FFI tag for a C `bool` (one byte, `0` or `1`), passed from and returned as `bool`.
- [`Int8`](/docs/reference/ffi/types/Int8): FFI tag for an 8-bit signed integer (`int8_t`), passed from and returned as `int`.
- [`Int16`](/docs/reference/ffi/types/Int16): FFI tag for a 16-bit signed integer (`int16_t`), passed from and returned as `int`.
- [`Int32`](/docs/reference/ffi/types/Int32): FFI tag for a 32-bit signed integer (`int32_t`), passed from and returned as `int`.
