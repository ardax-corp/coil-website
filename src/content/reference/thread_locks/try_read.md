---
slug: "thread_locks/try_read"
title: "try_read"
description: "with_read, or Err(LockError::WouldBlock) when a writer holds lock."
module: "thread_locks"
kind: "fn"
name: "try_read"
signature: "fn try_read<T, R>(RwLock<T> lock, T -> R f) -> Result<R, LockError>"
import: "use thread_locks::{try_read};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/84390e648401f25bdeb09aca3bf5e9e732e54487/compiler/src/prelude/thread_locks.coil#L34"
order: 2
---

[`with_read`](/docs/reference/thread_locks/with_read), or `Err(LockError::WouldBlock)` when a writer holds `lock`.

## Parameters

| Name | Type |
|------|------|
| `lock` | `RwLock<T>` |
| `f` | `T -> R` |

## Returns

`Result<R, LockError>`

## See also

- [`thread_locks::with_read`](/docs/reference/thread_locks/with_read)
- [`with_lock`](/docs/reference/thread_locks/with_lock): Lock `m`, call `f` with its value, keep the first value `f` returns and return the second.
- [`with_write`](/docs/reference/thread_locks/with_write): Hold `lock` exclusive, call `f` with its value, keep the first value `f` returns and return the second.
- [`try_write`](/docs/reference/thread_locks/try_write): `with_write`, or `Err(LockError::WouldBlock)` when any holds `lock`.
