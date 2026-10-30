---
slug: "thread/spawn"
title: "spawn"
description: "Runs f(arg) on another OS thread and returns a handle to it."
module: "thread"
kind: "fn"
name: "spawn"
signature: "fn spawn<A, B>(A -> B f, A arg) -> Result<Thread<B>, ThreadError>"
import: "use thread::{spawn};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/thread.hy#L275"
order: 8
---

Runs `f(arg)` on another OS thread and returns a handle to it.

The work goes to a pool of worker threads (one per CPU by default, set
with the `COIL_MAX_WORKER_THREADS` environment variable). Each thread has
its own heap: `arg` and the `use` captures of a closure are deep-copied
to it, and the result is copied back by [`join`](/docs/reference/thread/join). Sendable values are
numbers, strings, tuples, arrays, records, enums and class instances made
of them, plus [`Sender`](/docs/reference/thread/Sender), [`Receiver`](/docs/reference/thread/Receiver), [`Mutex`](/docs/reference/thread/Mutex) and [`RwLock`](/docs/reference/thread/RwLock) handles, which
stay shared. The typechecker rejects anything else; a value of a generic
type that turns out not to be sendable is `Err(ThreadError::NotSendable)`.

`spawn(f)` with no argument runs a function that takes none. When `main`
returns, the program still waits for threads that were neither joined
nor detached.

## Parameters

| Name | Type |
|------|------|
| `f` | `A -> B` |
| `arg` | `A` |

## Returns

`Result<Thread<B>, ThreadError>`

## Examples

```coil
use thread::{spawn, join};
use tests::assert;
fn square(int n) -> int {
    return n * n;
}

fn main() {
    let t = match spawn(square, 7) {
        Result::Ok(t) => t,
        Result::Err(_) => panic "spawn failed",
    };
    let n = match join(t) {
        Result::Ok(n) => n,
        Result::Err(_) => 0,
    };
    assert!(n == 49);
}
```

## See also

- [`thread::join`](/docs/reference/thread/join)
- [`thread::Sender`](/docs/reference/thread/Sender)
- [`thread::Receiver`](/docs/reference/thread/Receiver)
- [`thread::Mutex`](/docs/reference/thread/Mutex)
- [`thread::RwLock`](/docs/reference/thread/RwLock)
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its `(Sender, Receiver)` ends.
- [`send`](/docs/reference/thread/send): Sends a copy of `value` on the channel.
