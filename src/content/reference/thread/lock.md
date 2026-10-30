---
slug: "thread/lock"
title: "lock"
description: "Locks m until unlock, waiting while another thread holds it."
module: "thread"
kind: "fn"
name: "lock"
signature: "fn lock<T>(Mutex<T> m) -> Result<unit, LockError>"
import: "use thread::{lock};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/thread.hy#L565"
order: 19
---

Locks `m` until [`unlock`](/docs/reference/thread/unlock), waiting while another thread holds it.

This gives no access to the value (use [`with_lock`](/docs/reference/thread/with_lock) for that); it only
excludes other `lock` / [`with_lock`](/docs/reference/thread/with_lock) callers. A thread can hold one mutex
through `lock` at a time: a second `lock` before [`unlock`](/docs/reference/thread/unlock) is
`Err(LockError::AlreadyHeld)`.

## Parameters

| Name | Type |
|------|------|
| `m` | `Mutex<T>` |

## Returns

`Result<unit, LockError>`

## Examples

```coil
use thread::{mutex, lock, unlock};
use tests::assert;
let m = match mutex(0) {
    Result::Ok(m) => m,
    Result::Err(_) => panic "mutex failed",
};
assert!(match lock(m) { Result::Ok(_) => true, Result::Err(_) => false });
assert!(match unlock(m) { Result::Ok(_) => true, Result::Err(_) => false });
```

## See also

- [`thread::unlock`](/docs/reference/thread/unlock)
- [`thread::with_lock`](/docs/reference/thread/with_lock)
- [`spawn`](/docs/reference/thread/spawn): Runs `f(arg)` on another OS thread and returns a handle to it.
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its `(Sender, Receiver)` ends.
- [`send`](/docs/reference/thread/send): Sends a copy of `value` on the channel.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
