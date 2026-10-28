---
slug: "task/blocking"
title: "blocking"
description: "Runs work on another OS thread and waits for its result; only the current task waits, the others keep running."
module: "task"
kind: "fn"
name: "blocking"
signature: "fn blocking<T>(unit -> T work) -> Result<T, ThreadError>"
import: "use task::{blocking};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/prelude/task.hy#L430"
order: 10
---

Runs `work` on another OS thread and waits for its result; only the current task waits, the others keep running.

Use it for CPU-heavy work or a blocking native call inside a [`scope`](/docs/reference/task/fn.scope). `work`
follows [`thread::spawn`](/docs/reference/thread/spawn)'s rules: it cannot capture locals.

## Parameters

| Name | Type |
|------|------|
| `work` | `unit -> T` |

## Returns

`Result<T, ThreadError>`

## Errors

The `ThreadError` from starting or joining the thread.

## See also

- [`task::scope`](/docs/reference/task/fn.scope)
- [`thread::spawn`](/docs/reference/thread/spawn)
- [`sleep`](/docs/reference/task/sleep): Suspends the current task for at least `ms` milliseconds; other tasks run meanwhile.
- [`yield_now`](/docs/reference/task/yield_now): Lets other ready tasks run before the current one continues.
- [`timeout`](/docs/reference/task/timeout): Runs `body` as a task and cancels it if it has not finished after `ms` milliseconds.
- [`shield`](/docs/reference/task/shield): Runs `body` so that a cancel waits for it to finish instead of interrupting it.
- [`channel`](/docs/reference/task/fn.channel): Creates a channel that holds up to `capacity` values.
- [`blocking_with`](/docs/reference/task/blocking_with): Like `blocking`, passing `arg` to `work` (it is copied to the other thread, like `thread::spawn(work, arg)`).
