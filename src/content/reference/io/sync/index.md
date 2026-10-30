---
slug: "io/sync/index"
title: "io::sync"
description: "Blocking IO helpers: println, read_line, write_all, read_to_end."
module: "io::sync"
kind: "module"
name: "io::sync"
origin: "stdlib"
auto: false
order: 34
---

The [`io`](/docs/reference/io) functions return as soon as a stream is not ready. These helpers wait until the whole job is done, which is what most programs want. Inside a task, waiting lets the other tasks run.

```coil
use io::sync::{println};
use string::{format};

fn main() {
    println(format("%i items", 3))?;
}
```

Part of [coil-stdlib](/packages/stdlib). spool projects declare it as their `stdlib` dependency (`spool new` adds it); with plain `coil`, pass `--root` with the `src` of a coil-stdlib checkout.

Import what you use (`use path::*` is not allowed):

```coil
use io::sync::{write_all, read_exact};
```

## Functions

| Name | Description |
|------|-------------|
| [`write_all`](/docs/reference/io/sync/write_all) | Writes all of `buf` to `s`, waiting whenever the stream is not ready. |
| [`read_exact`](/docs/reference/io/sync/read_exact) | Fills all of `buf` from `s`, waiting whenever no data is ready. |
| [`read_to_end`](/docs/reference/io/sync/read_to_end) | Reads from `s` until it ends and returns everything read. |
| [`accept_wait`](/docs/reference/io/sync/accept_wait) | Waits for the next connection on a TCP `listener` and returns its stream. |
| [`recv_from_wait`](/docs/reference/io/sync/recv_from_wait) | Waits for a UDP datagram, reads it into `buf`, and returns `(bytes, sender host, sender port)`. |
| [`send_to_wait`](/docs/reference/io/sync/send_to_wait) | Sends `buf` as one UDP datagram to `host`:`port`, waiting while the socket is not ready. |
| [`copy`](/docs/reference/io/sync/copy) | Copies the file `src` to `dst`. |
| [`print`](/docs/reference/io/sync/print) | Writes `s` to standard output, without a newline. |
| [`println`](/docs/reference/io/sync/println) | Writes `s` and a newline to standard output. |
| [`eprintln`](/docs/reference/io/sync/eprintln) | Writes `s` and a newline to standard error. |
| [`read_line`](/docs/reference/io/sync/read_line) | Reads one line from `s`, without its line ending (LF or CRLF). |
