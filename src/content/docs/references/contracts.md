---
title: "Contracts: `requires` and `ensures`"
description: "Preconditions and postconditions on functions and methods, checked at run time. A failed `requires` blames the caller; a failed `ensures` blames the function."
---

# Contracts

A function can state what it expects from its caller (`requires`) and what
it promises in return (`ensures`). The clauses are checked at run time, and a
failed clause is a panic that names the clause and who broke it.

```coil
fn isqrt(int n) -> int
    requires n >= 0, "negative input"
    ensures result * result <= n
    ensures (result + 1) * (result + 1) > n
{
    let r = 0;
    while (r + 1) * (r + 1) <= n {
        r = r + 1;
    }
    return r;
}

fn main() {
    isqrt(-4);
}
```

```
$ coil sqrt.hy
panic: contract violated: requires n >= 0 ("negative input") in isqrt, called from sqrt.hy:14:4
```

## Syntax

Clauses come after the `where` clause and `uses {…}`, before the body. A
function can have any number of them, in any order:

```
fn name(params) -> T
    where …
    uses {…}
    requires <bool expression> [, "message"]
    ensures  <bool expression> [, "message"]
{ … }
```

- `requires` is checked when the function is entered, with the parameters in
  scope.
- `ensures` is checked on every return, including the early error return of
  a `?`. Inside it, `result` is the value being returned (the whole
  `Result<T, E>` for a function that returns one).
- The optional string is added to the failure message.

`requires`, `ensures` and `result` are only special in these positions, so a
variable named `result` elsewhere keeps working. A function with an
`ensures` can't have a parameter named `result`, and a `gen fn` can't have an
`ensures` yet.

Methods take clauses the same way:

```coil
class Counter {
    pub n: int,
}

impl Counter {
    pub fn bump(int by)
        requires by > 0
        ensures self.n > 0
    {
        self.n = self.n + by;
    }
}
```

`coil fmt` puts each clause on its own line, one level in, and the body
brace on the line after.

## Rules

- Each clause must be a `bool`.
- A clause must have no effects: no IO, no writes, no mutation of shared
  state, no suspending. Calling a `pure fn` is fine. Breaking this is
  `E0413`.
- A failed clause panics. The message is
  `contract violated: <requires|ensures> <clause> ("<message>") in <function>`.
- **Blame.** A failed `requires` is the caller's fault, so the message ends
  with `called from file:line:col` at the call. A failed `ensures` is the
  function's fault and is reported at the clause.

## Checking levels

`--contracts` picks which clauses are compiled in. It works on `coil`,
`coil test` and `coil dissect`.

| Level | Checks | Default for |
|-------|--------|-------------|
| `all` | `requires` and `ensures` | `coil test`, `-O0`, `-O1`, `-Og` |
| `requires` | `requires` only | `-O2` and above (the default build) |
| `off` | nothing | |

`requires` stays on in optimised builds because it is a cheap check at a
library's edge that protects it from bad input. Clauses that are not compiled
in are not checked for effects either.

## Macros and tools

- The macro model's `FnDecl` has `requires` and `ensures` (each clause as
  written), and `contract_clauses()`. See [Macros](/docs/references/macros).
- Editor hover shows a function's contracts.

## Coming next

Class and loop `invariant`, loop `decreases`, `old(e)` in `ensures`, and
contracts on trait methods are planned, followed by tests generated from
contracts and a static checker.

## Related

- [Effects](/docs/references/effects): why a clause must be effect-free
- [Panic](/docs/references/panic): what a failed check does
- [Test harness](/docs/references/test-harness)
