---
slug: "stdlib/io/sync/println"
package: "stdlib"
title: "println"
description: "Writes s and a newline to standard output."
module: "io::sync"
kind: "fn"
name: "println"
signature: "fn println(string s) -> Result<int, IoError>"
import: "use io::sync::{println};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/88dc9dc329c75d41081b17f35d2886415a2b7cd1/src/io/sync.coil#L257"
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
- [`write_all`](/packages/stdlib/reference/io/sync/write_all): Writes all of `buf` to `w`, waiting whenever it is not ready.
- [`read_exact`](/packages/stdlib/reference/io/sync/read_exact): Fills all of `buf` from `r`, waiting whenever no data is ready.
- [`read_to_end`](/packages/stdlib/reference/io/sync/read_to_end): Reads from `r` until it ends and returns everything read.
- [`accept_wait`](/packages/stdlib/reference/io/sync/accept_wait): Waits for the next connection on a TCP `listener` and returns its stream.
- [`recv_from_wait`](/packages/stdlib/reference/io/sync/recv_from_wait): Waits for a UDP datagram, reads it into `buf`, and returns `(bytes, sender host, sender port)`.
- [`send_to_wait`](/packages/stdlib/reference/io/sync/send_to_wait): Sends `buf` as one UDP datagram to `host`:`port`, waiting while the socket is not ready.
