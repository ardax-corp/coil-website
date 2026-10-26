---
slug: "task/Channel/send"
title: "Channel::send"
description: "Adds value to the channel, waiting while it is full (a suspension point)."
module: "task"
kind: "method"
name: "send"
parent: "Channel"
signature: "pub fn send(T value) -> Result<unit, ChannelError>"
import: "use task::{Channel};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/prelude/task.hy#L331"
order: 0
---

Adds `value` to the channel, waiting while it is full (a suspension point).

Called on a `Channel` value as `value.send(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `T` |

## Returns

`Result<unit, ChannelError>`

## Errors

`Err(ChannelError::Closed)` once the channel is closed.

## See also

- [`Channel`](/docs/reference/task/Channel): A bounded queue for passing values between tasks.
- [`Channel::try_send`](/docs/reference/task/Channel/try_send): Adds `value` if there is room, without waiting.
- [`Channel::recv`](/docs/reference/task/Channel/recv): Takes the oldest value, waiting while the channel is empty (a suspension point).
- [`Channel::try_recv`](/docs/reference/task/Channel/try_recv): Takes the oldest value if there is one, without waiting.
- [`Channel::close`](/docs/reference/task/Channel/close): Closes the channel: no more values can be sent.
- [`Channel::len`](/docs/reference/task/Channel/len): Returns the number of values waiting to be received.
- [`Channel::capacity`](/docs/reference/task/Channel/capacity): Returns the most values the channel can hold.
- [`Channel::is_closed`](/docs/reference/task/Channel/is_closed): Returns `true` once `close` has been called.
