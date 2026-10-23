---
slug: "task/block_on"
title: "block_on"
description: "Resumes the coroutine handle until it is done and returns its completion value; values it yields are discarded."
module: "task"
kind: "fn"
name: "block_on"
signature: "fn block_on<Y>(coroutine<Y> handle) -> Y"
import: "use task::{block_on};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/prelude/task.hy#L454"
order: 13
---

Resumes the coroutine `handle` until it is done and returns its completion value; values it yields are discarded.

Deprecated: call the work directly, or run concurrent work as tasks with [`scope`](/docs/reference/task/fn.scope).

## Parameters

| Name | Type |
|------|------|
| `handle` | `coroutine<Y>` |

## Returns

`Y`

## See also

- [`task::scope`](/docs/reference/task/fn.scope)
- [`sleep`](/docs/reference/task/sleep): Suspends the current task for at least `ms` milliseconds; other tasks run meanwhile.
- [`yield_now`](/docs/reference/task/yield_now): Lets other ready tasks run before the current one continues.
- [`timeout`](/docs/reference/task/timeout): Runs `body` as a task and cancels it if it has not finished after `ms` milliseconds.
- [`shield`](/docs/reference/task/shield): Runs `body` so that a cancel waits for it to finish instead of interrupting it.
- [`channel`](/docs/reference/task/fn.channel): Creates a channel that holds up to `capacity` values.
- [`blocking`](/docs/reference/task/blocking): Runs `work` on another OS thread and waits for its result; only the current task waits, the others keep running.
- [`blocking_with`](/docs/reference/task/blocking_with): Like `blocking`, passing `arg` to `work` (it is copied to the other thread, like `thread::spawn(work, arg)`).
