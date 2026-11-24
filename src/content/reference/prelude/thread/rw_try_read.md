---
slug: "prelude/thread/rw_try_read"
title: "rw_try_read"
description: "A shared hold on lock if one is free now, without waiting. Low-level: use thread::try_read."
module: "prelude::thread"
kind: "fn"
name: "rw_try_read"
signature: "fn rw_try_read<T>(RwLock<T> lock) -> bool"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/prelude/thread.coil#L93"
order: 6
---

A shared hold on `lock` if one is free now, without waiting. Low-level: use [`thread::try_read`](/docs/reference/thread/try_read).

## Parameters

| Name | Type |
|------|------|
| `lock` | `RwLock<T>` |

## Returns

`bool`

## Examples

```text
use thread::{rwlock, try_read};

let rw = rwlock(3)?;
let n = try_read(rw, fn (int x) => x)?;
```

## See also

- [`thread::try_read`](/docs/reference/thread/try_read)
- [`lock_acquire`](/docs/reference/prelude/thread/lock_acquire): Locks `m`, parking the running task while another holds it.
- [`lock_release`](/docs/reference/prelude/thread/lock_release): Unlocks `m`; a no-op when it is not locked.
- [`lock_load`](/docs/reference/prelude/thread/lock_load): A copy of the value `m` guards, read while the caller holds `m`.
- [`lock_store`](/docs/reference/prelude/thread/lock_store): Makes `value` the value `m` guards, while the caller holds `m`.
- [`rw_acquire_read`](/docs/reference/prelude/thread/rw_acquire_read): A shared hold on `lock`, parking the task while a writer holds it.
- [`rw_acquire_write`](/docs/reference/prelude/thread/rw_acquire_write): The exclusive hold on `lock`, parking the task while any holds it.
- [`rw_try_write`](/docs/reference/prelude/thread/rw_try_write): The exclusive hold on `lock` if it is free now, without waiting.
