---
slug: "ffi/index"
title: "ffi"
description: "Call C libraries at run time: dload, declare, invoke."
module: "ffi"
kind: "module"
name: "ffi"
origin: "builtin"
auto: false
order: 13
---

[`dload`](/docs/reference/ffi/dload) loads a shared library, [`declare`](/docs/reference/ffi/declare) describes a C function's signature
with the type tags from [`ffi::types`](/docs/reference/ffi/types), and
[`invoke`](/docs/reference/ffi/invoke) calls it. An `extern "lib" { … }` block does the same at compile
time; see the [FFI tutorial](/docs/manual/tutorial/16-ffi).

Loading is gated. A program can [`dload`](/docs/reference/ffi/dload) a library only when it is allowed with
`--allow-dload NAME` and either pinned by hash (`--dload-pin NAME=SHA256`) or
trusted (`--dload-trusted NAME`); `--ffi-search-path DIR` says where to look.
spool sets these from the project's `coil.toml` and lockfile. The C library
(`dload("c")`) is always denied. Pin a Coil value with
[`gc::root`](/docs/reference/gc/fn.root) before giving C a pointer it keeps.

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use ffi::{ErrorKind, Error};
```

## Modules

| Module | Description |
|--------|-------------|
| [`ffi::types`](/docs/reference/ffi/types) | Type tags that describe C argument and return types to ffi::declare. |

## Types

| Name | Description |
|------|-------------|
| [`ErrorKind`](/docs/reference/ffi/ErrorKind) | The category of an FFI failure, read from `Error.kind`. |
| [`Error`](/docs/reference/ffi/Error) | The error of [`dload`](/docs/reference/ffi/dload), [`declare`](/docs/reference/ffi/declare), [`invoke`](/docs/reference/ffi/invoke) and [`read_ints`](/docs/reference/ffi/read_ints). |

## Functions

| Name | Description |
|------|-------------|
| [`dload`](/docs/reference/ffi/dload) | Loads a native shared library and returns a handle to it. |
| [`declare`](/docs/reference/ffi/declare) | Looks up the C function `name` in a loaded library and records its signature. |
| [`invoke`](/docs/reference/ffi/invoke) | Calls a function registered with [`declare`](/docs/reference/ffi/declare), passing the tuple `args`. |
| [`read_ints`](/docs/reference/ffi/read_ints) | Copies `count` 64-bit integers (`int64_t`) from native memory at `ptr`. |
