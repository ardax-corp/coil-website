---
slug: "thread_locks/index"
title: "thread_locks"
description: "The thread_locks module."
module: "thread_locks"
kind: "module"
name: "thread_locks"
origin: "embedded"
auto: false
order: 23
---

Written in Coil and shipped inside the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use thread_locks::{with_lock, with_read};
```

## Functions

| Name | Description |
|------|-------------|
| [`with_lock`](/docs/reference/thread_locks/with_lock) | Lock `m`, call `f` with its value, keep the first value `f` returns and return the second. |
| [`with_read`](/docs/reference/thread_locks/with_read) | Call `f` with a copy of `lock`'s value, read under a shared hold that ends before `f` runs. |
| [`try_read`](/docs/reference/thread_locks/try_read) | [`with_read`](/docs/reference/thread_locks/with_read), or `Err(LockError::WouldBlock)` when a writer holds `lock`. |
| [`with_write`](/docs/reference/thread_locks/with_write) | Hold `lock` exclusive, call `f` with its value, keep the first value `f` returns and return the second. |
| [`try_write`](/docs/reference/thread_locks/try_write) | [`with_write`](/docs/reference/thread_locks/with_write), or `Err(LockError::WouldBlock)` when any holds `lock`. |
