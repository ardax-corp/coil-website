---
slug: "io/Close"
title: "Close"
description: "Types that hold a resource to release; implemented for Stream, where close behaves like the free function io::close."
module: "io"
kind: "trait"
name: "Close"
signature: "trait Close<S>"
import: "use io::{Close};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/io.coil#L228"
order: 4
---

Types that hold a resource to release; implemented for [`Stream`](/docs/reference/io/Stream), where [`close`](/docs/reference/io/Close/close) behaves like the free function [`io::close`](/docs/reference/io/fn.close).

## Required methods

| Name | Description |
|------|-------------|
| [`close`](/docs/reference/io/Close/close) | Releases the resource; a second [`close`](/docs/reference/io/Close/close) is `Err(IoError::AlreadyClosed)`. |

## Examples

```coil
use io::{open, Close, IoError};
use io::fs::{remove_file};
use tests::assert;
let path = "/tmp/coil_doc_close_trait.txt";
let s = match open(path, "w") {
    Result::Ok(s) => s,
    Result::Err(_) => panic "open failed",
};
let first = match s.close() {
    Result::Ok(_) => true,
    Result::Err(_) => false,
};
let second = match s.close() {
    Result::Err(IoError::AlreadyClosed) => true,
    default => false,
};
let _ = remove_file(path);
assert!(first && second);
```

## See also

- [`io::Stream`](/docs/reference/io/Stream)
- [`Close::close`](/docs/reference/io/Close/close)
- [`io::close`](/docs/reference/io/fn.close)
- [`Read`](/docs/reference/io/Read): Types that bytes can be read from without waiting; implemented for `Stream`, and by any class (a TLS stream, a test double).
- [`Write`](/docs/reference/io/Write): Types that bytes can be written to without waiting; implemented for `Stream`, and by any class.
