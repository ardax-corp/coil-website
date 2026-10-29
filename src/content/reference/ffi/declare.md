---
slug: "ffi/declare"
title: "declare"
description: "Looks up the C function name in a loaded library and records its signature."
module: "ffi"
kind: "fn"
name: "declare"
signature: "fn declare<A, R>(int lib, string name, A arg_types, R ret_type, bool variadic) -> Result<int, Error>"
import: "use ffi::{declare};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/builtin_docs/ffi.hy#L120"
order: 3
---

Looks up the C function `name` in a loaded library and records its signature.

`arg_types` is a tuple of FFI type tags from [`ffi::types`](/docs/reference/ffi/types) (`(Int, Ptr)`,
or `()` for none), and `ret_type` is one tag (`Void` for no result).
Bare names ([`int`](/docs/reference/types/int), [`float`](/docs/reference/types/float), [`string`](/docs/reference/types/string), `void`) and `extern struct` types
are accepted too. Pass `true` as the optional fifth argument for a C
variadic function such as `printf`: `arg_types` is then the fixed prefix.

Returns the function id for [`invoke`](/docs/reference/ffi/invoke), or `Err` with
[`ErrorKind::SymbolNotFound`](/docs/reference/ffi/ErrorKind#variant-symbolnotfound), `Libffi` or `InvalidSignature`.

## Parameters

| Name | Type |
|------|------|
| `lib` | `int` |
| `name` | `string` |
| `arg_types` | `A` |
| `ret_type` | `R` |
| `variadic` | `bool` |

## Returns

`Result<int, Error>`

## Examples

```text
use ffi::{dload, declare, invoke, Error};
use ffi::types::{Int};

fn add(int a, int b) -> Result<int, Error> {
    let lib = dload("sum")?;
    let sum_id = declare(lib, "sum", (Int, Int), Int)?;
    return invoke(lib, sum_id, (a, b));
}
```

## See also

- [`ffi::types`](/docs/reference/ffi/types)
- [`int`](/docs/reference/types/int)
- [`float`](/docs/reference/types/float)
- [`string`](/docs/reference/types/string)
- [`ffi::invoke`](/docs/reference/ffi/invoke)
- [`ffi::ErrorKind`](/docs/reference/ffi/ErrorKind)
- [`dload`](/docs/reference/ffi/dload): Loads a native shared library and returns a handle to it.
- [`read_ints`](/docs/reference/ffi/read_ints): Copies `count` 64-bit integers (`int64_t`) from native memory at `ptr`.
