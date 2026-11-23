---
slug: "ffi/index"
title: "ffi"
description: "The error type of loading an extern library, and the ffi::types tags."
module: "ffi"
kind: "module"
name: "ffi"
origin: "builtin"
auto: false
order: 17
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

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use ffi::{ErrorKind, Error};
```

## Modules

| Module | Description |
|--------|-------------|
| [`ffi::types`](/docs/reference/ffi/types) | Type tags for the C types that cross an extern block. |

## Types

| Name | Description |
|------|-------------|
| [`ErrorKind`](/docs/reference/ffi/ErrorKind) | The category of an FFI failure, read from `Error.kind`. |
| [`Error`](/docs/reference/ffi/Error) | The error of loading an `extern` block's library or one of its functions. |
