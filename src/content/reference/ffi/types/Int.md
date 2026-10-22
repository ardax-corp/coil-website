---
slug: "ffi/types/Int"
title: "Int"
description: "FFI tag for a 64-bit signed integer (int64_t), passed from and returned as int."
module: "ffi::types"
kind: "class"
name: "Int"
signature: "class Int"
import: "use ffi::types::{Int};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/ffi/types.hy#L20"
order: 0
---

FFI tag for a 64-bit signed integer (`int64_t`), passed from and returned as [`int`](/docs/reference/types/int).

The bare name [`int`](/docs/reference/types/int) means the same in `declare` and `extern` blocks.

## Examples

```text
use ffi::{dload, declare, invoke};
use ffi::types::{Int};

let lib = dload("sum")?;
let sum_id = declare(lib, "sum", (Int, Int), Int)?; // int64_t sum(int64_t, int64_t)
let n = invoke(lib, sum_id, (40, 2))?;
```

## See also

- [`int`](/docs/reference/types/int)
- [`Float`](/docs/reference/ffi/types/Float): FFI tag for a 64-bit float (double), passed from and returned as float.
- [`String`](/docs/reference/ffi/types/String): FFI tag for a NUL-terminated C string (const char *), passed from and returned as string.
- [`Void`](/docs/reference/ffi/types/Void): FFI tag for no value (void), valid only as a return type.
- [`Bool`](/docs/reference/ffi/types/Bool): FFI tag for a C bool (one byte, 0 or 1), passed from and returned as bool.
- [`Int8`](/docs/reference/ffi/types/Int8): FFI tag for an 8-bit signed integer (int8_t), passed from and returned as int.
- [`Int16`](/docs/reference/ffi/types/Int16): FFI tag for a 16-bit signed integer (int16_t), passed from and returned as int.
- [`Int32`](/docs/reference/ffi/types/Int32): FFI tag for a 32-bit signed integer (int32_t), passed from and returned as int.
