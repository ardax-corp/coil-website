---
slug: "task/Channel/len"
title: "Channel::len"
description: "Returns the number of values waiting to be received."
module: "task"
kind: "method"
name: "len"
parent: "Channel"
signature: "pub fn len() -> int"
import: "use task::{Channel};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/77fade5c3d914df2d977d52981e180deb6bea0e4/compiler/src/prelude/task.hy#L417"
order: 5
---

Returns the number of values waiting to be received.

Called on a `Channel` value as `value.len(…)`.

## Returns

`int`

## See also

- [`Channel`](/docs/reference/task/Channel): A bounded queue for passing values between tasks.
- [`Channel::send`](/docs/reference/task/Channel/send): Adds `value` to the channel, waiting while it is full (a suspension point).
- [`Channel::try_send`](/docs/reference/task/Channel/try_send): Adds `value` if there is room, without waiting.
- [`Channel::recv`](/docs/reference/task/Channel/recv): Takes the oldest value, waiting while the channel is empty (a suspension point).
- [`Channel::try_recv`](/docs/reference/task/Channel/try_recv): Takes the oldest value if there is one, without waiting.
- [`Channel::close`](/docs/reference/task/Channel/close): Closes the channel: no more values can be sent.
- [`Channel::capacity`](/docs/reference/task/Channel/capacity): Returns the most values the channel can hold.
- [`Channel::is_closed`](/docs/reference/task/Channel/is_closed): Returns `true` once `close` has been called.
