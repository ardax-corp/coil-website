---
description: "Structured concurrency on one thread: scopes, tasks, timeouts and channels."
---
Tasks are cooperative: they run on the calling thread and switch only at
suspension points (IO waits, `sleep`, `join`, `recv`, `yield_now`). Every task
lives inside a `scope`, which does not return until all of its children have
finished, so no task outlives the code that started it.

Use tasks for concurrent IO; use [threads](/docs/reference/thread) for
CPU-bound work. The [tasks tutorial](/docs/manual/tutorial/13-tasks) walks
through the model.
