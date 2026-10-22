---
slug: "ffi/types/Struct"
title: "Struct"
description: "FFI tag for a C struct passed or returned by value."
module: "ffi::types"
kind: "class"
name: "Struct"
signature: "class Struct"
import: "use ffi::types::{Struct};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/ffi/types.hy#L141"
order: 14
---

FFI tag for a C struct passed or returned by value.

Not written directly: name an `extern struct` type in `declare` instead,
and the compiler uses this tag with that struct's layout. A returned
struct becomes a record whose fields are read with `.name`.

## Examples

```text
use ffi::{dload, declare, invoke};
use ffi::types::{Int32};

extern struct Point {
    x: int32,
    y: int32,
};

let make_id = declare(lib, "make_point", (Int32, Int32), Point)?;
let p = invoke(lib, make_id, (3, 4))?;
let sum = p.x + p.y; // 7
```

## See also

- [`Int`](/docs/reference/ffi/types/Int): FFI tag for a 64-bit signed integer (int64_t), passed from and returned as int.
- [`Float`](/docs/reference/ffi/types/Float): FFI tag for a 64-bit float (double), passed from and returned as float.
- [`String`](/docs/reference/ffi/types/String): FFI tag for a NUL-terminated C string (const char *), passed from and returned as string.
- [`Void`](/docs/reference/ffi/types/Void): FFI tag for no value (void), valid only as a return type.
- [`Bool`](/docs/reference/ffi/types/Bool): FFI tag for a C bool (one byte, 0 or 1), passed from and returned as bool.
- [`Int8`](/docs/reference/ffi/types/Int8): FFI tag for an 8-bit signed integer (int8_t), passed from and returned as int.
- [`Int16`](/docs/reference/ffi/types/Int16): FFI tag for a 16-bit signed integer (int16_t), passed from and returned as int.
- [`Int32`](/docs/reference/ffi/types/Int32): FFI tag for a 32-bit signed integer (int32_t), passed from and returned as int.
