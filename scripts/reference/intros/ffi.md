---
description: "Call C libraries at run time: dload, declare, invoke."
---
`dload` loads a shared library, `declare` describes a C function's signature
with the type tags from [`ffi::types`](/docs/reference/ffi/types), and
`invoke` calls it. An `extern "lib" { … }` block does the same at compile
time; see the [FFI tutorial](/docs/manual/tutorial/16-ffi).

Loading is gated. A program can `dload` a library only when it is allowed with
`--allow-dload NAME` and either pinned by hash (`--dload-pin NAME=SHA256`) or
trusted (`--dload-trusted NAME`); `--ffi-search-path DIR` says where to look.
spool sets these from the project's `coil.toml` and lockfile. The C library
(`dload("c")`) is always denied. Pin a Coil value with
[`gc::root`](/docs/reference/gc/fn.root) before giving C a pointer it keeps.
