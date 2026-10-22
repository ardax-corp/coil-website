---
slug: "thread/close"
title: "close"
description: "Closes the channel: no more sends."
module: "thread"
kind: "fn"
name: "close"
signature: "fn close(Sender tx) -> Result<unit, ThreadError>"
import: "use thread::{close};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/builtin_docs/thread.hy#L418"
order: 14
---

Closes the channel: no more sends.

Later [`send`](/docs/reference/thread/send) / [`try_send`](/docs/reference/thread/try_send) calls fail with `Disconnected`. Receivers still
get the values already queued, then `Disconnected`. Closing twice is fine.

## Parameters

| Name | Type |
|------|------|
| `tx` | `Sender` |

## Returns

`Result<unit, ThreadError>`

## Examples

```coil
use thread::{channel, close, send, ThreadError};
use tests::assert;
let (tx, rx) = match channel() {
    Result::Ok(pair) => pair,
    Result::Err(_) => panic "channel failed",
};
assert!(match close(tx) { Result::Ok(_) => true, Result::Err(_) => false });
let refused = match send(tx, 1) {
    Result::Err(ThreadError::Disconnected) => true,
    default => false,
};
assert!(refused);
```

## See also

- [`thread::send`](/docs/reference/thread/send)
- [`thread::try_send`](/docs/reference/thread/try_send)
- [`spawn`](/docs/reference/thread/spawn): Runs f(arg) on another OS thread and returns a handle to it.
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`channel`](/docs/reference/thread/channel): Creates an unbounded channel and returns its (Sender, Receiver) ends.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_recv`](/docs/reference/thread/try_recv): Takes the next value if there is one, without waiting.
