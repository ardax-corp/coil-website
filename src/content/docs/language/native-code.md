---
title: "Native code: JIT and AOT"
description: "How Coil runs programs as machine code: compiled when the program starts, or ahead of time with `coil package`. The MIR interpreter covers what has no machine code."
---

# Native code

Coil compiles a program to MIR, its typed intermediate code, and
[Cranelift](https://cranelift.dev) turns the MIR into machine code. There
are two engines for that MIR: native code, which runs your programs, and
the [MIR interpreter](#the-mir-interpreter), which runs what has no machine
code. Output, panics (message, location and backtrace), exit status, tasks,
generators, `defer` and `drop` behave the same on both.

| How you run it | What runs |
|---|---|
| `coil app.coil` | native code, compiled when the program starts |
| `coil compile app.coil -o app.ccoil`, then `coil run app.ccoil` | native code, compiled from the archive when it starts |
| `coil package app.coil -o app` | a native executable, compiled ahead of time |
| `coil package --no-aot app.coil -o app` | the JIT runner with the program inside, compiled when it starts |
| `coil --mir app.coil` | the MIR interpreter |

## JIT

```sh
coil --root ~/coil-stdlib/src app.coil
```

compiles the program to MIR, turns the MIR into machine code and runs it.
Making machine code takes a few milliseconds for a small program and more for
a large one, so Coil keeps it: a second run of the same program loads the
machine code from the [code cache](/docs/language/cli#code-cache) and starts
almost as fast as a [native executable](#native-executables).

`coil compile` writes a `.ccoil` archive with the program's MIR and data
(not machine code), so any machine with the same `coil` can run it:

```sh
coil compile --root ~/coil-stdlib/src app.coil -o app.ccoil
coil run app.ccoil
```

## Native executables

`coil package` links the program's machine code with the Coil runtime into
one executable, so nothing is compiled when it starts. It is smaller and
starts faster than the JIT runner, which `--no-aot` builds instead: the
`coil-embed` runner with the program's MIR inside. If a function cannot be
compiled to machine code, `coil package` stops with an error naming it and
why, with or without `--no-aot`.

Linking needs a C compiler (`cc`; on Windows, a mingw-w64 toolchain). Where
it cannot link, `coil package` warns and builds the JIT runner.

### Linking it yourself

`--emit` stops before the link, so your own build can do it, with your own
code beside the program:

```sh
coil package --emit obj app.coil -o app.o     # the program
coil package --emit lib app.coil -o libapp.a  # the program and the runtime
```

Both hold everything the program needs, and `coil package` prints the `cc`
line to link them. An object links with the runtime library, `libcoil_rt.a`.
A static library has the runtime inside, so it is the only Coil input:

```sh
cc libapp.a -o app -Wl,--gc-sections -ldl -lgcc_s -lutil -lrt -lpthread -lm -lc
```

An `extern` block named with `--link-static` becomes an undefined symbol for
that link, so C code linked beside the program provides it. The result is
still a Coil program, with Coil's `main`: C code can't call Coil functions yet.
`--no-aot` and `--link-arg` don't apply, because `--emit` needs native code
and leaves the link to you.

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

## The MIR interpreter

The interpreter runs MIR directly, with no machine code. It is much slower
than native code. It runs:

- compile-time code and macros, while compiling. A `const` computed then is
  stored in the program and restored at start;
- `coil debug`;
- WebAssembly builds, such as the [playground](/playground);
- `coil mutate`, which counts steps to stop a change that makes a test run
  forever;
- `--cow-report`, on `coil <file.coil>` and `coil run`;
- `--mir` on `coil <file.coil>` and `coil run`, and `coil test --engine mir`,
  when you ask for it. A source file runs at `-O0` unless you pass `-O`;
- a program with a function native code refuses, which `coil <file.coil>` and
  `coil run` warn about.

Functions that call the host (files, sockets, processes, FFI) call the same
runtime code on both engines, so permissions, task switching and errors are
the same.

## Collection timing

A value stays alive only until its last use, so the collector can free it
while the variable that held it is still in scope. Correct programs see no
difference, but a [`gc::Weak`](/docs/reference/gc/Weak) handle can be
cleared, or a [`drop`](/docs/language/memory#the-collector) run, before the
function returns. A variable holding a [`gc::Root`](/docs/reference/gc/Root)
pin stays alive until its function returns. Both engines follow this rule.

## Seeing what ran

```sh
COIL_NATIVE_STATS=1 coil app.coil   # counts on stderr
COIL_NATIVE_STATS=2 coil app.coil   # plus each compiled function
```

`coil test` runs a suite as native code. `coil test --engine mir` runs it on
the interpreter, to check a library behaves the same on both.
