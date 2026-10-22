---
slug: "ffi/types/index"
title: "ffi::types"
description: "The ffi::types module."
module: "ffi::types"
kind: "module"
name: "ffi::types"
origin: "builtin"
auto: false
order: 13
---

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use ffi::types::{Int, Float};
```

## Types

| Name | Description |
|------|-------------|
| [`Int`](/docs/reference/ffi/types/Int) | FFI tag for a 64-bit signed integer (`int64_t`), passed from and returned as [`int`](/docs/reference/types/int). |
| [`Float`](/docs/reference/ffi/types/Float) | FFI tag for a 64-bit float (`double`), passed from and returned as [`float`](/docs/reference/types/float). |
| [`String`](/docs/reference/ffi/types/String) | FFI tag for a NUL-terminated C string (`const char *`), passed from and returned as [`string`](/docs/reference/string). |
| [`Void`](/docs/reference/ffi/types/Void) | FFI tag for no value (`void`), valid only as a return type. |
| [`Bool`](/docs/reference/ffi/types/Bool) | FFI tag for a C [`bool`](/docs/reference/types/bool) (one byte, `0` or `1`), passed from and returned as [`bool`](/docs/reference/types/bool). |
| [`Int8`](/docs/reference/ffi/types/Int8) | FFI tag for an 8-bit signed integer (`int8_t`), passed from and returned as [`int`](/docs/reference/types/int). |
| [`Int16`](/docs/reference/ffi/types/Int16) | FFI tag for a 16-bit signed integer (`int16_t`), passed from and returned as [`int`](/docs/reference/types/int). |
| [`Int32`](/docs/reference/ffi/types/Int32) | FFI tag for a 32-bit signed integer (`int32_t`), passed from and returned as [`int`](/docs/reference/types/int). |
| [`UInt8`](/docs/reference/ffi/types/UInt8) | FFI tag for an 8-bit unsigned integer (`uint8_t`), passed from and returned as [`int`](/docs/reference/types/int). |
| [`UInt16`](/docs/reference/ffi/types/UInt16) | FFI tag for a 16-bit unsigned integer (`uint16_t`), passed from and returned as [`int`](/docs/reference/types/int). |
| [`UInt32`](/docs/reference/ffi/types/UInt32) | FFI tag for a 32-bit unsigned integer (`uint32_t`), passed from and returned as [`int`](/docs/reference/types/int). |
| [`UInt64`](/docs/reference/ffi/types/UInt64) | FFI tag for a 64-bit unsigned integer (`uint64_t`), passed from and returned as [`int`](/docs/reference/types/int). |
| [`Ptr`](/docs/reference/ffi/types/Ptr) | FFI tag for a raw pointer (`void *`), returned as an [`int`](/docs/reference/types/int) address. |
| [`Callback`](/docs/reference/ffi/types/Callback) | FFI tag for a C function pointer, letting C call back into a Coil function. |
| [`Struct`](/docs/reference/ffi/types/Struct) | FFI tag for a C struct passed or returned by value. |
| [`Bytes`](/docs/reference/ffi/types/Bytes) | FFI tag for a writable byte buffer (`uint8_t *`) made from a [`Vec<byte>`](/docs/reference/prelude/Vec). |
| [`ConstBytes`](/docs/reference/ffi/types/ConstBytes) | FFI tag for a read-only byte view (`const uint8_t *`) of a [`string`](/docs/reference/string) or [`Vec<byte>`](/docs/reference/prelude/Vec). |
