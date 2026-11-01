---
slug: "ffi/ErrorKind"
title: "ErrorKind"
description: "The category of an FFI failure, read from Error.kind."
module: "ffi"
kind: "enum"
name: "ErrorKind"
signature: "enum ErrorKind"
import: "use ffi::{ErrorKind};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/ffi.coil#L16"
order: 0
---

The category of an FFI failure, read from `Error.kind`.

Match on it to recover from a specific failure; use `Error.message` for
display. It implements [`Show`](/docs/reference/prelude/ops/Show), so `format("%v", k)` gives the variant name.

## Variants

### `LibraryNotFound` {#variant-librarynotfound}

The library passed the load gate but no file was found for it.

### `SymbolNotFound` {#variant-symbolnotfound}

[`declare`](/docs/reference/ffi/declare) named a symbol the library does not export.

### `ArityMismatch` {#variant-aritymismatch}

[`invoke`](/docs/reference/ffi/invoke) got a different number of arguments than [`declare`](/docs/reference/ffi/declare) gave
(fewer than the fixed prefix, for a variadic function).

### `Libffi` {#variant-libffi}

libffi rejected the call signature.

### `InvalidSignature` {#variant-invalidsignature}

The signature is malformed: an empty or missing name, no return
type, or `Void` used as an argument type.

### `InvalidHandle` {#variant-invalidhandle}

A library handle or function id is not one [`dload`](/docs/reference/ffi/dload) / [`declare`](/docs/reference/ffi/declare)
returned.

### `Unsupported` {#variant-unsupported}

The call cannot be marshalled: an unsupported tag or value (such as
`Bytes` as a return type), a string with a NUL byte, or a
[`read_ints`](/docs/reference/ffi/read_ints) count out of range or null pointer.

### `Other` {#variant-other}

Anything else, including a library the load gate denied.

## Examples

```coil
use ffi::{ErrorKind};
use string::{format};
use tests::assert;
assert!(format("%v", ErrorKind::SymbolNotFound) == "SymbolNotFound");
```

## See also

- [`Show`](/docs/reference/prelude/ops/Show)
- [`ffi::declare`](/docs/reference/ffi/declare)
- [`ffi::invoke`](/docs/reference/ffi/invoke)
- [`ffi::dload`](/docs/reference/ffi/dload)
- [`ffi::read_ints`](/docs/reference/ffi/read_ints)
- [`Error`](/docs/reference/ffi/Error): The error of `dload`, `declare`, `invoke` and `read_ints`.
