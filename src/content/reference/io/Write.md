---
slug: "io/Write"
title: "Write"
description: "Types that bytes can be written to without waiting; implemented for Stream, and by any class."
module: "io"
kind: "trait"
name: "Write"
signature: "trait Write<S>"
import: "use io::{Write};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/io.coil#L188"
order: 3
---

Types that bytes can be written to without waiting; implemented for [`Stream`](/docs/reference/io/Stream), and by any class.

[`write`](/docs/reference/io/Write/write) returns how many bytes of `buf` it took, like the free function
[`io::write`](/docs/reference/io/fn.write), or `Err(IoError::WouldBlock)`; [`wait_writable`](/docs/reference/io/Write/wait_writable) then waits
until a retry can make progress. [`flush`](/docs/reference/io/Write/flush) sends anything the writer holds
back and does nothing unless the type overrides it.

## Required methods

| Name | Description |
|------|-------------|
| [`write`](/docs/reference/io/Write/write) | Writes from `buf`; see [`io::write`](/docs/reference/io/fn.write). |
| [`wait_writable`](/docs/reference/io/Write/wait_writable) | Waits until a [`write`](/docs/reference/io/Write/write) can make progress; see [`io::wait_writable`](/docs/reference/io/wait_writable). |
| [`write_from`](/docs/reference/io/Write/write_from) | Writes from `buf[offset]` on; see [`io::write_from`](/docs/reference/io/write_from). |
| [`flush`](/docs/reference/io/Write/flush) | Sends what the writer holds back; does nothing by default. |

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
- [`Write::wait_writable`](/docs/reference/io/Write/wait_writable)
- [`Write::flush`](/docs/reference/io/Write/flush)
- [`Read`](/docs/reference/io/Read): Types that bytes can be read from without waiting; implemented for `Stream`, and by any class (a TLS stream, a test double).
- [`Close`](/docs/reference/io/Close): Types that hold a resource to release; implemented for `Stream`, where `close` behaves like the free function `io::close`.
