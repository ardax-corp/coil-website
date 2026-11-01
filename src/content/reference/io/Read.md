---
slug: "io/Read"
title: "Read"
description: "Types that bytes can be read from; implemented for Stream."
module: "io"
kind: "trait"
name: "Read"
signature: "trait Read<S>"
import: "use io::{Read};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/io.coil#L209"
order: 2
---

Types that bytes can be read from; implemented for [`Stream`](/docs/reference/io/Stream).

[`read`](/docs/reference/io/Read/read) behaves like the free function [`io::read`](/docs/reference/io/fn.read).

## Required methods

| Name | Description |
|------|-------------|
| [`read`](/docs/reference/io/Read/read) | Reads into `buf`; see [`io::read`](/docs/reference/io/fn.read). |

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
- [`Write`](/docs/reference/io/Write): Types that bytes can be written to; implemented for `Stream`.
