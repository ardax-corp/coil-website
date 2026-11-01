---
slug: "stdlib/io/sync/eprintln"
package: "stdlib"
title: "eprintln"
description: "Writes s and a newline to standard error. Use it for diagnostics, so they stay out of the program's output."
module: "io::sync"
kind: "fn"
name: "eprintln"
signature: "fn eprintln(string s) -> Result<int, IoError>"
import: "use io::sync::{eprintln};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/io/sync.coil#L268"
order: 9
---

Writes `s` and a newline to standard error. Use it for diagnostics, so they stay out of the program's output.

## Parameters

| Name | Type |
|------|------|
| `s` | `string` |

## Returns

`Result<int, IoError>`

## Examples

```coil
use io::sync::{eprintln};
use tests::assert;
eprintln("warning: no config file, using defaults")?;
```

## See also

- [`write_all`](/packages/stdlib/reference/io/sync/write_all): Writes all of `buf` to `s`, waiting whenever the stream is not ready.
- [`read_exact`](/packages/stdlib/reference/io/sync/read_exact): Fills all of `buf` from `s`, waiting whenever no data is ready.
- [`read_to_end`](/packages/stdlib/reference/io/sync/read_to_end): Reads from `s` until it ends and returns everything read.
- [`accept_wait`](/packages/stdlib/reference/io/sync/accept_wait): Waits for the next connection on a TCP `listener` and returns its stream.
- [`recv_from_wait`](/packages/stdlib/reference/io/sync/recv_from_wait): Waits for a UDP datagram, reads it into `buf`, and returns `(bytes, sender host, sender port)`.
- [`send_to_wait`](/packages/stdlib/reference/io/sync/send_to_wait): Sends `buf` as one UDP datagram to `host`:`port`, waiting while the socket is not ready.
- [`copy`](/packages/stdlib/reference/io/sync/copy): Copies the file `src` to `dst`.
- [`print`](/packages/stdlib/reference/io/sync/print): Writes `s` to standard output, without a newline.
