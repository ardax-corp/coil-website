---
slug: "io/sync/read_line"
title: "read_line"
description: "Reads one line from s, without its line ending (LF or CRLF)."
module: "io::sync"
kind: "fn"
name: "read_line"
signature: "fn read_line(Stream s) -> Result<Option<string>, IoError>"
import: "use io::sync::{read_line};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/59fa621e476425113f44db5753bef7abf7977a40/src/io/sync.hy#L290"
order: 10
---

Reads one line from `s`, without its line ending (LF or CRLF).

Returns `None` at the end of the stream. A last line without a newline is
still returned.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<Option<string>, IoError>`

## Examples

```coil
use io::{stdin};
use io::sync::{read_line, println};

fn main() {
    while let Option::Some(line) = read_line(stdin())? {
        println(line)?;
    }
}
```

## See also

- [`write_all`](/docs/reference/io/sync/write_all): Writes all of `buf` to `s`, waiting whenever the stream is not ready.
- [`read_exact`](/docs/reference/io/sync/read_exact): Fills all of `buf` from `s`, waiting whenever no data is ready.
- [`read_to_end`](/docs/reference/io/sync/read_to_end): Reads from `s` until it ends and returns everything read.
- [`accept_wait`](/docs/reference/io/sync/accept_wait): Waits for the next connection on a TCP `listener` and returns its stream.
- [`recv_from_wait`](/docs/reference/io/sync/recv_from_wait): Waits for a UDP datagram, reads it into `buf`, and returns `(bytes, sender host, sender port)`.
- [`send_to_wait`](/docs/reference/io/sync/send_to_wait): Sends `buf` as one UDP datagram to `host`:`port`, waiting while the socket is not ready.
- [`copy`](/docs/reference/io/sync/copy): Copies the file `src` to `dst`.
- [`print`](/docs/reference/io/sync/print): Writes `s` to standard output, without a newline.
