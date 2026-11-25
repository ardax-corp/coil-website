---
slug: "io/Write/write"
title: "Write::write"
description: "Writes from buf; see io::write."
module: "io"
kind: "method"
name: "write"
parent: "Write"
signature: "fn write(S s, Vec<byte> buf) -> Result<int, IoError>"
import: "use io::{Write};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/io.coil#L190"
order: 0
---

Writes from `buf`; see [`io::write`](/docs/reference/io/fn.write).

## Parameters

| Name | Type |
|------|------|
| `s` | `S` |
| `buf` | `Vec<byte>` |

## Returns

`Result<int, IoError>`

## See also

- [`io::write`](/docs/reference/io/fn.write)
- [`Write`](/docs/reference/io/Write): Types that bytes can be written to without waiting; implemented for `Stream`, and by any class.
- [`Write::wait_writable`](/docs/reference/io/Write/wait_writable): Waits until a `write` can make progress; see `io::wait_writable`.
- [`Write::write_from`](/docs/reference/io/Write/write_from): Writes from `buf[offset]` on; see `io::write_from`.
- [`Write::flush`](/docs/reference/io/Write/flush): Sends what the writer holds back; does nothing by default.
