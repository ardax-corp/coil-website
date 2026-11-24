---
slug: "prelude/thread/rw_store"
title: "rw_store"
description: "Makes value lock's value, while the caller holds it exclusive. Low-level: use thread::with_write."
module: "prelude::thread"
kind: "fn"
name: "rw_store"
signature: "fn rw_store<T>(RwLock<T> lock, T value) -> Result<unit, LockError>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/prelude/thread.coil#L153"
order: 11
---

Makes `value` `lock`'s value, while the caller holds it exclusive. Low-level: use [`thread::with_write`](/docs/reference/thread/with_write).

## Parameters

| Name | Type |
|------|------|
| `lock` | `RwLock<T>` |
| `value` | `T` |

## Returns

`Result<unit, LockError>`

## Examples

```text
use thread::{rwlock, with_write};

let rw = rwlock(1)?;
let _ = with_write(rw, fn (int x) => (x * 10, 0))?;
```

## See also

- [`thread::with_write`](/docs/reference/thread/with_write)
- [`lock_acquire`](/docs/reference/prelude/thread/lock_acquire): Locks `m`, parking the running task while another holds it.
- [`lock_release`](/docs/reference/prelude/thread/lock_release): Unlocks `m`; a no-op when it is not locked.
- [`lock_load`](/docs/reference/prelude/thread/lock_load): A copy of the value `m` guards, read while the caller holds `m`.
- [`lock_store`](/docs/reference/prelude/thread/lock_store): Makes `value` the value `m` guards, while the caller holds `m`.
- [`rw_acquire_read`](/docs/reference/prelude/thread/rw_acquire_read): A shared hold on `lock`, parking the task while a writer holds it.
- [`rw_acquire_write`](/docs/reference/prelude/thread/rw_acquire_write): The exclusive hold on `lock`, parking the task while any holds it.
- [`rw_try_read`](/docs/reference/prelude/thread/rw_try_read): A shared hold on `lock` if one is free now, without waiting.
