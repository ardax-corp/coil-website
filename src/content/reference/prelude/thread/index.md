---
slug: "prelude/thread/index"
title: "prelude::thread"
description: "The prelude::thread module."
module: "prelude::thread"
kind: "module"
name: "prelude::thread"
origin: "builtin"
auto: true
order: 3
---

Built into the compiler.

## Functions

| Name | Description |
|------|-------------|
| [`lock_acquire`](/docs/reference/prelude/thread/lock_acquire) | Locks `m`, parking the running task while another holds it. |
| [`lock_release`](/docs/reference/prelude/thread/lock_release) | Unlocks `m`; a no-op when it is not locked. |
| [`lock_load`](/docs/reference/prelude/thread/lock_load) | A copy of the value `m` guards, read while the caller holds `m`. |
| [`lock_store`](/docs/reference/prelude/thread/lock_store) | Makes `value` the value `m` guards, while the caller holds `m`. |
| [`rw_acquire_read`](/docs/reference/prelude/thread/rw_acquire_read) | A shared hold on `lock`, parking the task while a writer holds it. |
| [`rw_acquire_write`](/docs/reference/prelude/thread/rw_acquire_write) | The exclusive hold on `lock`, parking the task while any holds it. |
| [`rw_try_read`](/docs/reference/prelude/thread/rw_try_read) | A shared hold on `lock` if one is free now, without waiting. |
| [`rw_try_write`](/docs/reference/prelude/thread/rw_try_write) | The exclusive hold on `lock` if it is free now, without waiting. |
| [`rw_release_read`](/docs/reference/prelude/thread/rw_release_read) | Ends a shared hold on `lock`. |
| [`rw_release_write`](/docs/reference/prelude/thread/rw_release_write) | Ends the exclusive hold on `lock`. |
| [`rw_load`](/docs/reference/prelude/thread/rw_load) | A copy of `lock`'s value, read while the caller holds `lock`. |
| [`rw_store`](/docs/reference/prelude/thread/rw_store) | Makes `value` `lock`'s value, while the caller holds it exclusive. |
