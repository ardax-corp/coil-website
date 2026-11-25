---
slug: "thread_locks/try_write"
title: "try_write"
description: "with_write, or Err(LockError::WouldBlock) when any holds lock."
module: "thread_locks"
kind: "fn"
name: "try_write"
signature: "fn try_write<T, R>(RwLock<T> lock, T -> (T, R) f) -> Result<R, LockError>"
import: "use thread_locks::{try_write};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/prelude/thread_locks.coil#L56"
order: 4
---

[`with_write`](/docs/reference/thread_locks/with_write), or `Err(LockError::WouldBlock)` when any holds `lock`.

## Parameters

| Name | Type |
|------|------|
| `lock` | `RwLock<T>` |
| `f` | `T -> (T, R)` |

## Returns

`Result<R, LockError>`

## See also

- [`thread_locks::with_write`](/docs/reference/thread_locks/with_write)
- [`with_lock`](/docs/reference/thread_locks/with_lock): Lock `m`, call `f` with its value, keep the first value `f` returns and return the second.
- [`with_read`](/docs/reference/thread_locks/with_read): Call `f` with a copy of `lock`'s value, read under a shared hold that ends before `f` runs.
- [`try_read`](/docs/reference/thread_locks/try_read): `with_read`, or `Err(LockError::WouldBlock)` when a writer holds `lock`.
