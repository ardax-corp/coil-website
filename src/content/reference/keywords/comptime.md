---
slug: "keywords/comptime"
title: "comptime"
description: "Computes an expression while compiling; the program gets its value."
module: "keywords"
kind: "keyword"
name: "comptime"
origin: "builtin"
auto: true
source: "https://github.com/ardax-corp/coil-lang/blob/cba8e48ffdc03a4068234e57b347406c4b478e0f/compiler/src/builtin_docs/keywords.md#L377"
order: 16
---

Computes an expression while compiling; the program gets its value.

`comptime e` binds like unary `-`: `comptime f(x) + 1` adds at run time, so
write `comptime (a + b)` for a whole expression. The expression follows the
rules of a `const`: it may call any function, but must not read or change a
`static let`, may do IO only as `--comptime-read`, `--comptime-write`,
`--comptime-env`, `--comptime-exec` and `--comptime-net` allow, and cannot
use local variables or parameters. A panic or a value with no compile-time
form (a function, a handle) is a compile error. Each `comptime` expression is computed once and shared by every use.

```coil
fn sq(int x) -> int {
    return x * x;
}

fn main() {
    let a = comptime sq(12); // 144, computed while compiling
    let b = comptime sq(2) + 1; // 5: the `+ 1` runs in the program
}
```

Inside a function, `comptime { … }` is a block computed the same way: the
value it returns takes its place. It follows the same rules, so it cannot
use the function's parameters or local variables.

```coil
fn sq(int x) -> int {
    return x * x;
}

fn main() {
    let n = comptime {
        let base = sq(3);
        return base * 4; // 36, computed while compiling
    };
}
```

At the top level, `comptime { … }` is a block that returns `Code`: the
declarations it generates replace it. It runs before the module is checked,
so it may only call code from other modules, and it gets the same IO grants.

```coil
use macro::raw;

comptime {
    return raw("fn answer() -> int {\n    return 42;\n}\n");
}

fn main() {
    let a = answer(); // 42
}
```

## See also

- [`fn`](/docs/reference/keywords/fn): Declares a function, a method, or (written in an expression) an anonymous function.
- [`let`](/docs/reference/keywords/let): Declares a mutable local variable.
- [`const`](/docs/reference/keywords/const): Declares a binding that cannot be reassigned: a local, a module constant, or a class field that is set only by new.
- [`static`](/docs/reference/keywords/static): Declares a module-level or class-level slot shared by the whole program, or a method without self.
- [`readonly`](/docs/reference/keywords/readonly): A read-only view of a value: nothing reachable through it can be changed.
- [`if`](/docs/reference/keywords/if): Runs a block when a bool condition is true.
- [`else`](/docs/reference/keywords/else): Introduces the branch of an if that runs when its condition is false (or its pattern does not match).
- [`while`](/docs/reference/keywords/while): Repeats a block while a bool condition is true.
