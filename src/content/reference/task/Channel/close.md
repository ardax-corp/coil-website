---
slug: "task/Channel/close"
title: "Channel::close"
description: "Closes the channel: no more values can be sent."
module: "task"
kind: "method"
name: "close"
parent: "Channel"
signature: "pub fn close()"
import: "use task::{Channel};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/17c56cf22ba1d915b8e4450cded97436475339ba/compiler/src/prelude/task.hy#L400"
order: 4
---

Closes the channel: no more values can be sent.

Waiting senders get `Err(ChannelError::Closed)`. Receivers still take the
values left, then get `Closed`.

Called on a `Channel` value as `value.close(…)`.

## See also

- [`Channel`](/docs/reference/task/Channel): A bounded queue for passing values between tasks.
- [`Channel::send`](/docs/reference/task/Channel/send): Adds `value` to the channel, waiting while it is full (a suspension point).
- [`Channel::try_send`](/docs/reference/task/Channel/try_send): Adds `value` if there is room, without waiting.
- [`Channel::recv`](/docs/reference/task/Channel/recv): Takes the oldest value, waiting while the channel is empty (a suspension point).
- [`Channel::try_recv`](/docs/reference/task/Channel/try_recv): Takes the oldest value if there is one, without waiting.
- [`Channel::len`](/docs/reference/task/Channel/len): Returns the number of values waiting to be received.
- [`Channel::capacity`](/docs/reference/task/Channel/capacity): Returns the most values the channel can hold.
- [`Channel::is_closed`](/docs/reference/task/Channel/is_closed): Returns `true` once `close` has been called.
