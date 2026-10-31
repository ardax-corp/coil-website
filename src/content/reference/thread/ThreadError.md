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
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/thread.hy#L163"
order: 5
---

Why starting, joining or detaching a thread failed.

Channel functions report a [`ChannelError`](/docs/reference/thread/ChannelError) and lock functions a
[`LockError`](/docs/reference/thread/LockError) instead. It implements [`Show`](/docs/reference/prelude/ops/Show), so `format("%v", e)` gives the
variant name.

## Variants

### `JoinFailed` {#variant-joinfailed}

The thread cannot be joined: it was already joined or detached, or it
panicked instead of returning a value.

### `NotSendable` {#variant-notsendable}

A [`spawn`](/docs/reference/thread/spawn) argument or capture cannot cross to another thread: it is or
contains a stream, a [`Thread`](/docs/reference/thread/Thread), a coroutine, a [`gc`](/docs/reference/gc) handle, a partially
applied function, or a cycle. The typechecker rejects most of these,
so this is left for values of a generic type.

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
