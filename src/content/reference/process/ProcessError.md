---
slug: "process/ProcessError"
title: "ProcessError"
description: "Why a process call failed."
module: "process"
kind: "enum"
name: "ProcessError"
signature: "enum ProcessError"
import: "use process::{ProcessError};"
origin: "embedded"
source: "https://github.com/ardax-corp/coil-lang/blob/9c93ed17ff191a9c4e7d41030d8a6da8342de21a/compiler/src/prelude/process.coil#L21"
order: 1
---

Why a process call failed.

## Variants

### `Spawn(IoError)` {#variant-spawn}

The program could not be started: `IoError::NotFound` when there is
no such program, `PermissionDenied` when it is not executable,
`InvalidInput` for a NUL byte in the program, an argument or the
environment.

### `Io(IoError)` {#variant-io}

Waiting for, reading from or signalling the child failed.

## See also

- [`Stdio`](/docs/reference/process/Stdio): Where a child's standard stream goes.
