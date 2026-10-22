---
slug: "ffi/types/Ptr"
title: "Ptr"
description: "FFI tag for a raw pointer (void *), returned as an int address."
module: "ffi::types"
kind: "class"
name: "Ptr"
signature: "class Ptr"
import: "use ffi::types::{Ptr};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/ffi/types.hy#L94"
order: 12
---

FFI tag for a raw pointer (`void *`), returned as an [`int`](/docs/reference/types/int) address.

A [`Vec<T>`](/docs/reference/prelude/Vec), `[T; N]` or tuple type written in a `declare` signature also
means `Ptr`.

As an argument, an [`int`](/docs/reference/types/int) is passed as the address itself, and a non-empty
array or tuple of [`int`](/docs/reference/types/int) is passed as a pointer to a temporary
`int64_t[]` copy whose changes are copied back after the call. Keep a
value C retains alive with [`gc::root`](/docs/reference/gc/root).

## Examples

```text
use ffi::{dload, declare, invoke};
use ffi::types::{Int, Ptr};

let lib = dload("sum")?;
// int64_t sum_array(const int64_t *xs, int64_t n)
let id = declare(lib, "sum_array", (Ptr, Int), Int)?;
let n = invoke(lib, id, ([1, 2, 3, 4, 5], 5))?; // 15
```

## See also

- [`int`](/docs/reference/types/int)
- [`Vec`](/docs/reference/prelude/Vec)
- [`gc::root`](/docs/reference/gc/root)
- [`Int`](/docs/reference/ffi/types/Int): FFI tag for a 64-bit signed integer (int64_t), passed from and returned as int.
- [`Float`](/docs/reference/ffi/types/Float): FFI tag for a 64-bit float (double), passed from and returned as float.
- [`String`](/docs/reference/ffi/types/String): FFI tag for a NUL-terminated C string (const char *), passed from and returned as string.
- [`Void`](/docs/reference/ffi/types/Void): FFI tag for no value (void), valid only as a return type.
- [`Bool`](/docs/reference/ffi/types/Bool): FFI tag for a C bool (one byte, 0 or 1), passed from and returned as bool.
