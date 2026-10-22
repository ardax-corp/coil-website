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
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/io.hy#L571"
order: 16
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
- [`open`](/docs/reference/io/open): Opens the file at path with mode and returns a stream on it.
- [`close`](/docs/reference/io/close): Closes s.
- [`read`](/docs/reference/io/fn.read): Reads bytes from s into the front of buf without waiting.
- [`write`](/docs/reference/io/fn.write): Writes bytes from buf to s without waiting and returns how many were written.
