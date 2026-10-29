---
slug: "io/sync/println"
title: "println"
description: "Writes s and a newline to standard output."
module: "io::sync"
kind: "fn"
name: "println"
signature: "fn println(string s) -> Result<int, IoError>"
import: "use io::sync::{println};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/69c79b1dd8c070fe7ca03a71c7a372ea4cc06f82/src/io/sync.hy#L255"
order: 8
---

Writes `s` and a newline to standard output.

The usual way to print. It returns a [`Result`](/docs/reference/prelude/Result) like all IO, so write
`println(…)?;` in a function that can return the error (`main` can).
Build the text with [`string::format`](/docs/reference/string/format).

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<int, IoError>`

## Errors

Returns `Err` when standard output cannot be written (for example, a closed pipe).

## Examples

```coil
use io::sync::{println};
use string::{format};

fn main() {
    println("Hello, Coil!")?;
    println(format("%i + %i = %i", 2, 2, 2 + 2))?;
}
```

## See also

- [`Result`](/docs/reference/prelude/Result)
- [`string::format`](/docs/reference/string/format)
- [`write_all`](/docs/reference/io/sync/write_all): Writes all of `buf` to `s`, waiting whenever the stream is not ready.
- [`read_exact`](/docs/reference/io/sync/read_exact): Fills all of `buf` from `s`, waiting whenever no data is ready.
- [`read_to_end`](/docs/reference/io/sync/read_to_end): Reads from `s` until it ends and returns everything read.
- [`accept_wait`](/docs/reference/io/sync/accept_wait): Waits for the next connection on a TCP `listener` and returns its stream.
- [`recv_from_wait`](/docs/reference/io/sync/recv_from_wait): Waits for a UDP datagram, reads it into `buf`, and returns `(bytes, sender host, sender port)`.
- [`send_to_wait`](/docs/reference/io/sync/send_to_wait): Sends `buf` as one UDP datagram to `host`:`port`, waiting while the socket is not ready.
