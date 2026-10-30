---
slug: "ffi/types/Bytes"
title: "Bytes"
description: "FFI tag for a writable byte buffer (uint8_t *) made from a Vec<byte>."
module: "ffi::types"
kind: "class"
name: "Bytes"
signature: "class Bytes"
import: "use ffi::types::{Bytes};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/builtin_docs/ffi/types.hy#L151"
order: 15
---

FFI tag for a writable byte buffer (`uint8_t *`) made from a [`Vec<byte>`](/docs/reference/prelude/Vec).

Whatever C writes there ends up in the [`Vec`](/docs/reference/prelude/Vec): a packed [`Vec<byte>`](/docs/reference/prelude/Vec) is lent
in place, and otherwise (a coil callback exists, the same [`Vec`](/docs/reference/prelude/Vec) is passed
twice, or its elements are stored as words) C gets a copy that is copied
back after the call. No NUL terminator is added, so pass the length
separately. Argument only: as a return type it is
`ErrorKind::Unsupported` (return a [`Ptr`](/docs/reference/ffi/types/Ptr) instead).

## See also

- [`Vec`](/docs/reference/prelude/Vec)
- [`ffi::types::Ptr`](/docs/reference/ffi/types/Ptr)
- [`Int`](/docs/reference/ffi/types/Int): FFI tag for a 64-bit signed integer (`int64_t`), passed from and returned as `int`.
- [`Float`](/docs/reference/ffi/types/Float): FFI tag for a 64-bit float (`double`), passed from and returned as `float`.
- [`String`](/docs/reference/ffi/types/String): FFI tag for a NUL-terminated C string (`const char *`), passed from and returned as `string`.
- [`Void`](/docs/reference/ffi/types/Void): FFI tag for no value (`void`), valid only as a return type.
- [`Bool`](/docs/reference/ffi/types/Bool): FFI tag for a C `bool` (one byte, `0` or `1`), passed from and returned as `bool`.
- [`Int8`](/docs/reference/ffi/types/Int8): FFI tag for an 8-bit signed integer (`int8_t`), passed from and returned as `int`.
