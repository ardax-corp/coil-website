---
title: "Native code: JIT and AOT"
description: "How Coil runs functions as machine code: `--jit` for a run or a compiled archive, and `coil package` building a native executable. Programs behave exactly as on the VM."
---

# Native code

Coil compiles a program to bytecode, and the VM can run every program.
Most functions can also run as machine code, made by
[Cranelift](https://cranelift.dev) from the compiler's typed intermediate
code. Native code is a speed choice only: output, panics (message,
location and backtrace), exit status, tasks, generators, `defer`, `drop`
and the collector all behave as they do on the VM.

| How you run it | What runs |
|---|---|
| `coil app.coil` | the VM |
| `coil app.coil --jit` | native code, compiled when the program starts |
| `coil compile --jit app.coil -o app.ccoil`, then `coil run app.ccoil` | native code, compiled from the archive when it starts |
| `coil run --no-jit app.ccoil` | the VM, even for an archive built with `--jit` |
| `coil package app.coil -o app` | a native executable, compiled ahead of time |
| `coil package --no-aot app.coil -o app` | the VM runner with the program inside |

## JIT

```sh
coil --root ~/coil-stdlib/src app.coil --jit
```

compiles the program, turns the functions it can into machine code and
runs. Compiling to machine code costs a few tens of milliseconds when the
program starts, so `--jit` pays off on programs that run longer than that.
A run with `--jit` skips the [build cache](/docs/language/cli#build-cache).

`coil compile --jit` stores the intermediate code in the archive (not
machine code), so any machine with the same `coil` can run it natively:

```sh
coil compile --jit --root ~/coil-stdlib/src app.coil -o app.ccoil
coil run app.ccoil          # native
coil run --no-jit app.ccoil # VM
```

An archive built without `--jit` runs on the VM; `coil run --jit` on it
says so on stderr.

## Native executables

`coil package` links the program's machine code with the Coil runtime into
one executable, so nothing is compiled when it starts. It needs a C
compiler (`cc`) to link. Where it cannot link (no `cc`, or Windows for now)
it warns and builds the VM runner instead, which runs the same program.
`--no-aot` builds the runner on purpose.

## What stays on the VM

The VM is always there, and a function that does not compile runs on it
while the rest runs natively. Calls between the two cost about as much as
an ordinary call.

- Compile-time code and macros always run on the VM.
- `coil debug`, coverage (`coil test --coverage`) and WebAssembly builds
  run on the VM.
- A generator whose body has a `defer` runs on the VM.

Functions that call the host (files, sockets, processes, FFI) run natively
and make those calls through the VM's own code, so permissions, task
switching and errors are the same.

## Seeing what ran

```sh
COIL_NATIVE_STATS=1 coil app.coil --jit   # counts on stderr
COIL_NATIVE_STATS=2 coil app.coil --jit   # plus each function and why one stays on the VM
```

`coil test --engine native` runs a test suite with native code, to check a
library behaves the same on both.
