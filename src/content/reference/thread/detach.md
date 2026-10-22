---
slug: "thread/detach"
title: "detach"
description: "Lets the thread run to completion without being joined."
module: "thread"
kind: "fn"
name: "detach"
signature: "fn detach(Thread t) -> Result<unit, ThreadError>"
import: "use thread::{detach};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/thread.hy#L269"
order: 8
---

Lets the thread run to completion without being joined.

Its result is dropped, and the program does not wait for it when `main`
returns. A later [`join`](/docs/reference/thread/join) on the handle is `Err(ThreadError::JoinFailed)`,
as is detaching a thread that was already joined.

## Parameters

| Name | Type |
|------|------|
| `t` | `Thread` |

## Returns

`Result<unit, ThreadError>`

## Examples

```coil
use thread::{spawn, detach, join, ThreadError};
use tests::assert;
fn work() -> int {
    return 1;
}

fn main() {
    let t = match spawn(work) {
        Result::Ok(t) => t,
        Result::Err(_) => panic "spawn failed",
    };
    assert!(match detach(t) { Result::Ok(_) => true, Result::Err(_) => false });
    let joined = match join(t) {
        Result::Err(ThreadError::JoinFailed) => true,
        default => false,
    };
    assert!(joined);
}
```

## See also

- [`thread::join`](/docs/reference/thread/join)
- [`spawn`](/docs/reference/thread/spawn): Runs f(arg) on another OS thread and returns a handle to it.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its (Sender, Receiver) ends.
- [`send`](/docs/reference/thread/send): Sends a copy of value on the channel.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_send`](/docs/reference/thread/try_send): Sends value without waiting.
- [`try_recv`](/docs/reference/thread/try_recv): Takes the next value if there is one, without waiting.
- [`close`](/docs/reference/thread/close): Closes the channel: no more sends.
