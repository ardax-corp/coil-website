---
slug: "thread/send"
title: "send"
description: "Sends a copy of value on the channel."
module: "thread"
kind: "fn"
name: "send"
signature: "fn send<T>(Sender<T> tx, T value) -> Result<unit, ChannelError>"
import: "use thread::{send};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/builtin_docs/thread.hy#L393"
order: 12
---

Sends a copy of `value` on the channel.

Never waits, since channels are unbounded. Returns
`Err(ChannelError::Closed)` once the channel is closed. The value must be
sendable (see [`spawn`](/docs/reference/thread/spawn)); the typechecker rejects one that is not.

## Parameters

| Name | Type |
|------|------|
| `tx` | `Sender<T>` |
| `value` | `T` |

## Returns

`Result<unit, ChannelError>`

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

- [`thread::spawn`](/docs/reference/thread/spawn)
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its `(Sender, Receiver)` ends.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_send`](/docs/reference/thread/try_send): Sends `value` without waiting.
- [`try_recv`](/docs/reference/thread/try_recv): Takes the next value if there is one, without waiting.
- [`close`](/docs/reference/thread/close): Closes the channel: no more sends.
