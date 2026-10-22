---
slug: "io/Write"
title: "Write"
description: "Types that bytes can be written to; implemented for Stream."
module: "io"
kind: "trait"
name: "Write"
signature: "trait Write<S>"
import: "use io::{Write};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/io.hy#L230"
order: 3
---

Types that bytes can be written to; implemented for [`Stream`](/docs/reference/io/Stream).

[`write`](/docs/reference/io/Write/write) behaves like the free function [`io::write`](/docs/reference/io/write).

## Required methods

| Name | Description |
|------|-------------|
| [`write`](/docs/reference/io/Write/write) | Writes from buf; see io::write. |

## Examples

```coil
use io::{stdout, Write};
use string::{to_bytes};
use tests::assert;
let n = match stdout().write(to_bytes("hi\n")) {
    Result::Ok(n) => n,
    Result::Err(_) => 0,
};
assert!(n == 3);
```

## See also

- [`io::Stream`](/docs/reference/io/Stream)
- [`Write::write`](/docs/reference/io/Write/write)
- [`io::write`](/docs/reference/io/write)
- [`Read`](/docs/reference/io/Read): Types that bytes can be read from; implemented for Stream.
