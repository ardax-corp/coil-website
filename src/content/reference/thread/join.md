---
slug: "thread/join"
title: "join"
description: "Waits for the thread to finish and returns the value its function returned."
module: "thread"
kind: "fn"
name: "join"
signature: "fn join<T>(Thread<T> t) -> Result<T, ThreadError>"
import: "use thread::{join};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/thread.hy#L306"
order: 9
---

Waits for the thread to finish and returns the value its function returned.

Returns `Err(ThreadError::JoinFailed)` if the thread was already joined
or detached, or if its function panicked (the panic message is printed to
stderr). Inside a [`task::scope`](/docs/reference/task/scope), only the joining task waits; other tasks
keep running.

## Parameters

| Name | Type |
|------|------|
| `t` | `Thread<T>` |

## Returns

`Result<T, ThreadError>`

## Examples

```coil
use thread::{spawn, join, ThreadError};
use tests::assert;
fn answer() -> int {
    return 42;
}

fn main() {
    let t = match spawn(answer) {
        Result::Ok(t) => t,
        Result::Err(_) => panic "spawn failed",
    };
    assert!(match join(t) { Result::Ok(n) => n == 42, Result::Err(_) => false });
    let again = match join(t) {
        Result::Err(ThreadError::JoinFailed) => true,
        default => false,
    };
    assert!(again);
}
```

## See also

- [`task::scope`](/docs/reference/task/scope)
- [`spawn`](/docs/reference/thread/spawn): Runs `f(arg)` on another OS thread and returns a handle to it.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its `(Sender, Receiver)` ends.
- [`send`](/docs/reference/thread/send): Sends a copy of `value` on the channel.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_send`](/docs/reference/thread/try_send): Sends `value` without waiting.
- [`try_recv`](/docs/reference/thread/try_recv): Takes the next value if there is one, without waiting.
