---
slug: "ffi/types/ConstBytes"
title: "ConstBytes"
description: "FFI tag for a read-only byte view (const uint8_t *) of a string or Vec<byte>."
module: "ffi::types"
kind: "class"
name: "ConstBytes"
signature: "class ConstBytes"
import: "use ffi::types::{ConstBytes};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/builtin_docs/ffi/types.hy#L159"
order: 16
---

FFI tag for a read-only byte view (`const uint8_t *`) of a [`string`](/docs/reference/types/string) or [`Vec<byte>`](/docs/reference/prelude/Vec).

A string is lent in place without a copy, and so is a packed [`Vec<byte>`](/docs/reference/prelude/Vec)
under the same rules as [`Bytes`](/docs/reference/ffi/types/Bytes); any other [`Vec<byte>`](/docs/reference/prelude/Vec) is copied in once
and never copied back. No NUL terminator is added, so pass the length
separately. Argument only.

## See also

- [`string`](/docs/reference/types/string)
- [`Vec`](/docs/reference/prelude/Vec)
- [`ffi::types::Bytes`](/docs/reference/ffi/types/Bytes)
- [`Int`](/docs/reference/ffi/types/Int): FFI tag for a 64-bit signed integer (`int64_t`), passed from and returned as `int`.
- [`Float`](/docs/reference/ffi/types/Float): FFI tag for a 64-bit float (`double`), passed from and returned as `float`.
- [`String`](/docs/reference/ffi/types/String): FFI tag for a NUL-terminated C string (`const char *`), passed from and returned as `string`.
- [`Void`](/docs/reference/ffi/types/Void): FFI tag for no value (`void`), valid only as a return type.
- [`Bool`](/docs/reference/ffi/types/Bool): FFI tag for a C `bool` (one byte, `0` or `1`), passed from and returned as `bool`.
