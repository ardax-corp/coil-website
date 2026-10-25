---
slug: "task/yield_now"
title: "yield_now"
description: "Lets other ready tasks run before the current one continues."
module: "task"
kind: "fn"
name: "yield_now"
signature: "fn yield_now()"
import: "use task::{yield_now};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/prelude/task.hy#L186"
order: 7
---

Lets other ready tasks run before the current one continues.

Useful in a long computation that does no IO, so it does not hold up the
other tasks.

## See also

- [`scope`](/docs/reference/task/fn.scope): Runs `body` with a `Scope` for starting child tasks, and returns its value once `body` and every child have finished.
- [`sleep`](/docs/reference/task/sleep): Suspends the current task for at least `ms` milliseconds; other tasks run meanwhile.
- [`timeout`](/docs/reference/task/timeout): Runs `body` as a task and cancels it if it has not finished after `ms` milliseconds.
- [`shield`](/docs/reference/task/shield): Runs `body` so that a cancel waits for it to finish instead of interrupting it.
- [`channel`](/docs/reference/task/fn.channel): Creates a channel that holds up to `capacity` values.
- [`blocking`](/docs/reference/task/blocking): Runs `work` on another OS thread and waits for its result; only the current task waits, the others keep running.
- [`blocking_with`](/docs/reference/task/blocking_with): Like `blocking`, passing `arg` to `work` (it is copied to the other thread, like `thread::spawn(work, arg)`).
- [`block_on`](/docs/reference/task/block_on): Resumes the coroutine `handle` until it is done and returns its completion value; values it yields are discarded.
