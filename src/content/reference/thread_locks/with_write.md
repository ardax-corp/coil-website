---
slug: "thread_locks/with_write"
title: "with_write"
description: "Hold lock exclusive, call f with its value, keep the first value f returns and return the second."
module: "thread_locks"
kind: "fn"
name: "with_write"
signature: "fn with_write<T, R>(RwLock<T> lock, T -> (T, R) f) -> Result<R, LockError>"
import: "use thread_locks::{with_write};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/prelude/thread_locks.coil#L45"
order: 3
---

Hold `lock` exclusive, call `f` with its value, keep the first value `f` returns and return the second.

## Parameters

| Name | Type |
|------|------|
| `lock` | `RwLock<T>` |
| `f` | `T -> (T, R)` |

## Returns

`Result<R, LockError>`

## See also

- [`with_lock`](/docs/reference/thread_locks/with_lock): Lock `m`, call `f` with its value, keep the first value `f` returns and return the second.
- [`with_read`](/docs/reference/thread_locks/with_read): Call `f` with a copy of `lock`'s value, read under a shared hold that ends before `f` runs.
- [`try_read`](/docs/reference/thread_locks/try_read): `with_read`, or `Err(LockError::WouldBlock)` when a writer holds `lock`.
- [`try_write`](/docs/reference/thread_locks/try_write): `with_write`, or `Err(LockError::WouldBlock)` when any holds `lock`.
