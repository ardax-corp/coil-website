---
slug: "thread/try_read"
title: "try_read"
description: "Like with_read, but returns Err(ThreadError::WouldBlock) instead of waiting when a writer holds the lock."
module: "thread"
kind: "fn"
name: "try_read"
signature: "fn try_read<A, B>(RwLock lock, A -> B f) -> Result<B, ThreadError>"
import: "use thread::{try_read};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/thread.hy#L632"
order: 23
---

Like [`with_read`](/docs/reference/thread/with_read), but returns `Err(ThreadError::WouldBlock)` instead of waiting when a writer holds the lock.

## Parameters

| Name | Type |
|------|------|
| `lock` | `RwLock` |
| `f` | `A -> B` |

## Returns

`Result<B, ThreadError>`

## Examples

```coil
use thread::{rwlock, try_read};
use tests::assert;
let lock = match rwlock(5) {
    Result::Ok(l) => l,
    Result::Err(_) => panic "rwlock failed",
};
assert!(match try_read(lock, fn (int n) => n * 2) { Result::Ok(v) => v == 10, Result::Err(_) => false });
```

## See also

- [`thread::with_read`](/docs/reference/thread/with_read)
- [`spawn`](/docs/reference/thread/spawn): Runs f(arg) on another OS thread and returns a handle to it.
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its (Sender, Receiver) ends.
- [`send`](/docs/reference/thread/send): Sends a copy of value on the channel.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_send`](/docs/reference/thread/try_send): Sends value without waiting.
