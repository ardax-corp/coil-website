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

The binaries come from the `edge` releases. Coil has no stable release yet;
`edge` is a snapshot rebuilt from the main branch after every green CI run.

### From the release binaries

Set `TRIPLE` to your platform: `x86_64-unknown-linux-gnu`,
`aarch64-unknown-linux-gnu` or `aarch64-apple-darwin`. spool has no build for
macOS on Intel, musl Linux or Windows yet.

**1. spool.** Download it from the
[spool edge release](https://github.com/ardax-corp/spool/releases/tag/edge),
check it against `SHA256SUMS` and put it on your `PATH`:

```bash
TRIPLE=x86_64-unknown-linux-gnu
BASE=https://github.com/ardax-corp/spool/releases/download/edge
mkdir -p ~/.local/bin && cd "$(mktemp -d)"
curl -fLO "$BASE/spool-$TRIPLE.tar.gz" -O "$BASE/SHA256SUMS"
grep " spool-$TRIPLE.tar.gz\$" SHA256SUMS | sha256sum -c -    # macOS: shasum -a 256 -c -
tar xzf "spool-$TRIPLE.tar.gz" -C ~/.local/bin spool
```

**2. coil.** The spool binary does not download coil. Get the toolkit from the
[coil edge release](https://github.com/ardax-corp/coil-lang/releases/tag/edge)
and unpack it into `~/.coil/bin`. Keep the helper binaries (`coil-fmt`,
`coil-test`, …) next to `coil`:

```bash
BASE=https://github.com/ardax-corp/coil-lang/releases/download/edge
mkdir -p ~/.coil/bin && cd "$(mktemp -d)"
curl -fLO "$BASE/coil-$TRIPLE.tar.gz" -O "$BASE/SHA256SUMS"
grep " coil-$TRIPLE.tar.gz\$" SHA256SUMS | sha256sum -c -     # macOS: shasum -a 256 -c -
tar xzf "coil-$TRIPLE.tar.gz" -C ~/.coil/bin --strip-components=1
```

On Windows, the coil release has an x86-64 build
(`coil-x86_64-pc-windows-gnu.zip`), but spool does not run there yet. The
release also has a musl build of coil for Linux (`x86_64-unknown-linux-musl`).

**3. The standard library.** It is plain source code:

```bash
git clone https://github.com/ardax-corp/coil-stdlib.git ~/.coil/stdlib
```

**4. Check.** Put both directories on your `PATH`:

```bash
export PATH="$HOME/.coil/bin:$HOME/.local/bin:$PATH"
coil -V
spool doctor
```

`spool doctor` checks that it can find coil, the stdlib, git and curl. spool
looks for coil in `$COIL`, then on `PATH`, then in `~/.coil/bin/coil`, and for
the stdlib in `~/.coil/stdlib` unless its config says otherwise.

Steps 2 and 3 are manual for now. A spool command that does them for you is
planned ([spool#51](https://github.com/ardax-corp/spool/issues/51)) but does
not exist yet.

### With the bootstrap script

To do all of it in one command, use spool's bootstrap script. It needs `git`,
`sh` and `curl`:

```bash
git clone https://github.com/ardax-corp/spool.git
cd spool
./bootstrap.sh --channel edge --install
```

That builds spool, downloads the prebuilt coil from the edge release, and
installs `coil` to `~/.coil/bin`, the stdlib to `~/.coil/stdlib` and `spool`
to `~/.local/bin`. Then set `PATH` and run `spool doctor` as in step 4.

Without `--channel edge`, or on a platform without a prebuilt coil, the
script builds coil from source, which needs a Rust toolchain, libffi and
PCRE2 headers.

## Your first program

The quickest way is a spool project:

```bash
spool new hello
cd hello
spool run
```

`spool new` creates the project and `spool run` builds and runs it, printing
a greeting from the generated `src/main.hy`.
[A project with spool](#a-project-with-spool) below shows the layout.

A program does not need a project, though. Put this in a loose file called
`hello.hy`:

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

`coil` compiles the file in memory and runs it. This is what spool runs for
you, minus the project setup:

```bash
coil --root ~/.coil/stdlib/src hello.hy
```

`--root` tells the compiler where to find modules: `println` lives in the
stdlib module `io::sync`, and the stdlib is source code in
`~/.coil/stdlib/src`. `coil` does not look for the stdlib on its own. spool
adds that root, and your project's `src/`, for you.

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
