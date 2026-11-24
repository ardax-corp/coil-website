---
slug: "stdlib/io/sync/read_to_end"
package: "stdlib"
title: "read_to_end"
description: "Reads from r until it ends and returns everything read."
module: "io::sync"
kind: "fn"
name: "read_to_end"
signature: "fn read_to_end<R: Read>(R r) -> Result<Vec<byte>, IoError>"
import: "use io::sync::{read_to_end};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/88dc9dc329c75d41081b17f35d2886415a2b7cd1/src/io/sync.coil#L103"
order: 2
---

Reads from `r` until it ends and returns everything read.

## Parameters

| Name | Type |
|------|------|
| `r` | `R` |

## Returns

`Result<Vec<byte>, IoError>`

## See also

- [`write_all`](/packages/stdlib/reference/io/sync/write_all): Writes all of `buf` to `w`, waiting whenever it is not ready.
- [`read_exact`](/packages/stdlib/reference/io/sync/read_exact): Fills all of `buf` from `r`, waiting whenever no data is ready.
- [`accept_wait`](/packages/stdlib/reference/io/sync/accept_wait): Waits for the next connection on a TCP `listener` and returns its stream.
- [`recv_from_wait`](/packages/stdlib/reference/io/sync/recv_from_wait): Waits for a UDP datagram, reads it into `buf`, and returns `(bytes, sender host, sender port)`.
- [`send_to_wait`](/packages/stdlib/reference/io/sync/send_to_wait): Sends `buf` as one UDP datagram to `host`:`port`, waiting while the socket is not ready.
- [`copy`](/packages/stdlib/reference/io/sync/copy): Copies the file `src` to `dst`.
- [`print`](/packages/stdlib/reference/io/sync/print): Writes `s` to standard output, without a newline.
- [`println`](/packages/stdlib/reference/io/sync/println): Writes `s` and a newline to standard output.
