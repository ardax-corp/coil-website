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
source: "https://github.com/ardax-corp/coil-lang/blob/62e75718cb75a68f2a80f051fe8180e7a5f6cde9/compiler/src/prelude/task.hy#L260"
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

- [`TaskError`](/docs/reference/task/TaskError): Why a task or a `scope` did not produce its value.
