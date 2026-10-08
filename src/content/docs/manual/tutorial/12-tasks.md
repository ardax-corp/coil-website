---
title: 12 — Tasks
description: Structured concurrency on one VM. task::scope runs child tasks; an IO wait, sleep or join suspends only the current task, so the others keep running.
---

# 12 — Tasks

Tasks run several pieces of work concurrently on **one VM and one OS
thread**, sharing the heap. They come from the embedded **`task`** module:

```coil
use task::{scope, Scope, TaskError};
```

Use tasks for concurrent **IO** (many sockets, files, timers). For parallel
**CPU** work use [OS threads](/docs/manual/tutorial/11-threads).

## Scopes and spawn

`scope(body)` gives `body` a `Scope`. `s.spawn(f)` starts `f` as a child task
and returns its handle. The scope returns only once `body` returned **and**
every child finished, so no task outlives the scope that started it.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
use task::{scope, Scope, TaskError};

fn value(Result<int, TaskError> r) -> int {
    return match r {
        Result::Ok(v) => v,
        Result::Err(_) => -1,
    };
}

fn main() {
    let r = scope(
        fn (Scope s) {
            let a = s.spawn(fn () => 20);
            let b = s.spawn(fn () => 22);
            value(a.join()) + value(b.join())
        },
    );
    match r {
        Result::Ok(n) => write_all(stdout(), to_bytes(format("%i", n))), // 42
        Result::Err(_) => write_all(stdout(), to_bytes("failed")),
    };
}
```

`t.join()` waits for the task and returns `Result<R, TaskError>`.
`scope` returns `Result<T, TaskError>` with the body's value.

## When tasks switch

A task runs until it reaches a **suspension point**, then the next ready task
runs. Suspension points are:

- an IO wait (`wait_readable`, `wait_writable`, and everything built on them,
  such as `io::sync::read_to_end`, `accept_wait` or a TLS handshake)
- `task::sleep(ms)` and `clock::sleep_ms(ms)`
- `t.join()` on an unfinished task, and the end of a `scope`
- `task::yield_now()`

There is no preemption: a loop that never reaches one of these keeps the
thread. Ordinary functions that do IO need no changes to run inside a task,
and that includes IO inside a `gen fn` a task is resuming.

## Concurrent IO

Each spawned reader below waits on its own file. While one waits, the other
runs (`examples/task_files.hy`):

```coil
use io::{stdout, open, close, wait_readable};
use io::sync::{write_all, read_to_end};
use string::to_bytes;
use task::{scope, Scope, TaskError};

fn slurp(string path) -> Result<int, IoError> {
    let s = open(path, "r")?;
    wait_readable(s)?;
    let bytes = read_to_end(s)?;
    close(s)?;
    return Result::Ok(len(bytes));
}

fn size(Result<Result<int, IoError>, TaskError> r) -> int {
    return match r {
        Result::Ok(Result::Ok(n)) => n,
        default => -1,
    };
}

fn main() {
    let r = scope(
        fn (Scope s) {
            let a = s.spawn(fn () => slurp("/etc/hosts"));
            let b = s.spawn(fn () => slurp("/etc/passwd"));
            size(a.join()) > 0 && size(b.join()) > 0
        },
    );
    let text = match r {
        Result::Ok(true) => "ok",
        default => "failed",
    };
    write_all(stdout(), to_bytes(text));
}
```

## Panics

A panic inside a child task does not end the program. Its `defer` blocks
run, then it **fails the scope**: the scope's other children are cancelled,
`join` on the panicked task returns `Err(TaskError::Panicked(message))`, and
`scope` returns `Err(TaskError::Panicked(message))` once the other children
have stopped. A panic outside any task still ends the program, after running
the `defer` blocks of the functions it leaves.

## Cancellation

`t.cancel()` stops a task. The task stops at its next suspension point (at
once, if it is waiting now), runs its `defer` blocks, and `join` returns
`Err(TaskError::Cancelled)`. A `defer` may still do IO while its task stops.

```coil
use task::{scope, Scope, timeout, shield};

let r = scope(fn (Scope s) {
    let worker = s.spawn(fn () {
        defer {
            // runs when the task is cancelled, too
        }
        task::sleep(60000);
        0
    });
    worker.cancel();
    worker.join()
});

// Give up on slow work: Err(TaskError::TimedOut) after 100 ms.
let answer = timeout(100, fn () => slow_lookup());

// A cancel waits until the shielded section has finished.
shield(fn () {
    write_record();
});
```

`task::timeout(ms, body)` runs `body` as a task and cancels it at the
deadline. Inside `task::shield(body)` a cancel waits: the task stops once the
shielded section returns. Cancelling a task also cancels the tasks it
started, and they stop first.

## Sleep and yield

```coil
use task::{sleep, yield_now};

sleep(10);    // suspend this task for at least 10 ms
yield_now();  // let other ready tasks run first
```

Outside a scope, `sleep` sleeps the thread and `yield_now` does nothing.

## Replacing `block_on`, `drive` and `wait_ready`

Earlier versions multiplexed IO by resuming generators by hand and calling
`io::wait_ready()`. Those functions, and `block_on`, are deprecated (warning
`E0129`). Write the work as plain functions and run each one as a task.
