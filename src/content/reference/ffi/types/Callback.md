---
slug: "ffi/types/Callback"
title: "Callback"
description: "FFI tag for a C function pointer, letting C call back into a Coil function."
module: "ffi::types"
kind: "class"
name: "Callback"
signature: "class Callback"
import: "use ffi::types::{Callback};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/ffi/types.coil#L110"
order: 13
---

FFI tag for a C function pointer, letting C call back into a Coil function.

Written as a function type in an `extern` block (`fn(int x) -> int cb`).
Pass a named top-level Coil function; C receives a pointer it can call.

## Examples

```text
extern "sum" {
    // int64_t apply_cb(int64_t (*f)(int64_t), int64_t x) { return f(x); }
    fn apply_cb(fn(int x) -> int f, int x) -> int;
}

fn doubler(int x) -> int {
    return x * 2;
}

let n = apply_cb(doubler, 21); // 42
```

## See also

- [`Int`](/docs/reference/ffi/types/Int): FFI tag for a 64-bit signed integer (`int64_t`), passed from and returned as `int`.
- [`Float`](/docs/reference/ffi/types/Float): FFI tag for a 64-bit float (`double`), passed from and returned as `float`.
- [`String`](/docs/reference/ffi/types/String): FFI tag for a NUL-terminated C string (`const char *`), passed from and returned as `string`.
- [`Void`](/docs/reference/ffi/types/Void): FFI tag for no value (`void`), valid only as a return type.
- [`Bool`](/docs/reference/ffi/types/Bool): FFI tag for a C `bool` (one byte, `0` or `1`), passed from and returned as `bool`.
- [`Int8`](/docs/reference/ffi/types/Int8): FFI tag for an 8-bit signed integer (`int8_t`), passed from and returned as `int`.
- [`Int16`](/docs/reference/ffi/types/Int16): FFI tag for a 16-bit signed integer (`int16_t`), passed from and returned as `int`.
- [`Int32`](/docs/reference/ffi/types/Int32): FFI tag for a 32-bit signed integer (`int32_t`), passed from and returned as `int`.
