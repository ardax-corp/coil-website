---
slug: "ffi/types/String"
title: "String"
description: "FFI tag for a NUL-terminated C string (const char *), passed from and returned as string."
module: "ffi::types"
kind: "class"
name: "String"
signature: "class String"
import: "use ffi::types::{String};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/ffi/types.hy#L33"
order: 2
---

FFI tag for a NUL-terminated C string (`const char *`), passed from and returned as [`string`](/docs/reference/string).

A Coil string is passed as a pointer to its UTF-8 bytes; C must not keep
it after the call. A returned `char *` is copied into a new Coil string
at once (a null pointer gives an empty string), and C keeps ownership of
its memory.

## See also

- [`string`](/docs/reference/string)
- [`Int`](/docs/reference/ffi/types/Int): FFI tag for a 64-bit signed integer (int64_t), passed from and returned as int.
- [`Float`](/docs/reference/ffi/types/Float): FFI tag for a 64-bit float (double), passed from and returned as float.
- [`Void`](/docs/reference/ffi/types/Void): FFI tag for no value (void), valid only as a return type.
- [`Bool`](/docs/reference/ffi/types/Bool): FFI tag for a C bool (one byte, 0 or 1), passed from and returned as bool.
- [`Int8`](/docs/reference/ffi/types/Int8): FFI tag for an 8-bit signed integer (int8_t), passed from and returned as int.
- [`Int16`](/docs/reference/ffi/types/Int16): FFI tag for a 16-bit signed integer (int16_t), passed from and returned as int.
- [`Int32`](/docs/reference/ffi/types/Int32): FFI tag for a 32-bit signed integer (int32_t), passed from and returned as int.
