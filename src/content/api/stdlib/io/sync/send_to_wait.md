---
slug: "stdlib/io/sync/send_to_wait"
package: "stdlib"
title: "send_to_wait"
description: "Sends buf as one UDP datagram to host:port, waiting while the socket is not ready."
module: "io::sync"
kind: "fn"
name: "send_to_wait"
signature: "fn send_to_wait(Stream s, Vec<byte> buf, string host, int port) -> Result<int, IoError>"
import: "use io::sync::{send_to_wait};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/io/sync.hy#L186"
order: 5
---

Sends `buf` as one UDP datagram to `host`:`port`, waiting while the socket is not ready.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `buf` | `Vec<byte>` |
| `host` | `string` |
| `port` | `int` |

## Returns

`Result<int, IoError>`

## See also

- [`write_all`](/packages/stdlib/reference/io/sync/write_all): Writes all of `buf` to `s`, waiting whenever the stream is not ready.
- [`read_exact`](/packages/stdlib/reference/io/sync/read_exact): Fills all of `buf` from `s`, waiting whenever no data is ready.
- [`read_to_end`](/packages/stdlib/reference/io/sync/read_to_end): Reads from `s` until it ends and returns everything read.
- [`accept_wait`](/packages/stdlib/reference/io/sync/accept_wait): Waits for the next connection on a TCP `listener` and returns its stream.
- [`recv_from_wait`](/packages/stdlib/reference/io/sync/recv_from_wait): Waits for a UDP datagram, reads it into `buf`, and returns `(bytes, sender host, sender port)`.
- [`copy`](/packages/stdlib/reference/io/sync/copy): Copies the file `src` to `dst`.
- [`print`](/packages/stdlib/reference/io/sync/print): Writes `s` to standard output, without a newline.
- [`println`](/packages/stdlib/reference/io/sync/println): Writes `s` and a newline to standard output.
