---
slug: "task/TaskError"
title: "TaskError"
description: "Why a task or a scope did not produce its value."
module: "task"
kind: "enum"
name: "TaskError"
signature: "enum TaskError"
import: "use task::{TaskError};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/prelude/task.hy#L38"
order: 0
---

Why a task or a [`scope`](/docs/reference/task/fn.scope) did not produce its value.

## Variants

### `Cancelled` {#variant-cancelled}

The task was cancelled with [`Task::cancel`](/docs/reference/task/Task/cancel) before it finished.

### `Panicked(string)` {#variant-panicked}

The task panicked; the payload is the panic message.

### `TimedOut` {#variant-timedout}

[`timeout`](/docs/reference/task/timeout) ran out of time before the body finished.

## Examples

```coil
use task::{scope, Scope, TaskError};
use tests::assert;
let r = scope(fn (Scope s) {
    let t = s.spawn(fn () => 1);
    t.cancel();
    return t.join();
});
let cancelled = match r {
    Result::Ok(Result::Err(TaskError::Cancelled)) => true,
    default => false,
};
```

## See also

- [`task::scope`](/docs/reference/task/fn.scope)
- [`Task::cancel`](/docs/reference/task/Task/cancel)
- [`task::timeout`](/docs/reference/task/timeout)
- [`ChannelError`](/docs/reference/task/ChannelError): Why a channel operation failed.
