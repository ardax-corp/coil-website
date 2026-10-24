---
slug: "io/Stream/fd"
title: "Stream::fd"
description: "Returns the OS file descriptor (socket handle on Windows) of this stream."
module: "io"
kind: "method"
name: "fd"
parent: "Stream"
signature: "pub fn fd() -> Result<int, IoError>"
import: "use io::{Stream};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/builtin_docs/io.hy#L128"
order: 2
---

Returns the OS file descriptor (socket handle on Windows) of this stream.

The descriptor stays owned by the stream: do not close it yourself.
[`stdin`](/docs/reference/io/stdin), [`stdout`](/docs/reference/io/stdout) and [`stderr`](/docs/reference/io/stderr) return duplicated descriptors, so their
`fd` is not `0`, `1` or `2`. Returns `Err(IoError::InvalidInput)` once
the stream is closed.

Called on a `Stream` value as `value.fd(…)`.

## Returns

`Result<int, IoError>`

## Examples

```coil
use io::{stdout};
use tests::assert;
let fd = match stdout().fd() {
    Result::Ok(fd) => fd,
    Result::Err(_) => -1,
};
assert!(fd >= 0);
```

## See also

- [`io::stdin`](/docs/reference/io/stdin)
- [`io::stdout`](/docs/reference/io/stdout)
- [`io::stderr`](/docs/reference/io/stderr)
- [`Stream`](/docs/reference/io/Stream): An open file, socket or standard stream.
- [`Stream::attach`](/docs/reference/io/Stream/attach): Installs package IO hooks on this stream in place and returns the same stream.
- [`Stream::park`](/docs/reference/io/Stream/park): Waits until this stream's descriptor is ready.
