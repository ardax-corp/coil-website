---
title: Getting Started
description: Download the Coil toolkit for your OS, run a first program, and see how source becomes bytecode on the VM.
---

# Getting Started

This guide covers installing Coil, running a first program, and how source becomes bytecode on the VM.

## Install

Download the toolkit for your OS. That is the default install. `cargo build` is the from-source path only.

When a GitHub Release exists, get the latest toolkit from [GitHub Releases](https://github.com/ardax-corp/coil-lang/releases). There is no GitHub Release and no `v*` tag yet, so that page has no toolkit archives.

Until a tag exists, the current build is the latest [`release-binaries`](https://github.com/ardax-corp/coil-lang/actions/workflows/release-binaries.yml) workflow on `main`. Every push to `main` uploads `binaries-<triple>` artifacts (30-day retention) for:

- `x86_64-unknown-linux-gnu`
- `x86_64-unknown-linux-musl`
- `aarch64-apple-darwin`
- `x86_64-pc-windows-gnu`

On a `v*` tag, the same workflow attaches toolkit archives to the GitHub Release: `coil-<triple>.tar.gz` / `.zip` and `coil-embed-<triple>` for those triples.

Put the extracted `coil` binary on your `PATH`.

### Regular expressions ([coil-regex](https://github.com/ardax-corp/coil-regex))

Regex is a **userland** package (not a virtual module). Clone [coil-regex](https://github.com/ardax-corp/coil-regex) separately or add via spool; see [regex reference](/docs/references/regex). It binds the system libpcre2-8 directly; tests and examples live in that repo (`make test`).

### Time ([coil-time](https://github.com/ardax-corp/coil-time))

Time is a **userland** package (not a virtual module). Clone [coil-time](https://github.com/ardax-corp/coil-time) separately or add via spool; see [time reference](/docs/references/time). Tests live in that repo (`coil test` after `make`).

## Run your first program

The examples live in the [coil-lang](https://github.com/ardax-corp/coil-lang) repository. Clone it (this is not the install step):

```bash
git clone git@github.com:ardax-corp/coil-lang.git
git clone git@github.com:ardax-corp/coil-stdlib.git
cd coil-lang
```

The examples import modules such as `io::sync` and `string` from the userland stdlib ([coil-stdlib](https://github.com/ardax-corp/coil-stdlib)). The toolkit does not bundle it and `coil` reads no manifest, so pass its `src/` with `--root` (in a project, spool adds that root for you).

The canonical starter example computes the 32nd Fibonacci number recursively.
Fair cross-language CPU baselines live under `examples/perf/`
(`./scripts/poop_baseline.sh`):

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn fib(int n) -> int {
    if n <= 2 {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

fn main() {
    write_all(stdout(), to_bytes(format("%i", fib(32))));
}
```

Run it (toolkit `coil` on your `PATH`):

```bash
coil --root ../coil-stdlib/src examples/fib.hy
```

**Expected output:** `2178309`

The default CLI invocation compiles `examples/fib.hy` to bytecode in memory and executes it on the VM. It does not read or write `out.hyc`; `coil compile` writes an archive.

### CLI commands

| Invocation | Meaning |
|------------|---------|
| `coil <file.hy>` | Compile in memory and run (no `out.hyc`). `coil` reads no `coil.toml`; `spool run` supplies `[entry].file` |
| `coil compile <file.hy> [-o path]` | Compile only; default output is `out.hyc` |
| `coil -V` / `coil --version` | Print `coil 0.1.0` on stdout. These flags win over other args. |
| `coil -O0` … `-O3` / `-Os` / `-Og` | Optimization preset (`none`/`basic`/`standard`/`aggressive`/`size`/`debug`); default `-O2` |
| `coil --allow-read` … / `-A` | Grant host access: `--allow-read`, `--allow-write`, `--allow-net`, `--allow-env`, `--allow-exec`, `--allow-exit`, `--allow-attach`, or `-A` for all. Default is none; the compiler names the flag a program needs. See [Permissions](/docs/references/permissions) |
| `coil --allow-dload STEM` + `--dload-pin STEM=SHA256` / `--dload-trusted STEM` | Allow a `dload` stem, then pin its library hash or trust it; both are needed. spool passes them from `coil.toml` / `coil.lock`. See [FFI](/docs/references/ffi) |
| `coil run <file.hyc>` | Execute a previously compiled archive |
| `coil package <file.hy> [-o path]` | Build a **single executable** for this OS/arch (embeds `.hyc` into `coil-embed` by default); always requires an explicit `.hy` path. Embeds a native lock for each `--ffi-native name=…,version=…,path=…` that matches a `dload` stem (spool passes one per `[[ffi.native]]`). |
| `coil natives dump [exe] [--tsv]` | Print the native lock (JSON or TSV: package, version, filename, sha256, size) from a packaged exe, or from the `--ffi-native` rows when `exe` is omitted |
| `coil test [path] [--fail-fast]` | Compile and run every `.hy` under `[path]` (default `./tests`); re-execs `coil-test` (`coil test --help` lists `--seed`, `-j`, `--coverage`, …) |
| `coil mutate [flags]` | Mutation testing: which small source edits no test notices (re-execs `coil-test mutate`) |
| `coil verify <file.hy>` | Prove `requires` / `ensures` contracts with an SMT solver (re-execs `coil-verify`). See [Contracts](/docs/references/contracts) |
| `coil dissect <file.hy> [--fn pat] [--il] [--ast] [--effects]` | Re-execs `coil-dissect`: in-memory compile and dump filtered bytecode (optional pre-opt IL / entry AST / each function's effects and why auto-par left a loop sequential); never writes `out.hyc` |
| `coil debug <file.hy> [-x script] [--batch]` | Re-execs `coil-debug`: GDB-style debugger (REPL; optional script / batch mode); never writes `out.hyc` |
| `coil fmt [--check] <file.hy\|dir>...` | Re-execs `coil-fmt`: pretty-print `.hy` sources (in place; `--check` exits non-zero if changes needed). Preserves `//` and `///` docs. |
| `coil lsp` | Re-execs `coil-lsp`: start the Coil language server over stdin/stdout. |

Sibling binaries (install next to `coil`):

| Binary | Role |
|--------|------|
| `coil-debug` | Debugger implementation (`coil debug` dispatches here) |
| `coil-dissect` | Bytecode / IL / AST dump (`coil dissect` dispatches here) |
| `coil-fmt` | Source formatter (`coil fmt` dispatches here) |
| `coil-lsp` | LSP server (`coil lsp` dispatches here) |
| `coil-embed` | VM-only runner template for `coil package` (no compiler) |

Examples (each command that compiles source also needs `--root ../coil-stdlib/src`, left out here for brevity):

```bash
# Compile only, custom archive path
coil compile examples/fib.hy -o /tmp/fib.hyc

# Run that archive
coil run /tmp/fib.hyc

# Inspect final bytecode for `fib` (and optionally pre-opt IL)
coil dissect examples/fib.hy --fn fib
coil dissect examples/fib.hy --fn fib --il

# Debug interactively, or with a script
coil debug examples/fib.hy
coil debug examples/fib.hy -x /tmp/cmds.txt --batch

# Format sources (rewrites in place; --check for CI)
coil fmt examples/fib.hy
coil fmt --check .

# Single-file app for this machine (embeds into `coil-embed`; no separate .hyc needed to run)
coil package examples/fib.hy -o ./fib-app
./fib-app

# Or pass an explicit runner template
coil package examples/fib.hy -o ./fib-app --runner /path/to/coil-embed

# With FFI: verify required shared libraries exist on this machine before shipping
coil package examples/ffi_extern.hy -o ./ffi-app --allow-dload sum --check-native

# Apps with userland natives: package embeds a lock (names + hashes, no URLs)
coil package app.hy -o ./my-app --allow-dload crypto \
  --ffi-native name=crypto,version=0.1.0,path=native
# The app finds libcrypto in the natives cache (~/.coil/natives), beside
# ./my-app, or in ./lib; putting it there is up to you.
./my-app

# Project tests (default root ./tests)
coil test
coil test ./tests
coil test --fail-fast   # stop after the first failed case
```

Layout under `./tests`:

| Path | Meaning |
|------|---------|
| `tests/**/*.hy` (except below) | Must compile; each `test("…")` case must return `Ok` |
| `tests/compile_fail/**/*.hy` | Must **fail** to compile with an error code the file's header declares: `// Expected: E0209 — why` (negative syntax / type tests) |
| `tests/positive/`, `tests/negative_runtime/` | Organized positive and soft-failure runtime suites |

A test file can declare multiple cases without `fn main`:

```coil
test("addition works") {
    assert(1 + 1 == 2)?;
}

test("multiply works") {
    assert(3 * 4 == 12)?;
}
```

Each `test("…") { … }` body runs in Result mode. A failed `assert`/`?` or a language `panic` fails that case; by default the harness continues to the next case (each case runs in an isolated VM so a panic does not skip later cases). Failures print `> Test "<description>" failed`. Files without `test(...)` cases still use a single `fn main()` as one opaque case. Files under `compile_fail/` pass only when compilation returns a clean diagnostic rejection (`Err`); a compiler panic does not count (and aborts under release `panic = "abort"`). Diagnostics for those files are silenced so the summary stays readable.

**Production builds** (`cargo run -- file.hy`, `coil compile`) **omit** harness declarations by default — `test("…")` blocks are stripped before codegen so they are not shipped in `out.hyc`. Use `--include-tests` to embed them (useful when you want to run the harness against a pre-built archive on another machine):

```bash
coil compile --include-tests myapp.hy -o myapp.hyc
coil test ./tests          # always includes harness tests
```

### Recompiling after changes

The default `coil <file.hy>` run compiles from source every time, so edits are picked up without any cache to clear. Only `coil compile` writes an archive (`out.hyc` unless `-o`), and `coil run` never recompiles: it rejects an archive incompatible with this runtime (different major, or archive minor newer than the runtime) and warns when sources recorded in the archive are newer than it. A default run also warns when an `out.hyc` built from the same entry is older than its sources, since that archive is not used.

## A simpler hello-world

For a minimal smoke test:

```bash
coil --root ../coil-stdlib/src examples/print_literal.hy
```

Source:

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn main() {
    write_all(stdout(), to_bytes("hello"));
}
```

**Expected output:** `hello`

## From source

`cargo build` is how you build Coil from a checkout. It is not the default install.

### Rust toolchain

coil is a Rust workspace. Install a recent stable Rust toolchain ([rustup](https://rustup.rs/)) and ensure `cargo` is on your `PATH`.

```bash
rustc --version
cargo --version
```

### libffi (optional, for FFI examples)

Examples that call C code (`examples/ffi_extern.hy`, `examples/ffi_sum.hy`) require **libffi** at link time.

| Platform | Package |
|----------|---------|
| Arch Linux | `libffi` |
| Debian / Ubuntu | `libffi-dev` |
| Fedora | `libffi-devel` |

You can build and run all non-FFI examples without libffi.

Clone the repository and build from the root (builds `coil` plus helpers
`coil-debug`, `coil-dissect`, `coil-fmt`, and `coil-embed`):

```bash
git clone git@github.com:ardax-corp/coil-lang.git
cd coil-lang
git clone git@github.com:ardax-corp/coil-stdlib.git ../coil-stdlib
cargo build
```

The GitHub repository is named **`coil-lang`**. If you previously cloned **`zero`** / **zero-script**, update the remote after the repository is renamed on GitHub, or clone fresh:

```bash
git remote set-url origin git@github.com:ardax-corp/coil-lang.git
```

For optimized binaries:

```bash
cargo build --release --workspace
```

A successful build produces the `coil` binary (via `src/main.rs`) plus the `parser`, `compiler`, `machine`, and `common` crates as libraries. From that checkout, `cargo run -- --root ../coil-stdlib/src examples/fib.hy` is the same as `coil --root ../coil-stdlib/src examples/fib.hy` once the built `coil` is on your `PATH`.

## Project layout

```
coil/
├── common/              # Opcodes, values, diagnostics, archive envelope
├── parser/              # Lexer + Pratt parser → AST
├── compiler/
│   ├── src/typechecking/  # Type inference and checks
│   ├── src/hir/           # Typed HIR, inliner and optimization passes
│   ├── src/codegen/       # HIR → stack IL lowering
│   ├── src/il/            # Stack IL, fuse-select lowerer
│   ├── src/mir/           # SSA tiers for numeric bodies
│   ├── src/pipeline.rs    # Compile driver, multi-file discovery
│   └── tests/             # Golden pipeline and diagnostic tests
├── machine/
│   ├── src/vm.rs          # Bytecode interpreter
│   ├── src/memory/        # Stack, heap, GC
│   └── src/ffi/           # libffi dynamic calls + host natives
├── coil-args/, coil-cli/  # Shared CLI flags and helpers
├── coil-debug/, coil-dissect/, coil-fmt/, coil-lsp/, coil-test/, coil-verify/, coil-embed/
├── examples/              # Runnable .hy programs (catalog in examples.md)
├── docs/internals/        # Pipeline, VM notes, grammar (user docs live on this site)
└── src/main.rs            # `cargo run` entry point
```

### Crate responsibilities

| Crate | Role |
|-------|------|
| `parser` | Turn `.hy` text into an AST (`Expression`, `Pattern`, declarations) |
| `compiler` | Typecheck, build and optimize HIR, lower to stack IL / MIR, fuse to bytecode, write `.hyc` archives |
| `machine` | Execute bytecode; manage stack, heap, and automatic GC |
| `common` | Shared `Instruction` opcodes, `Value` representation, `ArchivedProgram` |

## Compilation model

coil uses **AST → typed HIR (optimizations) → stack IL (symbolic labels) → MIR tiers / lower/fuse → bytecode**.

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐    ┌──────────┐    ┌──────────┐
│  .hy source │ →  │ Parser (AST) │ →  │ Typechecker │ →  │   HIR    │ →  │ Stack IL │
└─────────────┘    └──────────────┘    └─────────────┘    └──────────┘    └────┬─────┘
                                                                                │
                    ┌──────────────┐    ┌─────────────┐                         ▼
                    │ VM execute   │ ←  │  bytecode   │ ←  MIR tiers / lower/fuse
                    └──────────────┘    │ (or .hyc)   │
                                        └─────────────┘
```

### Stages in detail

1. **Parse** — `parser::Pratt` builds an AST. Syntax errors are reported with spans.
2. **Typecheck** — `compiler::typechecking` runs constraint-based inference (generics are explicit; `let` bindings are monomorphic), producing a type for every expression and collecting diagnostics (unknown identifiers, unify errors, non-exhaustive `match`, effect and capability checks, and so on).
3. **HIR and codegen (IL)** — `hir::build` turns the AST and checker facts into a typed, desugared HIR (`coil dissect --hir`). Inlining and the optimization passes (constant folding, CSE, LICM, bounds proofs, unrolling of short counted loops, scalar replacement) run there. `codegen` then lowers each body to a stack IL (`compiler/src/il`) with symbolic jump labels. Direct tail-recursive `return f(...)` emits **`TailCall`**.
4. **Lower** — after link, `finalize_bytecode` tree-shakes unused bodies, lifts eligible numeric bodies to MIR (dense opcodes), then runs fuse-select (`BinSlotImm`, `CmpJmpf`, …), assigns PCs once, and emits `Vec<Byte>`. No optimization pass runs on the stack IL itself. Label binds act as fusion barriers.
5. **Archive** — `coil compile` wraps bytecode, constant pool, and string table in `ArchivedProgram { version, bytecode, constants, strings }` and serialized with rkyv. `version` is packed `major.minor`. A runtime loads an archive when majors match and the archive minor is ≤ the runtime minor.
6. **Run** — the VM runs the in-memory bytecode (default `coil <file.hy>`) or a loaded `.hyc` (`coil run`) and dispatches opcodes. Heap allocations trigger periodic mark-and-sweep GC.

### Entry point convention

Every program must define `fn main()`. The compiler emits a short prologue (`CALL`, `JMP`, `HALT`) and patches the `JMP` to jump to `main` (or to extern-block setup when `extern` declarations are present).

## Source and archive files

| Extension | Meaning |
|-----------|---------|
| `.hy` | Coil source (`.hy` = **henry**, the SI unit of inductance) |
| `.hyc` | Compiled bytecode archive (rkyv-serialized `ArchivedProgram`) |

`coil compile` writes `out.hyc` in the working directory unless `-o` is given. Treat archives as **ABI-versioned** — rejected when the major differs or the archive minor is newer than the runtime. Older archives on a newer minor runtime of the same major still load.

## What you can write today

The language includes:

- **Primitives:** `int` (64-bit; overflow panics), `float`, `string`, `bool`, `byte`
- **Functions** with typed parameters and return types
- **`let` bindings** and reassignment (`x = expr;`)
- **Control flow:** `if` / `else`, `while` loops, `for x in` iteration, `break` / `continue`, `defer`
- **Enums** with unit, tuple, and record-shaped variants, plus scalar-backed `#[repr(int|string|float|bool)]` cases
- **`match`** with `Enum::Variant` constructors, a `default` catch-all, nested `_` in payloads, and nested record patterns
- **Tuples** `(a, b)`, **fixed arrays** `[T; N]`, **`Vec<T>`**, **dicts** `{ key: value }`
- **Type aliases** `type Point = (int, int);`
- **Modules** via `use foo::bar;` and `mod foo;` (multi-file projects; see [Modules](/docs/references/modules))
- **FFI** via `extern "lib" { ... }` or runtime `dload` / `declare` / `invoke`
- **Classes** (`class` / `impl` / `new`, `pub` members, statics, generic classes — see `examples/classes.hy`)
- **Coroutines** — `gen fn`, `yield`, `resume`, `resume h with v`, `let x = yield e`, `yield from` (see [tutorial/08-coroutines.md](/docs/manual/tutorial/08-coroutines))
- **String helpers** — `string::format(...)` and UTF-8 byte conversions via `string::{from_bytes, to_bytes}`

## Next steps

1. **Tutorial** — start with [01 — Basics](/docs/manual/tutorial/01-basics) for a guided tour of syntax and types.
2. **Examples** — browse the full catalog in [examples.md](/docs/manual/examples); each entry includes the run command and expected output.
3. **References** — keep [syntax](/docs/references/syntax) and [types](/docs/references/types) open while you code.
4. **Modules** — pass `--root DIR` (or let spool read `coil.toml`) when you split code across files; see [project config](/docs/references/project-config).

### Suggested learning path

| Step | Example | Teaches |
|------|---------|---------|
| 1 | `print_literal.hy` | stdout via `io`, `main` |
| 2 | `let_test.hy` | `let`, reassignment |
| 3 | `fizbuz.hy` | `if`, modulo, multiple prints |
| 4 | `option.hy` | payload enums, `match` |
| 5 | `scalar_enum.hy` | `#[repr(int)]`, coerce, `Show` as backing |
| 6 | `record.hy` | record variants, field access |
| 7 | `dict.hy` | anonymous records |
| 8 | `aliases.hy` | type aliases, tuples |
| 9 | `ffi_extern.hy` or `ffi_sum.hy` | FFI (after installing libffi) |

Happy scripting.
