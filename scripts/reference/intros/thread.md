---
description: "OS threads, channels, mutexes and read-write locks."
---
`spawn` runs a function on a new OS thread with its own VM and heap. Values
cross between threads by copy through `send`/`recv` on a channel or through a
`Mutex` / `RwLock`; heap handles such as `gc::Root` cannot be sent.

For concurrent IO on one thread, [tasks](/docs/manual/tutorial/13-tasks) are
lighter. Threads pay off for CPU-bound work. See the
[threads tutorial](/docs/manual/tutorial/14-threads).
