---
slug: "ffi/types/UInt64"
title: "UInt64"
description: "FFI tag for a 64-bit unsigned integer (uint64_t), passed from and returned as int."
module: "ffi::types"
kind: "class"
name: "UInt64"
signature: "class UInt64"
import: "use ffi::types::{UInt64};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/ffi/types.hy#L71"
order: 11
---

FFI tag for a 64-bit unsigned integer (`uint64_t`), passed from and returned as [`int`](/docs/reference/types/int).

Values above the largest [`int`](/docs/reference/types/int) come back negative (the same 64 bits).

## See also

- [`int`](/docs/reference/types/int)
- [`Int`](/docs/reference/ffi/types/Int): FFI tag for a 64-bit signed integer (`int64_t`), passed from and returned as `int`.
- [`Float`](/docs/reference/ffi/types/Float): FFI tag for a 64-bit float (`double`), passed from and returned as `float`.
- [`String`](/docs/reference/ffi/types/String): FFI tag for a NUL-terminated C string (`const char *`), passed from and returned as `string`.
- [`Void`](/docs/reference/ffi/types/Void): FFI tag for no value (`void`), valid only as a return type.
- [`Bool`](/docs/reference/ffi/types/Bool): FFI tag for a C `bool` (one byte, `0` or `1`), passed from and returned as `bool`.
- [`Int8`](/docs/reference/ffi/types/Int8): FFI tag for an 8-bit signed integer (`int8_t`), passed from and returned as `int`.
- [`Int16`](/docs/reference/ffi/types/Int16): FFI tag for a 16-bit signed integer (`int16_t`), passed from and returned as `int`.
