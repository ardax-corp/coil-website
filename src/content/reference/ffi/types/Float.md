---
slug: "ffi/types/Float"
title: "Float"
description: "FFI tag for a 64-bit float (double), passed from and returned as float."
module: "ffi::types"
kind: "class"
name: "Float"
signature: "class Float"
import: "use ffi::types::{Float};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/ffi/types.hy#L25"
order: 1
---

FFI tag for a 64-bit float (`double`), passed from and returned as [`float`](/docs/reference/types/float).

The bare name [`float`](/docs/reference/types/float) means the same.

## See also

- [`float`](/docs/reference/types/float)
- [`Int`](/docs/reference/ffi/types/Int): FFI tag for a 64-bit signed integer (int64_t), passed from and returned as int.
- [`String`](/docs/reference/ffi/types/String): FFI tag for a NUL-terminated C string (const char *), passed from and returned as string.
- [`Void`](/docs/reference/ffi/types/Void): FFI tag for no value (void), valid only as a return type.
- [`Bool`](/docs/reference/ffi/types/Bool): FFI tag for a C bool (one byte, 0 or 1), passed from and returned as bool.
- [`Int8`](/docs/reference/ffi/types/Int8): FFI tag for an 8-bit signed integer (int8_t), passed from and returned as int.
- [`Int16`](/docs/reference/ffi/types/Int16): FFI tag for a 16-bit signed integer (int16_t), passed from and returned as int.
- [`Int32`](/docs/reference/ffi/types/Int32): FFI tag for a 32-bit signed integer (int32_t), passed from and returned as int.
