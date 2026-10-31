---
slug: "ffi/Error"
title: "Error"
description: "The error of dload, declare, invoke and read_ints."
module: "ffi"
kind: "enum"
name: "Error"
signature: "enum Error"
import: "use ffi::{Error};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/ffi.hy#L62"
order: 1
---

The error of [`dload`](/docs/reference/ffi/dload), [`declare`](/docs/reference/ffi/declare), [`invoke`](/docs/reference/ffi/invoke) and [`read_ints`](/docs/reference/ffi/read_ints).

One record variant: read `e.kind` (an [`ErrorKind`](/docs/reference/ffi/ErrorKind)) to decide what to do
and `e.message` for a human-readable description.

## Variants

### `Error { kind: ErrorKind, message: string }` {#variant-error}

The failure's category and its message.

## Examples

```coil
use ffi::{Error, ErrorKind};
use tests::assert;
fn describe(Error e) -> string {
    return match e.kind {
        ErrorKind::LibraryNotFound => "missing library: " + e.message,
        default => e.message,
    };
}

fn main() {
    let e = Error::Error { kind: ErrorKind::LibraryNotFound, message: "demo" };
    assert!(describe(e) == "missing library: demo");
}
```

## See also

- [`ffi::dload`](/docs/reference/ffi/dload)
- [`ffi::declare`](/docs/reference/ffi/declare)
- [`ffi::invoke`](/docs/reference/ffi/invoke)
- [`ffi::read_ints`](/docs/reference/ffi/read_ints)
- [`ffi::ErrorKind`](/docs/reference/ffi/ErrorKind)
