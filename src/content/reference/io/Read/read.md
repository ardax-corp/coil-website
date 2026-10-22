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
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/io.hy#L211"
order: 0
---

Reads into `buf`; see [`io::read`](/docs/reference/io/read).

## Parameters

| Name | Type |
|------|------|
| `s` | `S` |
| `buf` | `Vec<byte>` |

## Returns

`Result<Option<int>, IoError>`

## See also

- [`io::read`](/docs/reference/io/read)
- [`Read`](/docs/reference/io/Read): Types that bytes can be read from; implemented for Stream.
