---
description: "The error type of loading an extern library, and the ffi::types tags."
---
C functions are called through an `extern "lib" { … }` block; see the
[FFI tutorial](/docs/manual/tutorial/16-ffi). To load a library chosen while
the program runs, use the coil-ffi package (`use coil_ffi::{Library}`). This
module keeps the [`Error`](/docs/reference/ffi/Error) of loading an `extern`
library and the [`ffi::types`](/docs/reference/ffi/types) tags (`Bytes` and
`ConstBytes` name buffer parameters).

Loading is gated. A program can load a library only when it is allowed with
`--allow-dload NAME` and either pinned by hash (`--dload-pin NAME=SHA256`) or
trusted (`--dload-trusted NAME`); `--ffi-search-path DIR` says where to look.
spool sets these from the project's `coil.toml` and lockfile. The C library
(`extern "c"`) is always denied. Pin a Coil value with
[`gc::root`](/docs/reference/gc/fn.root) before giving C a pointer it keeps.
