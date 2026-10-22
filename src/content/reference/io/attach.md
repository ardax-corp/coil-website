---
slug: "io/attach"
title: "attach"
description: "Installs package IO hooks on s in place; the free-function form of Stream.attach."
module: "io"
kind: "fn"
name: "attach"
signature: "fn attach(Stream s, int ptr, int read, int write, int shutdown, int free) -> Result<Stream, IoError>"
import: "use io::{attach};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/io.hy#L629"
order: 19
---

Installs package IO hooks on `s` in place; the free-function form of [`Stream.attach`](/docs/reference/io/Stream/attach).

`ptr` is the package's session pointer and [`read`](/docs/reference/io/read), [`write`](/docs/reference/io/write), `shutdown`
and `free` are C function pointers (as [`int`](/docs/reference/types/int), usually looked up through
`dload`). Afterwards [`read`](/docs/reference/io/read) / [`write`](/docs/reference/io/write) on `s` go through those hooks and
[`close`](/docs/reference/io/close) calls `shutdown` then `free`. Returns `s`.

Returns `Err(IoError::InvalidInput)` when `ptr` is `0` or `s` is already
attached, and `Err(IoError::AlreadyClosed)` on a closed stream. A program
that reaches `attach` compiles only with `--allow-attach`.

## Parameters

| Name | Type |
|------|------|
| `s` | `Stream` |
| `ptr` | `int` |
| `read` | `int` |
| `write` | `int` |
| `shutdown` | `int` |
| `free` | `int` |

## Returns

`Result<Stream, IoError>`

## Examples

```text
use io::{attach};
use io::net::tcp::{connect};
let s = connect("example.com", 443)?;
// session, rd, wr, sd, fr: a session pointer and C hooks from a dload'ed library
let tls = attach(s, session, rd, wr, sd, fr)?;
```

## See also

- [`Stream::attach`](/docs/reference/io/Stream/attach)
- [`io::read`](/docs/reference/io/read)
- [`io::write`](/docs/reference/io/write)
- [`int`](/docs/reference/types/int)
- [`io::close`](/docs/reference/io/close)
- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
