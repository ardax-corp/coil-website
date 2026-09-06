---
title: Faster Result chains
description: Coil VM work on Result/Option ABI, try flatten, pair returns, and loop opts — with measured benches, not just names.
date: 2026-09-06
---

# Faster Result chains

Coil programs spend a lot of time doing small things in a loop. HTTP handlers chain `Result` with `?`. GC walks short-lived objects. Nested loops recompute the same address. Recursion bounces between two helpers.

Those shapes used to allocate more than they needed. The last round of VM and compiler work was about taking the box out of the hot path, then proving the win with [hyperfine](https://github.com/sharkdp/hyperfine) before merge.

The snippets below are **illustrative**. They look like the hit benches and like HTTP `?` chains. They are not a production A/B.

Work landed in [coil-lang](https://github.com/ardax-corp/coil-lang).

## Why boxing showed up

`Option` and `Result` are ordinary enums in user code. At runtime the compiler picks a layout: a pointer niche when `None` can be a null word, a two-slot `[payload, tag]` return when the call is a known unary `Option` / `Result`, or a boxed heap enum for everything else.

`?` desugars to `match` plus early return. That is the right semantics. It was also easy to wrap and unwrap a heap object on every step of a chain.

Host calls that return `Result<(), E>` had the same tax: pack a unit success into an enum, then immediately unpack it.

If you write Coil like this, you hit that path:

```coil
fn parse_request() {
    // result mode: return v becomes Ok(v); raise becomes Err
    return 1;
}

fn check_auth(int id) {
    if id < 0 {
        raise "unauthorized";
    }
    return id;
}

fn handle() {
    let req = parse_request()?;
    let who = check_auth(req)?;
    return who;
}
```

That is the HTTP-shaped `?` chain. The bench for it is `result_try_churn`.

## Two-slot CALL / RETURN

[#293](https://github.com/ardax-corp/coil-lang/pull/293) widened direct `CALL` / `RETURN` so a known ≤2-word return — `Result<int, int>`, `Option<int>`, `Result<int, heap>` including unit-enum errors like `HttpError` — moves `[payload, tag]` on the stack instead of boxing an enum.

Pointer-niche `Option<string>` and heap-heap `Result` stay one word. Indirect calls stay boxed. `?` no longer has to allocate just to propagate.

On that work, `result_try_churn` dropped **−67%**. Host packing of unit Results (`host_result_unit`) dropped **−61%**. Option/result int churn fell hard once those returns stopped going through the heap.

[#302](https://github.com/ardax-corp/coil-lang/pull/302) reused the same two-slot encoding for arity-2 immediate products: `return (k, k + 1)` without `MakeTuple`.

```coil
fn pair(int k) -> (int, int) {
    return (k, k + 1);
}

fn sum_pairs(int n) -> int {
    let acc = 0;
    for (let i = 0; i < n; i = i + 1) {
        let (a, b) = pair(i);
        acc = acc + a + b;
    }
    return acc;
}
```

Illustrative of `pair_int_churn`: about **−72%**.

## Flatten the `?` chain

Two-slot returns still left extra packaging between `?` steps. InstCombine ([#304](https://github.com/ardax-corp/coil-lang/pull/304)) peeled the local noise: constant jumps, tag tests after an inlined pair, match diamonds that only keep the payload.

Then try/Result flatten ([#307](https://github.com/ardax-corp/coil-lang/pull/307)) shared one fail epilogue at the end of the function and forwarded a pair on `return e?` of the same kind.

`result_try_churn` after InstCombine: **×1.15**. After flatten: **×1.18**. Option/result int churn: **×1.36** from the InstCombine peeps.

Stacked on the ABI cut, that is the same handler shape getting cheaper twice: first stop boxing the return, then stop rebuilding an intermediate Result you are about to unwrap.

## Small classes, less GC

Not every hot object is a Result. Short-lived class payloads still churn the GC. Inlining small class payloads cut `gc_churn` **−7.6%** and `binary_trees` **−5%**. Smaller than the Result numbers, and they matter on tree-walk and allocate-and-drop loops.

## Opts that looked like washes

A few passes sat in the compiler and did not move the flagship benches. The bytecode did not change. They looked like dead weight until we measured the shape they actually rewrite.

LICM plus integer strength reduction ([#315](https://github.com/ardax-corp/coil-lang/pull/315), [`e207ca3b`](https://github.com/ardax-corp/coil-lang/commit/e207ca3b3a74764c595f067cd0332773d5377e7b)) hoists invariant chains out of nested loops and turns a proven `i * c` into an add recurrence:

```coil
fn weighted(int n, int c) -> int {
    let acc = 0;
    for (let i = 0; i < n; i = i + 1) {
        acc = acc + i * c;
    }
    return acc;
}

fn nested(int n, int outer) -> int {
    let acc = 0;
    for (let j = 0; j < outer; j = j + 1) {
        for (let i = 0; i < n; i = i + 1) {
            acc = acc + (outer * 2) + (n * 3);
        }
    }
    return acc;
}
```

Illustrative of `iv_mul_sr` (**×1.33**) and `licm_nested_chains` (**×1.97**). Float `cast(i)` affine SR stayed off — it is not IEEE-exact.

Tail/sibling calls ([#316](https://github.com/ardax-corp/coil-lang/pull/316), [`78ad57c6`](https://github.com/ardax-corp/coil-lang/commit/78ad57c6b6537c7d37e85517e92f4ccda088901f)) reuse the frame for even/odd-style mutual recursion:

```coil
fn even(int n) -> int {
    if n == 0 {
        return 1;
    }
    return odd(n - 1);
}

fn odd(int n) -> int {
    if n == 0 {
        return 0;
    }
    return even(n - 1);
}
```

Illustrative of `tail_sibling`: **×1.81**. Non-tail mutual recursion still needs a depth bound.

Local CSE ([#317](https://github.com/ardax-corp/coil-lang/pull/317), [`ee68f3e0`](https://github.com/ardax-corp/coil-lang/commit/ee68f3e05000c1276d357c79a698dfda5e2c12be)) stops recomputing a pure `xs[i]` or `i as float` in the same block:

```coil
fn index_twice(Vec<int> xs, int i) -> int {
    return xs[i] + xs[i];
}

fn twice_as_float(int i) -> float {
    return (i as float) + (i as float);
}
```

Illustrative of `cse_index_recompute` (**−47%**) and `cse_cast_recompute` (**−50%**).

DestProp ([#318](https://github.com/ardax-corp/coil-lang/pull/318), [`6f636f21`](https://github.com/ardax-corp/coil-lang/commit/6f636f21feb796b3a93f25c46f524a15057ef760)) forwards a class alias through field reads so later `p.x` uses the source slot:

```coil
class Point {
    x: int,
    y: int,
}

fn sum_x(Point p, int n) -> int {
    let acc = 0;
    for (let i = 0; i < n; i = i + 1) {
        let q = p;
        acc = acc + q.x + q.x;
    }
    return acc;
}
```

Illustrative of `dest_prop_field_alias`: **−5.9%**. Flagship `gc_churn` / `binary_trees` bytecode stayed identical, which is why the earlier DestProp pass looked like a wash.

## How we treat the numbers

Each of these is a prove-before-merge A/B: same runner, checksums held, hyperfine on the bench that actually changes `.hyc`. Controls that keep identical bytecode are noise, not a win.

They are still microbenches. They are chosen because they look like code people write: `?` on a Result, a pair of ints, `i * c` in a loop, sibling recursion, a field through an alias. That is the claim. Not that some unnamed service got 2× overnight.
