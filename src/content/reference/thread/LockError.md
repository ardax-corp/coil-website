---
slug: "thread/LockError"
title: "LockError"
description: "Why a Mutex or RwLock operation failed."
module: "thread"
kind: "enum"
name: "LockError"
signature: "enum LockError"
import: "use thread::{LockError};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/12901b3580d5c7df098353b1e92eedcb7e41f91d/compiler/src/builtin_docs/thread.hy#L226"
order: 7
---

Why a [`Mutex`](/docs/reference/thread/Mutex) or [`RwLock`](/docs/reference/thread/RwLock) operation failed.

It implements [`Show`](/docs/reference/prelude/ops/Show).

## Variants

### `WouldBlock` {#variant-wouldblock}

The lock is held: [`try_lock`](/docs/reference/thread/try_lock), [`try_read`](/docs/reference/thread/try_read) or [`try_write`](/docs/reference/thread/try_write) would wait.

### `Poisoned` {#variant-poisoned}

A readers-writer lock was poisoned by a thread that panicked while
holding it.

### `NotHeld` {#variant-notheld}

[`unlock`](/docs/reference/thread/unlock) of a mutex this thread does not hold.

### `AlreadyHeld` {#variant-alreadyheld}

[`lock`](/docs/reference/thread/lock) or [`try_lock`](/docs/reference/thread/try_lock) while this thread already holds a mutex through
[`lock`](/docs/reference/thread/lock) (one at a time).

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
```

## See also

- [`thread::Mutex`](/docs/reference/thread/Mutex)
- [`thread::RwLock`](/docs/reference/thread/RwLock)
- [`Show`](/docs/reference/prelude/ops/Show)
- [`thread::try_lock`](/docs/reference/thread/try_lock)
- [`thread::try_read`](/docs/reference/thread/try_read)
- [`thread::try_write`](/docs/reference/thread/try_write)
- [`thread::unlock`](/docs/reference/thread/unlock)
- [`thread::lock`](/docs/reference/thread/lock)
