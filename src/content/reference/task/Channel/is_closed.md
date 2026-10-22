---
slug: "task/Channel/is_closed"
title: "Channel::is_closed"
description: "Returns true once close has been called."
module: "task"
kind: "method"
name: "is_closed"
parent: "Channel"
signature: "pub fn is_closed() -> bool"
import: "use task::{Channel};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/f3e0c941bdbea312cda5f6550d0d24ed00c93f2d/compiler/src/prelude/task.hy#L427"
order: 7
---

Returns `true` once [`close`](/docs/reference/task/Channel/close) has been called.

Called on a `Channel` value as `value.is_closed(…)`.

## Returns

`bool`

## See also

- [`Channel::close`](/docs/reference/task/Channel/close)
- [`Channel`](/docs/reference/task/Channel): A bounded queue for passing values between tasks.
- [`Channel::send`](/docs/reference/task/Channel/send): Adds `value` to the channel, waiting while it is full (a suspension point).
- [`Channel::try_send`](/docs/reference/task/Channel/try_send): Adds `value` if there is room, without waiting.
- [`Channel::recv`](/docs/reference/task/Channel/recv): Takes the oldest value, waiting while the channel is empty (a suspension point).
- [`Channel::try_recv`](/docs/reference/task/Channel/try_recv): Takes the oldest value if there is one, without waiting.
- [`Channel::len`](/docs/reference/task/Channel/len): Returns the number of values waiting to be received.
- [`Channel::capacity`](/docs/reference/task/Channel/capacity): Returns the most values the channel can hold.
