---
slug: "stdlib/io/sync/index"
package: "stdlib"
title: "io::sync"
description: "Blocking IO helpers: println, read_line, write_all, read_to_end."
module: "io::sync"
kind: "module"
name: "io::sync"
origin: "stdlib"
auto: false
order: 18
---

The [`io`](/packages/stdlib/reference/io) functions return as soon as a stream is not ready. These helpers wait until the whole job is done, which is what most programs want. Inside a task, waiting lets the other tasks run.

```coil
use io::sync::{println};
use string::{format};

fn main() {
    println(format("%i items", 3))?;
}
```

Part of [coil-stdlib](/packages/stdlib), not the compiler. spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use io::sync::{write_all, read_exact};
```

## Functions

| Name | Description |
|------|-------------|
| [`write_all`](/packages/stdlib/reference/io/sync/write_all) | Writes all of `buf` to `s`, waiting whenever the stream is not ready. |
| [`read_exact`](/packages/stdlib/reference/io/sync/read_exact) | Fills all of `buf` from `s`, waiting whenever no data is ready. |
| [`read_to_end`](/packages/stdlib/reference/io/sync/read_to_end) | Reads from `s` until it ends and returns everything read. |
| [`accept_wait`](/packages/stdlib/reference/io/sync/accept_wait) | Waits for the next connection on a TCP `listener` and returns its stream. |
| [`recv_from_wait`](/packages/stdlib/reference/io/sync/recv_from_wait) | Waits for a UDP datagram, reads it into `buf`, and returns `(bytes, sender host, sender port)`. |
| [`send_to_wait`](/packages/stdlib/reference/io/sync/send_to_wait) | Sends `buf` as one UDP datagram to `host`:`port`, waiting while the socket is not ready. |
| [`copy`](/packages/stdlib/reference/io/sync/copy) | Copies the file `src` to `dst`. |
| [`print`](/packages/stdlib/reference/io/sync/print) | Writes `s` to standard output, without a newline. |
| [`println`](/packages/stdlib/reference/io/sync/println) | Writes `s` and a newline to standard output. |
| [`eprintln`](/packages/stdlib/reference/io/sync/eprintln) | Writes `s` and a newline to standard error. |
| [`read_line`](/packages/stdlib/reference/io/sync/read_line) | Reads one line from `s`, without its line ending (LF or CRLF). |
