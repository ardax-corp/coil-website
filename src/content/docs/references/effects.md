---
title: "Effects: `pure fn` and `uses {…}`"
description: "The compiler infers every function's effects. pure fn and uses {…} declare them, and the compiler checks the declaration, naming the call chain when it fails…"
---

# Effects: `pure fn` and `uses {…}`

The compiler infers what every function does besides computing its result:
whether it reads files, writes to a stream, changes a shared object, and so
on. You never have to write effects down. When you do, the declaration is a
promise the compiler checks.

```coil
pure fn area(int w, int h) -> int {
    return w * h;
}

fn save(string path, string text) uses {write, suspend} {
    // …
}
```

`pure fn` promises no effects at all. `uses {…}` lists the effects a function
may have; `uses {}` means the same as `pure`. A function can have one or the
other, not both. The clause comes after `where`, when there is one:
`fn name<T>(…) -> R where Trait<T> uses {…} { … }`.

## The effects

| Name | Covers |
|------|--------|
| `read` | Reads a file, a stream, the clock or a `static let` |
| `write` | Writes a file or a stream |
| `net` | Opens or uses a socket |
| `env` | Reads or changes arguments, environment variables or the working directory |
| `exec` | Runs another program or ends this one |
| `ffi` | Calls foreign code |
| `thread` | Spawns, joins or locks across threads |
| `suspend` | May park until IO is ready (`io::sync` helpers do) |
| `mutate` | Writes to an object the function did not create, or to a `static let` |

A panic is not an effect. Bounds checks can panic almost anywhere, so a
`pure fn` may index an array, `assert`, or `panic`. Building and changing an
object the function made itself is not an effect either:

```coil
pure fn squares(int n) -> Vec<int> {
    let out: Vec<int> = Vec::new();
    for i in 0..n {
        out.push(i * i);
    }
    return out;
}
```

## When a declaration does not hold

The compiler reports `E0413` with the call chain that needs the missing
effect, and suggests the declaration that would hold:

```
Error: [E0413] `load` is declared `pure` but needs read: load → parse_file → open needs read
Help: declare `uses {read}`
```

## Functions passed as arguments

A declaration covers what the function does itself. A higher-order function
that calls a function it was passed keeps that call open: each caller pays
for the function it passes.

```coil
fn apply(int -> int f, int x) -> int uses {} {
    return f(x);
}
```

`apply(fn (int x) => x + 1, 1)` is pure; `apply(bump, 1)` has `bump`'s
effects.

## Trait methods

A trait method can declare its effects. Every impl must keep to the
declaration, and a call through the trait (an existential such as `Area a`)
gets the declared effects. A call through a trait method with no declaration
has unknown effects, so a `pure fn` cannot make one. The built-in traits
(`Show`, `Num` and the operator traits) declare no effects yet, so that
includes `show(x)` and arithmetic on a generic `T`.

```coil
trait Area<A> {
    pure fn area(A self) -> int;
}

pure fn total(Area a, Area b) -> int {
    return area(a) + area(b);
}
```

## Seeing inferred effects

Hovering a function in the editor (`coil lsp`) and `coil dissect --effects`
show the inferred effects in the same vocabulary, with a reason for each:

```
step: uses {read, mutate}: writes static `HITS` (mutate); reads static `HITS` (read)
sq: pure
apply: pure apart from its parameters: calls parameter `f`
```

Auto-parallelization splits loops over pure functions only; see
[Threads](/docs/manual/tutorial/11-threads#spawn-capacity).
