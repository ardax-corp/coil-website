---
title: "Native code: JIT and AOT"
description: "How Coil runs programs as machine code: compiled when a run or a compiled archive starts, or ahead of time by `coil package`, with an interpreter for compile-time code, the debugger and WebAssembly."
---

# Native code

Coil runs programs as machine code, made by
[Cranelift](https://cranelift.dev) from the compiler's typed intermediate
code. An interpreter of the same intermediate code runs what has no machine
code to run on: compile-time code, `coil debug` and WebAssembly builds.
`--no-jit` runs a program on the bytecode VM instead. Output, panics
(message, location and backtrace), exit status, tasks, generators, `defer`
and `drop` are the same on all three. One thing can differ: the collector
may free an object as soon as native code has used it for the last time
(see [Collection timing](#collection-timing)).

| How you run it | What runs |
|---|---|
| `coil app.coil` | native code, compiled when the program starts |
| `coil app.coil --no-jit` | the VM |
| `coil compile app.coil -o app.ccoil`, then `coil run app.ccoil` | native code, compiled from the archive when it starts |
| `coil run --no-jit app.ccoil` | the VM |
| `coil package app.coil -o app` | a native executable, compiled ahead of time, with no VM inside |
| `coil package --no-aot app.coil -o app` | the JIT runner with the program inside, also with no VM |

## JIT

```sh
coil --root ~/coil-stdlib/src app.coil
```

compiles the program, turns it into machine code and runs. Making machine
code takes time on every start, so a very short program can spend longer on
that than on running. A second run takes the compiled program from the
[build cache](/docs/language/cli#build-cache), and makes the machine code
again.

`coil compile` stores the intermediate code in the archive (not machine
code), so any machine with the same `coil` can run it natively:

```sh
coil compile --root ~/coil-stdlib/src app.coil -o app.ccoil
coil run app.ccoil          # native
coil run --no-jit app.ccoil # VM
```

An archive built with `--no-jit` has no intermediate code and runs on the
VM; `coil run --jit` on it says so on stderr.

## Native executables

`coil package` links the program's machine code with the Coil runtime into
one executable, so nothing is compiled when it starts. The executable has
no bytecode VM: every function runs as machine code. If a function cannot
be compiled to machine code, `coil package` stops with an error naming it
and why.

`--no-aot` builds the JIT runner instead: the same program, stored as
intermediate code and compiled when it starts, so it needs no linker. It has
no VM either.

Linking needs a C compiler (`cc`). Where it cannot link (no `cc`, or
Windows for now) `coil package` warns and builds the JIT runner.

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

## What does not run as machine code

- Compile-time code and macros run on the interpreter, while compiling. A
  `const` computed then is stored in the executable and restored at start.
- `coil debug` runs on the interpreter, so it can stop at any line and see
  every local.
- WebAssembly builds, the playground among them, run on the interpreter. A
  task there cannot wait under a native callback, and panics if it tries.
- `--no-jit` and `--cow-report` run on the VM.

Coverage (`coil test --coverage`) counts lines on whichever engine runs the
tests.

Every engine calls the same runtime code for the host (files, sockets,
processes, FFI), so permissions, task switching and errors are the same.

## Collection timing

In native code a value stays alive only until its last use, so the
collector can free it before its variable is reassigned or its function
returns, which is when the VM (`--no-jit`) lets it go. Correct
programs see no difference, but a [`gc::Weak`](/docs/reference/gc/Weak)
handle can be cleared, or a [`drop`](/docs/language/memory#the-collector)
run, sooner. A variable holding a [`gc::Root`](/docs/reference/gc/Root)
pin stays alive until its function returns in both.

## Seeing what ran

```sh
COIL_NATIVE_STATS=1 coil app.coil   # counts on stderr
COIL_NATIVE_STATS=2 coil app.coil   # plus each compiled function
```

`coil test` runs a suite as native code. `--engine mir` runs it on the
interpreter and `--engine vm` on the VM, to check a library behaves the same
on each.
