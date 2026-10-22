---
slug: "io/Stream/attach"
title: "Stream::attach"
description: "Installs package IO hooks on this stream in place and returns the same stream."
module: "io"
kind: "method"
name: "attach"
parent: "Stream"
signature: "pub fn attach(int ptr, int read, int write, int shutdown, int free) -> Result<Stream, IoError>"
import: "use io::{Stream};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/io.hy#L71"
order: 0
---

Installs package IO hooks on this stream in place and returns the same stream.

`ptr` is the package's session pointer and [`read`](/docs/reference/io/fn.read), [`write`](/docs/reference/io/fn.write),
`shutdown` and `free` are C function pointers (as [`int`](/docs/reference/types/int), usually
looked up through `dload`). After [`attach`](/docs/reference/io/attach), [`read`](/docs/reference/io/fn.read) / [`write`](/docs/reference/io/fn.write) on the
stream go through those hooks, [`close`](/docs/reference/io/close) (or a GC drop) calls `shutdown`
then `free`, and the socket keeps its descriptor. This is how the
coil-tls package turns a TCP stream into a TLS stream.

Returns `Err(IoError::InvalidInput)` when `ptr` is `0` or the stream is
already attached, and `Err(IoError::AlreadyClosed)` on a closed stream.
A program that reaches [`attach`](/docs/reference/io/attach) compiles only with `--allow-attach`.

Called on a `Stream` value as `value.attach(…)`.

## Parameters

| Name | Type |
|------|------|
| `ptr` | `int` |
| `read` | `int` |
| `write` | `int` |
| `shutdown` | `int` |
| `free` | `int` |

## Returns

`Result<Stream, IoError>`

## Examples

```text
use io::net::tcp::{connect};
let s = connect("example.com", 443)?;
// session, rd, wr, sd, fr: a session pointer and C hooks from a dload'ed library
let tls = s.attach(session, rd, wr, sd, fr)?;
```

## See also

- [`io::read`](/docs/reference/io/fn.read)
- [`io::write`](/docs/reference/io/fn.write)
- [`int`](/docs/reference/types/int)
- [`io::attach`](/docs/reference/io/attach)
- [`io::close`](/docs/reference/io/close)
- [`Stream`](/docs/reference/io/Stream): An open file, socket or standard stream.
- [`Stream::park`](/docs/reference/io/Stream/park): Waits until this stream's descriptor is ready.
- [`Stream::fd`](/docs/reference/io/Stream/fd): Returns the OS file descriptor (socket handle on Windows) of this stream.
