---
slug: "thread/try_recv"
title: "try_recv"
description: "Takes the next value if there is one, without waiting."
module: "thread"
kind: "fn"
name: "try_recv"
signature: "fn try_recv<T>(Receiver<T> rx) -> Result<T, ThreadError>"
import: "use thread::{try_recv};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/builtin_docs/thread.hy#L400"
order: 13
---

Takes the next value if there is one, without waiting.

Returns `Err(ThreadError::WouldBlock)` when the channel is empty but
open, and `Err(ThreadError::Disconnected)` when it is empty and closed.

## Parameters

| Name | Type |
|------|------|
| `rx` | `Receiver<T>` |

## Returns

`Result<T, ThreadError>`

## Examples

```coil
use thread::{channel, send, try_recv, ThreadError};
use tests::assert;
let (tx, rx) = match channel() {
    Result::Ok(pair) => pair,
    Result::Err(_) => panic "channel failed",
};
let empty = match try_recv(rx) {
    Result::Err(ThreadError::WouldBlock) => true,
    default => false,
};
assert!(empty);
let _ = send(tx, 3);
assert!(match try_recv(rx) { Result::Ok(v) => v == 3, Result::Err(_) => false });
```

## See also

- [`spawn`](/docs/reference/thread/spawn): Runs `f(arg)` on another OS thread and returns a handle to it.
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its `(Sender, Receiver)` ends.
- [`send`](/docs/reference/thread/send): Sends a copy of `value` on the channel.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_send`](/docs/reference/thread/try_send): Sends `value` without waiting.
- [`close`](/docs/reference/thread/close): Closes the channel: no more sends.
