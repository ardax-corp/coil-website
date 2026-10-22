---
slug: "io/sync/send_to_wait"
title: "send_to_wait"
description: "Sends buf as one UDP datagram to host:port, waiting while the socket is not ready."
module: "io::sync"
kind: "fn"
name: "send_to_wait"
signature: "fn send_to_wait(Stream s, Vec<byte> buf, string host, int port) -> Result<int, IoError>"
import: "use io::sync::{send_to_wait};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d009ba27df1ee081c0600ed3f72b1abd6282db85/src/io/sync.hy#L186"
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

- [`write_all`](/docs/reference/io/sync/write_all): Writes all of buf to s, waiting whenever the stream is not ready.
- [`read_exact`](/docs/reference/io/sync/read_exact): Fills all of buf from s, waiting whenever no data is ready.
- [`read_to_end`](/docs/reference/io/sync/read_to_end): Reads from s until it ends and returns everything read.
- [`accept_wait`](/docs/reference/io/sync/accept_wait): Waits for the next connection on a TCP listener and returns its stream.
- [`recv_from_wait`](/docs/reference/io/sync/recv_from_wait): Waits for a UDP datagram, reads it into buf, and returns (bytes, sender host, sender port).
- [`copy`](/docs/reference/io/sync/copy): Copies the file src to dst.
- [`print`](/docs/reference/io/sync/print): Writes s to standard output, without a newline.
- [`println`](/docs/reference/io/sync/println): Writes s and a newline to standard output.
