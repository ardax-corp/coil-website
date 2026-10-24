---
slug: "io/sync/accept_wait"
title: "accept_wait"
description: "Waits for the next connection on a TCP listener and returns its stream."
module: "io::sync"
kind: "fn"
name: "accept_wait"
signature: "fn accept_wait(Stream listener) -> Result<Stream, IoError>"
import: "use io::sync::{accept_wait};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/bbab8785eee1ff5cde1ade831f952993476bad73/src/io/sync.hy#L140"
order: 3
---

Waits for the next connection on a TCP `listener` and returns its stream.

## Parameters

| Name | Type |
|------|------|
| `listener` | `Stream` |

## Returns

`Result<Stream, IoError>`

## See also

- [`write_all`](/docs/reference/io/sync/write_all): Writes all of `buf` to `s`, waiting whenever the stream is not ready.
- [`read_exact`](/docs/reference/io/sync/read_exact): Fills all of `buf` from `s`, waiting whenever no data is ready.
- [`read_to_end`](/docs/reference/io/sync/read_to_end): Reads from `s` until it ends and returns everything read.
- [`recv_from_wait`](/docs/reference/io/sync/recv_from_wait): Waits for a UDP datagram, reads it into `buf`, and returns `(bytes, sender host, sender port)`.
- [`send_to_wait`](/docs/reference/io/sync/send_to_wait): Sends `buf` as one UDP datagram to `host`:`port`, waiting while the socket is not ready.
- [`copy`](/docs/reference/io/sync/copy): Copies the file `src` to `dst`.
- [`print`](/docs/reference/io/sync/print): Writes `s` to standard output, without a newline.
- [`println`](/docs/reference/io/sync/println): Writes `s` and a newline to standard output.
