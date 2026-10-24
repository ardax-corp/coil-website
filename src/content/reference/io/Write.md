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
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/builtin_docs/io.hy#L232"
order: 3
---

Types that bytes can be written to; implemented for [`Stream`](/docs/reference/io/Stream).

[`write`](/docs/reference/io/Write/write) behaves like the free function [`io::write`](/docs/reference/io/fn.write).

## Required methods

| Name | Description |
|------|-------------|
| [`write`](/docs/reference/io/Write/write) | Writes from `buf`; see [`io::write`](/docs/reference/io/fn.write). |

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
- [`io::write`](/docs/reference/io/fn.write)
- [`Read`](/docs/reference/io/Read): Types that bytes can be read from; implemented for `Stream`.
