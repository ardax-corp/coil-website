---
slug: "thread_locks/with_read"
title: "with_read"
description: "Call f with a copy of lock's value, read under a shared hold that ends before f runs."
module: "thread_locks"
kind: "fn"
name: "with_read"
signature: "fn with_read<T, R>(RwLock<T> lock, T -> R f) -> Result<R, LockError>"
import: "use thread_locks::{with_read};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/prelude/thread_locks.coil#L26"
order: 1
---

Call `f` with a copy of `lock`'s value, read under a shared hold that ends before `f` runs.

## Parameters

| Name | Type |
|------|------|
| `lock` | `RwLock<T>` |
| `f` | `T -> R` |

## Returns

`Result<R, LockError>`

## See also

- [`with_lock`](/docs/reference/thread_locks/with_lock): Lock `m`, call `f` with its value, keep the first value `f` returns and return the second.
- [`try_read`](/docs/reference/thread_locks/try_read): `with_read`, or `Err(LockError::WouldBlock)` when a writer holds `lock`.
- [`with_write`](/docs/reference/thread_locks/with_write): Hold `lock` exclusive, call `f` with its value, keep the first value `f` returns and return the second.
- [`try_write`](/docs/reference/thread_locks/try_write): `with_write`, or `Err(LockError::WouldBlock)` when any holds `lock`.
