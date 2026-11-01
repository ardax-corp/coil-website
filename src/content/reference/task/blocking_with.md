---
slug: "task/blocking_with"
title: "blocking_with"
description: "Like blocking, passing arg to work (it is copied to the other thread, like thread::spawn(work, arg))."
module: "task"
kind: "fn"
name: "blocking_with"
signature: "fn blocking_with<A, T>(A -> T work, A arg) -> Result<T, ThreadError>"
import: "use task::{blocking_with};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/task.coil#L436"
order: 11
---

Like [`blocking`](/docs/reference/task/blocking), passing `arg` to `work` (it is copied to the other thread, like `thread::spawn(work, arg)`).

## Parameters

| Name | Type |
|------|------|
| `work` | `A -> T` |
| `arg` | `A` |

## Returns

`Result<T, ThreadError>`

## See also

- [`task::blocking`](/docs/reference/task/blocking)
- [`scope`](/docs/reference/task/fn.scope): Runs `body` with a `Scope` for starting child tasks, and returns its value once `body` and every child have finished.
- [`sleep`](/docs/reference/task/sleep): Suspends the current task for at least `ms` milliseconds; other tasks run meanwhile.
- [`yield_now`](/docs/reference/task/yield_now): Lets other ready tasks run before the current one continues.
- [`timeout`](/docs/reference/task/timeout): Runs `body` as a task and cancels it if it has not finished after `ms` milliseconds.
- [`shield`](/docs/reference/task/shield): Runs `body` so that a cancel waits for it to finish instead of interrupting it.
- [`channel`](/docs/reference/task/fn.channel): Creates a channel that holds up to `capacity` values.
- [`block_on`](/docs/reference/task/block_on): Resumes the coroutine `handle` until it is done and returns its completion value; values it yields are discarded.
