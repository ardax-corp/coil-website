---
slug: "thread/try_lock"
title: "try_lock"
description: "Locks m if it is free, without waiting."
module: "thread"
kind: "fn"
name: "try_lock"
signature: "fn try_lock<T>(Mutex<T> m) -> Result<unit, LockError>"
import: "use thread::{try_lock};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/builtin_docs/thread.hy#L591"
order: 20
---

Locks `m` if it is free, without waiting.

Returns `Err(LockError::WouldBlock)` when the mutex is held (also by
this thread). On success, release it with [`unlock`](/docs/reference/thread/unlock).

## Parameters

| Name | Type |
|------|------|
| `m` | `Mutex<T>` |

## Returns

`Result<unit, LockError>`

## Examples

```coil
use thread::{mutex, lock, try_lock, unlock, LockError};
use tests::assert;
let m = match mutex(0) {
    Result::Ok(m) => m,
    Result::Err(_) => panic "mutex failed",
};
let _ = lock(m);
let busy = match try_lock(m) {
    Result::Err(LockError::WouldBlock) => true,
    default => false,
};
assert!(busy);
let _ = unlock(m);
assert!(match try_lock(m) { Result::Ok(_) => true, Result::Err(_) => false });
let _ = unlock(m);
```

## See also

- [`thread::unlock`](/docs/reference/thread/unlock)
- [`spawn`](/docs/reference/thread/spawn): Runs `f(arg)` on another OS thread and returns a handle to it.
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its `(Sender, Receiver)` ends.
- [`send`](/docs/reference/thread/send): Sends a copy of `value` on the channel.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_send`](/docs/reference/thread/try_send): Sends `value` without waiting.
