---
slug: "task/channel"
title: "channel"
description: "Creates a channel that holds up to capacity values."
module: "task"
kind: "fn"
name: "channel"
signature: "fn channel<T>(int capacity) -> Channel<T>"
import: "use task::{channel};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8b9e0dda6cdbb0ebf164e5feafa3dd672e189da9/compiler/src/prelude/task.hy#L304"
order: 6
---

Creates a channel that holds up to `capacity` values.

## Parameters

| Name | Type |
|------|------|
| `capacity` | `int` |

## Returns

`Channel<T>`

## Panics

Panics when `capacity` is less than 1.

## See also

- [`scope`](/docs/reference/task/scope): Runs `body` with a `Scope` for starting child tasks, and returns its value once `body` and every child have finished.
- [`sleep`](/docs/reference/task/sleep): Suspends the current task for at least `ms` milliseconds; other tasks run meanwhile.
- [`yield_now`](/docs/reference/task/yield_now): Lets other ready tasks run before the current one continues.
- [`timeout`](/docs/reference/task/timeout): Runs `body` as a task and cancels it if it has not finished after `ms` milliseconds.
- [`shield`](/docs/reference/task/shield): Runs `body` so that a cancel waits for it to finish instead of interrupting it.
- [`blocking`](/docs/reference/task/blocking): Runs `work` on another OS thread and waits for its result; only the current task waits, the others keep running.
- [`blocking_with`](/docs/reference/task/blocking_with): Like `blocking`, passing `arg` to `work` (it is copied to the other thread, like `thread::spawn(work, arg)`).
- [`block_on`](/docs/reference/task/block_on): Resumes the coroutine `handle` until it is done and returns its completion value; values it yields are discarded.
