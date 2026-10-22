---
slug: "ffi/types/UInt8"
title: "UInt8"
description: "FFI tag for an 8-bit unsigned integer (uint8_t), passed from and returned as int."
module: "ffi::types"
kind: "class"
name: "UInt8"
signature: "class UInt8"
import: "use ffi::types::{UInt8};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/ffi/types.hy#L60"
order: 8
---

FFI tag for an 8-bit unsigned integer (`uint8_t`), passed from and returned as [`int`](/docs/reference/types/int).

## See also

- [`int`](/docs/reference/types/int)
- [`Int`](/docs/reference/ffi/types/Int): FFI tag for a 64-bit signed integer (int64_t), passed from and returned as int.
- [`Float`](/docs/reference/ffi/types/Float): FFI tag for a 64-bit float (double), passed from and returned as float.
- [`String`](/docs/reference/ffi/types/String): FFI tag for a NUL-terminated C string (const char *), passed from and returned as string.
- [`Void`](/docs/reference/ffi/types/Void): FFI tag for no value (void), valid only as a return type.
- [`Bool`](/docs/reference/ffi/types/Bool): FFI tag for a C bool (one byte, 0 or 1), passed from and returned as bool.
- [`Int8`](/docs/reference/ffi/types/Int8): FFI tag for an 8-bit signed integer (int8_t), passed from and returned as int.
- [`Int16`](/docs/reference/ffi/types/Int16): FFI tag for a 16-bit signed integer (int16_t), passed from and returned as int.
