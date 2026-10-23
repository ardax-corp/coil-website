---
slug: "io/drive"
title: "drive"
description: "Deprecated: polls the registered IO waiters once and returns how many became ready."
module: "io"
kind: "fn"
name: "drive"
signature: "fn drive() -> int"
import: "use io::{drive};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/builtin_docs/io.hy#L608"
order: 18
---

Deprecated: polls the registered IO waiters once and returns how many became ready.

Calling it gives warning `E0129`. Run concurrent IO as tasks instead
([`task::scope`](/docs/reference/task/fn.scope) with `spawn` and `join`): an IO wait inside a task
suspends only that task.

## Returns

`int`

## Examples

```text
use io::{drive};
let ready = drive(); // warning E0129: `drive` is deprecated
```

## See also

- [`task::scope`](/docs/reference/task/fn.scope)
- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`capture_begin`](/docs/reference/io/capture_begin): Starts keeping this thread's stdout and stderr writes in memory instead of writing them, until the matching `capture_end()`.
- [`capture_end`](/docs/reference/io/capture_end): Ends the innermost `capture_begin()` and returns what it kept, as `(stdout, stderr)`.
- [`open`](/docs/reference/io/open): Opens the file at `path` with `mode` and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes `s`.
