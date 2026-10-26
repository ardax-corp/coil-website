---
slug: "thread/try_write"
title: "try_write"
description: "Like with_write, but returns Err(LockError::WouldBlock) instead of waiting when the lock is held."
module: "thread"
kind: "fn"
name: "try_write"
signature: "fn try_write<A, B>(RwLock<A> lock, A -> (A, B) f) -> Result<B, LockError>"
import: "use thread::{try_write};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/builtin_docs/thread.hy#L716"
order: 26
---

Like [`with_write`](/docs/reference/thread/with_write), but returns `Err(LockError::WouldBlock)` instead of waiting when the lock is held.

## Parameters

| Name | Type |
|------|------|
| `lock` | `RwLock<A>` |
| `f` | `A -> (A, B)` |

## Returns

`Result<B, LockError>`

## Examples

```coil
use thread::{rwlock, try_write, with_read};
use tests::assert;
let lock = match rwlock(1) {
    Result::Ok(l) => l,
    Result::Err(_) => panic "rwlock failed",
};
let _ = try_write(lock, fn (int n) => (n * 10, 0));
assert!(match with_read(lock, fn (int n) => n) { Result::Ok(n) => n == 10, Result::Err(_) => false });
```

## See also

- [`thread::with_write`](/docs/reference/thread/with_write)
- [`spawn`](/docs/reference/thread/spawn): Runs `f(arg)` on another OS thread and returns a handle to it.
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its `(Sender, Receiver)` ends.
- [`send`](/docs/reference/thread/send): Sends a copy of `value` on the channel.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_send`](/docs/reference/thread/try_send): Sends `value` without waiting.
