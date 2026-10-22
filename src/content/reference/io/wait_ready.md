---
slug: "io/wait_ready"
title: "wait_ready"
description: "Deprecated: waits until any registered IO waiter is ready and returns how many became ready."
module: "io"
kind: "fn"
name: "wait_ready"
signature: "fn wait_ready() -> int"
import: "use io::{wait_ready};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/io.hy#L585"
order: 17
---

Deprecated: waits until any registered IO waiter is ready and returns how many became ready.

Calling it gives warning `E0129`. Run concurrent IO as tasks instead
([`task::scope`](/docs/reference/task/fn.scope) with `spawn` and `join`): an IO wait inside a task
suspends only that task.

## Returns

`int`

## Examples

```text
use io::{wait_ready};
let ready = wait_ready(); // warning E0129: `wait_ready` is deprecated
```

## See also

- [`task::scope`](/docs/reference/task/fn.scope)
- [`stdin`](/docs/reference/io/stdin): Returns a new stream on the process's standard input.
- [`stdout`](/docs/reference/io/stdout): Returns a new stream on the process's standard output.
- [`stderr`](/docs/reference/io/stderr): Returns a new stream on the process's standard error.
- [`open`](/docs/reference/io/open): Opens the file at path with mode and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes s.
- [`read`](/docs/reference/io/fn.read): Reads bytes from s into the front of buf without waiting.
- [`write`](/docs/reference/io/fn.write): Writes bytes from buf to s without waiting and returns how many were written.
