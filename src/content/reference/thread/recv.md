---
slug: "thread/recv"
title: "recv"
description: "Takes the next value from the channel, waiting until one arrives."
module: "thread"
kind: "fn"
name: "recv"
signature: "fn recv<T>(Receiver<T> rx) -> Result<T, ChannelError>"
import: "use thread::{recv};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/thread.hy#L419"
order: 13
---

Takes the next value from the channel, waiting until one arrives.

Returns `Err(ChannelError::Closed)` when the channel is closed and
every value has been received. Inside a [`task::scope`](/docs/reference/task/fn.scope), only the waiting
task is suspended.

## Parameters

| Name | Type |
|------|------|
| `rx` | `Receiver<T>` |

## Returns

`Result<T, ChannelError>`

## Examples

```coil
use thread::{channel, send, recv, close, ChannelError};
use tests::assert;
let (tx, rx) = match channel() {
    Result::Ok(pair) => pair,
    Result::Err(_) => panic "channel failed",
};
let _ = send(tx, "last");
let _ = close(tx);
assert!(match recv(rx) { Result::Ok(s) => s == "last", Result::Err(_) => false });
let done = match recv(rx) {
    Result::Err(ChannelError::Closed) => true,
    default => false,
};
assert!(done);
```

## See also

- [`task::scope`](/docs/reference/task/fn.scope)
- [`spawn`](/docs/reference/thread/spawn): Runs `f(arg)` on another OS thread and returns a handle to it.
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its `(Sender, Receiver)` ends.
- [`send`](/docs/reference/thread/send): Sends a copy of `value` on the channel.
- [`try_send`](/docs/reference/thread/try_send): Sends `value` without waiting.
- [`try_recv`](/docs/reference/thread/try_recv): Takes the next value if there is one, without waiting.
