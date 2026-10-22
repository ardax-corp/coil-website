---
slug: "io/Stream"
title: "Stream"
description: "An open file, socket or standard stream."
module: "io"
kind: "class"
name: "Stream"
signature: "class Stream"
import: "use io::{Stream};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/io.hy#L47"
order: 0
---

An open file, socket or standard stream.

A `Stream` is an opaque heap handle made by [`open`](/docs/reference/io/open), [`stdin`](/docs/reference/io/stdin) / [`stdout`](/docs/reference/io/stdout) /
[`stderr`](/docs/reference/io/stderr), or the socket functions in [`io::net::tcp`](/docs/reference/io/net/tcp) and [`io::net::udp`](/docs/reference/io/net/udp).
Every stream is non-blocking: [`read`](/docs/reference/io/fn.read), [`write`](/docs/reference/io/fn.write) and the socket calls never
wait, they return `Err(IoError::WouldBlock)` when the OS is not ready.
Use [`wait_readable`](/docs/reference/io/wait_readable) / [`wait_writable`](/docs/reference/io/wait_writable) to wait, or the blocking adapters in
[`io::sync`](/docs/reference/io/sync) (`write_all`, `read_to_end`, ...).

The handle is closed by [`close`](/docs/reference/io/close), or when the garbage collector drops it.
`Stream` implements [`Read`](/docs/reference/io/Read) and [`Write`](/docs/reference/io/Write), so `s.read(buf)` and
`s.write(buf)` work as methods too.

## Methods

| Name | Description |
|------|-------------|
| [`attach`](/docs/reference/io/Stream/attach) | Installs package IO hooks on this stream in place and returns the same stream. |
| [`park`](/docs/reference/io/Stream/park) | Waits until this stream's descriptor is ready. |
| [`fd`](/docs/reference/io/Stream/fd) | Returns the OS file descriptor (socket handle on Windows) of this stream. |

## Examples

```coil
use io::{close, open, Stream};
use io::fs::{remove_file};
use io::sync::{read_to_end, write_all};
use string::{from_bytes, to_bytes};
use tests::assert;
let path = "/tmp/coil_doc_stream.txt";
let s: Stream = match open(path, "w") {
    Result::Ok(s) => s,
    Result::Err(_) => panic "open failed",
};
let _ = write_all(s, to_bytes("hello"));
let _ = close(s);

let r = match open(path, "r") {
    Result::Ok(s) => s,
    Result::Err(_) => panic "open failed",
};
let text = match read_to_end(r) {
    Result::Ok(bytes) => match from_bytes(bytes) {
        Result::Ok(t) => t,
        Result::Err(_) => "",
    },
    Result::Err(_) => "",
};
let _ = close(r);
let _ = remove_file(path);
assert!(text == "hello");
```

## See also

- [`io::open`](/docs/reference/io/open)
- [`io::stdin`](/docs/reference/io/stdin)
- [`io::stdout`](/docs/reference/io/stdout)
- [`io::stderr`](/docs/reference/io/stderr)
- [`io::net::tcp`](/docs/reference/io/net/tcp)
- [`io::net::udp`](/docs/reference/io/net/udp)
- [`io::read`](/docs/reference/io/fn.read)
- [`io::write`](/docs/reference/io/fn.write)
- [`io::wait_readable`](/docs/reference/io/wait_readable)
- [`io::wait_writable`](/docs/reference/io/wait_writable)
- [`io::sync`](/docs/reference/io/sync)
- [`io::close`](/docs/reference/io/close)
- [`io::Read`](/docs/reference/io/Read)
- [`io::Write`](/docs/reference/io/Write)
