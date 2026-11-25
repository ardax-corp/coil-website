---
slug: "io/Read"
title: "Read"
description: "Types that bytes can be read from without waiting; implemented for Stream, and by any class (a TLS stream, a test double)."
module: "io"
kind: "trait"
name: "Read"
signature: "trait Read<S>"
import: "use io::{Read};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/io.coil#L160"
order: 2
---

Types that bytes can be read from without waiting; implemented for [`Stream`](/docs/reference/io/Stream), and by any class (a TLS stream, a test double).

[`read`](/docs/reference/io/Read/read) fills the front of `buf` like the free function [`io::read`](/docs/reference/io/fn.read):
`Ok(Some(n))`, `Ok(None)` at end of input, or `Err(IoError::WouldBlock)`
when nothing is ready; [`wait_readable`](/docs/reference/io/Read/wait_readable) then waits until a retry can make
progress. Generic code takes it as a bound (`fn f<R: Read>(R r)`) or
holds a trait value (`let r: Read = s;`). A [`Stream`](/docs/reference/io/Stream)'s methods need no
import of the trait.

## Required methods

| Name | Description |
|------|-------------|
| [`read`](/docs/reference/io/Read/read) | Reads into `buf`; see [`io::read`](/docs/reference/io/fn.read). |
| [`wait_readable`](/docs/reference/io/Read/wait_readable) | Waits until a [`read`](/docs/reference/io/Read/read) can make progress; see [`io::wait_readable`](/docs/reference/io/wait_readable). |

## Examples

```coil
use io::{close, open, Read};
use io::fs::{remove_file};
use io::sync::{write_all};
use string::{to_bytes};
use tests::assert;
let path = "/tmp/coil_doc_read_trait.txt";
let w = match open(path, "w") {
    Result::Ok(s) => s,
    Result::Err(_) => panic "open failed",
};
let _ = write_all(w, to_bytes("abc"));
let _ = close(w);
let r = match open(path, "r") {
    Result::Ok(s) => s,
    Result::Err(_) => panic "open failed",
};
let n = match r.read(to_bytes("........")) {
    Result::Ok(Option::Some(n)) => n,
    default => 0,
};
let _ = close(r);
let _ = remove_file(path);
assert!(n == 3);
```

## See also

- [`io::Stream`](/docs/reference/io/Stream)
- [`Read::read`](/docs/reference/io/Read/read)
- [`io::read`](/docs/reference/io/fn.read)
- [`Read::wait_readable`](/docs/reference/io/Read/wait_readable)
- [`Write`](/docs/reference/io/Write): Types that bytes can be written to without waiting; implemented for `Stream`, and by any class.
- [`Close`](/docs/reference/io/Close): Types that hold a resource to release; implemented for `Stream`, where `close` behaves like the free function `io::close`.
