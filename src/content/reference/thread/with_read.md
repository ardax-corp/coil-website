---
slug: "thread/with_read"
title: "with_read"
description: "Runs f on a snapshot of the lock's value and returns what f returns."
module: "thread"
kind: "fn"
name: "with_read"
signature: "fn with_read<A, B>(RwLock lock, A -> B f) -> Result<B, ThreadError>"
import: "use thread::{with_read};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/thread.hy#L592"
order: 21
---

Runs `f` on a snapshot of the lock's value and returns what `f` returns.

The read lock is released before `f` runs, so another thread may change
the value meanwhile. Waits while a writer holds the lock (blocking every
task of the thread, also inside a `task::scope`).

## Parameters

| Name | Type |
|------|------|
| `lock` | `RwLock` |
| `f` | `A -> B` |

## Returns

`Result<B, ThreadError>`

## Examples

```coil
use thread::{rwlock, with_read};
use tests::assert;
let lock = match rwlock([1, 2, 3]) {
    Result::Ok(l) => l,
    Result::Err(_) => panic "rwlock failed",
};
let first = match with_read(lock, fn ([int; 3] xs) => xs[0]) {
    Result::Ok(v) => v,
    Result::Err(_) => -1,
};
assert!(first == 1);
```

## See also

- [`spawn`](/docs/reference/thread/spawn): Runs f(arg) on another OS thread and returns a handle to it.
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its (Sender, Receiver) ends.
- [`send`](/docs/reference/thread/send): Sends a copy of value on the channel.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_send`](/docs/reference/thread/try_send): Sends value without waiting.
- [`try_recv`](/docs/reference/thread/try_recv): Takes the next value if there is one, without waiting.
