---
slug: "thread/Thread"
title: "Thread"
description: "A handle to a function running on another OS thread, from spawn."
module: "thread"
kind: "class"
name: "Thread"
signature: "class Thread<T>"
import: "use thread::{Thread};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/a0f9a69de421abd1c20672ef88c619ca2a88a976/compiler/src/builtin_docs/thread.hy#L34"
order: 0
---

A handle to a function running on another OS thread, from [`spawn`](/docs/reference/thread/spawn).

Pass it to [`join`](/docs/reference/thread/join) to wait for the result, or to [`detach`](/docs/reference/thread/detach) to let the
thread finish on its own. A `Thread` cannot be sent to another thread.

`T` is what the thread's function returns, so [`join`](/docs/reference/thread/join) gives back that
type. A bare `Thread` in a type infers its `T`; the channel and lock
handles ([`Sender<T>`](/docs/reference/thread/Sender), [`Receiver<T>`](/docs/reference/thread/Receiver), [`Mutex<T>`](/docs/reference/thread/Mutex), [`RwLock<T>`](/docs/reference/thread/RwLock)) carry
their value type the same way.

## Examples

```coil
use thread::{spawn, join, Thread};
use tests::assert;
fn double(int n) -> int {
    return n * 2;
}

fn main() {
    let t: Thread<int> = match spawn(double, 21) {
        Result::Ok(t) => t,
        Result::Err(_) => panic "spawn failed",
    };
    let n = match join(t) {
        Result::Ok(n) => n,
        Result::Err(_) => 0,
    };
    assert!(n == 42);
}
```

## See also

- [`thread::spawn`](/docs/reference/thread/spawn)
- [`thread::join`](/docs/reference/thread/join)
- [`thread::detach`](/docs/reference/thread/detach)
- [`thread::Sender`](/docs/reference/thread/Sender)
- [`thread::Receiver`](/docs/reference/thread/Receiver)
- [`thread::Mutex`](/docs/reference/thread/Mutex)
- [`thread::RwLock`](/docs/reference/thread/RwLock)
