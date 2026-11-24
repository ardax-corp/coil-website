---
slug: "io/Write/write_from"
title: "Write::write_from"
description: "Writes from buf[offset] on; see io::write_from. By default it writes a copy of that part."
module: "io"
kind: "method"
name: "write_from"
parent: "Write"
signature: "fn write_from(S s, Vec<byte> buf, int offset) -> Result<int, IoError>"
import: "use io::{Write};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/io.coil#L197"
order: 2
---

Writes from `buf[offset]` on; see [`io::write_from`](/docs/reference/io/write_from). By default it writes a copy of that part.

## Parameters

| Name | Type |
|------|------|
| `s` | `S` |
| `buf` | `Vec<byte>` |
| `offset` | `int` |

## Returns

`Result<int, IoError>`

## See also

- [`io::write_from`](/docs/reference/io/write_from)
- [`Write`](/docs/reference/io/Write): Types that bytes can be written to without waiting; implemented for `Stream`, and by any class.
- [`Write::write`](/docs/reference/io/Write/write): Writes from `buf`; see `io::write`.
- [`Write::wait_writable`](/docs/reference/io/Write/wait_writable): Waits until a `write` can make progress; see `io::wait_writable`.
- [`Write::flush`](/docs/reference/io/Write/flush): Sends what the writer holds back; does nothing by default.
