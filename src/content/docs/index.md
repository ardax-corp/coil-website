---
title: Docs
description: A small typed scripting language with more structure than a typical script, and a bytecode runtime they can keep thin.
---

# coil

**coil** is a statically typed scripting language with Hindley–Milner type inference. Programs are compiled to bytecode and executed on a custom virtual machine. Source files use the `.hy` extension (short for **henry**, the SI unit of inductance — the measure of a coil); compiled archives are stored as `.hyc` files.

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

With `coil` on your `PATH`, from a clone of the repository:

```bash
coil examples/print_literal.hy
```

Expected output: `hello`

## How programs run

Parse → typecheck (HM) → stack IL codegen + lower/fuse-select → versioned `.hyc` archive (packed `major.minor`) → VM executes `main`. Cached `out.hyc` is reused until sources/version/entry change; delete it to force a rebuild. Full stage notes: [Internals — Pipeline](https://github.com/ardax-corp/coil-lang/blob/main/docs/internals/pipeline.md).

## Language at a glance

| Area | Status |
|------|--------|
| Primitives | `int`, `float`, `string`, `bool`, `byte` |
| Functions, `let` / `const`, `if`/`else`, `while` / `for` | Supported |
| Named call-site arguments (`f(name: v)`) | Supported (positional prefix then named; named holes on partials allowed) |
| Arity / type overloads / first-class fn values / lambdas (`use`) | Supported (`examples/overload.hy`, `type_overload.hy`, `fn_value.hy`, `lambda.hy`) |
| Rest parameters (`T... xs` / tuple `... xs`) | Supported (trailing only; `T...` packs to `Vec<T>`, bare `...` packs to a tuple) |
| Call-site spread (`f(...pack)`) | Supported (tuple, `[T; N]`, and `Vec<T>` operands) |
| User-defined `attr` decorators | Supported (`attr` decl + `#[name(...)]` on `fn`, methods, class constructors) |
| Let destructuring (`let (a, b) = …`, `let { x, y } = …`) | Supported (tuple / record; no enum ctor patterns in `let`) |
| `break` / `continue` | Supported |
| Enums, `match`, record variants, scalar `#[repr]` | Supported (`Enum::Variant`; catch-all is `default =>`) |
| Built-in `Option` / `Result`, `raise`, `?`, `??`, `?.` | Supported (desugar to match/return) |
| Tuples, fixed arrays (`[T; N]` / `len`), `Vec<T>`, dicts (anonymous records) | Supported |
| Type aliases (`type Name = T;`, lexically scoped) | Supported |
| Generics and traits | Supported: generic functions/enums/aliases/classes, higher-kinded type parameters, associated types/GATs, existentials, coherence checks |
| Modules / namespaces (`use`, `mod`) | Supported (multi-file CLI via `coil.toml`) |
| Field access (`p.x`, chained `p.x.y`) | Supported |
| FFI (`extern` blocks, `dload`/`declare`/`invoke`, C varargs `...`, struct/callback returns) | Supported (requires libffi) |
| IO streams (`use io::{…};`, `Vec<byte>`, files, sync adapters, TCP, UDP) | Supported (non-blocking L0) |
| Classes (`class` / `impl` / `new`, fields, methods) | Supported |
| Coroutines (`async`, `yield`, `resume`, `yield from`, `done`) | Supported |
| `for x in` (Iterator / IntoIterator) | Supported (arrays, homogeneous tuples/dicts, ranges, coroutines, user `impl`s) |
| Ranges (`a..b` / `a..=b`) | Supported — lazy `Range<T: Ord>`; `for` / `.to_vec()` step `int`/`byte`/`float`; non-numeric `Ord` is a type error ([syntax](/docs/references/syntax#ranges-lazy)) |
| String concat via `+` | Supported (`string + string` → `string`) |
| `string::format(...)` | Supported compiler intrinsic (returns `string`; literal specifiers are checked) |

Browse runnable demos in [Examples](/docs/manual/examples). Multi-file showcase apps (todo board, text adventure, TCP echo) live under [`examples/projects/`](https://github.com/ardax-corp/coil-lang/blob/main/examples/projects/README.md).

## Documentation

Docs are split into three trees:

| Tree | Audience | Start here |
|------|----------|------------|
| [Manual](/docs/manual/getting-started) | Learners | Getting started, tutorials 01–11, examples catalog |
| [References](/docs/references) | Lookup | Syntax, types, keywords, per-API builtin pages |
| [Internals](https://github.com/ardax-corp/coil-lang/blob/main/docs/internals/README.md) | Contributors / embedders | Pipeline, debug info, opcodes, grammar |


### Manual (tutorial)

| Chapter | Topic |
|---------|-------|
| [Getting Started](/docs/manual/getting-started) | Build, first run, cache |
| [01 — Basics](/docs/manual/tutorial/01-basics) | Syntax, functions, `let`, control flow |
| [02 — Types & Variables](/docs/manual/tutorial/02-types-and-variables) | Primitives, inference, annotations |
| [03 — Enums & Match](/docs/manual/tutorial/03-enums-and-match) | Sum types and pattern matching |
| [04 — Records & Fields](/docs/manual/tutorial/04-records-and-fields) | Record variants, field access, nested patterns |
| [05 — Aggregates](/docs/manual/tutorial/05-aggregates) | Tuples, `[T; N]`, `Vec<T>`, dicts, type aliases |
| [06 — Modules](/docs/manual/tutorial/06-modules) | `use`, `mod`, `coil.toml` |
| [07 — FFI](/docs/manual/tutorial/07-ffi) | `extern` blocks and dynamic loading |
| [08 — Coroutines](/docs/manual/tutorial/08-coroutines) | `async fn`, resume, send/receive, `yield from`, `for x in` |
| [09 — Error handling](/docs/manual/tutorial/09-error-handling) | Built-in Option/Result, `raise`, `?`, `??`, `?.` |
| [10 — IO streams](/docs/manual/tutorial/10-io-streams) | `byte` / `Vec<byte>`, `Stream`, files, sync adapters, TCP |
| [11 — OS threads](/docs/manual/tutorial/11-threads) | `use thread::{spawn, join, …}`, channels, mutexes |
| [Examples catalog](/docs/manual/examples) | Runnable demos in `examples/` (see catalog for expected output) |
| [Showcase projects](https://github.com/ardax-corp/coil-lang/blob/main/examples/projects/README.md) | Multi-file apps + co-located tests |
| [Userland stdlib](https://github.com/ardax-corp/coil-stdlib/blob/main/docs/README.md) | coil-stdlib: consume, modules, IO adapters |

Classes (`class`, `impl`, `new`) — see [02 — Types & Variables](/docs/manual/tutorial/02-types-and-variables) and `examples/classes.hy`. Full API index: [References](/docs/references).

## Repository layout

```
coil/
├── common/          # Shared types: opcodes, values, archive format
├── parser/          # Pratt parser and AST
├── compiler/        # HM typechecker, stack IL codegen, pipeline
├── machine/         # VM, heap/GC, FFI (libffi)
├── examples/        # Runnable .hy demos (see manual/examples.md)
│   └── projects/    # Showcase multi-file apps + co-located tests
├── docs/
│   ├── manual/      # End-user guide + tutorials
│   ├── references/  # Language + per-API lookup
│   └── internals/   # Pipeline, VM notes, grammar
├── src/main.rs      # CLI: default build+run, compile, run, test
└── coil.toml.example  # Example project manifest
```

## Running

| Command | Role |
|---------|------|
| *(no subcommand)* `<file.hy>` | Compile → `out.hyc` (cached) → run |
| `compile <file.hy> [-o path]` | Compile entry file to a `.hyc` archive |
| `run <file.hyc>` | Execute a compiled archive |
| `package <file.hy> [-o path] [--check-native]` | Single executable (embeds `.hyc` into `coil-embed` by default) |
| `test [path] [--fail-fast]` | Compile+run all `[path]/**/*.hy` (default `./tests`); continue after failures unless `--fail-fast` |
| `lsp` | Start the Coil language server over stdin/stdout |

For FFI examples you also need **libffi** (e.g. `libffi-dev` on Debian/Ubuntu, `libffi` on Arch). To build from a checkout, see [Getting Started](/docs/manual/getting-started).

## Learn by example

| Goal | Start with |
|------|------------|
| First program | [getting-started.md](/docs/manual/getting-started) → `examples/fib.hy` |
| Enums & pattern matching | `examples/option.hy`, `examples/result.hy` |
| Record-shaped variants | `examples/record.hy`, `examples/mixed.hy` |
| Dicts / anonymous records | `examples/dict.hy` |
| Generics & traits | `examples/generics.hy`, `examples/hkt_bifunctor.hy`, `examples/gat_pointer.hy`, `examples/existential_show.hy` |
| Modules | `examples/modules.hy` (see [examples.md](/docs/manual/examples) for setup) |
| FFI | `examples/strlen.hy`, `examples/ffi_sum.hy`, `examples/ffi_printf.hy` |
| IO streams | `examples/io_bytes.hy`, `examples/io_file.hy`, `examples/io_eof.hy`, `examples/io_udp.hy` |
| Coroutines | `examples/coro.hy`, `examples/coro_gen.hy`, `examples/coro_send.hy`, `examples/for_in_coro.hy` |
| Full catalog | [examples.md](/docs/manual/examples) |

Source for the language is [ardax-corp/coil-lang](https://github.com/ardax-corp/coil-lang). Internals stay in that repository.
