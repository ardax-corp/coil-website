---
slug: "prelude/thread/lock_load"
title: "lock_load"
description: "A copy of the value m guards, read while the caller holds m. Low-level: use thread::with_lock."
module: "prelude::thread"
kind: "fn"
name: "lock_load"
signature: "fn lock_load<T>(Mutex<T> m) -> Result<T, LockError>"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/prelude/thread.coil#L45"
order: 2
---

A copy of the value `m` guards, read while the caller holds `m`. Low-level: use [`thread::with_lock`](/docs/reference/thread/with_lock).

## Parameters

| Name | Type |
|------|------|
| `m` | `Mutex<T>` |

## Returns

`Result<T, LockError>`

## Examples

```text
use thread::{mutex, with_lock};

let m = mutex("a")?;
let s = with_lock(m, fn (string x) => (x, x))?;
```

## See also

- [`thread::with_lock`](/docs/reference/thread/with_lock)
- [`lock_acquire`](/docs/reference/prelude/thread/lock_acquire): Locks `m`, parking the running task while another holds it.
- [`lock_release`](/docs/reference/prelude/thread/lock_release): Unlocks `m`; a no-op when it is not locked.
- [`lock_store`](/docs/reference/prelude/thread/lock_store): Makes `value` the value `m` guards, while the caller holds `m`.
- [`rw_acquire_read`](/docs/reference/prelude/thread/rw_acquire_read): A shared hold on `lock`, parking the task while a writer holds it.
- [`rw_acquire_write`](/docs/reference/prelude/thread/rw_acquire_write): The exclusive hold on `lock`, parking the task while any holds it.
- [`rw_try_read`](/docs/reference/prelude/thread/rw_try_read): A shared hold on `lock` if one is free now, without waiting.
- [`rw_try_write`](/docs/reference/prelude/thread/rw_try_write): The exclusive hold on `lock` if it is free now, without waiting.
