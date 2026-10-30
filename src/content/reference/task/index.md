---
slug: "task/index"
title: "task"
description: "Structured concurrency on one thread: scopes, tasks, timeouts and channels."
module: "task"
kind: "module"
name: "task"
origin: "embedded"
auto: false
order: 17
---

Tasks are cooperative: they run on the calling thread and switch only at
suspension points (IO waits, [`sleep`](/docs/reference/task/sleep), `join`, `recv`, [`yield_now`](/docs/reference/task/yield_now)). Every task
lives inside a [`scope`](/docs/reference/task/scope), which does not return until all of its children have
finished, so no task outlives the code that started it.

Use tasks for concurrent IO; use [threads](/docs/reference/thread) for
CPU-bound work. The [tasks tutorial](/docs/manual/tutorial/13-tasks) walks
through the model.

Written in Coil and shipped inside the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use task::{TaskError, scope};
```

## Types

| Name | Description |
|------|-------------|
| [`TaskError`](/docs/reference/task/TaskError) | Why a task or a [`scope`](/docs/reference/task/scope) did not produce its value. |

## Functions

| Name | Description |
|------|-------------|
| [`scope`](/docs/reference/task/scope) | Runs `body` with a `Scope` for starting child tasks, and returns its value once `body` and every child have finished. |
| [`sleep`](/docs/reference/task/sleep) | Suspends the current task for at least `ms` milliseconds; other tasks run meanwhile. |
| [`yield_now`](/docs/reference/task/yield_now) | Lets other ready tasks run before the current one continues. |
| [`timeout`](/docs/reference/task/timeout) | Runs `body` as a task and cancels it if it has not finished after `ms` milliseconds. |
| [`shield`](/docs/reference/task/shield) | Runs `body` so that a cancel waits for it to finish instead of interrupting it. |
| [`channel`](/docs/reference/task/channel) | Creates a channel that holds up to `capacity` values. |
| [`blocking`](/docs/reference/task/blocking) | Runs `work` on another OS thread and waits for its result; only the current task waits, the others keep running. |
| [`blocking_with`](/docs/reference/task/blocking_with) | Like [`blocking`](/docs/reference/task/blocking), passing `arg` to `work` (it is copied to the other thread, like `thread::spawn(work, arg)`). |
| [`block_on`](/docs/reference/task/block_on) | Resumes the coroutine `handle` until it is done and returns its completion value; values it yields are discarded. |
