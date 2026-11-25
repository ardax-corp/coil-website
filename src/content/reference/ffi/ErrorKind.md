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
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/ffi.coil#L16"
order: 0
---

The category of an FFI failure, read from `Error.kind`.

Match on it to recover from a specific failure; use `Error.message` for
display. It implements [`Show`](/docs/reference/prelude/ops/Show), so `format("%v", k)` gives the variant name.

## Variants

### `LibraryNotFound` {#variant-librarynotfound}

The library passed the load gate but no file was found for it.

### `SymbolNotFound` {#variant-symbolnotfound}

The library does not export a symbol an `extern` block names.

### `ArityMismatch` {#variant-aritymismatch}

A call got a different number of arguments than the signature has
(fewer than the fixed prefix, for a variadic function).

### `Libffi` {#variant-libffi}

libffi rejected the call signature.

### `InvalidSignature` {#variant-invalidsignature}

The signature is malformed: an empty or missing name, no return
type, or `Void` used as an argument type.

### `InvalidHandle` {#variant-invalidhandle}

A library handle or function id the runtime does not know.

### `Unsupported` {#variant-unsupported}

The call cannot be marshalled: an unsupported tag or value (such as
`Bytes` as a return type) or a string with a NUL byte.

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
- [`Error`](/docs/reference/ffi/Error): The error of loading an `extern` block's library or one of its functions.
