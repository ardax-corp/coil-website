---
slug: "ffi/index"
title: "ffi"
description: "The ffi module."
module: "ffi"
kind: "module"
name: "ffi"
origin: "builtin"
auto: false
order: 12
---

Built into the compiler.

Import what you use (`use path::*` is not allowed):

```coil
use ffi::{ErrorKind, Error};
```

## Modules

| Module | Description |
|--------|-------------|
| [`ffi::types`](/docs/reference/ffi/types) |  |

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
