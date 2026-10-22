---
slug: "task/Channel"
title: "Channel"
description: "A bounded queue for passing values between tasks."
module: "task"
kind: "class"
name: "Channel"
signature: "class Channel<T>"
import: "use task::{Channel};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/prelude/task.hy#L299"
order: 4
---

A bounded queue for passing values between tasks.

[`send`](/docs/reference/task/Channel/send) waits while the channel is full and [`recv`](/docs/reference/task/Channel/recv) while it is empty, so a
channel also paces producers and consumers. Values are shared, not copied
(tasks share the heap). For OS threads, use [`thread::channel`](/docs/reference/thread/channel).

## Methods

| Name | Description |
|------|-------------|
| [`send`](/docs/reference/task/Channel/send) | Adds value to the channel, waiting while it is full (a suspension point). |
| [`try_send`](/docs/reference/task/Channel/try_send) | Adds value if there is room, without waiting. |
| [`recv`](/docs/reference/task/Channel/recv) | Takes the oldest value, waiting while the channel is empty (a suspension point). |
| [`try_recv`](/docs/reference/task/Channel/try_recv) | Takes the oldest value if there is one, without waiting. |
| [`close`](/docs/reference/task/Channel/close) | Closes the channel: no more values can be sent. |
| [`len`](/docs/reference/task/Channel/len) | Returns the number of values waiting to be received. |
| [`capacity`](/docs/reference/task/Channel/capacity) | Returns the most values the channel can hold. |
| [`is_closed`](/docs/reference/task/Channel/is_closed) | Returns true once close has been called. |

## Examples

```coil
use task::{scope, channel, Scope, Channel};
use tests::assert;
let sum = scope(fn (Scope s) {
    let ch: Channel<int> = channel(2);
    let producer = s.spawn(fn () use (ch) {
        let i = 1;
        while i <= 5 {
            ch.send(i) ?? ();
            i = i + 1;
        }
        ch.close();
    });
    let total = 0;
    while let Result::Ok(v) = ch.recv() {
        total = total + v;
    }
    producer.join() ?? ();
    return total;
});
assert!((sum ?? 0) == 15);
```

## See also

- [`Channel::send`](/docs/reference/task/Channel/send)
- [`Channel::recv`](/docs/reference/task/Channel/recv)
- [`thread::channel`](/docs/reference/thread/channel)
- [`Scope`](/docs/reference/task/Scope): A running scope, used to start child tasks with spawn.
- [`Task`](/docs/reference/task/Task): A handle to a child task started with Scope::spawn.
