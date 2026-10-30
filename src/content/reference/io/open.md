---
slug: "io/open"
title: "open"
description: "Opens the file at path with mode and returns a stream on it."
module: "io"
kind: "fn"
name: "open"
signature: "fn open(string path, string mode) -> Result<Stream, IoError>"
import: "use io::{open};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/io.hy#L377"
order: 9
---

Opens the file at `path` with `mode` and returns a stream on it.

Modes:

- `"r"`: read only; the file must exist.
- `"w"`: write only; creates the file or truncates it.
- `"a"`: append; creates the file if needed, writes go to the end.
- `"rw"`: read and write; creates the file if needed, does not truncate.

Any other mode returns `Err(IoError::InvalidInput)`. OS errors map to
`NotFound`, `PermissionDenied`, `NotADirectory` and so on.

A program that reaches `open` compiles only with the matching grant: a
literal `"r"` needs `--allow-read`, `"w"` and `"a"` need `--allow-write`,
`"rw"` and a mode computed at run time need both.

## Parameters

| Name | Type |
|------|------|
| `path` | `string` |
| `mode` | `string` |

## Returns

`Result<Stream, IoError>`

## Examples

```coil
use io::{close, open};
use io::fs::{remove_file};
use io::sync::{read_to_end, write_all};
use string::{to_bytes};
use tests::assert;
let path = "/tmp/coil_doc_open.txt";
let w = match open(path, "w") {
    Result::Ok(s) => s,
    Result::Err(_) => panic "open failed",
};
let _ = write_all(w, to_bytes("ab"));
let _ = close(w);
let a = match open(path, "a") {
    Result::Ok(s) => s,
    Result::Err(_) => panic "open failed",
};
let _ = write_all(a, to_bytes("cd"));
let _ = close(a);
let r = match open(path, "r") {
    Result::Ok(s) => s,
    Result::Err(_) => panic "open failed",
};
let size = match read_to_end(r) {
    Result::Ok(bytes) => bytes.len(),
    Result::Err(_) => 0,
};
let _ = close(r);
let _ = remove_file(path);
assert!(size == 4);
```

## See also

- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`capture_begin`](/docs/reference/io/capture_begin): Starts keeping this thread's stdout and stderr writes in memory instead of writing them, until the matching `capture_end()`.
- [`capture_end`](/docs/reference/io/capture_end): Ends the innermost `capture_begin()` and returns what it kept, as `(stdout, stderr)`.
- [`close`](/docs/reference/io/close): Closes `s`.
- [`read`](/docs/reference/io/fn.read): Reads bytes from `s` into the front of `buf` without waiting.
- [`write`](/docs/reference/io/fn.write): Writes bytes from `buf` to `s` without waiting and returns how many were written.
