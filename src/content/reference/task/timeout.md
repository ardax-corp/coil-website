---
slug: "task/timeout"
title: "timeout"
description: "Runs body as a task and cancels it if it has not finished after ms milliseconds."
module: "task"
kind: "fn"
name: "timeout"
signature: "fn timeout<T>(int ms, unit -> T body) -> Result<T, TaskError>"
import: "use task::{timeout};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/prelude/task.hy#L221"
order: 8
---

Runs `body` as a task and cancels it if it has not finished after `ms` milliseconds.

## Parameters

| Name | Type |
|------|------|
| `ms` | `int` |
| `body` | `unit -> T` |

## Returns

`Result<T, TaskError>`

## Errors

`Err(TaskError::TimedOut)` when the deadline passed first, and
`Err(TaskError::Panicked(message))` when `body` panicked.

## Examples

```coil
use task::{timeout, sleep, TaskError};
use tests::assert;
let r = timeout(10, fn () {
    sleep(1000);
    return 1;
});
let timed_out = match r {
    Result::Err(TaskError::TimedOut) => true,
    default => false,
};
assert!(timed_out);
assert!((timeout(1000, fn () => 7) ?? 0) == 7);
```

## See also

- [`scope`](/docs/reference/task/fn.scope): Runs `body` with a `Scope` for starting child tasks, and returns its value once `body` and every child have finished.
- [`sleep`](/docs/reference/task/sleep): Suspends the current task for at least `ms` milliseconds; other tasks run meanwhile.
- [`yield_now`](/docs/reference/task/yield_now): Lets other ready tasks run before the current one continues.
- [`shield`](/docs/reference/task/shield): Runs `body` so that a cancel waits for it to finish instead of interrupting it.
- [`channel`](/docs/reference/task/fn.channel): Creates a channel that holds up to `capacity` values.
- [`blocking`](/docs/reference/task/blocking): Runs `work` on another OS thread and waits for its result; only the current task waits, the others keep running.
- [`blocking_with`](/docs/reference/task/blocking_with): Like `blocking`, passing `arg` to `work` (it is copied to the other thread, like `thread::spawn(work, arg)`).
- [`block_on`](/docs/reference/task/block_on): Resumes the coroutine `handle` until it is done and returns its completion value; values it yields are discarded.
