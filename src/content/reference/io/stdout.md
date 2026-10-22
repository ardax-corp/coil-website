---
slug: "io/stdout"
title: "stdout"
description: "Returns a new stream on the process's standard output."
module: "io"
kind: "fn"
name: "stdout"
signature: "fn stdout() -> Stream"
import: "use io::{stdout};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/io.hy#L270"
order: 5
---

Returns a new stream on the process's standard output.

The stream holds a duplicated descriptor, so closing it does not close
the process's stdout. [`write`](/docs/reference/io/fn.write) may write only part of the buffer; use
[`io::sync::write_all`](/docs/reference/io/sync/write_all) (or [`io::sync::println`](/docs/reference/io/sync/println)) to write everything.

## Returns

`Stream`

## Examples

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{to_bytes};
let _ = write_all(stdout(), to_bytes("hello\n"));
```

## See also

- [`io::write`](/docs/reference/io/fn.write)
- [`io::sync::write_all`](/docs/reference/io/sync/write_all)
- [`io::sync::println`](/docs/reference/io/sync/println)
- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`open`](/docs/reference/io/open): Opens the file at path with mode and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes s.
- [`read`](/docs/reference/io/fn.read): Reads bytes from s into the front of buf without waiting.
