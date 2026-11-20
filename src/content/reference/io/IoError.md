---
slug: "io/IoError"
title: "IoError"
description: "The error type of every io, io::fs and io::net operation."
module: "io"
kind: "enum"
name: "IoError"
signature: "enum IoError"
import: "use io::{IoError};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/9c93ed17ff191a9c4e7d41030d8a6da8342de21a/compiler/src/builtin_docs/io.coil#L151"
order: 1
---

The error type of every [`io`](/docs/reference/io), [`io::fs`](/docs/reference/io/fs) and [`io::net`](/docs/reference/io/net) operation.

OS errors map to the closest variant; anything without one is [`Other`](/docs/reference/io/IoError#variant-other).
`IoError` implements [`Show`](/docs/reference/prelude/ops/Show) (the variant name), so `%v` in `format`
prints it.

## Variants

### `WouldBlock` {#variant-wouldblock}

The operation is not ready yet and would have to wait; retry after [`wait_readable`](/docs/reference/io/wait_readable) / [`wait_writable`](/docs/reference/io/wait_writable).

### `NotFound` {#variant-notfound}

The file, directory or host was not found.

### `PermissionDenied` {#variant-permissiondenied}

The OS refused the operation.

### `AlreadyClosed` {#variant-alreadyclosed}

The stream was already closed.

### `InvalidInput` {#variant-invalidinput}

An argument was invalid: bad open mode, port out of range, bad UTF-8, wrong kind of stream, ...

### `Other` {#variant-other}

Any other OS error.

### `NotADirectory` {#variant-notadirectory}

A path component is not a directory.

### `AlreadyExists` {#variant-alreadyexists}

The file or directory already exists.

### `TimedOut` {#variant-timedout}

A deadline or OS timeout passed (distinct from [`WouldBlock`](/docs/reference/io/IoError#variant-wouldblock)).

### `Truncated` {#variant-truncated}

The data ended early (the OS reported an unexpected end of file).

### `Protocol` {#variant-protocol}

An attached package stream (such as coil-tls) reported a failure of
its own protocol, for example a TLS alert; the package's API says
which.

### `TooManyOpenFiles` {#variant-toomanyopenfiles}

The process or the system has as many files and sockets open as it
may (EMFILE / ENFILE). [`open`](/docs/reference/io/open) and `accept` first collect once, which
closes the streams nothing reaches, and try again; this is the error
when that did not free a descriptor. Close streams you are done with.

## Examples

```coil
use io::{open, IoError};
use string::{format};
use tests::assert;
let msg = match open("/tmp/coil_doc_no_such_dir/file.txt", "r") {
    Result::Ok(_) => "opened",
    Result::Err(IoError::NotFound) => "missing",
    Result::Err(_) => "other",
};
assert!(msg == "missing");
assert!(format("%v", IoError::TimedOut) == "TimedOut");
```

## See also

- [`io`](/docs/reference/io)
- [`io::fs`](/docs/reference/io/fs)
- [`io::net`](/docs/reference/io/net)
- [`Show`](/docs/reference/prelude/ops/Show)
- [`io::wait_readable`](/docs/reference/io/wait_readable)
- [`io::wait_writable`](/docs/reference/io/wait_writable)
- [`io::open`](/docs/reference/io/open)
