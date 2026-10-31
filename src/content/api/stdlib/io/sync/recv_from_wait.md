---
slug: "stdlib/io/sync/recv_from_wait"
package: "stdlib"
title: "recv_from_wait"
description: "Waits for a UDP datagram, reads it into buf, and returns (bytes, sender host, sender port)."
module: "io::sync"
kind: "fn"
name: "recv_from_wait"
signature: "fn recv_from_wait(Stream s, Vec<byte> buf) -> Result<(int, string, int), IoError>"
import: "use io::sync::{recv_from_wait};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/fdab30f88861e639fc9a7cc9dbbaaee8b5909998/src/io/sync.hy#L161"
order: 4
---

Waits for a UDP datagram, reads it into `buf`, and returns `(bytes, sender host, sender port)`.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `buf` | `Vec<byte>` |

## Returns

`Result<(int, string, int), IoError>`

## See also

- [`write_all`](/packages/stdlib/reference/io/sync/write_all): Writes all of `buf` to `s`, waiting whenever the stream is not ready.
- [`read_exact`](/packages/stdlib/reference/io/sync/read_exact): Fills all of `buf` from `s`, waiting whenever no data is ready.
- [`read_to_end`](/packages/stdlib/reference/io/sync/read_to_end): Reads from `s` until it ends and returns everything read.
- [`accept_wait`](/packages/stdlib/reference/io/sync/accept_wait): Waits for the next connection on a TCP `listener` and returns its stream.
- [`send_to_wait`](/packages/stdlib/reference/io/sync/send_to_wait): Sends `buf` as one UDP datagram to `host`:`port`, waiting while the socket is not ready.
- [`copy`](/packages/stdlib/reference/io/sync/copy): Copies the file `src` to `dst`.
- [`print`](/packages/stdlib/reference/io/sync/print): Writes `s` to standard output, without a newline.
- [`println`](/packages/stdlib/reference/io/sync/println): Writes `s` and a newline to standard output.
