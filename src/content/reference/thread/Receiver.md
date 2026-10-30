---
slug: "thread/Receiver"
title: "Receiver"
description: "The receiving half of a channel made by channel."
module: "thread"
kind: "class"
name: "Receiver"
signature: "class Receiver<T>"
import: "use thread::{Receiver};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/thread.hy#L85"
order: 2
---

The receiving half of a channel made by [`channel`](/docs/reference/thread/channel).

Like [`Sender`](/docs/reference/thread/Sender), a `Receiver` can be passed to other threads; each value
sent is received exactly once, by whichever [`recv`](/docs/reference/thread/recv) takes it first.

## Examples

```coil
use thread::{channel, send, try_recv, Receiver, ChannelError};
use tests::assert;
let (tx, rx) = match channel() {
    Result::Ok(pair) => pair,
    Result::Err(_) => panic "channel failed",
};
let r: Receiver = rx;
let empty = match try_recv(r) {
    Result::Err(ChannelError::Empty) => true,
    default => false,
};
assert!(empty);
let _ = send(tx, 1);
assert!(match try_recv(r) { Result::Ok(v) => v == 1, Result::Err(_) => false });
```

## See also

- [`thread::channel`](/docs/reference/thread/channel)
- [`thread::Sender`](/docs/reference/thread/Sender)
- [`thread::recv`](/docs/reference/thread/recv)
- [`Thread`](/docs/reference/thread/Thread): A handle to a function running on another OS thread, from `spawn`.
- [`Mutex`](/docs/reference/thread/Mutex): A mutual-exclusion lock that owns a value, made by `mutex`.
- [`RwLock`](/docs/reference/thread/RwLock): A readers-writer lock that owns a value, made by `rwlock`.
