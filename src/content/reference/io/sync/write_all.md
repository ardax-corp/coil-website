---
slug: "io/sync/write_all"
title: "write_all"
description: "Writes all of buf to s, waiting whenever the stream is not ready."
module: "io::sync"
kind: "fn"
name: "write_all"
signature: "fn write_all(Stream s, Vec<byte> buf) -> Result<int, IoError>"
import: "use io::sync::{write_all};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/io/sync.hy#L29"
order: 0
---

Writes all of `buf` to `s`, waiting whenever the stream is not ready.

[`io::write`](/docs/reference/io/fn.write) may write only part of a buffer; this keeps going until every
byte is out, then returns `Ok(0)`. Inside a task, the waits let other
tasks run.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `buf` | `Vec<byte>` |

## Returns

`Result<int, IoError>`

## Examples

```coil
use io::sync::{write_all};
use tests::assert;
use io::{stdout};
use string::{to_bytes};
let written = write_all(stdout(), to_bytes("hi\n"));
assert!(written.is_ok());
```

## See also

- [`io::write`](/docs/reference/io/fn.write)
- [`read_exact`](/docs/reference/io/sync/read_exact): Fills all of `buf` from `s`, waiting whenever no data is ready.
- [`read_to_end`](/docs/reference/io/sync/read_to_end): Reads from `s` until it ends and returns everything read.
- [`accept_wait`](/docs/reference/io/sync/accept_wait): Waits for the next connection on a TCP `listener` and returns its stream.
- [`recv_from_wait`](/docs/reference/io/sync/recv_from_wait): Waits for a UDP datagram, reads it into `buf`, and returns `(bytes, sender host, sender port)`.
- [`send_to_wait`](/docs/reference/io/sync/send_to_wait): Sends `buf` as one UDP datagram to `host`:`port`, waiting while the socket is not ready.
- [`copy`](/docs/reference/io/sync/copy): Copies the file `src` to `dst`.
- [`print`](/docs/reference/io/sync/print): Writes `s` to standard output, without a newline.
