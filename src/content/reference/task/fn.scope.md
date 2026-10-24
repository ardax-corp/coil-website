---
slug: "task/fn.scope"
title: "scope"
description: "Runs body with a Scope for starting child tasks, and returns its value once body and every child have finished."
module: "task"
kind: "fn"
name: "scope"
signature: "fn scope<T>(Scope -> T body) -> Result<T, TaskError>"
import: "use task::{scope};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/prelude/task.hy#L162"
order: 5
---

Runs `body` with a [`Scope`](/docs/reference/task/Scope) for starting child tasks, and returns its value once `body` and every child have finished.

Tasks run on the current thread and share the heap; they take turns at
suspension points, so ordinary IO functions overlap without callbacks. This
is structured concurrency: no task outlives its scope.

## Parameters

| Name | Type |
|------|------|
| `body` | `Scope -> T` |

## Returns

`Result<T, TaskError>`

## Errors

When a child panics, the scope cancels its other children, waits for them
and returns `Err(TaskError::Panicked(message))`.

## Panics

Panics with `task deadlock` when every task is waiting on another one.

## Examples

```coil
use task::{scope, sleep, Scope};
use tests::assert;
let order = scope(fn (Scope s) {
    let slow = s.spawn(fn () {
        sleep(20);
        return "slow";
    });
    let fast = s.spawn(fn () => "fast");
    return (fast.join() ?? "") + "," + (slow.join() ?? "");
});
assert!((order ?? "") == "fast,slow");
```

## See also

- [`task::Scope`](/docs/reference/task/Scope)
- [`sleep`](/docs/reference/task/sleep): Suspends the current task for at least `ms` milliseconds; other tasks run meanwhile.
- [`yield_now`](/docs/reference/task/yield_now): Lets other ready tasks run before the current one continues.
- [`timeout`](/docs/reference/task/timeout): Runs `body` as a task and cancels it if it has not finished after `ms` milliseconds.
- [`shield`](/docs/reference/task/shield): Runs `body` so that a cancel waits for it to finish instead of interrupting it.
- [`channel`](/docs/reference/task/fn.channel): Creates a channel that holds up to `capacity` values.
- [`blocking`](/docs/reference/task/blocking): Runs `work` on another OS thread and waits for its result; only the current task waits, the others keep running.
- [`blocking_with`](/docs/reference/task/blocking_with): Like `blocking`, passing `arg` to `work` (it is copied to the other thread, like `thread::spawn(work, arg)`).
