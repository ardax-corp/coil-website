---
slug: "thread/ChannelError"
title: "ChannelError"
description: "Why a channel operation failed."
module: "thread"
kind: "enum"
name: "ChannelError"
signature: "enum ChannelError"
import: "use thread::{ChannelError};"
origin: "builtin"
source: "https://github.com/ardax-corp/coil-lang/blob/fc46180d7eca01b66211d0caab301eae32c93c41/compiler/src/builtin_docs/thread.hy#L194"
order: 6
---

Why a channel operation failed.

[`thread`](/docs/reference/thread) channels and [`task::Channel`](/docs/reference/task/Channel) share it. It implements [`Show`](/docs/reference/prelude/ops/Show).

## Variants

### `Closed` {#variant-closed}

The channel is closed: [`send`](/docs/reference/thread/send) after [`close`](/docs/reference/thread/close), or [`recv`](/docs/reference/thread/recv) / [`try_recv`](/docs/reference/thread/try_recv)
on a closed channel with no values left.

### `Empty` {#variant-empty}

[`try_recv`](/docs/reference/thread/try_recv) on an empty channel that is still open.

### `Full` {#variant-full}

[`try_send`](/docs/reference/thread/try_send) on a full channel (bounded [`task::Channel`](/docs/reference/task/Channel) only; [`thread`](/docs/reference/thread)
channels are unbounded).

## Examples

```coil
use thread::{channel, close, send, ChannelError};
use tests::assert;
let (tx, rx) = match channel() {
    Result::Ok(pair) => pair,
    Result::Err(_) => panic "channel failed",
};
let _ = close(tx);
let closed = match send(tx, 1) {
    Result::Err(ChannelError::Closed) => true,
    default => false,
};
assert!(closed);
```

## See also

- [`thread`](/docs/reference/thread)
- [`task::Channel`](/docs/reference/task/Channel)
- [`Show`](/docs/reference/prelude/ops/Show)
- [`thread::send`](/docs/reference/thread/send)
- [`thread::close`](/docs/reference/thread/close)
- [`thread::recv`](/docs/reference/thread/recv)
- [`thread::try_recv`](/docs/reference/thread/try_recv)
- [`thread::try_send`](/docs/reference/thread/try_send)
