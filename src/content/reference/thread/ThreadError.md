---
slug: "thread/ThreadError"
title: "ThreadError"
description: "The error of every thread function."
module: "thread"
kind: "enum"
name: "ThreadError"
signature: "enum ThreadError"
import: "use thread::{ThreadError};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/thread.hy#L150"
order: 5
---

The error of every [`thread`](/docs/reference/thread) function.

It implements [`Show`](/docs/reference/prelude/ops/Show), so `format("%v", e)` gives the variant name.

## Variants

### `WouldBlock` {#variant-wouldblock}

The operation would have to wait: [`try_recv`](/docs/reference/thread/try_recv) on an empty channel, or
[`try_lock`](/docs/reference/thread/try_lock) / [`try_read`](/docs/reference/thread/try_read) / [`try_write`](/docs/reference/thread/try_write) on a lock that is held.

### `Disconnected` {#variant-disconnected}

The channel is closed: [`send`](/docs/reference/thread/send) after [`close`](/docs/reference/thread/close), or [`recv`](/docs/reference/thread/recv) / [`try_recv`](/docs/reference/thread/try_recv)
on a closed channel with no values left.

### `JoinFailed` {#variant-joinfailed}

The thread cannot be joined: it was already joined or detached, or it
panicked instead of returning a value.

### `NotSendable` {#variant-notsendable}

A value cannot cross to another thread: it is or contains a stream, a
[`Thread`](/docs/reference/thread/Thread), a coroutine, a [`gc`](/docs/reference/gc) handle, a partially applied function, or
a cycle.

### `Poisoned` {#variant-poisoned}

A readers-writer lock was poisoned by a thread that panicked while
holding it.

### `Other` {#variant-other}

Any other failure: an [`unlock`](/docs/reference/thread/unlock) of a mutex this thread does not hold, a
second [`lock`](/docs/reference/thread/lock) while one is held, or a lock callback that does not
return a pair.

## Examples

```coil
use thread::{channel, close, send, ThreadError};
use tests::assert;
let (tx, rx) = match channel() {
    Result::Ok(pair) => pair,
    Result::Err(_) => panic "channel failed",
};
let _ = close(tx);
let closed = match send(tx, 1) {
    Result::Err(ThreadError::Disconnected) => true,
    default => false,
};
assert!(closed);
```

## See also

- [`thread`](/docs/reference/thread)
- [`Show`](/docs/reference/prelude/ops/Show)
- [`thread::try_recv`](/docs/reference/thread/try_recv)
- [`thread::try_lock`](/docs/reference/thread/try_lock)
- [`thread::try_read`](/docs/reference/thread/try_read)
- [`thread::try_write`](/docs/reference/thread/try_write)
- [`thread::send`](/docs/reference/thread/send)
- [`thread::close`](/docs/reference/thread/close)
- [`thread::recv`](/docs/reference/thread/recv)
- [`thread::Thread`](/docs/reference/thread/Thread)
- [`gc`](/docs/reference/gc)
- [`thread::unlock`](/docs/reference/thread/unlock)
- [`thread::lock`](/docs/reference/thread/lock)
