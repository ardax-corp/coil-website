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
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/ffi/types.hy#L118"
order: 13
---

FFI tag for a C function pointer, letting C call back into a Coil function.

As an argument, pass a named Coil function; C receives a pointer it can
call. The callback signature is currently fixed to `int64_t (*)(int64_t)`,
so the Coil function must take one [`int`](/docs/reference/types/int) and return [`int`](/docs/reference/types/int). As a return
type, the function pointer comes back as an opaque [`int`](/docs/reference/types/int) address, like
[`Ptr`](/docs/reference/ffi/types/Ptr).

## Examples

```text
use ffi::{dload, declare, invoke};
use ffi::types::{Callback, Int};

fn doubler(int x) -> int {
    return x * 2;
}

// int64_t apply_cb(int64_t (*f)(int64_t), int64_t x) { return f(x); }
let id = declare(lib, "apply_cb", (Callback, Int), Int)?;
let n = invoke(lib, id, (doubler, 21))?; // 42
```

## See also

- [`int`](/docs/reference/types/int)
- [`ffi::types::Ptr`](/docs/reference/ffi/types/Ptr)
- [`Int`](/docs/reference/ffi/types/Int): FFI tag for a 64-bit signed integer (`int64_t`), passed from and returned as `int`.
- [`Float`](/docs/reference/ffi/types/Float): FFI tag for a 64-bit float (`double`), passed from and returned as `float`.
- [`String`](/docs/reference/ffi/types/String): FFI tag for a NUL-terminated C string (`const char *`), passed from and returned as `string`.
- [`Void`](/docs/reference/ffi/types/Void): FFI tag for no value (`void`), valid only as a return type.
- [`Bool`](/docs/reference/ffi/types/Bool): FFI tag for a C `bool` (one byte, `0` or `1`), passed from and returned as `bool`.
- [`Int8`](/docs/reference/ffi/types/Int8): FFI tag for an 8-bit signed integer (`int8_t`), passed from and returned as `int`.
