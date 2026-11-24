---
slug: "io/Write/wait_writable"
title: "Write::wait_writable"
description: "Waits until a write can make progress; see io::wait_writable."
module: "io"
kind: "method"
name: "wait_writable"
parent: "Write"
signature: "fn wait_writable(S s) -> Result<unit, IoError>"
import: "use io::{Write};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/io.coil#L193"
order: 1
---

Waits until a [`write`](/docs/reference/io/Write/write) can make progress; see [`io::wait_writable`](/docs/reference/io/wait_writable).

## Parameters

| Name | Type |
|------|------|
| `s` | `S` |

## Returns

`Result<unit, IoError>`

## See also

- [`Write::write`](/docs/reference/io/Write/write)
- [`io::wait_writable`](/docs/reference/io/wait_writable)
- [`Write`](/docs/reference/io/Write): Types that bytes can be written to without waiting; implemented for `Stream`, and by any class.
- [`Write::write_from`](/docs/reference/io/Write/write_from): Writes from `buf[offset]` on; see `io::write_from`.
- [`Write::flush`](/docs/reference/io/Write/flush): Sends what the writer holds back; does nothing by default.
