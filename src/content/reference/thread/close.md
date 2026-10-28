---
slug: "thread/close"
title: "close"
description: "Closes the channel: no more sends."
module: "thread"
kind: "fn"
name: "close"
signature: "fn close<T>(Sender<T> tx) -> Result<unit, ChannelError>"
import: "use thread::{close};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/d4c48479d5e180ae21c28947bc6cd256a880ce80/compiler/src/builtin_docs/thread.hy#L485"
order: 16
---

Closes the channel: no more sends.

Later [`send`](/docs/reference/thread/send) / [`try_send`](/docs/reference/thread/try_send) calls fail with `Closed`. Receivers still get
the values already queued, then `Closed`. Closing twice is fine.

## Parameters

| Name | Type |
|------|------|
| `tx` | `Sender<T>` |

## Returns

`Result<unit, ChannelError>`

## Examples

```coil
use thread::{channel, close, send, ChannelError};
use tests::assert;
let (tx, rx) = match channel() {
    Result::Ok(pair) => pair,
    Result::Err(_) => panic "channel failed",
};
assert!(match close(tx) { Result::Ok(_) => true, Result::Err(_) => false });
let refused = match send(tx, 1) {
    Result::Err(ChannelError::Closed) => true,
    default => false,
};
assert!(refused);
```

## See also

- [`thread::send`](/docs/reference/thread/send)
- [`thread::try_send`](/docs/reference/thread/try_send)
- [`spawn`](/docs/reference/thread/spawn): Runs `f(arg)` on another OS thread and returns a handle to it.
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its `(Sender, Receiver)` ends.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_recv`](/docs/reference/thread/try_recv): Takes the next value if there is one, without waiting.
