---
title: Getting started
description: Install coil and spool, run your first program, and set up a project with tests.
---

# Getting started

This page gets Coil onto your machine, runs a first program, and sets up a
project you can grow. It takes about ten minutes. The
[tutorial](/docs/manual/tutorial/01-basics) picks up from here.

## Install

Coil comes in three parts:

- **coil**, the compiler and runtime, with its helpers (formatter, test
  runner, language server, debugger).
- **coil-stdlib**, the standard library: collections, text, file IO and more.
  It is plain Coil source that the compiler reads.
- **spool**, the project manager. It creates projects, fetches dependencies
  and runs `coil` with the right flags.

The quickest way to get all three is spool's bootstrap script. It needs `git`
and `sh`, and `curl` to download the prebuilt binaries (Linux x86-64 and
ARM64, macOS on Apple silicon):

```bash
git clone https://github.com/ardax-corp/spool.git
cd spool
./bootstrap.sh --channel edge --install
```

That installs `coil` to `~/.coil/bin`, the stdlib to `~/.coil/stdlib` and
`spool` to `~/.local/bin`. Put both directories on your `PATH`:

```bash
export PATH="$HOME/.coil/bin:$HOME/.local/bin:$PATH"
coil -V
spool doctor
```

`spool doctor` checks that it can find coil, the stdlib, git and curl.

> Coil has no stable release yet. The `edge` channel is a snapshot built from
> the main branch after every green CI run. Without `--channel edge`, the
> script builds coil from source, which needs a Rust toolchain, libffi and
> PCRE2 headers.

### Installing by hand

You can also download the toolkit for your platform from the
[edge release](https://github.com/ardax-corp/coil-lang/releases/tag/edge),
unpack it, and put the directory on your `PATH`. Keep the helper binaries
(`coil-fmt`, `coil-test`, …) next to `coil`. Then clone the stdlib:

```bash
git clone https://github.com/ardax-corp/coil-stdlib.git ~/.coil/stdlib
```

On Windows, the release has an x86-64 build of coil; spool does not run
there yet.

## Your first program

Create a file called `hello.hy`:

```coil
use io::sync::{println};

fn main() {
    println("Hello, world!")?;
}
```

Output:

```text
Hello, world!
```

Run it:

```bash
coil --root ~/.coil/stdlib/src hello.hy
```

`coil` compiles the file in memory and runs it. `--root` tells the compiler
where to find modules: `println` lives in the stdlib module `io::sync`, and
the stdlib is source code in `~/.coil/stdlib/src`.

A few things to notice:

- Every program starts at `fn main()`.
- `use io::sync::{println};` imports `println`. Nothing is imported
  implicitly except a small [prelude](/docs/reference/prelude) (`Vec`,
  `Option`, `Result` and a few traits).
- Printing can fail (for example when the output is a closed pipe), so
  `println` returns a `Result`. The `?` after the call passes a failure up to
  the caller. In `main` that ends the program with the error. The
  [error handling chapter](/docs/manual/tutorial/06-error-handling) explains
  this properly; until then, write `println(…)?;`.

Typing `--root` every time gets old. A shell alias helps for quick
experiments:

```bash
alias coilr='coil --root ~/.coil/stdlib/src'
coilr hello.hy
```

For anything bigger than a single file, use a spool project instead.

## A project with spool

```bash
spool new hello
cd hello
spool run
```

`spool new` creates this layout:

```text
hello/
├── coil.toml        # name, version, entry file, dependencies
├── src/
│   └── main.hy      # fn main() lives here
└── tests/
    └── main.hy      # tests run by `spool test`
```

`spool run` compiles `src/main.hy` into a single executable in
`target/hello` and runs it. spool adds the stdlib root and your project's
`src/` for you, so `use` paths just work.

The other commands you will use daily:

| Command | What it does |
|---------|--------------|
| `spool run -- ARGS` | Build and run, passing `ARGS` to the program |
| `spool test` | Run the tests in `tests/` |
| `spool fmt` | Format `src/` and `tests/` |
| `spool check` | Compile without running |
| `spool add NAME --git URL` | Add a dependency (see [Packages](/packages)) |

## Tests

Tests are ordinary Coil files under `tests/`. Each `test("…") { … }` block is
one case:

```coil
use tests::assert;

fn double(int n) -> int {
    return n * 2;
}

test("double doubles") {
    assert!(double(21) == 42);
}
```

`spool test` (or `coil test --root ~/.coil/stdlib/src tests`) runs every case
and reports the ones that fail. The examples in your `///` documentation
comments run as tests too. [Chapter 11](/docs/manual/tutorial/11-testing)
covers testing in detail.

## Editor support

The language server gives you errors as you type, hover documentation, go to
definition and completion. In a spool project, point your editor's LSP client
at `spool lsp`; for loose files, use `coil lsp`. Any editor with a generic
LSP client works (Neovim, Helix, Zed, VS Code with a generic LSP extension).

## Permissions

A Coil program cannot touch files, the network, environment variables or
other processes unless you allow it. If `notes.hy` reads a file, running it
without permission fails at compile time and tells you which flag it needs:

```bash
coil --root ~/.coil/stdlib/src --allow-read notes.hy
```

`-A` allows everything. In a spool project, grants go in `coil.toml`. See
[Permissions](/docs/language/permissions).

## Where to go next

- The [tutorial](/docs/manual/tutorial/01-basics) teaches the language
  chapter by chapter, from variables to tasks, threads and macros.
- The [reference](/docs/reference) has a page for every module, type and
  function, with examples.
- [Command line](/docs/language/cli) lists every `coil` command and flag.
