---
slug: "ffi/types/Bool"
title: "Bool"
description: "FFI tag for a C bool (one byte, 0 or 1), passed from and returned as bool."
module: "ffi::types"
kind: "class"
name: "Bool"
signature: "class Bool"
import: "use ffi::types::{Bool};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/ffi/types.coil#L42"
order: 4
---

FFI tag for a C [`bool`](/docs/reference/types/bool) (one byte, `0` or `1`), passed from and returned as [`bool`](/docs/reference/types/bool).

## See also

- [`bool`](/docs/reference/types/bool)
- [`Int`](/docs/reference/ffi/types/Int): FFI tag for a 64-bit signed integer (`int64_t`), passed from and returned as `int`.
- [`Float`](/docs/reference/ffi/types/Float): FFI tag for a 64-bit float (`double`), passed from and returned as `float`.
- [`String`](/docs/reference/ffi/types/String): FFI tag for a NUL-terminated C string (`const char *`), passed from and returned as `string`.
- [`Void`](/docs/reference/ffi/types/Void): FFI tag for no value (`void`), valid only as a return type.
- [`Int8`](/docs/reference/ffi/types/Int8): FFI tag for an 8-bit signed integer (`int8_t`), passed from and returned as `int`.
- [`Int16`](/docs/reference/ffi/types/Int16): FFI tag for a 16-bit signed integer (`int16_t`), passed from and returned as `int`.
- [`Int32`](/docs/reference/ffi/types/Int32): FFI tag for a 32-bit signed integer (`int32_t`), passed from and returned as `int`.
