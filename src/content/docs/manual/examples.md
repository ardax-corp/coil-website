---
title: Examples catalog
description: "Every runnable (or intentionally non-runnable) program under examples/. Run from the repository root unless noted otherwise:"
---

# Examples catalog

Every runnable (or intentionally non-runnable) program under `examples/`. Run from the **repository root** unless noted otherwise:

```bash
cargo run -- --root ../coil-stdlib/src examples/<file>.coil
```

The examples import the userland stdlib (`io::sync`, `string`, …), so every run needs `--root` pointing at a [coil-stdlib](https://github.com/ardax-corp/coil-stdlib) checkout (here a sibling `../coil-stdlib`). The **Run** rows below omit it for brevity. The default run compiles in memory, so there is no `out.ccoil` to delete after editing source.

> **Note:** The CLI uses multi-file discovery (`Pipeline::compile_src_from_file`) over its `--root` search roots, so `use` / `mod` examples such as `modules.coil` work from `cargo run` with `--root examples/src`. `coil` reads no `coil.toml` or `coil.lock`; the workspace `coil.toml` is for spool, which turns it into flags. FFI examples need **libffi** and sometimes a built shared library (`libsum.so` / `libsum.dylib` / `sum.dll`).

---

## Basics

Core syntax: functions, `let`, arithmetic, control flow, and I/O.

### `examples/print_literal.coil`

**Demonstrates:** Literal string output with `io::write_all`.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn main() {
    write_all(stdout(), to_bytes("hello"));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/print_literal.coil` |
| **Output** | `hello` |

---

### `examples/format_literal.coil`

**Demonstrates:** Formatted output with `string::format` and `io::write_all`.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn main() {
    write_all(stdout(), to_bytes(format("%i", 42)));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/format_literal.coil` |
| **Output** | `42` |

---

### `examples/string_fmt.coil`

**Demonstrates:** String concatenation with `+` and the `format` expression returning a string.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn main() {
    let a = "hello";
    let b = "world";
    write_all(stdout(), to_bytes(format("%s", a + " " + b)));
    let s = format("%i-%s", 42, "x");
    write_all(stdout(), to_bytes(format("%s", s)));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/string_fmt.coil` |
| **Output** | `hello world42-x` |

---

### `examples/show_tuple.coil`

**Demonstrates:** `%v` structural Show for tuples and anonymous records.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn main() {
    write_all(stdout(), to_bytes(format("%v", (1, 2))));
    write_all(stdout(), to_bytes(format("%v", { a: 3, b: 4 })));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/show_tuple.coil` |
| **Output** | `(1, 2){ a: 3, b: 4 }` |

---

### `examples/let_test.coil`

**Demonstrates:** `let` bindings, reading locals, and reassignment (`x = 20;`).

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn main() {
    let x = 5;
    write_all(stdout(), to_bytes(format("%i", x)));
    let y = 10;
    write_all(stdout(), to_bytes(format("%i", y)));
    x = 20;
    write_all(stdout(), to_bytes(format("%i", x)));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/let_test.coil` |
| **Output** | `51020` |

---

### `examples/defer.coil`

**Demonstrates:** `defer` blocks that run on function exit (fall-through or early `return`), including LIFO order when multiple defers are registered, plus `defer use (n)` to capture an outer local.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn with_cleanup() {
    defer { write_all(stdout(), to_bytes("leave")); }
    write_all(stdout(), to_bytes("enter"));
}

fn lifo() {
    defer { write_all(stdout(), to_bytes("1")); }
    defer { write_all(stdout(), to_bytes("2")); }
    write_all(stdout(), to_bytes("0"));
}

fn early_return(int n) -> int {
    defer { write_all(stdout(), to_bytes("d")); }
    if n == 0 {
        return 99;
    }
    write_all(stdout(), to_bytes("ok"));
    return n;
}

fn capture_n(int n) -> int {
    defer use (n) { write_all(stdout(), to_bytes(format("%i", n))); }
    return n;
}

fn main() {
    with_cleanup();
    write_all(stdout(), to_bytes(","));
    lifo();
    write_all(stdout(), to_bytes(","));
    write_all(stdout(), to_bytes(format("%i", early_return(7))));
    write_all(stdout(), to_bytes(","));
    write_all(stdout(), to_bytes(format("%i", early_return(0))));
    write_all(stdout(), to_bytes(","));
    write_all(stdout(), to_bytes(format("%i", capture_n(5))));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/defer.coil` |
| **Output** | `enterleave,021,okd7,d99,55` |

---

### `examples/named_args.coil`

**Demonstrates:** Named call-site arguments (`name: value`), including a positional prefix followed by named args.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn greet(string name, int age) {
    write_all(stdout(), to_bytes(format("%s", name)));
    write_all(stdout(), to_bytes(format("%i", age)));
}

fn main() {
    greet(name: "Ada", age: 36);
    greet("Grace", age: 40);
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/named_args.coil` |
| **Output** | `Ada36Grace40` |

---

### `examples/variadic.coil`

**Demonstrates:** Trailing rest parameters (`T... name`) packing into a `Vec<T>`, including an empty rest and named fixed args followed by positional rest.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn sum(int... xs) -> int { /* len + loop */ }
fn greet(string name, string... extras) -> string { /* concat */ }

fn main() {
    write_all(stdout(), to_bytes(format("%i", sum(1, 2, 3))));           // 6
    write_all(stdout(), to_bytes(format("%i", sum())));                  // 0
    write_all(stdout(), to_bytes(format("%s", greet(name: "Hi", "!", "?")))); // Hi!?
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/variadic.coil` |
| **Output** | `60Hi!?` |

---

### `examples/const.coil`

**Demonstrates:** Immutable `const` bindings (reassignment is rejected by the typechecker).

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn main() {
    const answer = 42;
    write_all(stdout(), to_bytes(format("%i", answer)));
    const greeting = "hi";
    write_all(stdout(), to_bytes(format("%s", greeting)));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/const.coil` |
| **Output** | `42hi` |

---

### `examples/loop_break.coil`

**Demonstrates:** `while` with `continue` and `break` (sum `0+1+2+4+5+6` = `18`).

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn main() {
    let sum = 0;
    let i = 0;
    while i < 10 {
        if i == 3 { i = i + 1; continue; }
        if i == 7 { break; }
        sum = sum + i;
        i = i + 1;
    }
    write_all(stdout(), to_bytes(format("%i", sum)));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/loop_break.coil` |
| **Output** | `18` |

---

### `examples/fizbuz.coil`

**Demonstrates:** `if` conditions, modulo, and independent stdout writes (FizzBuzz-style, without newlines between numbers).

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn fizbuz(int n) {
    if (n % 3) == 0 {
        write_all(stdout(), to_bytes("FIZ"));
    }
    if (n % 5) == 0 {
        write_all(stdout(), to_bytes("BUZ"));
    }
}

fn main() {
    fizbuz(1);
    fizbuz(2);
    // ... through fizbuz(15)
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/fizbuz.coil` |
| **Output** | `FIZBUZFIZFIZBUZFIZFIZBUZ` |

---

### `examples/fib.coil`

**Demonstrates:** Recursive functions, `if`, and integer arithmetic (smoke / docs).

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

| | |
|---|---|
| **Run** | `cargo run -- examples/fib.coil` |
| **Output** | `2178309` |

Cross-language CPU baselines (mandelbrot / tak / nsieve / binary trees / fib)
live under `examples/perf/` with matching `benchmarks/*.{lua,js}` ports. For
timing, prefer `coil compile … -o x.ccoil` then `coil run x.ccoil` (see
`./scripts/poop_baseline.sh`). Compile `perf/fib.coil` with `--auto-par off` so
the naive recursion stays sequential like the Lua/Node ports.

---

### `examples/perf/mandelbrot.coil`

**Demonstrates:** Nested loops + float arithmetic; fair cross-lang checksum bench.

| | |
|---|---|
| **Run** | `cargo run --release -- examples/perf/mandelbrot.coil` |
| **Output** | `625885` |
| **Ports** | `benchmarks/mandelbrot.lua`, `benchmarks/mandelbrot.js` |

---

### `examples/perf/tak.coil`

**Demonstrates:** Deep Takeuchi recursion (no auto-par binary shape).

| | |
|---|---|
| **Run** | `cargo run --release -- examples/perf/tak.coil` |
| **Output** | `7` |
| **Ports** | `benchmarks/tak.lua`, `benchmarks/tak.js` |

---

### `examples/perf/fib.coil`

**Demonstrates:** Plain naive `fib(32)` recursion (math/dispatch baseline).

| | |
|---|---|
| **Run** | `cargo run --release -- --auto-par off examples/perf/fib.coil` |
| **Output** | `2178309` |
| **Ports** | `benchmarks/fib.lua`, `benchmarks/fib.js` |

Compile with `--auto-par off` for fair sequential timing (default auto-par would
fork-join the binary recursion).

---

### `examples/perf/nsieve.coil`

**Demonstrates:** Sieve of Eratosthenes (`Vec` fill + mutation).

| | |
|---|---|
| **Run** | `cargo run --release -- examples/perf/nsieve.coil` |
| **Output** | `1900` |
| **Ports** | `benchmarks/nsieve.lua`, `benchmarks/nsieve.js` |

---

### `examples/perf/binary_trees.coil`

**Demonstrates:** Recursive tree alloc + walk checksum (GC-heavy).

| | |
|---|---|
| **Run** | `cargo run --release -- examples/perf/binary_trees.coil` |
| **Output** | `135854` |
| **Ports** | `benchmarks/binary_trees.lua`, `benchmarks/binary_trees.js` |

---

### `examples/perf/bool_guard.coil`

**Demonstrates:** `if flag { break }` on a bool local — a guard with nothing to
fuse into `*Jmpf`, so it lowers to a single `JMPT`. Codegen anchor for
`invert_guard_branch` (see `compiler/tests/perf_metrics.rs`).

| | |
|---|---|
| **Run** | `cargo run --release -- examples/perf/bool_guard.coil` |
| **Output** | `45` |

---

### `examples/call_test.coil`

**Demonstrates:** Calling a function for side effect; expression statement discards the return value.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn add(int a, int b) -> int {
    return a + b;
}

fn main() {
    add(3, 4);
    write_all(stdout(), to_bytes("done"));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/call_test.coil` |
| **Output** | `done` |

---

## Enums, match, and variants

Sum types with unit, tuple, and record-shaped payloads.

### `examples/option.coil`

**Demonstrates:** Built-in `Option`, constructor calls, and `match` with a binding arm.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn unwrap(Option o) -> int {
    return match o {
        Option::None => 0,
        Option::Some(v) => v,
    };
}

fn main() {
    write_all(stdout(), to_bytes(format("%i", unwrap(Option::Some(42)))));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/option.coil` |
| **Output** | `42` |

---

### `examples/result.coil`

**Demonstrates:** Built-in `Result` wrapping `Option`, multiple `match` arms sharing an outer tag with different inner patterns, and inner-pattern dispatch at runtime.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn unwrap_result(Result r) -> int {
    return match r {
        Result::Err(_) => -1,
        Result::Ok(Option::Some(v)) => v,
        Result::Ok(Option::None) => 0,
    };
}

fn main() {
    write_all(stdout(), to_bytes(format("%i", unwrap_result(Result::Ok(Option::Some(42))))));
    write_all(stdout(), to_bytes(format("%i", unwrap_result(Result::Ok(Option::None)))));
    write_all(stdout(), to_bytes(format("%i", unwrap_result(Result::Err("oops")))));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/result.coil` |
| **Output** | `420-1` |

---

### `examples/scalar_enum.coil`

**Demonstrates:** Scalar-backed `#[repr(int)]` enum, `Status::Ok = 200`, implicit coerce to `int`, `Show` of the backing word, and `default` match.

```coil
#[repr(int)]
#[derive(Show, Eq, Ord, Hash)]
enum Status {
    Ok = 200,
    NotFound = 404,
}

fn label(Status s) -> string {
    return match s {
        Status::Ok => "ok",
        default => "other",
    };
}

fn main() {
    let s = Status::Ok;
    write_all(stdout(), to_bytes(format("%s %i %v\n", label(s), s, s)));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/scalar_enum.coil` |
| **Output** | `ok 200 200` |

---

### `examples/assert.coil`

**Demonstrates:** `prelude::test::assert` returning `Result<(), string>`, with `?` propagation and matched error messages.

| | |
|---|---|
| **Run** | `cargo run -- examples/assert.coil` |
| **Output** | `ok,assertion failed,custom` |

---

### `examples/panic.coil`

**Demonstrates:** `panic "…"` abort (writes `panic: boom at <file>:<line>:<col>`, process exits 1).

| | |
|---|---|
| **Run** | `cargo run -- examples/panic.coil` |
| **Output** | `panic: boom at examples/panic.coil:7:4` (non-zero exit) |

---

### `examples/raise_try.coil`

**Demonstrates:** `raise`, postfix `?`, and inferred `Result` return (implicit `Ok` wrapping).

```coil
fn parse_pos(int n, int is_neg) {
    if is_neg == 1 {
        raise "neg";
    }
    return n;
}

fn double_pos(int n, int is_neg) {
    let v = parse_pos(n, is_neg)?;
    return v * 2;
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/raise_try.coil` |
| **Output** | `10,neg` |

---

### `examples/coalesce.coil`

**Demonstrates:** `??` on `Option`; a `Result` takes `.ok()` first, which drops its error on purpose.

| | |
|---|---|
| **Run** | `cargo run -- examples/coalesce.coil` |
| **Output** | `bar,hi,7,9` |

---

### `examples/optional_chain.coil`

**Demonstrates:** `?.` optional field access on `Option` plus `??` fallback.

| | |
|---|---|
| **Run** | `cargo run -- examples/optional_chain.coil` |
| **Output** | `42,0` |

---

### `examples/tree.coil`

**Demonstrates:** Recursive enum (`Tree::Node` contains child `Tree` values); isorecursive typing and recursive `match`.

```coil
enum Tree {
    Leaf,
    Node(int, Tree, Tree),
}

fn sum_tree(Tree t) -> int {
    return match t {
        Tree::Leaf => 0,
        Tree::Node(v, left, right) => v + sum_tree(left) + sum_tree(right),
    };
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/tree.coil` |
| **Output** | `6` |

---

### `examples/record.coil`

**Demonstrates:** Record-shaped enum variant (`Point { x: int, y: int }`), pattern destructuring in `match`, and field access (`p.x`, `p.y`).

| | |
|---|---|
| **Run** | `cargo run -- examples/record.coil` |
| **Output** | `169512` (distance² = 169, then x = 5, y = 12) |

---

### `examples/derive_show_eq.coil`

**Demonstrates:** `#[derive(Show, Eq, Ord)]` on enums and classes — structural `%v`, `==`, and `<` without hand-written `impl`s.

```coil
#[derive(Show, Eq, Ord)]
enum Color {
    Red,
    Blue,
}

#[derive(Show, Eq)]
enum Point {
    Origin,
    Point { x: int, y: int },
}

#[derive(Show, Eq)]
class Cell {
    value: int,
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/derive_show_eq.coil` |
| **Output** | `Color::Red,true,false,true,Point::Point { x: 5, y: 12 },true,false,Cell { value: 42 },true,false` |

---

### `examples/typeof_len.coil`

**Demonstrates:** compile-time `typeof` (FQN string constants), static `len`
folding for string/array/tuple/dict literals, and the default `Show` for a
class (prints the type name).

| | |
|---|---|
| **Run** | `cargo run -- examples/typeof_len.coil` |
| **Output** | `int` / `string` / `(int, int)` / `3` / `3` / `2` / `2` / `Point` / `Point` (one per line) |

---

### `examples/length_trait.coil`

**Demonstrates:** `len` via the `Length` typeclass — builtin string length,
a custom `impl Length for Pair`, and a generic `T: Length` helper.

| | |
|---|---|
| **Run** | `cargo run -- examples/length_trait.coil` |
| **Output** | `3` / `2` / `42` (one per line) |

---

### `examples/derive_hash.coil`

**Demonstrates:** `#[derive(Hash)]` with recursive `field.hash()` — primitives (`int`, `string`, …) and nested Hash types.

```coil
#[derive(Hash)]
enum Inner {
    A(int),
}

#[derive(Hash)]
enum Outer {
    Wrap(Inner),
    Label { name: string, flag: bool },
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/derive_hash.coil` |
| **Output** | `true,true,true,true` |

---


### `examples/spread.coil`

**Demonstrates:** Call-site spread for tuples and arrays.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn pair_sum(int a, int b) -> int { return a + b; }
fn triple_sum(int a, int b, int c) -> int { return a + b + c; }

fn main() {
    write_all(stdout(), to_bytes(format("%i", pair_sum(...(1, 2)))));
    write_all(stdout(), to_bytes(format("%i", triple_sum(...[10, 20, 30]))));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/spread.coil` |
| **Output** | `360` |

---

### `examples/attr_decorator.coil`

**Demonstrates:** User-defined `attr` decorators with argument forwarding and stacked wrappers.

| | |
|---|---|
| **Run** | `cargo run -- examples/attr_decorator.coil` |
| **Output** | `enterdo_thinghi42` |

---

### `examples/attr_class.coil`

**Demonstrates:** Class-level `#[attr(...)]` wrapping `new Point(...)` construction.

| | |
|---|---|
| **Run** | `cargo run -- examples/attr_class.coil` |
| **Output** | `Point ctor512` |

---

### `examples/mixed.coil`

**Demonstrates:** One enum mixing **unit**, **tuple**, and **record** variant shapes; `match` arms bind payload values per shape.

```coil
enum Shape {
    Empty,
    CircleR(int),
    Rect { width: int, height: int },
    Tri { a: int, b: int, c: int },
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/mixed.coil` |
| **Output** | the areas `0`, `25`, `12`, `2`, one per line |

---

### `examples/nested_records.coil`

**Demonstrates:** Nested record patterns in `match` (`Wrap::W { inner: Inner::I { v }, name } => v`).

| | |
|---|---|
| **Run** | `cargo run -- examples/nested_records.coil` |
| **Output** | `99` |

---

### `examples/chained.coil`

**Demonstrates:** Chained field access across nested record enums (`o.x.v` where `x` is itself a record type).

```coil
enum Outer {
    Outer { x: Inner, y: int },
}

fn read_x_v(Outer o) -> int {
    return o.x.v;
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/chained.coil` |
| **Output** | `427` (42 and 7 concatenated in one stdout stream) |

---

## IO streams

Virtual `io` module (`use io::{open, stdout, …};`), `byte` / `Vec<byte>` buffers, files, EOF, text helpers, UDP.

### `examples/io_bytes.coil`

**Demonstrates:** `byte` annotation, `Vec<byte>` via `Vec::from`, `len` / index.

| | |
|---|---|
| **Run** | `cargo run -- examples/io_bytes.coil` |
| **Output** | `25532` |

### `examples/io_file.coil`

**Demonstrates:** `open` / `write_all` / `read_to_end` / `close` round-trip; `Result` + `?`.

| | |
|---|---|
| **Run** | `cargo run -- --allow-read --allow-write examples/io_file.coil` |
| **Output** | `2` |

### `examples/io_eof.coil`

**Demonstrates:** Non-blocking `read` on an empty file returns `Ok(None)` (EOF).

| | |
|---|---|
| **Run** | `cargo run -- --allow-read --allow-write examples/io_eof.coil` |
| **Output** | `eof` |

### `examples/io_text.coil`

**Demonstrates:** `from_bytes` (`Vec<byte>` → UTF-8 `string`) and `to_bytes` (`string` → `Vec<byte>`).

| | |
|---|---|
| **Run** | `cargo run -- examples/io_text.coil` |
| **Output** | `hello2` |

### `examples/io_udp.coil`

**Demonstrates:** `use io::net::udp::{bind, local_port, send_to, recv_from_wait};` — localhost echo.

| | |
|---|---|
| **Run** | `cargo run -- --allow-net examples/io_udp.coil` |
| **Output** | `2` |

### `examples/io_nested_host.coil`

**Demonstrates:** Nested IO HostInvoke — `read_to_end(open(...)?)` must leave the
stream (not the outer native id) on the stack for `MakeTuple`.

| | |
|---|---|
| **Run** | `cargo run -- --allow-read --allow-write examples/io_nested_host.coil` |
| **Output** | `3` |

### `examples/io_nested_write.coil`

**Demonstrates:** Nested IO HostInvoke with outer arity > 1 —
`write_all(open(...)?, buf)` must pack the stream (not the outer native id)
into `MakeTuple`.

| | |
|---|---|
| **Run** | `cargo run -- --allow-read --allow-write examples/io_nested_write.coil` |
| **Output** | `2` |

See [Tutorial 10 — IO streams](/docs/manual/tutorial/10-files-and-io).

---

## Collections and type aliases

Tuples, arrays, dicts, and `type` aliases.

### `examples/array_grow.coil`

**Demonstrates:** Growable `Vec` via `Vec::from` + `push`, reading length with `len`, and indexing appended elements. (`arr[] =` append is removed.)

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn main() {
    let a = Vec::from([1, 2]);
    a.push(3);
    a.push(4);
    write_all(stdout(), to_bytes(format("%i", a.len())));
    write_all(stdout(), to_bytes(format("%i", a[0])));
    write_all(stdout(), to_bytes(format("%i", a[3])));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/array_grow.coil` |
| **Output** | `414` |

---

### `examples/vec.coil`

**Demonstrates:** Fixed `[T; N]` stack locals plus `Vec` methods (`push`, `pop`, `len`, index assign).

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};

fn main() {
    let fixed = [10, 20, 30];
    write_all(stdout(), to_bytes(format("%i,", fixed[1])));

    let v: Vec<int> = Vec::new();
    v.push(fixed[0]);
    v.push(fixed[1]);
    v.push(fixed[2]);
    write_all(stdout(), to_bytes(format("%i,", v.len())));

    v[1] = 99;
    write_all(stdout(), to_bytes(format("%i,", v[1])));

    let _ = v.pop();
    write_all(stdout(), to_bytes(format("%i", v.len())));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/vec.coil` |
| **Output** | `20,3,99,2` |

---

### `examples/dict.coil`

**Demonstrates:** Anonymous structurally typed records (`{ foo: 42, bar: 100 }`) and field read via `d.foo`.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn main() {
    let d = { foo: 42, bar: 100 };
    write_all(stdout(), to_bytes(format("%i", d.foo)));
    write_all(stdout(), to_bytes(format("%i", d.bar)));
    write_all(stdout(), to_bytes(format("%i", d.foo)));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/dict.coil` |
| **Output** | `4210042` |

---

### `examples/aliases.coil`

**Demonstrates:** `type Point = (int, int);`, tuple indexing `p[0]`, and alias substitution at typecheck time (zero runtime cost).

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
type Point = (int, int);

fn main() {
    let p: Point = (3, 4);
    write_all(stdout(), to_bytes(format("%i", p[0])));
    write_all(stdout(), to_bytes(format("%i", p[1])));
    write_all(stdout(), to_bytes(format("%i", distance(p))));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/aliases.coil` |
| **Output** | `347` |

---

### `examples/nested_aggregates.coil`

**Demonstrates:** Nested aggregates — `type Row = (string, int); type Table = Vec<Row>;` with `for` and let-destructure.

```coil
type Row = (string, int);
type Table = Vec<Row>;

fn main() {
    let people: Table = Vec::from([("alice", 30), ("bob", 25)]);
    // …
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/nested_aggregates.coil` |
| **Output** | `alice:30bob:25total:55` |

---

### `examples/vec_tuple.coil`

**Demonstrates:** Element-wise tuple zip, scalar broadcast, and unary negate.

| | |
|---|---|
| **Run** | `cargo run -- examples/vec_tuple.coil` |
| **Output** | `22,23,24,-1-2` |

---

### `examples/vec_array.coil`

**Demonstrates:** Static array zip, scalar broadcast, and element-wise `**`.

| | |
|---|---|
| **Run** | `cargo run -- examples/vec_array.coil` |
| **Output** | `46,45,18` |

---

### `examples/vec_generic.coil`

**Demonstrates:** Tier B `scale<T: Num>((T,T), T)` and Tier C shape-generic
`add<T: Num>(T, T)` monomorphized over `(int, int)`.

| | |
|---|---|
| **Run** | `cargo run -- examples/vec_generic.coil` |
| **Output** | `24,55` |

---

### `examples/vec_dot.coil`

**Demonstrates:** Named helpers `dot` and `cross` on length-3 tuples.

| | |
|---|---|
| **Run** | `cargo run -- examples/vec_dot.coil` |
| **Output** | `32,001` |

---

### `examples/vec_matmul.coil`

**Demonstrates:** Named helper `matmul` on nested `[int; 2]` matrices.

| | |
|---|---|
| **Run** | `cargo run -- examples/vec_matmul.coil` |
| **Output** | `19,22,43,50` |

---

### `examples/matrix_mul.coil`

**Demonstrates:** Nominal `Matrix` — `*` is matmul (Mul), `+` is element-wise.

| | |
|---|---|
| **Run** | `cargo run -- examples/matrix_mul.coil` |
| **Output** | `19,22,43,502` |

---

### `examples/generic_alias.coil`

**Demonstrates:** Parametric type aliases — `type Pair<T> = (T, T);` expands `Pair<int>` to `(int, int)` at typecheck time.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
type Pair<T> = (T, T);

fn main() {
    let p: Pair<int> = (3, 4);
    write_all(stdout(), to_bytes(format("%i", p[0] + p[1])));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/generic_alias.coil` |
| **Output** | `7` |

---

### `examples/generic_enum.coil`

**Demonstrates:** User generic enums — `enum Box<T> { Empty, Full(T) }` with construct/match typed as `Box<int>` (same machinery as builtin `Option` / `Result`).

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
enum Box<T> {
    Empty,
    Full(T),
}

fn unwrap(Box<int> b) -> int {
    return match b {
        Box::Empty => 0,
        Box::Full(v) => v,
    };
}

fn main() {
    write_all(stdout(), to_bytes(format("%i", unwrap(Box::Full(7)))));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/generic_enum.coil` |
| **Output** | `7` |

---

### `examples/generics.coil`

**Demonstrates:** Generic functions with a `Num` trait bound — one `add<T: Num>` body used at `int` and `float` call sites.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn add<T: Num>(T a, T b) -> T {
    return a + b;
}

fn main() {
    write_all(stdout(), to_bytes(format("%i", add(3, 4))));
    write_all(stdout(), to_bytes(format("%i", add(10, 32))));
    write_all(stdout(), to_bytes(format("%f", add(1.5, 2.5))));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/generics.coil` |
| **Output** | `7424.0427` |

---

### `examples/generic_print.coil`

**Demonstrates:** Format `%v` via the `Show` trait — builtin instances for
primitives, a user `impl Show for Point`, and `string::format("%v", ...)`.

| | |
|---|---|
| **Run** | `cargo run -- examples/generic_print.coil` |
| **Output** | `42hi1.5true(3,4)99` |

---

### `examples/existential_show.coil`

**Demonstrates:** Bare-class existential `Show` in a parameter type. The call
`print_any(42)` packs the concrete value with its `Show<int>` dictionary, and
`show(x)` dispatches through that stored dictionary.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn print_any(Show x) {
    write_all(stdout(), to_bytes(format("%s", show(x))));
}

fn main() {
    print_any(42);
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/existential_show.coil` |
| **Output** | `42` |

---

### `examples/hkt_container.coil`

**Demonstrates:** Unary higher-kinded traits (`Container<F: * -> *>`) with
an `impl Container<Option>`, a polymorphic instance method `first<A>`, and a
generic caller `get<F: Container, A>(F<A>) -> A`.

| | |
|---|---|
| **Run** | `cargo run -- examples/hkt_container.coil` |
| **Output** | `42` |

---

### `examples/hkt_bifunctor.coil`

**Demonstrates:** Binary higher-kinded traits
(`Bifunctor<F: * -> * -> *>`) with an `impl Bifunctor<Result>` and a
generic caller whose parameter has both an explicit kind and bound:
`F: * -> * -> *, Bifunctor`.

| | |
|---|---|
| **Run** | `cargo run -- examples/hkt_bifunctor.coil` |
| **Output** | `42` |

---

### `examples/multiparam.coil`

**Demonstrates:** Multi-parameter trait `Convert<A, B>` with a `where`
clause on a generic function (`fn apply_cast<A, B>(A x) -> B where Convert<A, B>`).

| | |
|---|---|
| **Run** | `cargo run -- examples/multiparam.coil` |
| **Output** | `42` |

---

### `examples/into.coil`

**Demonstrates:** Prelude conversion trait `Into` —
`impl Into<Fahrenheit> for Celsius` and `let f: Fahrenheit = c.into();`.

| | |
|---|---|
| **Run** | `cargo run -- examples/into.coil` |
| **Output** | `32` |

---

### `examples/typeclass_dict.coil`

**Demonstrates:** User trait dictionaries, method sugar, and dictionary
forwarding through a nested generic call.

| | |
|---|---|
| **Run** | `cargo run -- examples/typeclass_dict.coil` |
| **Output** | `4242` |

---

### `examples/typeclass_default.coil`

**Demonstrates:** An omitted default method calling a sibling implementation
through the same dictionary.

| | |
|---|---|
| **Run** | `cargo run -- examples/typeclass_default.coil` |
| **Output** | `42` |

---

### `examples/superclass_ord.coil`

**Demonstrates:** Typeclass superclass / implied bounds —
`trait Ordered<T: Equal>` stores `Equal` as a superclass; `fn cmp_eq<T: Ordered>`
can call `eq_val` without writing `T: Ordered + Equal`. Flattened dict layout
is subclass methods then superclass methods.

| | |
|---|---|
| **Run** | `cargo run -- examples/superclass_ord.coil` |
| **Output** | `truetruefalse` |

---

### `examples/constraint_kind.coil`

**Demonstrates:** Constraint-kind parameters
(`fn choose<c: * -> Constraint, T: c>(...)`). The body first selects
`c = Ordered` through `lt_val`, then calls `eq_val` through Ordered's
`Equal` superclass dictionary slot.

| | |
|---|---|
| **Run** | `cargo run -- examples/constraint_kind.coil` |
| **Output** | `42` |

---

### `examples/assoc_type.coil`

**Demonstrates:** Associated types — `type Elem;` in a trait,
`type Elem = int;` in the impl, bare `Elem` as a method return type,
open `C::Elem` under `C: Collect`, and a ground `take_head(Option::Some(42))`
call that pins the projection to `int`.

| | |
|---|---|
| **Run** | `cargo run -- examples/assoc_type.coil` |
| **Output** | `42` |

---

### `examples/gat_pointer.coil`

**Demonstrates:** Generic associated types — `type Ref<T>;` in a
trait, `type Ref<T> = T;` in the impl, and an applied projection
`P::Ref<A>` pinned by the selected `Pointer<Option>` instance.

```coil
trait Pointer<P: * -> *> {
    type Ref<T>;
    fn deref<T>(P<T> ptr) -> Ref<T>;
}

impl Pointer for Option {
    type Ref<T> = T;
    fn deref<T>(Option<T> ptr) -> T { /* ... */ }
}

fn get<P: * -> *, Pointer, A>(P<A> ptr) -> P::Ref<A> {
    return deref(ptr);
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/gat_pointer.coil` |
| **Output** | `42` |

---

### `examples/polyfn.coil`

**Demonstrates:** First-class generic functions, multi-instantiation,
constrained apply-site dictionaries, rank-n `forall` parameters, and
captured dictionary evidence that survives returning a PolyFn
(`app_dict_arity=0` at the use site).

| | |
|---|---|
| **Run** | `cargo run -- examples/polyfn.coil` |
| **Output** | `424.0424242` |

---

## Modules & namespaces

Multi-file projects using `use` and `mod`. Support files live under `examples/src/`.

### `examples/modules.coil`

**Demonstrates:** `use foo::sadge;` importing a function from another file; hex formatting.

```coil
use foo::sadge;
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};

fn main() {
    sadge();
    write_all(stdout(), to_bytes(format("%x\n", 69)));
}
```

| | |
|---|---|
| **Companion** | `examples/src/foo/sadge.coil` — defines `fn sadge()` printing `420` as hex |
| **Expected output** | `1a4` (newline) then `45` — i.e. `1a4\n45` |

**Setup:** `cargo run -- --root ../coil-stdlib/src --root examples/src examples/modules.coil` resolves the import (the workspace `coil.toml` lists the same roots for spool).

---

### `examples/modules_brace.coil`

**Demonstrates:** Brace-group imports from a module file (`math.coil`).

```coil
use math::{add, mul};
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};

fn main() {
    write_all(stdout(), to_bytes(format("%i", add(5, 7))));
    write_all(stdout(), to_bytes(format("%i", mul(6, 7))));
}
```

| | |
|---|---|
| **Companion** | `examples/src/math.coil` |
| **Expected output** | `1242` |

---

### `examples/src/foo/sadge.coil`

**Demonstrates:** Module support file; namespace `foo::sadge`, function FQN `foo::sadge::sadge`.

| | |
|---|---|
| **Run alone** | `cargo run -- examples/src/foo/sadge.coil` (if given its own `main` — this file only defines `sadge`, not `main`) |
| **Role** | Imported by `modules.coil` |

---

### `examples/src/foo.coil`

**Demonstrates:** Alternate / legacy module layout (single `foo.coil` with a top-level `sadge`).

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
fn sadge() {
    write_all(stdout(), to_bytes(format("%x\n", 420)));
}
```

| | |
|---|---|
| **Note** | Used in namespace tests; not the file resolved by `use foo::sadge` (that resolves to `src/foo/sadge.coil`) |

---

## FFI (foreign function interface)

Calling C from coil. Requires **libffi**.

### `examples/ffi_extern.coil`

**Demonstrates:** Compile-time `extern` block — no manual `dload`/`declare` in source. The compiler emits library load and symbol registration bytecode (unwraps `Result`, panics on failure).

```coil
use io::stdout;
use io::sync::write_all;
use string::{format, to_bytes};

extern "sum" {
    fn sum(int a, int b) -> int;
}

fn main() {
    write_all(stdout(), to_bytes(format("%i", sum(40, 2))));
}
```

| | |
|---|---|
| **Run** | `cargo run -- --root ../coil-stdlib/src --allow-dload sum --dload-trusted sum --ffi-search-path examples examples/ffi_extern.coil` |
| **Output** | `42` |
| **Requires** | `examples/libsum.so` built from `examples/sum.c` (see `ffi_sum.coil`); the libc aliases (`extern "c"`) are always denied |

---

### `examples/ffi_varargs.coil`

**Demonstrates:** C-style varargs — bare `...` on an `extern` declaration. Not language rest `T... xs`.

```coil
extern "sum" {
    fn sum_n(int n, ...) -> int;
}

fn main() {
    write_all(stdout(), to_bytes(format("%i", sum_n(3, 10, 20, 30))));
}
```

| | |
|---|---|
| **Run** | `cargo run -- --root ../coil-stdlib/src --allow-dload sum --dload-trusted sum --ffi-search-path examples examples/ffi_varargs.coil` |
| **Output** | `60` |
| **Requires** | `examples/libsum.so` (`sum_n` in `examples/sum.c`) |

---

### `examples/ffi_sum.coil`

**Demonstrates:** Userland FFI — `dload` / `declare` / `invoke` each return `Result<_, Error>`; unwrap with `match` (or `?`). Check `e.kind` for typed recovery.

```coil
use ffi::{declare, dload, invoke};
use ffi::types::{Int};
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};

fn main() {
    let lib = match dload("sum") {
        Result::Ok(h) => h,
        Result::Err(e) => panic e.message,
    };
    let sum_id = match declare(lib, "sum", (Int, Int), Int) {
        Result::Ok(id) => id,
        Result::Err(e) => panic e.message,
    };
    let n = match invoke(lib, sum_id, (40, 2)) {
        Result::Ok(v) => v,
        Result::Err(e) => panic e.message,
    };
    write_all(stdout(), to_bytes(format("%i", n)));
}
```

| | |
|---|---|
| **Run** | Build the shared library first, then `cargo run -- --allow-dload sum --dload-trusted sum --ffi-search-path examples examples/ffi_sum.coil` |
| **Build helper** | Linux: `cc -shared -fPIC -o examples/libsum.so examples/sum.c`; macOS: `-dynamiclib` → `libsum.dylib`; Windows: `clang -shared` → `sum.dll` |
| **Output** | `42` |
| **Note** | Every stem needs `--allow-dload STEM` plus `--dload-pin STEM=SHA256` or `--dload-trusted STEM` (spool passes them from `[ffi] allow`, the `coil.lock` pins and `trusted` deps). `--ffi-search-path` locates `libsum.so` / `libsum.dylib` / `sum.dll`; an absolute path is not a bypass. |

---

### `examples/sum.c`

**Demonstrates:** C companion source for `ffi_sum.coil`, `ffi_struct_ret.coil`, and `ffi_callback_ret.coil` (not a coil file).

```c
int sum(int a, int b) { return a + b; }
/* also: make_point, get_doubler, … */
```

| | |
|---|---|
| **Compile (Linux)** | `cc -shared -fPIC -o examples/libsum.so examples/sum.c` |
| **Compile (macOS)** | `cc -dynamiclib -o examples/libsum.dylib examples/sum.c` |
| **Compile (Windows)** | `clang -shared -o examples/sum.dll examples/sum.c` |

---

### `examples/ffi_struct_ret.coil`

**Demonstrates:** `extern struct` return from C unpacked into a record (`p.x` / `p.y`).

| | |
|---|---|
| **Run** | Build the platform `libsum` artifact, then `cargo run -- --allow-dload sum --dload-trusted sum --ffi-search-path examples examples/ffi_struct_ret.coil` |
| **Output** | `34` |

---

### `examples/ffi_callback_ret.coil`

**Demonstrates:** Opaque function-pointer return (`Ptr` from `ffi::types`); prints `1` if non-null.

| | |
|---|---|
| **Run** | Build the platform `libsum` artifact, then `cargo run -- --allow-dload sum --dload-trusted sum --ffi-search-path examples examples/ffi_callback_ret.coil` |
| **Output** | `1` |

---

### `examples/ffi_callback.coil` / `examples/ffi_array.coil`

**Demonstrates:** Callback trampolines and pointer/array FFI shapes (see source). Require the platform `libsum` shared library / libffi.

---

## Classes

### `examples/classes.coil`

**Demonstrates:** Positional ctor args, field read/write, and method calls (`self`).

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
class Point {
    pub x: int,
    pub y: int,
}

impl Point {
    pub fn sum() -> int {
        return self.x + self.y;
    }

    pub fn set_x(int n) {
        self.x = n;
    }
}

fn main() {
    write_all(stdout(), to_bytes(format("%i", (2 * 2 + 3))));
    let p = new Point(1, 3);
    write_all(stdout(), to_bytes(format("%i", p.sum())));
    p.set_x(5);
    write_all(stdout(), to_bytes(format("%i", p.x)));
    write_all(stdout(), to_bytes(format("%i", p.sum())));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/classes.coil` |
| **Output** | `7458` |

### `examples/static_ctor.coil`

**Demonstrates:** `static fn` constructors via `Class::new(...)` alongside unchanged positional `new Class(...)`. Bodies build instances with `new ClassName(...)`.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
class Point {
    pub x: int,
    pub y: int,
}

impl Point {
    pub static fn new(int x, int y) -> Point {
        return new Point(x, y);
    }

    pub fn sum() -> int {
        return self.x + self.y;
    }
}

fn main() {
    let p = Point::new(40, 2);
    write_all(stdout(), to_bytes(format("%i,", p.sum())));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/static_ctor.coil` |
| **Output** | `42,1,1` |

### `examples/match_block_self.coil`

**Demonstrates:** Brace-block `match` arm bodies that call `self.method()` (expression blocks, not dicts).

```coil
return match m {
    Mode::Zero => { self.get() },
    Mode::Other(n) => {
        self.get();
        n
    },
};
```

| | |
|---|---|
| **Run** | `cargo run -- examples/match_block_self.coil` |
| **Output** | `5` |

### `examples/generic_class.coil`

**Demonstrates:** Generic class declaration (`class Cell<T>`), inherent
`impl Cell<T>`, constructor type inference (`new Cell(42)` → `Cell<int>`),
and a method that returns the type parameter.

```coil
use io::{stdout};
use io::sync::{write_all};
use string::{format, to_bytes};
class Cell<T> {
    pub value: T
}

impl Cell<T> {
    pub fn get() -> T {
        return self.value;
    }
}

fn main() {
    let c = new Cell(42);
    write_all(stdout(), to_bytes(format("%i", c.get())));
}
```

| | |
|---|---|
| **Run** | `cargo run -- examples/generic_class.coil` |
| **Output** | `42` |

---

## Coroutines

Stackful coroutines via `gen fn`, `yield`, and `resume`. Phase 2 adds send/receive and `yield from`. See [Tutorial: Coroutines](/docs/manual/tutorial/12-generators).

### `examples/coro.coil`

**Demonstrates:** Basic suspend/resume with prints between yields.

| | |
|---|---|
| **Run** | `cargo run -- examples/coro.coil` |
| **Output** | Suspended/resumed trace (see source) |

---

### `examples/operators.coil`

**Demonstrates:** Compound assignment, prefix/postfix increment, array and dict mutation, power, logical/bitwise operators.

| | |
|---|---|
| **Run** | `cargo run -- examples/operators.coil` |
| **Output** | `801125428falsetrue3` |

---

### `examples/coro_gen.coil`

**Demonstrates:** Generator-style counter (`yield 0`, `yield 1`, `yield 2`).

| | |
|---|---|
| **Run** | `cargo run -- examples/coro_gen.coil` |
| **Output** | `012` |

---

### `examples/coro_send.coil`

**Demonstrates:** Binding yield + `resume h with v` (ping-pong send).

| | |
|---|---|
| **Run** | `cargo run -- examples/coro_send.coil` |
| **Output** | `hello` |

---

### `examples/coro_yield_from.coil`

**Demonstrates:** `yield from` delegation.

| | |
|---|---|
| **Run** | `cargo run -- examples/coro_yield_from.coil` |
| **Output** | `012` |

---

### `examples/coro_interleave.coil`

**Demonstrates:** Two independent handles from the same parameterized `gen fn`, resumed in arbitrary order, with `resume` used inline inside `string::format`.

| | |
|---|---|
| **Run** | `cargo run -- examples/coro_interleave.coil` |
| **Output** | `10,100,101,11,12,102` |

---

### `examples/coro_done.coil`

**Demonstrates:** `done(h)` builtin — `false` while suspended, `true` after completion.

| | |
|---|---|
| **Run** | `cargo run -- examples/coro_done.coil` |
| **Output** | `falsefalsetrue` |

---

### `examples/block_on_io.coil`

**Demonstrates:** `task::block_on(coro)` (`use task::block_on;`) — discards yields, returns completion value.

| | |
|---|---|
| **Run** | `cargo run -- examples/block_on_io.coil` |
| **Output** | `2` |

---

### `examples/io_wait_ready.coil`

**Demonstrates:** legacy manual multiplexing with `wait_ready` (deprecated, `E0129`). New code uses tasks: see `examples/task_files.coil`.

| | |
|---|---|
| **Run** | `cargo run -- --allow-read examples/io_wait_ready.coil` |
| **Output** | `ok` |

---

### `examples/task_files.coil`

**Demonstrates:** `task::scope` reading two files as concurrent tasks; each IO wait suspends only its task. See [Tutorial 12 — Tasks](/docs/manual/tutorial/13-tasks).

| | |
|---|---|
| **Run** | `cargo run -- --allow-read --allow-write examples/task_files.coil` |
| **Output** | `ok` |

---

## OS threads

Native threads via `use thread::{spawn, join, …};` — each worker runs on its own VM. See [Tutorial 11 — OS threads](/docs/manual/tutorial/14-threads).

### `examples/thread_join.coil`

**Demonstrates:** `spawn` a nullary function and `join` for its return value.

| | |
|---|---|
| **Run** | `cargo run -- examples/thread_join.coil` |
| **Output** | `42` |

---

### `examples/thread_channel.coil`

**Demonstrates:** `channel`, `spawn` with one argument, `send` / `recv`.

| | |
|---|---|
| **Run** | `cargo run -- examples/thread_channel.coil` |
| **Output** | `hello` |

---

### `examples/thread_reply.coil`

**Demonstrates:** request/reply with two channels; spawn a worker with a `(Receiver, Sender)` tuple.

| | |
|---|---|
| **Run** | `cargo run -- examples/thread_reply.coil` |
| **Output** | `ping` |

---

### `examples/thread_mutex.coil`

**Demonstrates:** Shared `mutex` and `with_lock` from two threads.

| | |
|---|---|
| **Run** | `cargo run -- examples/thread_mutex.coil` |
| **Output** | `2` |

---

### `examples/gc_root_weak.coil`

**Demonstrates:** Virtual `gc` module — `root` / `get` / `weak` / `upgrade` / `unroot`.

| | |
|---|---|
| **Run** | `cargo run --bin coil -- examples/gc_root_weak.coil` |
| **Output** | `pinned` then `pinned` on the next line |

---

### `examples/gc_collect.coil`

**Demonstrates:** `unroot` + `collect` clears a `Weak` (upgrade → `None`).

| | |
|---|---|
| **Run** | `cargo run --bin coil -- examples/gc_collect.coil` |
| **Output** | `none` |

---

### `examples/finalizer.coil`

**Demonstrates:** GC-time `fn drop()` on a class (fake handle close).

| | |
|---|---|
| **Run** | `cargo run --bin coil -- examples/finalizer.coil` |
| **Output** | `closed` |

---

### `examples/for_in_coro.coil`

**Demonstrates:** `for x in` over a coroutine — yields enter the body; completion/`return` does not; `break` mid-loop.

| | |
|---|---|
| **Run** | `cargo run -- examples/for_in_coro.coil` |
| **Output** | `01210` |

---

### `examples/range.coil`

**Demonstrates:** lazy `Range<T: Ord>` (`0..n`, `0..=n`, float bounds),
first-class range values, empty decreasing ranges. Numeric ranges collect
with `.to_vec()` (`tests/positive/range_to_vec.coil`).

| | |
|---|---|
| **Run** | `cargo run -- examples/range.coil` |
| **Output** | `012340123561.02.03.0` |

---

### `examples/for_in_array.coil`

**Demonstrates:** `for x in` over an array (`Item` = element type).

| | |
|---|---|
| **Run** | `cargo run -- examples/for_in_array.coil` |
| **Output** | `123` |

---

### `examples/for_in_tuple.coil`

**Demonstrates:** homogeneous tuple for-in (`Item` = element type).

| | |
|---|---|
| **Run** | `cargo run -- examples/for_in_tuple.coil` |
| **Output** | `123` |

---

### `examples/for_in_custom.coil`

**Demonstrates:** user `impl IntoIterator` + `impl Iterator` on a class.

| | |
|---|---|
| **Run** | `cargo run -- examples/for_in_custom.coil` |
| **Output** | `012` |

---

## Showcase projects

Larger multi-file apps live under [`examples/projects/`](https://github.com/ardax-corp/coil-lang/blob/main/examples/projects/README.md).
Each project has its own `coil.toml`, co-located `tests/`, and `NOTES.md`.

| Project | Focus | How to run |
|---------|--------|------------|
| `01-todo` | Classes, arrays, modules | `./examples/projects/01-todo/demo.sh` |
| `02-adventure` | Interactive stdin REPL + save/load | `./examples/projects/02-adventure/demo.sh` (or `--ci`) |
| `03-echo` | TCP + coroutines + protocol module | `./examples/projects/03-echo/demo.sh` |


Convenience from repo root:

```bash
./examples/projects/run-demos.sh    # all demos (adventure uses transcript.txt)
./examples/projects/run-tests.sh    # co-located tests for all three
```

### Playing `02-adventure`

Reads all of stdin (`read_to_end`) then splits lines — on a TTY end with **Ctrl+D**,
or pipe a transcript. Modules: `world` / `commands` / `save` + entry `main`.

```bash
./examples/projects/02-adventure/demo.sh
```

Commands: `look`, `go north|south|east|west`, `take` / `take key`,
`inventory`, `save`, `load`, `help`, `quit`.

CI / non-interactive (always under `timeout`; canned input in `transcript.txt`):

```bash
./examples/projects/02-adventure/demo.sh --ci
```

### Per-project tests

```bash
./examples/projects/run-tests.sh
```

Or `cd` into a project and run `coil test` (harness is CWD-`./tests` only).
See [`examples/projects/README.md`](https://github.com/ardax-corp/coil-lang/blob/main/examples/projects/README.md).

---

## Quick reference table

| File | Category | Output (if known) |
|------|----------|-------------------|
| `print_literal.coil` | Basics | `hello` |
| `format_literal.coil` | Basics | `42` |
| `string_fmt.coil` | Basics | `hello world42-x` |
| `show_tuple.coil` | Basics | `(1, 2){ a: 3, b: 4 }` |
| `let_test.coil` | Basics | `51020` |
| `defer.coil` | Basics | `enterleave,021,okd7,d99,55` |
| `named_args.coil` | Basics | `Ada36Grace40` |
| `variadic.coil` | Basics | `60Hi!?` |
| `const.coil` | Basics | `42hi` |
| `loop_break.coil` | Basics | `18` |
| `fizbuz.coil` | Basics | `FIZBUZFIZFIZBUZFIZFIZBUZ` |
| `fib.coil` | Basics | `2178309` |
| `perf/mandelbrot.coil` | Perf | `625885` |
| `perf/tak.coil` | Perf | `7` |
| `perf/fib.coil` | Perf | `2178309` |
| `perf/nsieve.coil` | Perf | `1900` |
| `perf/binary_trees.coil` | Perf | `135854` |
| `perf/bool_guard.coil` | Perf | `45` |
| `inline_wrapped_call.coil` | Codegen | `13` |
| `call_test.coil` | Basics | `done` |
| `option.coil` | Enums | `42` |
| `result.coil` | Enums | `420-1` |
| `scalar_enum.coil` | Enums | `ok 200 200` |
| `tree.coil` | Enums | `6` |
| `record.coil` | Enums / records | `169512` |
| `mixed.coil` | Enums | `0\n25\n12\n2\n` |
| `nested_records.coil` | Enums | `99` |
| `chained.coil` | Enums / fields | `427` |
| `io_bytes.coil` | IO | `25532` |
| `io_file.coil` | IO | `2` |
| `io_eof.coil` | IO | `eof` |
| `io_text.coil` | IO | `hello2` |
| `io_udp.coil` | IO | `2` |
| `io_nested_host.coil` | IO | `3` |
| `io_nested_write.coil` | IO | `2` |
| `array_grow.coil` | Collections | `414` |
| `vec.coil` | Collections | `20,3,99,2` |
| `static_singleton.coil` | Statics | `121` |
| `readonly_seal.coil` | Readonly | `312` |
| `dict.coil` | Collections | `4210042` |
| `gc_root_weak.coil` | GC | `pinned\npinned` |
| `gc_collect.coil` | GC | `none` |
| `finalizer.coil` | GC | `closed` |
| `aliases.coil` | Types | `347` |
| `nested_aggregates.coil` | Aggregates | `alice:30bob:25total:55` |
| `vec_tuple.coil` | Aggregates | `22,23,24,-1-2` |
| `vec_array.coil` | Aggregates | `46,45,18` |
| `vec_generic.coil` | Aggregates | `24,55` |
| `vec_dot.coil` | Aggregates | `32,001` |
| `vec_matmul.coil` | Aggregates | `19,22,43,50` |
| `matrix_mul.coil` | Aggregates | `19,22,43,502` |
| `generic_alias.coil` | Types | `7` |
| `generic_enum.coil` | Enums / types | `7` |
| `generics.coil` | Types | `7424.0427` |
| `generic_print.coil` | Types | `42hi1.5true(3,4)99` |
| `existential_show.coil` | Types | `42` |
| `hkt_container.coil` | Types | `42` |
| `hkt_bifunctor.coil` | Types | `42` |
| `multiparam.coil` | Types | `42` |
| `into.coil` | Types | `32` |
| `typeclass_dict.coil` | Types | `4242` |
| `typeclass_default.coil` | Types | `42` |
| `superclass_ord.coil` | Types | `truetruefalse` |
| `constraint_kind.coil` | Types | `42` |
| `assoc_type.coil` | Types | `42` |
| `gat_pointer.coil` | Types | `42` |
| `polyfn.coil` | Types | `424.0424242` |
| `operators.coil` | Operators | `801125428falsetrue3` |
| `modules.coil` | Modules | `1a4\n45` |
| `modules_brace.coil` | Modules | `1242` |
| `src/foo/sadge.coil` | Modules | (support file) |
| `src/foo.coil` | Modules | (support file) |
| `src/math.coil` | Modules | (support file) |
| `ffi_extern.coil` | FFI | `42` |
| `ffi_varargs.coil` | FFI | `60` |
| `ffi_sum.coil` | FFI | `42` |
| `ffi_struct_ret.coil` | FFI | `34` |
| `ffi_callback_ret.coil` | FFI | `1` |
| `sum.c` | FFI | (C source, not `.coil`) |
| `classes.coil` | Classes | `7458` |
| `static_ctor.coil` | Classes | `42,1,1` |
| `match_block_self.coil` | Classes / Match | `5` |
| `generic_class.coil` | Classes | `42` |
| `coro.coil` | Coroutines | (see source) |
| `coro_gen.coil` | Coroutines | `012` |
| `coro_send.coil` | Coroutines | `hello` |
| `coro_yield_from.coil` | Coroutines | `012` |
| `coro_interleave.coil` | Coroutines | `10,100,101,11,12,102` |
| `coro_done.coil` | Coroutines | `falsefalsetrue` |
| `thread_join.coil` | OS threads | `42` |
| `thread_channel.coil` | OS threads | `hello` |
| `thread_reply.coil` | OS threads | `ping` |
| `thread_mutex.coil` | OS threads | `2` |
| `for_in_coro.coil` | Coroutines | `01210` |
| `for_in_array.coil` | Collections | `123` |
| `for_in_tuple.coil` | Collections | `123` |
| `for_in_dict.coil` | Collections | `12` |
| `for_in_custom.coil` | Collections / traits | `012` |
| `range.coil` | Ranges | `012340123561.02.03.0` |

## Running tests that mirror examples

The compiler crate runs many of these as golden tests:

```bash
cargo test -p compiler --test pipeline
```

This is useful to verify expected output without invoking the full CLI archive path.

---

## Arity overloads, fn values, and lambdas

### `examples/overload.coil`

**Demonstrates:** Compile-time arity overloads — same name, different arities.

| | |
|---|---|
| **Run** | `cargo run -- examples/overload.coil` |
| **Output** | `15` |

### `examples/type_overload.coil`

**Demonstrates:** Same-arity type overloads — `show(int)` / `show(float)` / `show(string)` selected by argument type.

| | |
|---|---|
| **Run** | `cargo run -- examples/type_overload.coil` |
| **Output** | `i:7f:1.5s:hi` |

### `examples/fn_value.coil`

**Demonstrates:** First-class monomorphic functions (`let f = add`) and positional partial application (`let g = add(1)`).

| | |
|---|---|
| **Run** | `cargo run -- examples/fn_value.coil` |
| **Output** | `423` |

### `examples/lambda.coil`

**Demonstrates:** Explicit-capture lambdas — `fn (int x) use (y) => x + y`.

| | |
|---|---|
| **Run** | `cargo run -- examples/lambda.coil` |
| **Output** | `42` |

### `examples/method_overload.coil`

**Demonstrates:** `impl` method arity overloads (`bump()` vs `bump(int)`).

| | |
|---|---|
| **Run** | `cargo run -- examples/method_overload.coil` |
| **Output** | `1116` |

