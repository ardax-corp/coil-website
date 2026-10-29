---
slug: "thread/try_send"
title: "try_send"
description: "Sends value without waiting."
module: "thread"
kind: "fn"
name: "try_send"
signature: "fn try_send<T>(Sender<T> tx, T value) -> Result<unit, ChannelError>"
import: "use thread::{try_send};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/e553eda99b575bb4f78c04622508caa036a1a01b/compiler/src/builtin_docs/thread.hy#L438"
order: 14
---

Sends `value` without waiting.

Channels are unbounded, so this behaves exactly like [`send`](/docs/reference/thread/send): it fails
only with `Closed`, never `Full`.

## Parameters

| Name | Type |
|------|------|
| `tx` | `Sender<T>` |
| `value` | `T` |

## Returns

`Result<unit, ChannelError>`

## Examples

```coil
use thread::{channel, try_send, try_recv};
use tests::assert;
let (tx, rx) = match channel() {
    Result::Ok(pair) => pair,
    Result::Err(_) => panic "channel failed",
};
assert!(match try_send(tx, 7) { Result::Ok(_) => true, Result::Err(_) => false });
assert!(match try_recv(rx) { Result::Ok(v) => v == 7, Result::Err(_) => false });
```

## See also

- [`thread::send`](/docs/reference/thread/send)
- [`spawn`](/docs/reference/thread/spawn): Runs `f(arg)` on another OS thread and returns a handle to it.
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its `(Sender, Receiver)` ends.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_recv`](/docs/reference/thread/try_recv): Takes the next value if there is one, without waiting.
- [`close`](/docs/reference/thread/close): Closes the channel: no more sends.
