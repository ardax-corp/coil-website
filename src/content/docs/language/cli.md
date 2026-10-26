---
title: Command line
description: Every coil subcommand and the flags that matter day to day, plus the sibling binaries the toolkit ships.
---

# Command line

`coil` compiles and runs Coil programs. Most projects drive it through
[spool](/packages/spool), which adds the module roots and permission flags
from `coil.toml`; this page is for running `coil` directly. `coil --help`
and `coil <command> --help` print the complete, current list of options.

Flags go before the file: `coil --root ../coil-stdlib/src -A app.hy`. With a
subcommand they go after it: `coil compile --root ../coil-stdlib/src app.hy`.

## Commands

| Invocation | What it does |
|------------|--------------|
| `coil <file.hy>` | Compile and run. The compiled program is kept in the [build cache](#build-cache), so running it again skips compiling. |
| `coil compile <file.hy> [-o path]` | Compile to a bytecode archive (`out.hyc` unless `-o`). |
| `coil run <file.hyc>` | Run a compiled archive. An archive from an incompatible runtime is rejected. |
| `coil package <file.hy> [-o path]` | Build a single executable for this OS and CPU (the `coil-embed` runner with the program inside). |
| `coil test [path]` | Run every test under `path` (default `./tests`) and the examples in `///` docs. See [Test harness](/docs/language/test-harness). |
| `coil verify <file.hy>` | Prove `requires` / `ensures` [contracts](/docs/language/contracts) with an SMT solver. |
| `coil mutate` | Mutation testing: which small edits to your code no test notices. |
| `coil fmt [--check] <file\|dir>…` | Format sources in place; `--check` only reports. Keeps `//` and `///` comments. |
| `coil lsp` | Start the language server on stdin/stdout, for editors. |
| `coil debug <file.hy>` | Interactive debugger (`--dap` for IDEs, `-x script --batch` for scripts). |
| `coil dissect <file.hy> [--fn name]` | Print the compiled bytecode of the matching functions. |
| `coil natives dump [exe]` | Print the native-library lock embedded in a packaged executable. |
| `coil -V` | Print the version. |

## Common flags

| Flag | Meaning |
|------|---------|
| `--root DIR` | Add a directory that `use` paths resolve against (repeatable). The [stdlib](/docs/reference#ref-stdlib) is one: `--root ~/.coil/stdlib/src`. See [Modules](/docs/language/modules). |
| `-A`, `--allow-read`, `--allow-write`, `--allow-net`, `--allow-env`, `--allow-exit`, `--allow-attach` | Grant host access. A program gets none by default, and the compiler names the flag it is missing. See [Permissions](/docs/language/permissions). |
| `--allow-dload STEM` with `--dload-pin STEM=SHA256` or `--dload-trusted STEM` | Allow loading a native library at run time. See [Calling C](/docs/manual/tutorial/16-ffi). |
| `-O0` … `-O3`, `-Os`, `-Og` | Optimization level; `-O2` by default. |
| `-g0`, `-g1`, `-g2` | How much debug information to keep. `-g2` (the default) gives panics full locations and is needed by `coil debug` and coverage. `--strip-debug` is `-g0`. |
| `--contracts all\|requires\|off` | Which [contract](/docs/language/contracts) checks run. |
| `--comptime-read PATH`, `--comptime-net HOST`, … | What [compile-time code](/docs/language/comptime) may touch. |
| `--no-build-cache` | Compile even if the [build cache](#build-cache) holds the program. |

## Examples

```bash
# Run a file that uses the stdlib and reads files
coil --root ~/.coil/stdlib/src --allow-read wc.hy notes.txt

# Compile once, run many times
coil compile --root ~/.coil/stdlib/src app.hy -o app.hyc
coil run app.hyc

# Ship a single executable
coil package --root ~/.coil/stdlib/src app.hy -o app
./app

# Tests, formatting
coil test --root ~/.coil/stdlib/src tests
coil fmt --check src tests
```

Test blocks (`test("…") { … }`) are left out of `coil compile` and
`coil package` output; pass `--include-tests` to keep them.

## Build cache {#build-cache}

`coil <file.hy>` and `coil compile` keep each compiled program in
`~/.cache/coil/build` (or `$COIL_CACHE_DIR/build`, or
`$XDG_CACHE_HOME/coil/build`). When you run or compile the same file again
and nothing it was built from changed, coil loads the stored program
instead of compiling. A small program that uses the stdlib reruns in a few
milliseconds.

An entry belongs to one version of the file (its path and its contents),
one build of `coil`, and one set of flags. Different versions of a file can
compile at the same time without touching each other's entries. A hit also
needs every module the program uses to be unchanged, and no new file in the
directories those modules are in. Otherwise coil compiles again and
replaces the entry.

Some compiles are never cached:

- a compile that printed warnings, so they show again on the next run;
- a compile with [compile-time IO](/docs/language/comptime) grants;
- runs with `--opt-stats`.

`--no-build-cache` skips the cache for one command. Deleting the directory
is always safe. At most 256 programs are kept, and the least recently used
are dropped first.

## Toolkit binaries

The release archive holds `coil` and the helpers it starts for some
commands. Keep them in the same directory.

| Binary | Used by |
|--------|---------|
| `coil-test` | `coil test`, `coil mutate` |
| `coil-fmt` | `coil fmt` |
| `coil-lsp` | `coil lsp` |
| `coil-debug` | `coil debug` |
| `coil-dissect` | `coil dissect` |
| `coil-embed` | `coil package` (the runner the program is embedded in) |

## Files

| Extension | Meaning |
|-----------|---------|
| `.hy` | Coil source |
| `.hyc` | Compiled bytecode archive |
