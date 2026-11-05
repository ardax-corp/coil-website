---
slug: "thread/ThreadError"
title: "ThreadError"
description: "Why starting, joining or detaching a thread failed."
module: "thread"
kind: "enum"
name: "ThreadError"
signature: "enum ThreadError"
import: "use thread::{ThreadError};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/9c93ed17ff191a9c4e7d41030d8a6da8342de21a/compiler/src/builtin_docs/thread.coil#L163"
order: 5
---

Why starting, joining or detaching a thread failed.

Channel functions report a [`ChannelError`](/docs/reference/thread/ChannelError) and lock functions a
[`LockError`](/docs/reference/thread/LockError) instead. It implements [`Show`](/docs/reference/prelude/ops/Show), so `format("%v", e)` gives the
variant name (`Panicked(<message>)` for a panic).

## Variants

### `JoinFailed` {#variant-joinfailed}

The thread cannot be joined: it was already joined or detached.

### `NotSendable` {#variant-notsendable}

A [`spawn`](/docs/reference/thread/spawn) argument or capture cannot cross to another thread: it is or
contains a stream, a [`Thread`](/docs/reference/thread/Thread), a coroutine, a [`gc`](/docs/reference/gc) handle, a partially
applied function, or a cycle. The typechecker rejects most of these,
so this is left for values of a generic type.

### `Panicked(string)` {#variant-panicked}

The thread panicked instead of returning a value; the payload is the
panic message, as in [`task::TaskError::Panicked`](/docs/reference/task/TaskError#variant-panicked).

## Examples

```coil
use thread::{spawn, join, detach, ThreadError};
use tests::assert;
fn one() -> int {
    return 1;
}

fn main() {
    let t = match spawn(one) {
        Result::Ok(t) => t,
        Result::Err(_) => panic "spawn failed",
    };
    let _ = detach(t);
    let refused = match join(t) {
        Result::Err(ThreadError::JoinFailed) => true,
        default => false,
    };
    assert!(refused);
}
```

## See also

- [`thread::ChannelError`](/docs/reference/thread/ChannelError)
- [`thread::LockError`](/docs/reference/thread/LockError)
- [`Show`](/docs/reference/prelude/ops/Show)
- [`thread::spawn`](/docs/reference/thread/spawn)
- [`thread::Thread`](/docs/reference/thread/Thread)
- [`gc`](/docs/reference/gc)
- [`task::TaskError`](/docs/reference/task/TaskError)
