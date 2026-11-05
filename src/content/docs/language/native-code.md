---
title: "Native code: JIT and AOT"
description: "How Coil runs functions as machine code: `--jit` for a run or a compiled archive, and `coil package` building a native executable. Programs behave exactly as on the VM."
---

# Native code

Coil compiles a program to bytecode, and the VM can run every program.
Most functions can also run as machine code, made by
[Cranelift](https://cranelift.dev) from the compiler's typed intermediate
code. Native code is a speed choice: output, panics (message, location
and backtrace), exit status, tasks, generators, `defer` and `drop` behave
as they do on the VM. One thing can differ: the collector may free an
object as soon as native code has used it for the last time (see
[Collection timing](#collection-timing)).

| How you run it | What runs |
|---|---|
| `coil app.coil` | the VM |
| `coil app.coil --jit` | native code, compiled when the program starts |
| `coil compile --jit app.coil -o app.ccoil`, then `coil run app.ccoil` | native code, compiled from the archive when it starts |
| `coil run --no-jit app.ccoil` | the VM, even for an archive built with `--jit` |
| `coil package app.coil -o app` | a native executable, compiled ahead of time, with no VM inside |
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
one executable, so nothing is compiled when it starts. The executable has
no bytecode VM: every function runs as machine code, so it is smaller and
starts faster than the VM runner. If a function cannot be compiled to
machine code, `coil package` stops with an error naming it and why;
`--no-aot` builds the VM runner instead, which runs the same program.

Linking needs a C compiler (`cc`). Where it cannot link (no `cc`, or
Windows for now) `coil package` warns and builds the VM runner.

The executable leaves out the runtime's debug info by default.
`--strip-symbols all` also drops its symbol table (the smallest file), and
`--strip-symbols none` keeps both, for a native debugger or profiler.
Panic backtraces come from the program's own line table (`-g`), so they
read the same at every level.

### Linking C libraries statically

An [`extern` block](/docs/manual/tutorial/16-ffi) loads its library when
the program starts. A native executable can carry the library instead:
pass its static archive with `--link-static`, and the program runs where
no shared library is installed.

```sh
cc -c -fPIC sum.c -o sum.o && ar rcs libsum.a sum.o
coil package app.coil -o app --allow-dload sum --dload-trusted sum --link-static libsum.a
./app   # `extern "sum"` resolves from the executable
```

- `--link-static PATH` names the library by its file (`libsum.a` and
  `sum.lib` are `sum`); `--link-static sum=PATH` names it yourself.
- `--link-arg ARG` passes an argument to the linker, such as `-lm` for a
  library the archive itself needs.
- A statically linked library needs no `--ffi-native` entry and is not
  looked up on the target. Compiling the `extern` block still needs
  `--allow-dload`.
- It works only for native executables: with `--no-aot` or `--runner`,
  `coil package` refuses it.

## What stays on the VM

- Compile-time code and macros always run on the VM, while compiling. A
  `const` computed then is stored in the executable and restored at start.
- `coil debug`, coverage (`coil test --coverage`) and WebAssembly builds
  run on the VM.
- With `--jit`, a function that does not compile runs on the VM while the
  rest runs natively. When every function compiles, the whole run is
  native, tasks and generators included.

Functions that call the host (files, sockets, processes, FFI) call the
same runtime code the VM does, so permissions, task switching and errors
are the same.

## Collection timing

On the VM, a local variable keeps its value alive until the variable is
reassigned or its function returns. In native code a value stays alive
only until its last use, so the collector can free it earlier. Correct
programs see no difference, but a [`gc::Weak`](/docs/reference/gc/Weak)
handle can be cleared, or a [`drop`](/docs/language/memory#the-collector)
run, sooner. A variable holding a [`gc::Root`](/docs/reference/gc/Root)
pin stays alive until its function returns in both.

## Seeing what ran

```sh
COIL_NATIVE_STATS=1 coil app.coil --jit   # counts on stderr
COIL_NATIVE_STATS=2 coil app.coil --jit   # plus each function and why one stays on the VM
```

`coil test --engine native` runs a test suite with native code, to check a
library behaves the same on both.
