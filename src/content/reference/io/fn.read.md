---
slug: "io/fn.read"
title: "read"
description: "Reads bytes from s into the front of buf without waiting."
module: "io"
kind: "fn"
name: "read"
signature: "fn read(Stream s, Vec<byte> buf) -> Result<Option<int>, IoError>"
import: "use io::{read};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/io.hy#L411"
order: 9
---

Reads bytes from `s` into the front of `buf` without waiting.

Reads at most `buf.len()` bytes (the buffer's length, not its capacity),
overwriting `buf[0..n]`. Returns `Ok(Option::Some(n))` with the number of
bytes read, `Ok(Option::None)` at end of file, and
`Err(IoError::WouldBlock)` when no data is available yet; then call
`wait_readable(s)` and retry. An empty `buf` returns `Ok(Option::Some(0))`.
[`io::sync::read_exact`](/docs/reference/io/sync/read_exact) and `read_to_end` do the waiting for you.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `buf` | `Vec<byte>` |

## Returns

`Result<Option<int>, IoError>`

## Examples

```coil
use io::{close, open, read};
use io::fs::{remove_file};
use io::sync::{write_all};
use string::{to_bytes};
use tests::assert;
let path = "/tmp/coil_doc_read.txt";
let w = match open(path, "w") {
    Result::Ok(s) => s,
    Result::Err(_) => panic "open failed",
};
let _ = write_all(w, to_bytes("hey"));
let _ = close(w);

let r = match open(path, "r") {
    Result::Ok(s) => s,
    Result::Err(_) => panic "open failed",
};
let buf = to_bytes("..........");
let first = match read(r, buf) {
    Result::Ok(Option::Some(n)) => n,
    default => 0,
};
let at_eof = match read(r, buf) {
    Result::Ok(Option::None) => true,
    default => false,
};
let _ = close(r);
let _ = remove_file(path);
assert!(first == 3);
assert!(buf[0] == 104 as byte);
assert!(at_eof);
```

## See also

- [`io::sync::read_exact`](/docs/reference/io/sync/read_exact)
- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`open`](/docs/reference/io/open): Opens the file at path with mode and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes s.
- [`write`](/docs/reference/io/fn.write): Writes bytes from buf to s without waiting and returns how many were written.
- [`write_from`](/docs/reference/io/write_from): Writes buf[offset..] to s without waiting and returns how many bytes were written.
