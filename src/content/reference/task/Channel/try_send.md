---
slug: "task/Channel/try_send"
title: "Channel::try_send"
description: "Adds value if there is room, without waiting."
module: "task"
kind: "method"
name: "try_send"
parent: "Channel"
signature: "pub fn try_send(T value) -> Result<unit, ChannelError>"
import: "use task::{Channel};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/ea16288b0bd35fbe92e6665d44f9277d1dec7d29/compiler/src/prelude/task.hy#L343"
order: 1
---

Adds `value` if there is room, without waiting.

Called on a `Channel` value as `value.try_send(…)`.

## Parameters

| Name | Type |
|------|------|
| `value` | `T` |

## Returns

`Result<unit, ChannelError>`

## Errors

`Err(ChannelError::Full)` when the channel is full and `Err(ChannelError::Closed)` once it is closed.

## See also

- [`Channel`](/docs/reference/task/Channel): A bounded queue for passing values between tasks.
- [`Channel::send`](/docs/reference/task/Channel/send): Adds `value` to the channel, waiting while it is full (a suspension point).
- [`Channel::recv`](/docs/reference/task/Channel/recv): Takes the oldest value, waiting while the channel is empty (a suspension point).
- [`Channel::try_recv`](/docs/reference/task/Channel/try_recv): Takes the oldest value if there is one, without waiting.
- [`Channel::close`](/docs/reference/task/Channel/close): Closes the channel: no more values can be sent.
- [`Channel::len`](/docs/reference/task/Channel/len): Returns the number of values waiting to be received.
- [`Channel::capacity`](/docs/reference/task/Channel/capacity): Returns the most values the channel can hold.
- [`Channel::is_closed`](/docs/reference/task/Channel/is_closed): Returns `true` once `close` has been called.
