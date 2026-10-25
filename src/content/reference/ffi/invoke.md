---
slug: "ffi/invoke"
title: "invoke"
description: "Calls a function registered with declare, passing the tuple args."
module: "ffi"
kind: "fn"
name: "invoke"
signature: "fn invoke<A, T>(int lib, int fn_id, A args) -> Result<T, Error>"
import: "use ffi::{invoke};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/builtin_docs/ffi.hy#L143"
order: 4
---

Calls a function registered with [`declare`](/docs/reference/ffi/declare), passing the tuple `args`.

The arguments are converted to C according to the declared tags. The
result type comes from the [`declare`](/docs/reference/ffi/declare) return tag ([`unit`](/docs/reference/types/unit) for `Void`) when
the compiler can trace `fn_id` back to its [`declare`](/docs/reference/ffi/declare). Returns `Err` with
[`ErrorKind::ArityMismatch`](/docs/reference/ffi/ErrorKind#variant-aritymismatch) for a wrong argument count, or
[`ErrorKind::InvalidHandle`](/docs/reference/ffi/ErrorKind#variant-invalidhandle) for an unknown handle or id.

Native code runs with the full privileges of the process and is not
checked: a wrong signature or pointer can crash the program.

## Parameters

| Name | Type |
|------|------|
| `lib` | `int` |
| `fn_id` | `int` |
| `args` | `A` |

## Returns

`Result<T, Error>`

## Examples

```text
use ffi::{dload, declare, invoke};
use ffi::types::{Int};

let lib = dload("sum")?;
let sum_id = declare(lib, "sum", (Int, Int), Int)?;
let n = invoke(lib, sum_id, (40, 2))?; // 42
```

## See also

- [`ffi::declare`](/docs/reference/ffi/declare)
- [`unit`](/docs/reference/types/unit)
- [`ffi::ErrorKind`](/docs/reference/ffi/ErrorKind)
- [`dload`](/docs/reference/ffi/dload): Loads a native shared library and returns a handle to it.
- [`read_ints`](/docs/reference/ffi/read_ints): Copies `count` 64-bit integers (`int64_t`) from native memory at `ptr`.
