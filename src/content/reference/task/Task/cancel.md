---
slug: "task/Task/cancel"
title: "Task::cancel"
description: "Asks the task to stop."
module: "task"
kind: "method"
name: "cancel"
parent: "Task"
signature: "pub fn cancel()"
import: "use task::{Task};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/prelude/task.hy#L127"
order: 1
---

Asks the task to stop.

It unwinds at its next suspension point (at once, if it is suspended),
running its `defer` blocks, and [`join`](/docs/reference/task/Task/join) then returns `Err(TaskError::Cancelled)`.
Cancelling a finished task does nothing. Code inside [`shield`](/docs/reference/task/shield) finishes first.

Called on a `Task` value as `value.cancel(…)`.

## See also

- [`Task::join`](/docs/reference/task/Task/join)
- [`task::shield`](/docs/reference/task/shield)
- [`Task`](/docs/reference/task/Task): A handle to a child task started with `Scope::spawn`.
