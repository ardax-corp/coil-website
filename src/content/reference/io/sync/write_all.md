---
slug: "io/sync/write_all"
title: "write_all"
description: "Write every byte of buf to s, parking on WouldBlock until done."
module: "io::sync"
kind: "fn"
name: "write_all"
signature: "fn write_all(Stream s, Vec<byte> buf) -> Result<int, IoError>"
import: "use io::sync::{write_all};"
origin: "stdlib"
source: "https://github.com/ardax-corp/coil-stdlib/blob/cfae0294a018d9fc5cf340def3bc424534960785/src/io/sync.hy#L15"
order: 0
---

Write every byte of `buf` to `s`, parking on `WouldBlock` until done.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `buf` | `Vec<byte>` |

## Returns

`Result<int, IoError>`

## See also

- [`read_exact`](/docs/reference/io/sync/read_exact): Fill buf from s, parking on WouldBlock; None on EOF before fill.
- [`read_to_end`](/docs/reference/io/sync/read_to_end): Read from s until EOF into a new Vec<byte>, parking on WouldBlock.
- [`accept_wait`](/docs/reference/io/sync/accept_wait): Blocking accept on listener, parking on WouldBlock.
- [`recv_from_wait`](/docs/reference/io/sync/recv_from_wait): Blocking UDP recv_from, parking on WouldBlock; returns (n, host, port).
- [`send_to_wait`](/docs/reference/io/sync/send_to_wait): Blocking UDP send_to, parking on WouldBlock.
- [`copy`](/docs/reference/io/sync/copy): Copy file contents from src to dst via virtual io::fs::copy.
- [`print`](/docs/reference/io/sync/print): Write UTF-8 bytes of s to stdout (no trailing newline).
- [`println`](/docs/reference/io/sync/println): Write s plus a trailing LF to stdout.
