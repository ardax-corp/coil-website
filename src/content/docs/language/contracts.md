---
title: "Contracts: `requires`, `ensures` and invariants"
description: "Preconditions, postconditions, class and loop invariants and loop variants, checked at run time. A failed `requires` blames the caller; everything else blames the code that broke it."
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

## `old(e)`

Inside `ensures`, `old(e)` is the value `e` had when the function was
entered:

```coil
impl Account {
    pub fn deposit(int amount)
        requires amount > 0
        ensures self.balance == old(self.balance) + amount
    {
        self.balance = self.balance + amount;
    }
}
```

Each `old(e)` is evaluated once, right after the `requires` checks.

## Loop invariants and `decreases`

A `while` or `for` loop takes clauses between its header and its body:

```coil
fn sum_to(int n) -> int {
    let i = 0;
    let s = 0;
    while i < n
        invariant i <= n
        decreases n - i
    {
        s = s + i;
        i = i + 1;
    }
    return s;
}
```

- `invariant` holds every time the loop's condition is tested: before the
  first iteration, after each one (`continue` included), and, for a `for`
  loop, after the last item. A `break` leaves without a check.
- `decreases` (on `while` only) is an `int` that must stay non-negative and
  get smaller on every iteration. That proves the loop ends. A failure says
  `(went negative)` or `(did not decrease)`.

Loop clauses see the variables around the loop, not a `for` loop's own
binding.

## Class invariants

A class can state what is true of every instance:

```coil
class Account
    invariant self.balance >= 0, "no overdraft"
{
    balance: int,
}
```

The invariant is checked after `new Account(…)` and whenever a `pub` method
returns. Private methods may break it in the middle of an update, as long
as the public method that called them puts it right. Static methods and
`drop` are not checked. A failed check names the method, or
`new Account` for construction.

## Trait methods

A trait method's clauses hold for every implementation of it:

```coil
trait Area<T> {
    fn area(T x) -> int
        requires x > 0, "positive"
        ensures result >= 0
    {}
}

impl Area for int {
    pub fn area(int n) -> int ensures result < 100 {
        return n * n;
    }
}
```

Each impl checks the trait's clauses (here `area(0)` fails
`requires x > 0`, blaming the caller), plus any `ensures` of its own. An impl
may promise more with `ensures`, but it cannot add a `requires`: code
written against the trait could not know about it. Adding one is a compile
error. A failed trait clause is reported at the impl method.

## Rules

- Each clause must be a `bool`, except `decreases`, which is an `int`.
- A clause must have no effects: no IO, no writes, no mutation of shared
  state, no suspending. Calling a `pure fn` is fine. Breaking this is
  `E0413`.
- A failed clause panics. The message is
  `contract violated: <requires|ensures> <clause> ("<message>") in <function>`.
- **Blame.** A failed `requires` is the caller's fault, so the message ends
  with `called from file:line:col` at the call. Every other clause is the
  fault of the code it describes and is reported at the clause.

## Checking levels

`--contracts` picks which clauses are compiled in. It works on `coil`,
`coil test` and `coil dissect`.

| Level | Checks | Default for |
|-------|--------|-------------|
| `all` | every clause | `coil test`, `-O0`, `-O1`, `-Og` |
| `requires` | `requires` only | `-O2` and above (the default build) |
| `off` | nothing | |

`requires` stays on in optimised builds because it is a cheap check at a
library's edge that protects it from bad input. Clauses that are not compiled
in are not checked for effects either.

## Macros and tools

- The macro model's `FnDecl` has `requires` and `ensures` (each clause as
  written), and `contract_clauses()`. See [Macros](/docs/language/macros).
- Editor hover shows a function's contracts.

## Generated tests

`coil test` turns contracts into test cases. Each function or `pub static`
method in a file without `fn main` that has a `requires` or `ensures`, no type
parameters, and only parameters with an `Arbitrary` instance (the primitives,
`Vec` / `Option` of them, `#[derive(Arbitrary)]` types) gets a
`contract: name` case. The case calls it with random arguments that satisfy
its `requires` (`--contract-runs N`, default 100), and a failed `ensures` or
any other panic fails the case with the arguments that caused it. A function
with effects besides `read` and `mutate` gets no case.

## `coil verify`

`coil verify FILE` proves clauses with an SMT solver instead of testing them
(`z3` on `PATH`, or `--solver PATH`). Each clause is reported as `proved`,
`FAILED` with a counterexample, or `unknown`; the exit status is 1 when a
clause has a counterexample (or, with `--strict`, is not proved). Index
bounds into a `Vec` or string are goals too. It writes `FILE.proof`
(`--no-proof` skips it), and later builds of the unchanged file drop the
proved `ensures` and invariant checks.

What a clause says about the fields of a `readonly class` instance still
holds after a call and across a loop, since nothing can change them. The
fields of an ordinary class, including one seen through a `readonly`
parameter, may have changed in any call that could write them.

## Related

- [Effects](/docs/language/effects): why a clause must be effect-free
- [Panic](/docs/language/panic): what a failed check does
- [Test harness](/docs/language/test-harness)
