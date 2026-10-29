---
slug: "thread/channel"
title: "channel"
description: "Creates an unbounded channel and returns its (Sender, Receiver) ends."
module: "thread"
kind: "fn"
name: "channel"
signature: "fn channel<T>() -> Result<(Sender<T>, Receiver<T>), ChannelError>"
import: "use thread::{channel};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/de4bf4dc9af36e25e72142d3d0ccd454fb0021a4/compiler/src/builtin_docs/thread.hy#L369"
order: 11
---

Creates an unbounded channel and returns its `(Sender, Receiver)` ends.

Values sent are copied (they must be sendable, see [`spawn`](/docs/reference/thread/spawn)) and received
in order. The channel has no capacity limit, so [`send`](/docs/reference/thread/send) never waits.

## Returns

`Result<(Sender<T>, Receiver<T>), ChannelError>`

## Examples

```coil
use thread::{channel, send, recv, spawn, join, Sender};
use tests::assert;
fn produce(Sender tx) -> int {
    let _ = send(tx, 10);
    let _ = send(tx, 20);
    return 0;
}

fn main() {
    let (tx, rx) = match channel() {
        Result::Ok(pair) => pair,
        Result::Err(_) => panic "channel failed",
    };
    let t = match spawn(produce, tx) {
        Result::Ok(t) => t,
        Result::Err(_) => panic "spawn failed",
    };
    let a = match recv(rx) { Result::Ok(v) => v, Result::Err(_) => 0 };
    let b = match recv(rx) { Result::Ok(v) => v, Result::Err(_) => 0 };
    let _ = join(t);
    assert!(a + b == 30);
}
```

## See also

- [`thread::spawn`](/docs/reference/thread/spawn)
- [`thread::send`](/docs/reference/thread/send)
- [`join`](/docs/reference/thread/join): Waits for the thread to finish and returns the value its function returned.
- [`detach`](/docs/reference/thread/detach): Lets the thread run to completion without being joined.
- [`recv`](/docs/reference/thread/recv): Takes the next value from the channel, waiting until one arrives.
- [`try_send`](/docs/reference/thread/try_send): Sends `value` without waiting.
- [`try_recv`](/docs/reference/thread/try_recv): Takes the next value if there is one, without waiting.
- [`close`](/docs/reference/thread/close): Closes the channel: no more sends.
