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
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/builtin_docs/io.hy#L151"
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

### `Certificate` {#variant-certificate}

A TLS certificate was rejected (reported by attached packages such as coil-tls).

### `Handshake` {#variant-handshake}

A TLS handshake failed (reported by attached packages such as coil-tls).

### `NotATerminal` {#variant-notaterminal}

The stream is not a terminal ([`io::tty`](/docs/reference/io/tty) calls on a file, pipe or socket).

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
- [`io::tty`](/docs/reference/io/tty)
