---
slug: "ffi/types/Void"
title: "Void"
description: "FFI tag for no value (void), valid only as a return type."
module: "ffi::types"
kind: "class"
name: "Void"
signature: "class Void"
import: "use ffi::types::{Void};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/ffi/types.hy#L39"
order: 3
---

FFI tag for no value (`void`), valid only as a return type.

`invoke` then returns `Ok(())`. As an argument type it is
`ErrorKind::InvalidSignature`. The bare name `void` means the same.

## See also

- [`Int`](/docs/reference/ffi/types/Int): FFI tag for a 64-bit signed integer (`int64_t`), passed from and returned as `int`.
- [`Float`](/docs/reference/ffi/types/Float): FFI tag for a 64-bit float (`double`), passed from and returned as `float`.
- [`String`](/docs/reference/ffi/types/String): FFI tag for a NUL-terminated C string (`const char *`), passed from and returned as `string`.
- [`Bool`](/docs/reference/ffi/types/Bool): FFI tag for a C `bool` (one byte, `0` or `1`), passed from and returned as `bool`.
- [`Int8`](/docs/reference/ffi/types/Int8): FFI tag for an 8-bit signed integer (`int8_t`), passed from and returned as `int`.
- [`Int16`](/docs/reference/ffi/types/Int16): FFI tag for a 16-bit signed integer (`int16_t`), passed from and returned as `int`.
- [`Int32`](/docs/reference/ffi/types/Int32): FFI tag for a 32-bit signed integer (`int32_t`), passed from and returned as `int`.
- [`UInt8`](/docs/reference/ffi/types/UInt8): FFI tag for an 8-bit unsigned integer (`uint8_t`), passed from and returned as `int`.
