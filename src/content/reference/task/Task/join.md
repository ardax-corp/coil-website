---
slug: "task/Task/join"
title: "Task::join"
description: "Waits for the task to finish and returns its value."
module: "task"
kind: "method"
name: "join"
parent: "Task"
signature: "pub fn join() -> Result<R, TaskError>"
import: "use task::{Task};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/prelude/task.hy#L105"
order: 0
---

Waits for the task to finish and returns its value.

This is a suspension point: other tasks run while it waits.

Called on a `Task` value as `value.join(…)`.

## Returns

`Result<R, TaskError>`

## Errors

`Err(TaskError::Panicked(message))` when the task panicked and
`Err(TaskError::Cancelled)` when it was cancelled.

## Panics

Panics with `task deadlock` when every task is waiting on another one.

## See also

- [`Task`](/docs/reference/task/Task): A handle to a child task started with `Scope::spawn`.
- [`Task::cancel`](/docs/reference/task/Task/cancel): Asks the task to stop.
