---
slug: "thread/unlock"
title: "unlock"
description: "Releases a mutex this thread locked with lock or try_lock."
module: "thread"
kind: "fn"
name: "unlock"
signature: "fn unlock<T>(Mutex<T> m) -> Result<unit, LockError>"
import: "use thread::{unlock};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/thread.hy#L614"
order: 21
---

Releases a mutex this thread locked with [`lock`](/docs/reference/thread/lock) or [`try_lock`](/docs/reference/thread/try_lock).

Returns `Err(LockError::NotHeld)` if this thread does not hold `m`.

## Parameters

| Name | Type |
|------|------|
| `m` | `Mutex<T>` |

## Returns

`Result<unit, LockError>`

## Examples

```coil
use thread::{mutex, lock, unlock, LockError};
use tests::assert;
let m = match mutex(0) {
    Result::Ok(m) => m,
    Result::Err(_) => panic "mutex failed",
};
let _ = lock(m);
assert!(match unlock(m) { Result::Ok(_) => true, Result::Err(_) => false });
let not_held = match unlock(m) {
    Result::Err(LockError::NotHeld) => true,
    default => false,
};
assert!(not_held);
```

## See also

- [`thread::lock`](/docs/reference/thread/lock)
- [`thread::try_lock`](/docs/reference/thread/try_lock)
- [`spawn`](/docs/reference/thread/spawn): Runs `f(arg)` on another OS thread and returns a handle to it.
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its `(Sender, Receiver)` ends.
- [`send`](/docs/reference/thread/send): Sends a copy of `value` on the channel.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
