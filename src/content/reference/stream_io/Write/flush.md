---
slug: "stream_io/Write/flush"
title: "Write::flush"
description: "Method Write::flush."
module: "stream_io"
kind: "method"
name: "flush"
parent: "Write"
signature: "fn flush(S s) -> Result<unit, IoError>"
import: "use stream_io::{Write};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/prelude/stream_io.coil#L43"
order: 3
---

*No documentation yet.*

## Parameters

| Name | Type |
|------|------|
| `s` | `S` |

## Returns

`Result<unit, IoError>`

## See also

- [`Write`](/docs/reference/stream_io/Write): Types that bytes can be written to without waiting.
- [`Write::write`](/docs/reference/stream_io/Write/write)
- [`Write::wait_writable`](/docs/reference/stream_io/Write/wait_writable)
- [`Write::write_from`](/docs/reference/stream_io/Write/write_from): `write` of `buf` from index `offset` on.
