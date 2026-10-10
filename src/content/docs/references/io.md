---
title: "`io` virtual module"
description: "Non-blocking file / stdio / TCP / UDP streams. Not auto-imported:"
---

# `io` virtual module

Non-blocking file / stdio / TCP / UDP streams. **Not** auto-imported:

```coil
use io::{stdout, open, read, write, close};
use io::sync::{write_all, read_to_end};   // optional blocking adapters (coil-stdlib)
```

| Export | Kind | Notes |
|--------|------|-------|
| `Stream` | Opaque type | Heap handle; closed on GC drop |
| `IoError` | Builtin enum | `WouldBlock`, `NotFound`, `PermissionDenied`, `AlreadyClosed`, `InvalidInput`, `Other`, `NotADirectory`, `AlreadyExists`, `TimedOut`, `Truncated`, `Certificate`, `Handshake`. Implements `Show` (the variant name): `format("open failed: %v", e)` |
| `Read` / `Write` | Typeclasses | `impl` for `Stream`; methods = free functions |
| `stdin` / `stdout` / `stderr` | `() -> Stream` | Dup'd fds |
| `open` / `close` / `read` / `write` / `write_from` | L0 | Never busy-spin; `read` → `Result<Option<int>, IoError>` (`None` = EOF); `write_from(s, buf, offset)` writes `buf[offset..]` without allocating a suffix array |
| `wait_readable` / `wait_writable` (old names `await_readable` / `await_writable` still work) | Wait for readiness | Inside a [task](/docs/manual/tutorial/12-tasks): suspends that task while others run. Otherwise parks the VM, inside a generator too |
| `drive` | `() -> int` | **Deprecated** (`E0129`); use [tasks](/docs/manual/tutorial/12-tasks) |
| `wait_ready` | `() -> int` | **Deprecated** (`E0129`); use [tasks](/docs/manual/tutorial/12-tasks) |
| `block_on` | Prelude | **Deprecated** (`E0129`). `block_on(coro) -> Y` resumes a `gen fn` to completion |
| `from_bytes` / `to_bytes` | Text aliases | UTF-8 `Vec<byte> ↔ string` (`from_bytes` → `Result<string, IoError>`); also exported by [`string`](/docs/references/string) |
| `attach` / `park` | Package IO | `s.attach(ptr, read, write, shutdown, free)` installs a C vtable on this Stream in place; later `s.read()` / `s.write()` / Drop go through those hooks. `s.park()` waits on the fd via `reactor_wait_fd_no_help` (no help-steal). Function pointers are `int` (from `dload`). There is no public `s.fd` field; FFI `Int` args marshal Stream → fd at the call boundary. |
| `io::net::tcp::{connect,connect_timeout,listen,accept}` | TCP | Nested module — `use io::net::tcp::{connect, listen, …};`; timeout `ms <= 0` waits forever |
| `io::net::tcp::{peer_addr,local_addr,set_nodelay,shutdown}` | TCP helpers | Address tuples, `TCP_NODELAY`, and half-close (`0` read, `1` write, `2` both) |
| `io::net::udp::{bind,connect,send_to,recv_from,local_port}` | UDP | Nested module; `recv_from` → `(nbytes, host, port)` |

TLS for applications is **not** `use tls` / `use io::net::tls`. Use the [coil-tls](https://github.com/ardax-corp/coil-tls) package (`use tls::{client, server}`) with `libtls` on `[ffi] search_paths` (`--ffi-search-path` when running `coil` directly), allowed and trusted or pinned for `dload`. See [tls](/docs/references/tls). coil-tls enable is `dload` + `Stream.attach` / `Stream.park` (no leftover `io::__tls`).

## Userland sync adapters (`io::sync`)

Blocking helpers and whole-file IO are **coil-stdlib**, not host natives:
[IO adapters](https://github.com/ardax-corp/coil-stdlib/blob/main/docs/io.md)
(`write_all`, `read_to_end`, `print` / `println`, `io::file::{read_text, …}`).

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
```

Run concurrent IO as tasks: `task::scope` with `spawn` and `join` ([12 — Tasks](/docs/manual/tutorial/12-tasks)). Ordinary IO functions work unchanged inside a task.

`connect` / `connect_timeout` try **every** DNS result under one absolute
deadline. `listen` / UDP `bind` still use the first resolved address — prefer
an explicit IP (e.g. `127.0.0.1`) when family order matters.

OS `TimedOut` maps to `IoError::TimedOut` (not `WouldBlock`).

Buffers are **`Vec<byte>`**. Use `string::{from_bytes, to_bytes}` for text; `io::{from_bytes, to_bytes}` remain aliases. Use `write_all(stdout(), to_bytes(...))` for stdout text. TLS is [coil-tls](/docs/references/tls).

See [Tutorial 10 — IO streams](/docs/manual/tutorial/10-io-streams) and `examples/io_*.hy`.

---

## Related

- [IO tutorial](/docs/manual/tutorial/10-io-streams)
- [coil-stdlib IO adapters](https://github.com/ardax-corp/coil-stdlib/blob/main/docs/io.md)
- [io::fs](/docs/references/io-fs)
- [string](/docs/references/string)
