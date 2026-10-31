---
slug: "task/Task"
title: "Task"
description: "A handle to a child task started with Scope::spawn. join waits for its result."
module: "task"
kind: "class"
name: "Task"
signature: "shared class Task<R>"
import: "use task::{Task};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/task.hy#L56"
order: 2
---

A handle to a child task started with [`Scope::spawn`](/docs/reference/task/Scope/spawn). [`join`](/docs/reference/task/Task/join) waits for its result.

## Methods

| Name | Description |
|------|-------------|
| [`join`](/docs/reference/task/Task/join) | Waits for the task to finish and returns its value. |
| [`cancel`](/docs/reference/task/Task/cancel) | Asks the task to stop. |

## See also

- [`Scope::spawn`](/docs/reference/task/Scope/spawn)
- [`Task::join`](/docs/reference/task/Task/join)
- [`Scope`](/docs/reference/task/Scope): A running `scope`, used to start child tasks with `spawn`.
- [`Channel`](/docs/reference/task/Channel): A bounded queue for passing values between tasks.
