---
slug: "stdlib/io/sync/read_line"
package: "stdlib"
title: "read_line"
description: "Reads one line from r, without its line ending (LF or CRLF)."
module: "io::sync"
kind: "fn"
name: "read_line"
signature: "fn read_line<R: Read>(R r) -> Result<Option<string>, IoError>"
import: "use io::sync::{read_line};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/88dc9dc329c75d41081b17f35d2886415a2b7cd1/src/io/sync.coil#L300"
order: 10
---

Reads one line from `r`, without its line ending (LF or CRLF).

Returns `None` at the end of the input. A last line without a newline is
still returned.

## Parameters

| Name | Type |
|------|------|
| `r` | `R` |

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

- [`write_all`](/packages/stdlib/reference/io/sync/write_all): Writes all of `buf` to `w`, waiting whenever it is not ready.
- [`read_exact`](/packages/stdlib/reference/io/sync/read_exact): Fills all of `buf` from `r`, waiting whenever no data is ready.
- [`read_to_end`](/packages/stdlib/reference/io/sync/read_to_end): Reads from `r` until it ends and returns everything read.
- [`accept_wait`](/packages/stdlib/reference/io/sync/accept_wait): Waits for the next connection on a TCP `listener` and returns its stream.
- [`recv_from_wait`](/packages/stdlib/reference/io/sync/recv_from_wait): Waits for a UDP datagram, reads it into `buf`, and returns `(bytes, sender host, sender port)`.
- [`send_to_wait`](/packages/stdlib/reference/io/sync/send_to_wait): Sends `buf` as one UDP datagram to `host`:`port`, waiting while the socket is not ready.
- [`copy`](/packages/stdlib/reference/io/sync/copy): Copies the file `src` to `dst`.
- [`print`](/packages/stdlib/reference/io/sync/print): Writes `s` to standard output, without a newline.
