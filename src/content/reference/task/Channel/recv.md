---
slug: "task/Channel/recv"
title: "Channel::recv"
description: "Takes the oldest value, waiting while the channel is empty (a suspension point)."
module: "task"
kind: "method"
name: "recv"
parent: "Channel"
signature: "pub fn recv() -> Result<T, ChannelError>"
import: "use task::{Channel};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/8d0a3c16e6cbbb1b1f3fe264f1cb8be4f8bb9019/compiler/src/prelude/task.hy#L372"
order: 2
---

Takes the oldest value, waiting while the channel is empty (a suspension point).

Called on a `Channel` value as `value.recv(…)`.

## Returns

`Result<T, ChannelError>`

## Errors

`Err(ChannelError::Closed)` once the channel is closed and empty.

## See also

- [`Channel`](/docs/reference/task/Channel): A bounded queue for passing values between tasks.
- [`Channel::send`](/docs/reference/task/Channel/send): Adds `value` to the channel, waiting while it is full (a suspension point).
- [`Channel::try_send`](/docs/reference/task/Channel/try_send): Adds `value` if there is room, without waiting.
- [`Channel::try_recv`](/docs/reference/task/Channel/try_recv): Takes the oldest value if there is one, without waiting.
- [`Channel::close`](/docs/reference/task/Channel/close): Closes the channel: no more values can be sent.
- [`Channel::len`](/docs/reference/task/Channel/len): Returns the number of values waiting to be received.
- [`Channel::capacity`](/docs/reference/task/Channel/capacity): Returns the most values the channel can hold.
- [`Channel::is_closed`](/docs/reference/task/Channel/is_closed): Returns `true` once `close` has been called.
