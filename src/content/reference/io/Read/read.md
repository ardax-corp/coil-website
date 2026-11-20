---
slug: "io/Read/read"
title: "Read::read"
description: "Reads into buf; see io::read."
module: "io"
kind: "method"
name: "read"
parent: "Read"
signature: "fn read(S s, Vec<byte> buf) -> Result<Option<int>, IoError>"
import: "use io::{Read};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/9c93ed17ff191a9c4e7d41030d8a6da8342de21a/compiler/src/builtin_docs/io.coil#L216"
order: 0
---

Reads into `buf`; see [`io::read`](/docs/reference/io/fn.read).

## Parameters

| Name | Type |
|------|------|
| `s` | `S` |
| `buf` | `Vec<byte>` |

## Returns

`Result<Option<int>, IoError>`

## See also

- [`io::read`](/docs/reference/io/fn.read)
- [`Read`](/docs/reference/io/Read): Types that bytes can be read from; implemented for `Stream`.
