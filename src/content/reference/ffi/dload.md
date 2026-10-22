---
slug: "ffi/dload"
title: "dload"
description: "Loads a native shared library and returns a handle to it."
module: "ffi"
kind: "fn"
name: "dload"
signature: "fn dload(string path) -> Result<int, Error>"
import: "use ffi::{dload};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/ffi.hy#L95"
order: 2
---

Loads a native shared library and returns a handle to it.

`path` is a stem (`"sum"` finds `libsum.so`, `libsum.dylib` or `sum.dll`
in the `--ffi-search-path` directories), a relative path or an absolute
path. Every library is gated by its file-name stem: the build needs
`--allow-dload STEM` (a literal stem without it is error `E0410`, and a
non-literal path is `E0411`; `-A` does not grant it), and at run time the
stem also needs `--dload-pin STEM=SHA256` or `--dload-trusted STEM`. A
denied load is `Err` with [`ErrorKind::Other`](/docs/reference/ffi/ErrorKind#variant-other). The libc aliases
(`dload("c")`) are always denied.

Returns `Err` with [`ErrorKind::LibraryNotFound`](/docs/reference/ffi/ErrorKind#variant-librarynotfound) when the stem is allowed
but no file is found.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |

## Returns

`Result<int, Error>`

## Examples

```text
use ffi::{dload, ErrorKind};

// coil --allow-dload sum --dload-trusted sum --ffi-search-path native app.hy
let lib = match dload("sum") {
    Result::Ok(h) => h,
    Result::Err(e) => match e.kind {
        ErrorKind::LibraryNotFound => panic "build libsum first",
        default => panic e.message,
    },
};
```

## See also

- [`ffi::ErrorKind`](/docs/reference/ffi/ErrorKind)
- [`declare`](/docs/reference/ffi/declare): Looks up the C function name in a loaded library and records its signature.
- [`invoke`](/docs/reference/ffi/invoke): Calls a function registered with declare, passing the tuple args.
- [`read_ints`](/docs/reference/ffi/read_ints): Copies count 64-bit integers (int64_t) from native memory at ptr.
