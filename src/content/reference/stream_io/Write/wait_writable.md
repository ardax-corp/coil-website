---
slug: "stream_io/Write/wait_writable"
title: "Write::wait_writable"
description: "Method Write::wait_writable."
module: "stream_io"
kind: "method"
name: "wait_writable"
parent: "Write"
signature: "fn wait_writable(S s) -> Result<unit, IoError>"
import: "use stream_io::{Write};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/prelude/stream_io.coil#L27"
order: 1
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
- [`Write::write_from`](/docs/reference/stream_io/Write/write_from): `write` of `buf` from index `offset` on.
- [`Write::flush`](/docs/reference/stream_io/Write/flush)
