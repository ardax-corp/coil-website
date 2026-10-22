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
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/io.hy#L232"
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
- [`Write`](/docs/reference/io/Write): Types that bytes can be written to; implemented for Stream.
