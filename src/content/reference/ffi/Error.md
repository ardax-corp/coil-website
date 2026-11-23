---
slug: "ffi/Error"
title: "Error"
description: "The error of loading an extern block's library or one of its functions."
module: "ffi"
kind: "enum"
name: "Error"
signature: "enum Error"
import: "use ffi::{Error};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/5949c73a89666e807490a6e6573daf60068768ea/compiler/src/builtin_docs/ffi.coil#L64"
order: 1
---

The error of loading an `extern` block's library or one of its functions.

A program never sees one: an `extern` library that does not load stops
the program with its message. To load a library while the program runs,
use the coil-ffi package, which has an error type of its own.

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

- [`ffi::ErrorKind`](/docs/reference/ffi/ErrorKind)
