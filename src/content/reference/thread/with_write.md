---
slug: "thread/with_write"
title: "with_write"
description: "Takes the write lock, runs f and stores the new value it returns."
module: "thread"
kind: "fn"
name: "with_write"
signature: "fn with_write<A, B>(RwLock<A> lock, A -> (A, B) f) -> Result<B, LockError>"
import: "use thread::{with_write};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/thread.coil#L683"
order: 24
---

Takes the write lock, runs `f` and stores the new value it returns.

`f` returns `(new_value, result)`, as for [`with_lock`](/docs/reference/thread/with_lock). The write lock is
held through the callback, so no reader or writer sees a half-done
update. Waits while the lock is held.

## Parameters

| Name | Type |
|------|------|
| `lock` | `RwLock<A>` |
| `f` | `A -> (A, B)` |

## Returns

`Result<B, LockError>`

## Examples

```coil
use thread::{rwlock, with_write, with_read};
use tests::assert;
let lock = match rwlock(1) {
    Result::Ok(l) => l,
    Result::Err(_) => panic "rwlock failed",
};
let old = match with_write(lock, fn (int n) => (n + 41, n)) {
    Result::Ok(v) => v,
    Result::Err(_) => -1,
};
assert!(old == 1);
assert!(match with_read(lock, fn (int n) => n) { Result::Ok(n) => n == 42, Result::Err(_) => false });
```

## See also

- [`thread::with_lock`](/docs/reference/thread/with_lock)
- [`spawn`](/docs/reference/thread/spawn): Runs `f(arg)` on another OS thread and returns a handle to it.
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its `(Sender, Receiver)` ends.
- [`send`](/docs/reference/thread/send): Sends a copy of `value` on the channel.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_send`](/docs/reference/thread/try_send): Sends `value` without waiting.
