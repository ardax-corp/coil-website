---
slug: "io/Write/flush"
title: "Write::flush"
description: "Sends what the writer holds back; does nothing by default."
module: "io"
kind: "method"
name: "flush"
parent: "Write"
signature: "fn flush(S s) -> Result<unit, IoError>"
import: "use io::{Write};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/io.coil#L200"
order: 3
---

Sends what the writer holds back; does nothing by default.

## Parameters

| Name | Type |
|------|------|
| `s` | `S` |

## Returns

`Result<unit, IoError>`

## See also

- [`Write`](/docs/reference/io/Write): Types that bytes can be written to without waiting; implemented for `Stream`, and by any class.
- [`Write::write`](/docs/reference/io/Write/write): Writes from `buf`; see `io::write`.
- [`Write::wait_writable`](/docs/reference/io/Write/wait_writable): Waits until a `write` can make progress; see `io::wait_writable`.
- [`Write::write_from`](/docs/reference/io/Write/write_from): Writes from `buf[offset]` on; see `io::write_from`.
