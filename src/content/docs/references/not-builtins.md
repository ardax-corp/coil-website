---
title: What is NOT a builtin
description: Compiler virtual modules cover systems I/O, threads, env, FFI, and IEEE float math. Collections, text/bytes helpers, decimal parse, path, blocking IO adapters, whole-file…
---

# What is NOT a builtin

Compiler virtual modules cover systems I/O, threads, env, FFI,
and IEEE float math. Collections, text/bytes helpers, decimal parse, path, blocking
IO adapters, whole-file helpers, regex, TLS, crypto, time, and HTTP are **not** HostInvoke/opcodes — they
live in userland packages ([coil-stdlib](https://github.com/ardax-corp/coil-stdlib),
[coil-regex](https://github.com/ardax-corp/coil-regex),
[coil-tls](https://github.com/ardax-corp/coil-tls),
[coil-crypto](https://github.com/ardax-corp/coil-crypto),
[coil-time](https://github.com/ardax-corp/coil-time), …).

Still not a compiler builtin (and not coil-stdlib either):

| Category | Examples | Where to look |
|----------|----------|----------------|
| Raw memory | `alloc`, `free` | [`gc::Root` / `gc::Weak`](/docs/references/gc) |
| Regex | PCRE2 | [coil-regex](https://github.com/ardax-corp/coil-regex) ([regex](/docs/references/regex)) |
| TLS | rustls | [coil-tls](https://github.com/ardax-corp/coil-tls) ([tls](/docs/references/tls)) |
| Crypto | hashes, AEAD, keys | [coil-crypto](https://github.com/ardax-corp/coil-crypto) ([crypto](/docs/references/crypto)) |
| Time | calendar, monotonic Instant | [coil-time](https://github.com/ardax-corp/coil-time) ([time](/docs/references/time)) |

Use **`io`** for streams, **FFI** for C libraries, or **host natives** when embedding the VM in Rust.

---

## Related

- [coil-stdlib docs](https://github.com/ardax-corp/coil-stdlib/blob/main/docs/README.md)
- [io](/docs/references/io)
- [tls](/docs/references/tls)
- [time](/docs/references/time)
- [ffi](/docs/references/ffi)
- [host-natives](/docs/references/host-natives)
