---
slug: "thread/index"
title: "thread"
description: "The thread module."
module: "thread"
kind: "module"
name: "thread"
origin: "builtin"
auto: false
order: 8
---

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use thread::{Thread, Sender};
```

## Types

| Name | Description |
|------|-------------|
| [`Thread`](/docs/reference/thread/Thread) | A handle to a function running on another OS thread, from [`spawn`](/docs/reference/thread/spawn). |
| [`Sender`](/docs/reference/thread/Sender) | The sending half of a channel made by [`channel`](/docs/reference/thread/channel). |
| [`Receiver`](/docs/reference/thread/Receiver) | The receiving half of a channel made by [`channel`](/docs/reference/thread/channel). |
| [`Mutex`](/docs/reference/thread/Mutex) | A mutual-exclusion lock that owns a value, made by [`mutex`](/docs/reference/thread/mutex). |
| [`RwLock`](/docs/reference/thread/RwLock) | A readers-writer lock that owns a value, made by [`rwlock`](/docs/reference/thread/rwlock). |
| [`ThreadError`](/docs/reference/thread/ThreadError) | The error of every `thread` function. |

## Functions

| Name | Description |
|------|-------------|
| [`spawn`](/docs/reference/thread/spawn) | Runs `f(arg)` on another OS thread and returns a handle to it. |
| [`join`](/docs/reference/thread/join) | Waits for the thread to finish and returns the value its function returned. |
| [`detach`](/docs/reference/thread/detach) | Lets the thread run to completion without being joined. |
| [`channel`](/docs/reference/thread/channel) | Creates an unbounded channel and returns its `(Sender, Receiver)` ends. |
| [`send`](/docs/reference/thread/send) | Sends a copy of `value` on the channel. |
| [`recv`](/docs/reference/thread/recv) | Takes the next value from the channel, waiting until one arrives. |
| [`try_send`](/docs/reference/thread/try_send) | Sends `value` without waiting. |
| [`try_recv`](/docs/reference/thread/try_recv) | Takes the next value if there is one, without waiting. |
| [`close`](/docs/reference/thread/close) | Closes the channel: no more sends. |
| [`mutex`](/docs/reference/thread/mutex) | Creates a mutex holding a copy of `initial`. |
| [`with_lock`](/docs/reference/thread/with_lock) | Locks `m`, runs `f` on its value, stores the new value and returns the result. |
| [`lock`](/docs/reference/thread/lock) | Locks `m` until [`unlock`](/docs/reference/thread/unlock), waiting while another thread holds it. |
| [`try_lock`](/docs/reference/thread/try_lock) | Locks `m` if it is free, without waiting. |
| [`unlock`](/docs/reference/thread/unlock) | Releases a mutex this thread locked with [`lock`](/docs/reference/thread/lock) or [`try_lock`](/docs/reference/thread/try_lock). |
| [`rwlock`](/docs/reference/thread/rwlock) | Creates a readers-writer lock holding a copy of `initial`. |
| [`with_read`](/docs/reference/thread/with_read) | Runs `f` on a snapshot of the lock's value and returns what `f` returns. |
| [`with_write`](/docs/reference/thread/with_write) | Takes the write lock, runs `f` and stores the new value it returns. |
| [`try_read`](/docs/reference/thread/try_read) | Like [`with_read`](/docs/reference/thread/with_read), but returns `Err(ThreadError::WouldBlock)` instead of waiting when a writer holds the lock. |
| [`try_write`](/docs/reference/thread/try_write) | Like [`with_write`](/docs/reference/thread/with_write), but returns `Err(ThreadError::WouldBlock)` instead of waiting when the lock is held. |
