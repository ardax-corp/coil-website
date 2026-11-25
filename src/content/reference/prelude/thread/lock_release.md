---
slug: "prelude/thread/lock_release"
title: "lock_release"
description: "Unlocks m; a no-op when it is not locked. It does not check who holds m: called from a task without the hold, it frees another task's hold. Low-level: use thread::with_lock."
module: "prelude::thread"
kind: "fn"
name: "lock_release"
signature: "fn lock_release<T>(Mutex<T> m)"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/builtin_docs/prelude/thread.coil#L33"
order: 1
---

Unlocks `m`; a no-op when it is not locked. It does not check who holds `m`: called from a task without the hold, it frees another task's hold. Low-level: use [`thread::with_lock`](/docs/reference/thread/with_lock).

## Parameters

| Name | Type |
|------|------|
| `m` | `Mutex<T>` |

## Examples

```text
use thread::{mutex, with_lock};

let m = mutex(1)?;
// `with_lock` releases the lock when its callback returns or panics.
let _ = with_lock(m, fn (int x) => (x, 0))?;
```

## See also

- [`thread::with_lock`](/docs/reference/thread/with_lock)
- [`lock_acquire`](/docs/reference/prelude/thread/lock_acquire): Locks `m`, parking the running task while another holds it.
- [`lock_load`](/docs/reference/prelude/thread/lock_load): A copy of the value `m` guards, read while the caller holds `m`.
- [`lock_store`](/docs/reference/prelude/thread/lock_store): Makes `value` the value `m` guards, while the caller holds `m`.
- [`rw_acquire_read`](/docs/reference/prelude/thread/rw_acquire_read): A shared hold on `lock`, parking the task while a writer holds it.
- [`rw_acquire_write`](/docs/reference/prelude/thread/rw_acquire_write): The exclusive hold on `lock`, parking the task while any holds it.
- [`rw_try_read`](/docs/reference/prelude/thread/rw_try_read): A shared hold on `lock` if one is free now, without waiting.
- [`rw_try_write`](/docs/reference/prelude/thread/rw_try_write): The exclusive hold on `lock` if it is free now, without waiting.
