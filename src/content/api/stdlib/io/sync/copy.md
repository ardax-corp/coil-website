---
slug: "stdlib/io/sync/copy"
package: "stdlib"
title: "copy"
description: "Copies the file src to dst. Note the argument order: destination first. See io::fs::copy."
module: "io::sync"
kind: "fn"
name: "copy"
signature: "fn copy(string dst, string src) -> Result<int, IoError>"
import: "use io::sync::{copy};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/d13f986e7f57ab90d877b04e276aa1184c83b015/src/io/sync.hy#L207"
order: 6
---

Copies the file `src` to `dst`. Note the argument order: destination first. See [`io::fs::copy`](/docs/reference/io/fs/copy).

## Parameters

| Name | Type |
|------|------|
| `dst` | `string` |
| `src` | `string` |

## Returns

`Result<int, IoError>`

## See also

- [`io::fs::copy`](/docs/reference/io/fs/copy)
- [`write_all`](/packages/stdlib/reference/io/sync/write_all): Writes all of `buf` to `s`, waiting whenever the stream is not ready.
- [`read_exact`](/packages/stdlib/reference/io/sync/read_exact): Fills all of `buf` from `s`, waiting whenever no data is ready.
- [`read_to_end`](/packages/stdlib/reference/io/sync/read_to_end): Reads from `s` until it ends and returns everything read.
- [`accept_wait`](/packages/stdlib/reference/io/sync/accept_wait): Waits for the next connection on a TCP `listener` and returns its stream.
- [`recv_from_wait`](/packages/stdlib/reference/io/sync/recv_from_wait): Waits for a UDP datagram, reads it into `buf`, and returns `(bytes, sender host, sender port)`.
- [`send_to_wait`](/packages/stdlib/reference/io/sync/send_to_wait): Sends `buf` as one UDP datagram to `host`:`port`, waiting while the socket is not ready.
- [`print`](/packages/stdlib/reference/io/sync/print): Writes `s` to standard output, without a newline.
