---
slug: "task/ChannelError"
title: "ChannelError"
description: "Why a channel operation failed."
module: "task"
kind: "enum"
name: "ChannelError"
signature: "enum ChannelError"
import: "use task::{ChannelError};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/398a75756bed65b1ece7801a7a0f96154af4c6fb/compiler/src/prelude/task.hy#L260"
order: 3
---

Why a channel operation failed.

## Variants

### `Closed` {#variant-closed}

The channel was closed (and, for `recv`, every value has been taken).

### `Empty` {#variant-empty}

`try_recv` on an empty channel.

### `Full` {#variant-full}

`try_send` on a full channel.

## See also

- [`TaskError`](/docs/reference/task/TaskError): Why a task or a scope did not produce its value.
