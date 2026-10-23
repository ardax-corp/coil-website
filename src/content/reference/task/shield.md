---
slug: "task/shield"
title: "shield"
description: "Runs body so that a cancel waits for it to finish instead of interrupting it."
module: "task"
kind: "fn"
name: "shield"
signature: "fn shield<T>(unit -> T body) -> T"
import: "use task::{shield};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/2fd31a884e4b837b7e70c36633a1a9547b1407c9/compiler/src/prelude/task.hy#L252"
order: 9
---

Runs `body` so that a cancel waits for it to finish instead of interrupting it.

Use it around work that must not be left half done, such as writing a
record. A cancel that arrives meanwhile takes effect when `body` returns.

## Parameters

| Name | Type |
|------|------|
| `body` | `unit -> T` |

## Returns

`T`

## See also

- [`scope`](/docs/reference/task/fn.scope): Runs `body` with a `Scope` for starting child tasks, and returns its value once `body` and every child have finished.
- [`sleep`](/docs/reference/task/sleep): Suspends the current task for at least `ms` milliseconds; other tasks run meanwhile.
- [`yield_now`](/docs/reference/task/yield_now): Lets other ready tasks run before the current one continues.
- [`timeout`](/docs/reference/task/timeout): Runs `body` as a task and cancels it if it has not finished after `ms` milliseconds.
- [`channel`](/docs/reference/task/fn.channel): Creates a channel that holds up to `capacity` values.
- [`blocking`](/docs/reference/task/blocking): Runs `work` on another OS thread and waits for its result; only the current task waits, the others keep running.
- [`blocking_with`](/docs/reference/task/blocking_with): Like `blocking`, passing `arg` to `work` (it is copied to the other thread, like `thread::spawn(work, arg)`).
- [`block_on`](/docs/reference/task/block_on): Resumes the coroutine `handle` until it is done and returns its completion value; values it yields are discarded.
