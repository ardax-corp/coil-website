---
slug: "thread/fn.mutex"
title: "mutex"
description: "Creates a mutex holding a copy of initial."
module: "thread"
kind: "fn"
name: "mutex"
signature: "fn mutex<T>(T initial) -> Result<Mutex, ThreadError>"
import: "use thread::{mutex};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/thread.hy#L451"
order: 15
---

Creates a mutex holding a copy of `initial`.

The value must be sendable (see [`spawn`](/docs/reference/thread/spawn)), or the result is
`Err(ThreadError::NotSendable)`. Read and change it with [`with_lock`](/docs/reference/thread/with_lock).

## Parameters

| Name | Type |
|------|------|
| `initial` | `T` |

## Returns

`Result<Mutex, ThreadError>`

## Examples

```coil
use thread::{mutex, with_lock, spawn, join, Mutex};
use tests::assert;
fn bump(Mutex m) -> int {
    let _ = with_lock(m, fn (int n) => (n + 1, 0));
    return 0;
}

fn main() {
    let m = match mutex(0) {
        Result::Ok(m) => m,
        Result::Err(_) => panic "mutex failed",
    };
    let t1 = match spawn(bump, m) { Result::Ok(t) => t, Result::Err(_) => panic "spawn" };
    let t2 = match spawn(bump, m) { Result::Ok(t) => t, Result::Err(_) => panic "spawn" };
    let _ = join(t1);
    let _ = join(t2);
    let n = match with_lock(m, fn (int x) => (x, x)) {
        Result::Ok(n) => n,
        Result::Err(_) => -1,
    };
    assert!(n == 2);
}
```

## See also

- [`thread::spawn`](/docs/reference/thread/spawn)
- [`thread::with_lock`](/docs/reference/thread/with_lock)
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its (Sender, Receiver) ends.
- [`send`](/docs/reference/thread/send): Sends a copy of value on the channel.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_send`](/docs/reference/thread/try_send): Sends value without waiting.
