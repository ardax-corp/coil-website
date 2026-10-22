---
slug: "thread/send"
title: "send"
description: "Sends a copy of value on the channel."
module: "thread"
kind: "fn"
name: "send"
signature: "fn send<T>(Sender tx, T value) -> Result<unit, ThreadError>"
import: "use thread::{send};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/47561bdcc2da2f012b9401977345a7770403a398/compiler/src/builtin_docs/thread.hy#L326"
order: 10
---

Sends a copy of `value` on the channel.

Never waits, since channels are unbounded. Returns
`Err(ThreadError::Disconnected)` once the channel is closed and
`Err(ThreadError::NotSendable)` for a value that cannot cross threads.

## Parameters

| Name | Type |
|------|------|
| `tx` | `Sender` |
| `value` | `T` |

## Returns

`Result<unit, ThreadError>`

## Examples

```coil
use thread::{channel, send, recv};
use tests::assert;
let (tx, rx) = match channel() {
    Result::Ok(pair) => pair,
    Result::Err(_) => panic "channel failed",
};
let _ = send(tx, [1, 2, 3]);
let v = match recv(rx) {
    Result::Ok(v) => v,
    Result::Err(_) => [0, 0, 0],
};
assert!(v[2] == 3);
```

## See also

- [`spawn`](/docs/reference/thread/spawn): Runs f(arg) on another OS thread and returns a handle to it.
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its (Sender, Receiver) ends.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_send`](/docs/reference/thread/try_send): Sends value without waiting.
- [`try_recv`](/docs/reference/thread/try_recv): Takes the next value if there is one, without waiting.
- [`close`](/docs/reference/thread/close): Closes the channel: no more sends.
