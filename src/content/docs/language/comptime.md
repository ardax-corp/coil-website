---
title: "Compile-time code: `const`, `comptime` and IO grants"
description: "Code that runs while compiling: computed consts, comptime expressions and blocks, compile-time IO with grants, the result cache, limits, and the tools that show what ran."
---

# Compile-time code

Coil can run code while it compiles a program. The result goes into the
program as if you had written it out: a value for a `const` or a
`comptime` expression, and source code for a top-level `comptime` block or a
[macro](/docs/language/macros).

| Written | Runs | Becomes |
|---------|------|---------|
| `const X = f();` | while compiling | the value `f()` returned |
| `comptime e` | while compiling | the value of `e` |
| `comptime { … }` inside a function | while compiling | the value the block returns |
| `comptime { … }` at the top level | while compiling, before typechecking | the items in the `Code` it returns |
| a macro, derive or attribute | while compiling, before typechecking | the code it returns |

Compile-time code is ordinary Coil, run by the same VM as your program. It
gets no files, network or environment unless the build grants them
([IO](#io)).

## Computed consts

A module `const` is computed while compiling. Its value is stored in the
program, so nothing runs at startup:

```coil
fn sum_of_squares(int n) -> int {
    let total = 0;
    for i in 0..n {
        total += i * i;
    }
    return total;
}

const TOTAL = sum_of_squares(1000);
```

- The initializer must be pure. Reading or writing a `static let`, or IO
  without a grant, is `E0134`, and the message names the cause.
- A panic, or running into a [limit](#limits), is also `E0134` at the const.
- A const whose value exists only in a running program, such as a function
  value, a stream or another handle, is computed when the program starts
  instead. So is one whose initializer only opens a handle: `stdout()`,
  `stderr()`, `stdin()`, `dload(…)` or `declare(…)`.
- Write `static let` when a value should be computed when the program
  starts instead.

A `static let` with a pure initializer is computed while compiling too, but
silently: if it fails or takes too long it is computed at startup as before.
At `-O2` and above, a call to a pure function with constant arguments
(`fib(20)`) may be replaced by its result the same way. `black_box(x)`
stops that, which benchmarks use. A call that would take longer than
automatic folding allows (`fib(32)`) stays a call, and the compiler says so
with an info (E0138): write `comptime fib(32)` to compute it while
compiling, which makes the build take longer.

## `comptime` expressions

`comptime e` computes `e` while compiling and uses the value in its place.
It is a `const` written inline, with the same rules:

```coil
use env::var;

fn main() {
    let total = comptime sum_of_squares(10);
    let target = comptime (var("TARGET") ?? "dev"); // needs --comptime-env TARGET
}
```

`comptime` binds like unary minus: `comptime a + b` computes `a` only, so put
a larger expression in parentheses.

`e` cannot use the function's local variables: it runs before the program
does. Use a value it can compute itself, or a module `const`.

`comptime { … }` inside a function is a block that runs while compiling. The
value it returns takes its place:

```coil
use io::file::read_text;
use text::{Text};

fn main() {
    // needs --comptime-read names.txt
    let count = comptime {
        let text = read_text("names.txt") ?? "";
        let names: Vec<string> = text.lines();
        let n = 0;
        for name in names {
            if name != "" {
                n += 1;
            }
        }
        return n;
    };
}
```

The block may call functions of its own module. It always gives one value;
a block that only has side effects ends with `return;` and gives `()`.

## `comptime` blocks that generate code

A top-level `comptime { … }` returns `Code`. The items in it replace the
block, as the output of a top-level `name!(…);` macro call does:

```coil
use api_gen::classes;
use io::file::read_text;

comptime {
    return classes(read_text("api/schema.json") ?? "{}");
}
```

- It runs before the file is typechecked, so it can only use code from other
  modules. A function declared in the same file is "Cannot find function",
  with a help line about this.
- `return` must give `Code` (from `quote`, `raw`, `lit` and the other
  [macro helpers](/docs/language/macros#the-macro-module)). `?` does not
  apply here, so use `.unwrap_or(..)` or `match` on a `Result`.
- Errors in the block's body are reported where they are in your file. A
  panic shows the block's own lines in its backtrace.
- The generated code may declare macros and derives and use them. They run
  in a later round.
- A block is compiled and its result reused until the block or a module it
  uses changes. An edit elsewhere in the file reuses it.

## Values in macros

A function-style macro gets its arguments as `Expr`, the code as written. When
an argument is a constant, the macro can read its value:

| Method | Gives |
|--------|-------|
| `e.int()` | `Some(n)` for an integer constant (`3`, `2 * 2`, `-7`) |
| `e.float()` | `Some(x)` for a float or integer constant |
| `e.bool()` | `Some(b)` for `true`, `false` or a constant comparison |
| `e.string()` | `Some(s)` for a string literal, escapes decoded |

Each one is `None` for anything else, a variable or a call for example.

```coil
use macro::{Expr, Code, lit};

macro repeat(Expr text, Expr n) -> Code {
    let s = text.string() ?? "";
    let out = "";
    for _ in 0..(n.int() ?? 0) {
        out = out + s;
    }
    return lit(out);
}
```

## IO

Compile-time code may read files, write files, read environment variables,
run programs and connect over TCP only when the build grants it. Each flag
repeats, and `MODULE=` limits a grant to one module and the modules under it
(`config=` covers `config` and `config::load`):

| Flag | Allows |
|------|--------|
| `--comptime-read [MODULE=]PATH` | reading files under `PATH` (a file or a directory) |
| `--comptime-write [MODULE=]PATH` | writing files under `PATH` |
| `--comptime-env [MODULE=]NAME` | reading the environment variable `NAME` |
| `--comptime-exec [MODULE=]NAME` | running the program `NAME` (matched by file name, without extension) |
| `--comptime-net [MODULE=]HOST[:PORT]` | TCP connections to `HOST` (any port) or `HOST:PORT` |

```
$ coil build.hy
Error: [E0134] const `SCHEMA` is computed while compiling, but its initializer uses {read, …}: calls `read_text` (read, …)
Help: code run while compiling does IO only when the build grants it: pass `--comptime-read PATH`

$ coil --comptime-read api/ build.hy
```

With a grant, a read outside it fails when it runs, naming the grant it
needs: ``reading `other.json` while compiling needs `--comptime-read .` ``.

- Paths are relative to the directory you run `coil` in, not to the source
  file. `..` and symlinks cannot leave a granted directory.
- A grant applies to the code in that module: a `const`, a `comptime`
  expression or block, or a macro by the module that declares it.
- These flags are separate from `--allow-read` and friends, which are what
  the [program](/docs/language/permissions) may do when it runs.
- Listening for connections and UDP are not available at compile time.
- Each connect, read or write waits at most 30 seconds. The whole
  evaluation stops after `--comptime-timeout` seconds (300 by default).

### With spool

[spool](/docs/language/project-config#comptime) passes these flags from a `[comptime]` section in
`coil.toml`, with paths relative to the project:

```toml
[comptime]
read = ["schemas"]
env = ["CI"]
net = ["api.example.com:443"]
cache = ".comptime"
```

A dependency's own `[comptime]` is used only after `spool allow-comptime
NAME`, and then only for that dependency's modules.

## The result cache

A result that used IO is kept in the result cache, so the next build does not
read the environment, run a program or connect again:

- What is kept: the value of a `const` or `comptime`, or the code a macro or
  block returned, when it used a grant and wrote no file. Pure code is
  always computed again, because it cannot change.
- A file it read that has changed since is a miss, and the code runs again.
  The environment, programs and the network are only asked again on a miss.
- `--comptime-refresh` runs again everything that used the environment, a
  program or the network, and reports each result that changed (`E0135`,
  info).
- `--comptime-offline` uses cached results only. On a miss, the environment,
  programs and the network are refused, with an error that says to build once
  without it. Use it in CI to build from a committed cache.
- `--comptime-cache DIR` keeps the cache in `DIR`, for example in the
  project, to commit it. Without it the cache is in the user cache
  (`$COIL_CACHE_DIR`, `$XDG_CACHE_HOME/coil` or `~/.cache/coil`), under
  `comptime/`.
- Environment values are never written to the cache, only their names.

## Limits

Compile-time code that you ask for (consts, `comptime`, macros and blocks)
runs within limits, and running out is an error that names the flag to
raise:

| Flag | Limit | Default |
|------|-------|---------|
| `--comptime-steps N` | loop iterations plus calls | 1,000,000,000 (about 15 s of a tight loop) |
| `--comptime-mem MIB` | live heap | 1024 MiB |
| `--comptime-timeout SECS` | wall-clock time of one evaluation | 300 s |

Code the compiler computes on its own (a pure `static let`, call folding at
`-O2`) has much smaller limits and gives up without failing the build; a
call that ran out of steps gets the E0138 info.

## Seeing what ran

- `coil dissect --expand FILE` prints the file after macros and blocks have
  expanded. Generated items start with a comment that names what wrote them
  and where (`// generated by a comptime block at main.hy:3:1`). The hidden
  items of a `comptime` name the line it is on.
- `--opt-stats` (on `coil compile` and `coil dissect`) reports how many
  macro calls and blocks ran or were reused, how many consts were computed
  or came from the cache, and how long each took.
- The language server (`coil lsp`) expands macros and blocks as the build
  does, but takes compile-time IO from the result cache only. It does not
  read the environment, run programs, connect or write files on each edit.
  When a result is not cached, the diagnostic says to build the project.
  Give it the same `--comptime-*` flags as the build, and start it in the same
  directory, so they share the cache.

## Not yet

- `--comptime-pin` (pinning what a download returns) is not available yet
  (coil-lang#1755).
- A `comptime` that gives no value does not compile yet (coil-lang#1798).
- `e.string()` only reads string literals, not folded string expressions
  (coil-lang#1810).

## Related

- [Macros](/docs/language/macros)
- [Permissions](/docs/language/permissions): what the program may do when it runs
- [Error codes](/docs/language/error-codes): `E0134`, `E0135`
