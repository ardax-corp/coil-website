---
slug: "thread/Thread"
title: "Thread"
description: "A handle to a function running on another OS thread, from spawn."
module: "thread"
kind: "class"
name: "Thread"
signature: "class Thread"
import: "use thread::{Thread};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/builtin_docs/thread.hy#L29"
order: 0
---

A handle to a function running on another OS thread, from [`spawn`](/docs/reference/thread/spawn).

Pass it to [`join`](/docs/reference/thread/join) to wait for the result, or to [`detach`](/docs/reference/thread/detach) to let the
thread finish on its own. A `Thread` cannot be sent to another thread.

## Examples

```coil
use thread::{spawn, join, Thread};
use tests::assert;
fn double(int n) -> int {
    return n * 2;
}

fn main() {
    let t: Thread = match spawn(double, 21) {
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
- [`Sender`](/docs/reference/thread/Sender): The sending half of a channel made by `channel`.
- [`Receiver`](/docs/reference/thread/Receiver): The receiving half of a channel made by `channel`.
- [`Mutex`](/docs/reference/thread/Mutex): A mutual-exclusion lock that owns a value, made by `mutex`.
- [`RwLock`](/docs/reference/thread/RwLock): A readers-writer lock that owns a value, made by `rwlock`.
