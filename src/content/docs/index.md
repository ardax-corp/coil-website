---
title: Docs
description: A small typed scripting language with more structure than a typical script, and a bytecode runtime they can keep thin.
---

# coil

**coil** is a statically typed scripting language with type inference. Programs are compiled to bytecode and executed on a custom virtual machine. Source files use the `.coil` extension (short for **henry**, the SI unit of inductance — the measure of a coil); compiled archives are stored as `.ccoil` files.

For developers who want a small typed scripting language with more structure than a typical script, and a bytecode runtime they can keep thin.

The language targets embeddable scripting: you get real type checking and inference without a heavyweight build pipeline, plus optional FFI for calling into C libraries or host-provided Rust closures.

## Quick start

Download the toolkit for your OS. When a GitHub Release exists, use [GitHub Releases](https://github.com/ardax-corp/coil-lang/releases) (latest). There is no tagged release yet. Until then, the current build is the latest [`release-binaries`](https://github.com/ardax-corp/coil-lang/actions/workflows/release-binaries.yml) workflow on `main` (`binaries-<triple>` artifacts, 30-day retention). See [Getting Started](/docs/manual/getting-started).

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{to_bytes};
fn main() {
    write_all(stdout(), to_bytes("hello"));
}
```

With `coil` on your `PATH`, from a clone of the repository with [coil-stdlib](https://github.com/ardax-corp/coil-stdlib) cloned beside it:

```bash
coil --root ../coil-stdlib/src examples/print_literal.coil
```

Expected output: `hello`

## How programs run

Parse → typecheck → typed HIR (inlining, optimization passes) → stack IL + MIR tiers / lower/fuse-select → bytecode → VM executes `main`. `coil <file.coil>` compiles in memory on every run; `coil compile` writes a versioned `.ccoil` archive (packed `major.minor`) that `coil run` executes. Full stage notes: [Internals — Pipeline](https://github.com/ardax-corp/coil-lang/blob/main/docs/internals/pipeline.md).

## Language at a glance

| Area | Status |
|------|--------|
| Primitives | `int`, `float`, `string`, `bool`, `byte` |
| Functions, `let` / `const`, `if`/`else`, `while` / `for` | Supported |
| Named call-site arguments (`f(name: v)`) | Supported (positional prefix then named; named holes on partials allowed) |
| Arity / type overloads / first-class fn values / lambdas (`use`) | Supported (`examples/overload.coil`, `type_overload.coil`, `fn_value.coil`, `lambda.coil`) |
| Rest parameters (`T... xs` / tuple `... xs`) | Supported (trailing only; `T...` packs to `Vec<T>`, bare `...` packs to a tuple) |
| Call-site spread (`f(...pack)`) | Supported (tuple, `[T; N]`, and `Vec<T>` operands) |
| User-defined `attr` decorators | Supported (`attr` decl + `#[name(...)]` on `fn`, methods, class constructors) |
| Let destructuring (`let (a, b) = …`, `let { x, y } = …`) | Supported (tuple / record; no enum ctor patterns in `let`) |
| `break` / `continue` | Supported |
| Enums, `match`, record variants, scalar `#[repr]` | Supported (`Enum::Variant`; catch-all is `default =>`) |
| Built-in `Option` / `Result`, `raise`, `?`, `??`, `?.` | Supported (desugar to match/return) |
| Tuples, fixed arrays (`[T; N]` / `len`), `Vec<T>`, records `{ x: 1 }` | Supported |
| Type aliases (`type Name = T;`, lexically scoped) | Supported |
| Generics and traits | Supported: generic functions/enums/aliases/classes, higher-kinded type parameters, associated types/GATs, existentials, coherence checks |
| Modules / namespaces (`use`, `mod`) | Supported (multi-file CLI via `--root`; spool reads `coil.toml`) |
| Field access (`p.x`, chained `p.x.y`) | Supported |
| FFI (`extern` blocks, `dload`/`declare`/`invoke`, C varargs `...`, struct/callback returns) | Supported (requires libffi) |
| IO streams (`use io::{…};`, `Vec<byte>`, files, sync adapters, TCP, UDP) | Supported (non-blocking L0) |
| Classes (`class` / `impl` / `new`, fields, methods) | Supported |
| Coroutines (`gen fn`, `yield`, `resume`, `yield from`, `done`) | Supported |
| `for x in` (Iterator / IntoIterator) | Supported (arrays, homogeneous tuples, ranges, coroutines, user `impl`s) |
| Integer arithmetic | `+ - * / % **` and unary `-` on `int` panic on overflow in every build; `float` is IEEE. Wrapping / checked / saturating helpers are the userland `arith` module |
| Effects and capabilities (`pure fn`, `uses {…}`, `--allow-*`) | Supported ([effects](/docs/language/effects), [permissions](/docs/language/permissions)) |
| Contracts (`requires`, `ensures`, `invariant`, `decreases`) | Supported; `coil verify` proves them with an SMT solver ([contracts](/docs/language/contracts)) |
| Tasks (`task::scope`, `spawn`, `join`, channels) and OS threads | Supported ([tasks](/docs/manual/tutorial/13-tasks), [threads](/docs/manual/tutorial/14-threads)) |
| Ranges (`a..b` / `a..=b`) | Supported — lazy `Range<T: Ord>`; `for` / `.to_vec()` step `int`/`byte`/`float`; non-numeric `Ord` is a type error ([syntax](/docs/language/syntax#ranges-lazy)) |
| String concat via `+` | Supported (`string + string` → `string`) |
| `string::format(...)` | Supported compiler intrinsic (returns `string`; literal specifiers are checked) |

Browse runnable demos in [Examples](/docs/manual/examples). Multi-file showcase apps (todo board, text adventure, TCP echo) live under [`examples/projects/`](https://github.com/ardax-corp/coil-lang/blob/main/examples/projects/README.md).

## Documentation

Docs are split into three trees:

| Tree | Audience | Start here |
|------|----------|------------|
| [Manual](/docs/manual/getting-started) | Learners | Getting started, tutorial chapters 01–16, examples catalog |
| [References](/docs/reference) | Lookup | Syntax, types, keywords, per-API builtin pages |
| [Internals](https://github.com/ardax-corp/coil-lang/blob/main/docs/internals/README.md) | Contributors / embedders | Pipeline, debug info, opcodes, grammar |


### Manual (tutorial)

| Chapter | Topic |
|---------|-------|
| [Getting started](/docs/manual/getting-started) | Install, first program, spool projects |
| [01 — Basics](/docs/manual/tutorial/01-basics) | Running files, functions, `let`, control flow |
| [02 — Types and variables](/docs/manual/tutorial/02-types-and-variables) | Numbers, strings, bools, conversions, constants |
| [03 — Collections](/docs/manual/tutorial/03-collections) | Arrays, `Vec`, tuples, `HashMap`, ranges |
| [04 — Classes](/docs/manual/tutorial/04-classes) | Fields, methods, `new`, derives |
| [05 — Enums and match](/docs/manual/tutorial/05-enums-and-match) | Cases with data, `match`, `Option`, `if let` |
| [06 — Error handling](/docs/manual/tutorial/06-error-handling) | `Result`, `?`, `??`, panics |
| [07 — Traits and generics](/docs/manual/tutorial/07-traits-and-generics) | Generic functions and types, traits, `impl` |
| [08 — Closures](/docs/manual/tutorial/08-closures) | Lambdas, captures, functions as values |
| [09 — Modules](/docs/manual/tutorial/09-modules) | Files as modules, `use`, `mod`, packages |
| [10 — Files and IO](/docs/manual/tutorial/10-files-and-io) | Reading and writing files, streams, stdin |
| [11 — Testing](/docs/manual/tutorial/11-testing) | `coil test`, assertions, test files |
| [12 — Generators](/docs/manual/tutorial/12-generators) | `gen fn`, `yield`, `resume`, `yield from` |
| [13 — Tasks](/docs/manual/tutorial/13-tasks) | `task::scope`, channels, timeouts, a TCP server |
| [14 — Threads](/docs/manual/tutorial/14-threads) | `spawn`, `join`, channels, mutexes |
| [15 — Macros](/docs/manual/tutorial/15-macros) | Function-style macros, attribute macros, derives |
| [16 — Calling C](/docs/manual/tutorial/16-ffi) | `extern` blocks, `dload`, permission flags |
| [Examples catalog](/docs/manual/examples) | Runnable demos in `examples/` (see catalog for expected output) |
| [Showcase projects](https://github.com/ardax-corp/coil-lang/blob/main/examples/projects/README.md) | Multi-file apps + co-located tests |
| [Userland stdlib](https://github.com/ardax-corp/coil-stdlib/blob/main/docs/README.md) | coil-stdlib: consume, modules, IO adapters |

Full API index: [Reference](/docs/reference).

## Repository layout

```
coil/
├── common/          # Shared types: opcodes, values, archive format
├── parser/          # Pratt parser and AST
├── compiler/        # Typechecker, HIR optimizations, stack IL / MIR lowering, pipeline
├── machine/         # VM, heap/GC, FFI (libffi)
├── coil-*/          # CLI helpers: test, fmt, lsp, debug, dissect, verify, embed
├── examples/        # Runnable .coil demos (see manual/examples.md)
│   └── projects/    # Showcase multi-file apps + co-located tests
├── docs/internals/  # Pipeline, VM notes, grammar (user docs live on this site)
└── src/main.rs      # CLI: default build+run, compile, run, test
```

## Running

| Command | Role |
|---------|------|
| *(no subcommand)* `<file.coil>` | Compile in memory → run (no `out.ccoil`) |
| `compile <file.coil> [-o path]` | Compile entry file to a `.ccoil` archive |
| `run <file.ccoil>` | Execute a compiled archive |
| `package <file.coil> [-o path] [--check-native]` | Single executable (embeds `.ccoil` into `coil-embed` by default) |
| `test [path] [--fail-fast]` | Compile+run all `[path]/**/*.coil` (default `./tests`); continue after failures unless `--fail-fast` |
| `lsp` | Start the Coil language server over stdin/stdout |

For FFI examples you also need **libffi** (e.g. `libffi-dev` on Debian/Ubuntu, `libffi` on Arch). To build from a checkout, see [Getting Started](/docs/manual/getting-started).

## Learn by example

| Goal | Start with |
|------|------------|
| First program | [getting-started.md](/docs/manual/getting-started) → `examples/fib.coil` |
| Enums & pattern matching | `examples/option.coil`, `examples/result.coil` |
| Record-shaped variants | `examples/record.coil`, `examples/mixed.coil` |
| Dicts / anonymous records | `examples/dict.coil` |
| Generics & traits | `examples/generics.coil`, `examples/hkt_bifunctor.coil`, `examples/gat_pointer.coil`, `examples/existential_show.coil` |
| Modules | `examples/modules.coil` (see [examples.md](/docs/manual/examples) for setup) |
| FFI | `examples/ffi_extern.coil`, `examples/ffi_sum.coil`, `examples/ffi_varargs.coil` |
| IO streams | `examples/io_bytes.coil`, `examples/io_file.coil`, `examples/io_eof.coil`, `examples/io_udp.coil` |
| Coroutines | `examples/coro.coil`, `examples/coro_gen.coil`, `examples/coro_send.coil`, `examples/for_in_coro.coil` |
| Full catalog | [examples.md](/docs/manual/examples) |

Source for the language is [ardax-corp/coil-lang](https://github.com/ardax-corp/coil-lang). Internals stay in that repository.
