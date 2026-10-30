---
slug: "io/sync/read_to_end"
title: "read_to_end"
description: "Reads from s until it ends and returns everything read."
module: "io::sync"
kind: "fn"
name: "read_to_end"
signature: "fn read_to_end(Stream s) -> Result<Vec<byte>, IoError>"
import: "use io::sync::{read_to_end};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/861c7aeb486ced606d1bcfb819f42cb6f6934441/src/io/sync.hy#L101"
order: 2
---

Reads from `s` until it ends and returns everything read.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |

## Returns

`Result<Vec<byte>, IoError>`

## See also

- [`write_all`](/docs/reference/io/sync/write_all): Writes all of `buf` to `s`, waiting whenever the stream is not ready.
- [`read_exact`](/docs/reference/io/sync/read_exact): Fills all of `buf` from `s`, waiting whenever no data is ready.
- [`accept_wait`](/docs/reference/io/sync/accept_wait): Waits for the next connection on a TCP `listener` and returns its stream.
- [`recv_from_wait`](/docs/reference/io/sync/recv_from_wait): Waits for a UDP datagram, reads it into `buf`, and returns `(bytes, sender host, sender port)`.
- [`send_to_wait`](/docs/reference/io/sync/send_to_wait): Sends `buf` as one UDP datagram to `host`:`port`, waiting while the socket is not ready.
- [`copy`](/docs/reference/io/sync/copy): Copies the file `src` to `dst`.
- [`print`](/docs/reference/io/sync/print): Writes `s` to standard output, without a newline.
- [`println`](/docs/reference/io/sync/println): Writes `s` and a newline to standard output.
